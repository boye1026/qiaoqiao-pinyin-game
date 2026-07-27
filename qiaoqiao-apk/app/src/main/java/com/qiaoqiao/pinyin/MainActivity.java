package com.qiaoqiao.pinyin;

import android.app.Activity;
import android.app.AlertDialog;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.speech.tts.TextToSpeech;
import android.speech.tts.TextToSpeech.OnInitListener;
import android.util.Log;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebSettings;
import android.webkit.WebChromeClient;
import android.view.WindowManager;
import android.widget.Toast;

import org.apache.cordova.CordovaActivity;

import java.util.ArrayList;
import java.util.Locale;

public class MainActivity extends CordovaActivity {
    private static final String TAG = "QiaoQiaoTTS";
    private WebView webView;
    private TextToSpeech tts;
    private boolean ttsReady = false;
    private boolean ttsFailed = false;
    private ArrayList<String> pendingSpeech = new ArrayList<>();
    private Handler handler = new Handler();
    private int retryCount = 0;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);

        initTTS();

        WebView.setWebContentsDebuggingEnabled(true);

        loadUrl("file:///android_asset/www/index.html");

        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                try {
                    java.lang.reflect.Field f = CordovaActivity.class.getDeclaredField("appView");
                    f.setAccessible(true);
                    webView = (WebView) f.get(this);
                    if (webView != null) {
                        webView.addJavascriptInterface(new TTSInterface(), "AndroidTTS");
                        WebSettings s = webView.getSettings();
                        s.setJavaScriptEnabled(true);
                        s.setMediaPlaybackRequiresUserGesture(false);
                        Log.d(TAG, "JS接口注入成功");
                    }
                } catch (Exception e) {
                    Log.e(TAG, "JS接口注入失败: " + e.getMessage());
                }
            }
        }, 1500);
    }

    private void initTTS() {
        Log.d(TAG, "开始初始化TTS...");
        tts = new TextToSpeech(this, new OnInitListener() {
            @Override
            public void onInit(int status) {
                Log.d(TAG, "TTS onInit status=" + status);
                if (status == TextToSpeech.SUCCESS) {
                    String defaultEngine = tts.getDefaultEngine();
                    Log.d(TAG, "默认TTS引擎: " + defaultEngine);
                    setupChineseTTS();
                } else {
                    Log.e(TAG, "TTS初始化失败 status=" + status);
                    handleTTSFailure();
                }
            }
        });
    }

    private void setupChineseTTS() {
        Locale[] locales = {
            Locale.SIMPLIFIED_CHINESE,
            Locale.CHINESE,
            Locale.CHINA,
            Locale.TAIWAN,
            Locale.getDefault()
        };

        int result = -1;
        Locale usedLocale = null;
        for (Locale locale : locales) {
            result = tts.setLanguage(locale);
            Log.d(TAG, "尝试 " + locale + " 结果=" + result);
            if (result == TextToSpeech.LANG_COUNTRY_AVAILABLE
                    || result == TextToSpeech.LANG_AVAILABLE) {
                usedLocale = locale;
                break;
            }
        }

        if (result == TextToSpeech.LANG_MISSING_DATA
                || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            Log.e(TAG, "中文语音不支持/缺失");
            handler.post(new Runnable() {
                @Override
                public void run() {
                    showTTSInstallDialog();
                }
            });
            ttsFailed = true;
            return;
        }

        tts.setSpeechRate(0.85f);
        tts.setPitch(1.0f);

        ttsReady = true;
        Log.d(TAG, "TTS准备就绪，使用语言: " + usedLocale);

        if (!pendingSpeech.isEmpty()) {
            Log.d(TAG, "播放缓存的 " + pendingSpeech.size() + " 条内容");
            for (String text : pendingSpeech) {
                speakInternal(text);
            }
            pendingSpeech.clear();
        }
    }

    private void handleTTSFailure() {
        ttsFailed = true;
        retryCount++;
        if (retryCount < 2) {
            Log.d(TAG, "TTS失败，重试... 第" + retryCount + "次");
            handler.postDelayed(new Runnable() {
                @Override
                public void run() {
                    initTTS();
                }
            }, 1000);
        } else {
            handler.post(new Runnable() {
                @Override
                public void run() {
                    Toast.makeText(MainActivity.this,
                            "语音功能初始化失败，请检查手机文字转语音设置",
                            Toast.LENGTH_LONG).show();
                    showTTSInstallDialog();
                }
            });
        }
    }

    private void showTTSInstallDialog() {
        new AlertDialog.Builder(this)
            .setTitle("语音设置")
            .setMessage("检测到语音功能可能未启用。\n\n请在系统设置中开启：\n设置 → 更多设置 → 无障碍 → 文字转语音输出\n\n确保选择了中文语音引擎。")
            .setPositiveButton("去设置", new android.content.DialogInterface.OnClickListener() {
                @Override
                public void onClick(android.content.DialogInterface dialog, int which) {
                    try {
                        Intent intent = new Intent();
                        intent.setAction("com.android.settings.TTS_SETTINGS");
                        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                        startActivity(intent);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                }
            })
            .setNegativeButton("知道了", null)
            .show();
    }

    private void speakInternal(final String text) {
        handler.post(new Runnable() {
            @Override
            public void run() {
                if (tts != null && text != null && text.length() > 0) {
                    Log.d(TAG, "播放: " + text);
                    int result = tts.speak(text, TextToSpeech.QUEUE_FLUSH, null);
                    Log.d(TAG, "speak返回: " + result);
                    if (result == TextToSpeech.ERROR) {
                        Log.e(TAG, "TTS播放错误");
                    }
                }
            }
        });
    }

    public class TTSInterface {
        @JavascriptInterface
        public void speak(final String text) {
            Log.d(TAG, "JS调用: " + text + " ready=" + ttsReady);
            if (ttsReady) {
                speakInternal(text);
            } else if (!ttsFailed) {
                pendingSpeech.add(text);
                Log.d(TAG, "已缓存: " + text);
            }
        }

        @JavascriptInterface
        public boolean isReady() {
            return ttsReady;
        }

        @JavascriptInterface
        public String getStatus() {
            if (ttsReady) return "ready";
            if (ttsFailed) return "failed";
            return "initializing";
        }

        @JavascriptInterface
        public void testSound() {
            Log.d(TAG, "测试TTS...");
            handler.post(new Runnable() {
                @Override
                public void run() {
                    if (tts != null) {
                        int result = tts.speak("测试声音，乔乔你好", TextToSpeech.QUEUE_FLUSH, null);
                        Toast.makeText(MainActivity.this,
                                "TTS测试返回: " + (result == 0 ? "成功" : "失败"),
                                Toast.LENGTH_SHORT).show();
                    }
                }
            });
        }
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
        super.onDestroy();
    }
}