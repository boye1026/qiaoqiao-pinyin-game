const pinyinData = {
    shengmu: [
        { char: 'b', sound: '波', desc: '双唇紧闭，突然打开，气流爆发而出' },
        { char: 'p', sound: '坡', desc: '双唇紧闭，突然打开，气流送出，声带不振动' },
        { char: 'm', sound: '摸', desc: '双唇紧闭，把气堵住，发音时气流从鼻腔出来' },
        { char: 'f', sound: '佛', desc: '上齿轻触下唇，气流从唇齿间摩擦而出' },
        { char: 'd', sound: '得', desc: '舌尖抵住上齿龈，突然放开，气流爆发而出' },
        { char: 't', sound: '特', desc: '舌尖抵住上齿龈，突然放开，气流送出' },
        { char: 'n', sound: '讷', desc: '舌尖抵住上齿龈，气流从鼻腔出来' },
        { char: 'l', sound: '勒', desc: '舌尖抵住上齿龈，气流从舌两边出来' },
        { char: 'g', sound: '哥', desc: '舌根抵住软腭，突然放开，气流爆发而出' },
        { char: 'k', sound: '科', desc: '舌根抵住软腭，突然放开，气流送出' },
        { char: 'h', sound: '喝', desc: '舌根靠近软腭，气流从中间摩擦而出' },
        { char: 'j', sound: '鸡', desc: '舌面抵住硬腭前部，突然放开' },
        { char: 'q', sound: '七', desc: '舌面抵住硬腭前部，突然放开，气流较强' },
        { char: 'x', sound: '西', desc: '舌面靠近硬腭前部，气流摩擦而出' },
        { char: 'zh', sound: '知', desc: '舌尖翘起抵住硬腭前部，气流摩擦而出' },
        { char: 'ch', sound: '吃', desc: '舌尖翘起抵住硬腭前部，气流较强' },
        { char: 'sh', sound: '诗', desc: '舌尖翘起靠近硬腭前部，气流摩擦而出' },
        { char: 'r', sound: '日', desc: '舌尖翘起靠近硬腭前部，声带振动' },
        { char: 'z', sound: '资', desc: '舌尖抵住上齿背，气流摩擦而出' },
        { char: 'c', sound: '雌', desc: '舌尖抵住上齿背，气流较强' },
        { char: 's', sound: '思', desc: '舌尖靠近上齿背，气流摩擦而出' },
        { char: 'y', sound: '衣', desc: '舌面抬高靠近硬腭，气流摩擦而出' },
        { char: 'w', sound: '乌', desc: '双唇收拢呈圆形，气流摩擦而出' }
    ],
    yunmu: [
        { char: 'a', sound: '啊', desc: '嘴巴张大，舌头放平' },
        { char: 'o', sound: '喔', desc: '嘴巴呈圆形，舌头后缩' },
        { char: 'e', sound: '鹅', desc: '嘴巴半开，舌头后缩' },
        { char: 'i', sound: '衣', desc: '嘴巴呈扁平形，舌尖抵住下齿背' },
        { char: 'u', sound: '乌', desc: '嘴巴呈圆形，嘴唇收拢' },
        { char: 'ü', sound: '鱼', desc: '嘴巴呈扁平形，嘴唇撮起' },
        { char: 'ai', sound: '爱', desc: '先发a的音，再滑向i' },
        { char: 'ei', sound: '诶', desc: '先发e的音，再滑向i' },
        { char: 'ui', sound: '威', desc: '先发u的音，再滑向ei' },
        { char: 'ao', sound: '凹', desc: '先发a的音，再滑向o' },
        { char: 'ou', sound: '欧', desc: '先发o的音，再滑向u' },
        { char: 'iu', sound: '优', desc: '先发i的音，再滑向ou' },
        { char: 'ie', sound: '耶', desc: '先发i的音，再滑向e' },
        { char: 'üe', sound: '约', desc: '先发ü的音，再滑向e' },
        { char: 'er', sound: '儿', desc: '舌头卷起，声带振动' },
        { char: 'an', sound: '安', desc: '先发a的音，舌尖抵住上齿龈' },
        { char: 'en', sound: '恩', desc: '先发e的音，舌尖抵住上齿龈' },
        { char: 'in', sound: '因', desc: '先发i的音，舌尖抵住上齿龈' },
        { char: 'un', sound: '温', desc: '先发u的音，舌尖抵住上齿龈' },
        { char: 'ün', sound: '晕', desc: '先发ü的音，舌尖抵住上齿龈' },
        { char: 'ang', sound: '昂', desc: '先发a的音，舌根后缩抵住软腭' },
        { char: 'eng', sound: '鞥', desc: '先发e的音，舌根后缩抵住软腭' },
        { char: 'ing', sound: '英', desc: '先发i的音，舌根后缩抵住软腭' },
        { char: 'ong', sound: '翁', desc: '先发o的音，舌根后缩抵住软腭' }
    ],
    zhengti: [
        { char: 'zhi', sound: '知', desc: '整体认读，不能拼读' },
        { char: 'chi', sound: '吃', desc: '整体认读，不能拼读' },
        { char: 'shi', sound: '诗', desc: '整体认读，不能拼读' },
        { char: 'ri', sound: '日', desc: '整体认读，不能拼读' },
        { char: 'zi', sound: '资', desc: '整体认读，不能拼读' },
        { char: 'ci', sound: '雌', desc: '整体认读，不能拼读' },
        { char: 'si', sound: '思', desc: '整体认读，不能拼读' },
        { char: 'yi', sound: '衣', desc: '整体认读，不能拼读' },
        { char: 'wu', sound: '乌', desc: '整体认读，不能拼读' },
        { char: 'yu', sound: '鱼', desc: '整体认读，不能拼读' },
        { char: 'ye', sound: '耶', desc: '整体认读，不能拼读' },
        { char: 'yue', sound: '约', desc: '整体认读，不能拼读' },
        { char: 'yuan', sound: '元', desc: '整体认读，不能拼读' },
        { char: 'yin', sound: '因', desc: '整体认读，不能拼读' },
        { char: 'yun', sound: '云', desc: '整体认读，不能拼读' },
        { char: 'ying', sound: '英', desc: '整体认读，不能拼读' }
    ]
};

const praiseMessages = [
    '乔乔太棒了！',
    '乔乔真厉害！',
    '乔乔答对了，好聪明！',
    '乔乔最棒啦！',
    '乔乔真了不起！',
    '乔乔加油，真棒！',
    '乔乔太聪明了！',
    '乔乔真厉害，继续加油！'
];

function getRandomPraise() {
    return praiseMessages[Math.floor(Math.random() * praiseMessages.length)];
}

let currentTab = 'shengmu';
let selectedPinyin = null;
let gameState = {
    sun: 50,
    lives: 5,
    level: 1,
    selectedPlant: null,
    targetPinyin: 'b',
    targetSound: '波',
    zombies: [],
    plants: []
};

let practiceState = {
    score: 0,
    correct: 0,
    total: 0,
    currentQuestion: null
};

let achievements = {
    1: { progress: 0, target: 10 },
    2: { progress: 0, target: 20 },
    3: { progress: 0, target: 10 },
    4: { progress: 0, target: 47 }
};

function speak(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'zh-CN';
        utterance.rate = 0.8;
        window.speechSynthesis.speak(utterance);
    }
}

function getSoundByChar(char) {
    for (const category of Object.values(pinyinData)) {
        for (const item of category) {
            if (item.char === char) {
                return item.sound;
            }
        }
    }
    return char;
}

function speakPinyin(char) {
    const sound = getSoundByChar(char);
    speak(sound);
}

function speakCurrent() {
    if (selectedPinyin) {
        speak(selectedPinyin.sound);
    }
}

function showSection(section) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(section + '-screen').classList.add('active');
    
    if (section === 'learn') {
        renderPinyinGrid(currentTab);
    } else if (section === 'practice') {
        startPractice();
    } else if (section === 'achievements') {
        updateAchievements();
    }
}

function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
    renderPinyinGrid(tab);
}

function renderPinyinGrid(tab) {
    const grid = document.getElementById('pinyin-grid');
    grid.innerHTML = '';
    
    pinyinData[tab].forEach(item => {
        const div = document.createElement('div');
        div.className = 'pinyin-item';
        div.textContent = item.char;
        div.onclick = () => selectPinyin(item);
        grid.appendChild(div);
    });
    
    document.getElementById('detail-char').textContent = '点击拼音查看详情';
    document.getElementById('detail-sound').textContent = '发音提示';
    selectedPinyin = null;
}

function selectPinyin(item) {
    document.querySelectorAll('.pinyin-item').forEach(i => i.classList.remove('selected'));
    event.target.classList.add('selected');
    selectedPinyin = item;
    
    document.getElementById('detail-char').textContent = item.char;
    document.getElementById('detail-sound').textContent = `发音: ${item.sound} - ${item.desc}`;
    
    speak(item.sound);
    
    achievements[1].progress++;
    achievements[4].progress++;
}

function startGame() {
    gameState = {
        sun: 50,
        lives: 5,
        level: 1,
        selectedPlant: null,
        targetPinyin: 'b',
        targetSound: '波',
        zombies: [],
        plants: []
    };
    
    updateGameUI();
    initGameArea();
    showSection('game');
    nextQuestion();
    spawnZombie();
}

function initGameArea() {
    for (let i = 1; i <= 3; i++) {
        const row = document.getElementById(`row-${i}`);
        row.innerHTML = '';
        for (let j = 1; j <= 5; j++) {
            const cell = document.createElement('div');
            cell.className = 'game-cell';
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.onclick = () => placePlant(i, j);
            row.appendChild(cell);
        }
    }
}

function updateGameUI() {
    document.getElementById('sun-score').textContent = gameState.sun;
    document.getElementById('lives').textContent = gameState.lives;
    document.getElementById('level').textContent = gameState.level;
}

function selectPlant(pinyin) {
    document.querySelectorAll('.plant-card').forEach(c => c.classList.remove('selected'));
    event.target.classList.add('selected');
    gameState.selectedPlant = pinyin;
}

function placePlant(row, col) {
    const cell = document.querySelector(`.game-cell[data-row="${row}"][data-col="${col}"]`);
    if (!cell || cell.classList.contains('has-plant')) return;
    
    const plant = gameState.selectedPlant;
    const cost = plant === 'sun' ? 25 : 10;
    
    if (gameState.sun < cost) {
        alert('阳光不够啦！');
        return;
    }
    
    gameState.sun -= cost;
    updateGameUI();
    
    cell.classList.add('has-plant');
    const plantEmoji = getPlantEmoji(plant);
    cell.innerHTML = `<span>${plantEmoji}</span>`;
    
    gameState.plants.push({ row, col, pinyin: plant });
    
    if (plant !== 'sun') {
        checkAnswer(plant, cell);
    } else {
        setTimeout(() => {
            gameState.sun += 20;
            updateGameUI();
        }, 3000);
    }
}

function getPlantEmoji(pinyin) {
    const emojis = {
        'b': '🌻', 'p': '🌿', 'm': '🌵', 'f': '🌸',
        'd': '🌺', 't': '🌷', 'n': '🌱', 'l': '🍀',
        'g': '🌼', 'k': '🌹', 'h': '🌾', 'j': '🌿',
        'q': '🌻', 'x': '🌵', 'zh': '🌸', 'ch': '🌺',
        'sh': '🌷', 'r': '🌱', 'z': '🍀', 'c': '🌼',
        's': '🌹', 'y': '🌾', 'w': '🌿', 'sun': '🌞'
    };
    return emojis[pinyin] || '🌱';
}

function checkAnswer(pinyin, cell) {
    if (pinyin === gameState.targetPinyin) {
        cell.style.background = '#81c784';
        speak(getRandomPraise());
        achievements[2].progress++;
        
        setTimeout(() => {
            removeZombie();
            nextQuestion();
        }, 1000);
    } else {
        cell.style.background = '#ef9a9a';
        speak('不对哦，再试试！');
        gameState.lives--;
        updateGameUI();
        
        setTimeout(() => {
            cell.style.background = '';
        }, 500);
        
        if (gameState.lives <= 0) {
            endGame();
        }
    }
}

function nextQuestion() {
    const shengmu = pinyinData.shengmu.slice(0, 4);
    const randomIndex = Math.floor(Math.random() * shengmu.length);
    gameState.targetPinyin = shengmu[randomIndex].char;
    gameState.targetSound = shengmu[randomIndex].sound;
    document.getElementById('target-pinyin').textContent = gameState.targetPinyin;
    
    speak(`请找出发${gameState.targetSound}音的植物`);
}

function spawnZombie() {
    const row = Math.floor(Math.random() * 3) + 1;
    const zombie = document.createElement('div');
    zombie.className = 'zombie-in-game';
    zombie.textContent = '🧟';
    zombie.dataset.row = row;
    
    const rowEl = document.getElementById(`row-${row}`);
    rowEl.appendChild(zombie);
    
    gameState.zombies.push(zombie);
    
    setTimeout(() => {
        zombie.remove();
        gameState.zombies = gameState.zombies.filter(z => z !== zombie);
        gameState.lives--;
        updateGameUI();
        
        if (gameState.lives <= 0) {
            endGame();
        } else {
            spawnZombie();
        }
    }, 8000);
}

function removeZombie() {
    if (gameState.zombies.length > 0) {
        const zombie = gameState.zombies[0];
        zombie.style.animation = 'none';
        zombie.style.transform = 'scale(0)';
        setTimeout(() => {
            zombie.remove();
            gameState.zombies.shift();
            achievements[3].progress++;
        }, 500);
    }
    
    setTimeout(() => {
        spawnZombie();
    }, 2000);
}

function endGame() {
    document.getElementById('final-score').textContent = gameState.level * 100 + gameState.sun;
    document.getElementById('game-over-modal').classList.add('active');
}

function startPractice() {
    practiceState = {
        score: 0,
        correct: 0,
        total: 0,
        currentQuestion: null
    };
    updatePracticeUI();
    nextPracticeQuestion();
}

function updatePracticeUI() {
    document.getElementById('practice-score').textContent = practiceState.score;
    document.getElementById('practice-correct').textContent = practiceState.correct;
    document.getElementById('practice-total').textContent = practiceState.total;
}

function nextPracticeQuestion() {
    const allPinyin = [...pinyinData.shengmu, ...pinyinData.yunmu].slice(0, 10);
    const randomIndex = Math.floor(Math.random() * allPinyin.length);
    practiceState.currentQuestion = allPinyin[randomIndex];
    
    const options = [practiceState.currentQuestion];
    while (options.length < 4) {
        const idx = Math.floor(Math.random() * allPinyin.length);
        if (!options.includes(allPinyin[idx])) {
            options.push(allPinyin[idx]);
        }
    }
    
    options.sort(() => Math.random() - 0.5);
    
    const grid = document.getElementById('options-grid');
    grid.innerHTML = '';
    
    options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'option-item';
        div.textContent = opt.char;
        div.onclick = () => checkPracticeAnswer(opt);
        grid.appendChild(div);
    });
    
    document.getElementById('feedback').textContent = '';
    
    setTimeout(() => {
        playCurrentQuestion();
    }, 500);
}

function playCurrentQuestion() {
    if (practiceState.currentQuestion) {
        speak(practiceState.currentQuestion.sound);
    }
}

function checkPracticeAnswer(option) {
    practiceState.total++;
    
    const items = document.querySelectorAll('.option-item');
    items.forEach(item => item.onclick = null);
    
    if (option.char === practiceState.currentQuestion.char) {
        practiceState.correct++;
        practiceState.score += 10;
        event.target.classList.add('correct');
        document.getElementById('feedback').textContent = '🎉 答对了！';
        document.getElementById('feedback').className = 'feedback correct';
        speak(getRandomPraise());
        achievements[2].progress++;
    } else {
        event.target.classList.add('wrong');
        items.forEach(item => {
            if (item.textContent === practiceState.currentQuestion.char) {
                item.classList.add('correct');
            }
        });
        document.getElementById('feedback').textContent = '😢 答错了，正确答案是 ' + practiceState.currentQuestion.char;
        document.getElementById('feedback').className = 'feedback wrong';
        speak('答错了，正确答案是' + practiceState.currentQuestion.sound);
    }
    
    updatePracticeUI();
    
    setTimeout(() => {
        nextPracticeQuestion();
    }, 2000);
}

function updateAchievements() {
    Object.keys(achievements).forEach(id => {
        const achievement = achievements[id];
        const progress = Math.min(achievement.progress, achievement.target);
        const percentage = (progress / achievement.target) * 100;
        document.getElementById(`progress-${id}`).style.width = percentage + '%';
    });
}

window.onload = function() {
    renderPinyinGrid('shengmu');
};