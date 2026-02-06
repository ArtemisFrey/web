// 入场动画控制
document.body.classList.add('welcome-active');

setTimeout(() => {
    document.body.classList.remove('welcome-active');
}, 4300);

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 导航栏滚动效果
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = '0 2px 10px rgba(255, 158, 205, 0.1)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(255, 158, 205, 0.2)';
    }
    
    lastScroll = currentScroll;
});

// 卡片进入视口动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有卡片添加观察
document.querySelectorAll('.skill-item, .project-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// 关于我详情弹窗
const detailData = {
    hobby: {
        zh: {
            title: '🎮 兴趣爱好',
            content: `
                <p><strong>💻 写代码：</strong>最喜欢的事情，看着自己写的程序跑起来特别有成就感。喜欢折腾各种新技术，虽然经常踩坑，但解决问题的过程很爽。</p>
                <p><strong>🎮 玩游戏：</strong>放松的方式之一。喜欢独立游戏和剧情向游戏，偶尔也玩玩竞技类。游戏设计也挺有意思的，有时候会想如果是我会怎么做。</p>
                <p><strong>📺 看动漫：</strong>周末的快乐源泉。喜欢治愈系和热血系的，看完心情会变好。有时候也会从动漫里找到一些设计灵感。</p>
                <p><strong>🎵 听音乐：</strong>写代码的时候必备。什么类型都听，看心情。有时候一首歌能循环一整天。</p>
                <p><strong>📷 拍照：</strong>偶尔会拿手机拍拍照，记录生活的小美好。不是专业的，就是觉得好看就拍下来。</p>
            `
        },
        en: {
            title: '🎮 Hobbies',
            content: `
                <p><strong>💻 Coding:</strong> My favorite thing. It's so satisfying to see my programs run. Love exploring new tech, even though I often run into bugs - solving problems is the fun part.</p>
                <p><strong>🎮 Gaming:</strong> One way to relax. I enjoy indie games and story-driven games, occasionally competitive ones too. Game design is interesting - sometimes I wonder how I would do it.</p>
                <p><strong>📺 Anime:</strong> Weekend happiness source. Love healing and passionate series, they make me feel good. Sometimes I get design inspiration from anime.</p>
                <p><strong>🎵 Music:</strong> Essential when coding. Listen to all types depending on mood. Sometimes one song loops all day.</p>
                <p><strong>📷 Photography:</strong> Occasionally take photos with my phone, capturing life's little beauties. Not professional, just shoot what looks good.</p>
            `
        },
        ja: {
            title: '🎮 趣味',
            content: `
                <p><strong>💻 コーディング：</strong>一番好きなこと。自分のプログラムが動くのを見るのは最高に達成感がある。新しい技術を試すのが好き。よくバグに遭遇するけど、問題を解決する過程が楽しい。</p>
                <p><strong>🎮 ゲーム：</strong>リラックスする方法の一つ。インディーゲームやストーリー重視のゲームが好き、たまに対戦ゲームも。ゲームデザインも面白い、自分ならどうするか考えることがある。</p>
                <p><strong>📺 アニメ：</strong>週末の幸せの源。癒し系と熱血系が好き、見終わると気分が良くなる。アニメからデザインのインスピレーションを得ることもある。</p>
                <p><strong>🎵 音楽：</strong>コーディング中の必需品。気分によって何でも聴く。一曲を一日中ループすることもある。</p>
                <p><strong>📷 写真：</strong>たまにスマホで写真を撮る、生活の小さな美しさを記録する。プロではない、ただ良いと思ったものを撮る。</p>
            `
        }
    },
    character: {
        zh: {
            title: '💭 性格特点',
            content: `
                <p><strong>😊 开朗外向：</strong>喜欢和人交流，聊天能聊很久。虽然有时候也需要独处充电，但大部分时间还是喜欢热闹的。朋友说我是"自来熟"。</p>
                <p><strong>🤝 乐于助人：</strong>看到别人遇到问题会主动帮忙。特别是技术问题，能帮就帮。教别人的过程也是自己学习的过程，双赢。</p>
                <p><strong>💬 喜欢分享：</strong>学到新东西会想分享给别人。写博客、做笔记，不是为了炫耀，是觉得知识就该流动起来。帮到别人会很开心。</p>
                <p><strong>🎯 目标明确：</strong>知道自己要什么，也会为此努力。但不会为了目标放弃生活，该玩的时候还是要玩的。平衡很重要。</p>
                <p><strong>🌟 积极乐观：</strong>遇到困难不会轻易放弃。失败了就当积累经验，下次做得更好。保持好心态，事情总会解决的。</p>
            `
        },
        en: {
            title: '💭 Personality',
            content: `
                <p><strong>😊 Outgoing & Cheerful:</strong> Love chatting with people, can talk for hours. Though sometimes need alone time to recharge, mostly enjoy being around others. Friends say I'm naturally friendly.</p>
                <p><strong>🤝 Helpful:</strong> Actively help when seeing others in trouble. Especially with tech problems, help whenever I can. Teaching others is also learning for myself, win-win.</p>
                <p><strong>💬 Love Sharing:</strong> Want to share when learning something new. Write blogs, take notes - not to show off, but believe knowledge should flow. Happy when helping others.</p>
                <p><strong>🎯 Goal-Oriented:</strong> Know what I want and work for it. But won't sacrifice life for goals, play when it's time to play. Balance is important.</p>
                <p><strong>🌟 Positive & Optimistic:</strong> Don't give up easily when facing difficulties. Treat failures as experience, do better next time. Keep good mindset, things will work out.</p>
            `
        },
        ja: {
            title: '💭 性格',
            content: `
                <p><strong>😊 明るく外向的：</strong>人と話すのが好き、何時間でも話せる。時々一人の時間も必要だけど、ほとんどの時間は賑やかなのが好き。友達に「人懐っこい」と言われる。</p>
                <p><strong>🤝 人助けが好き：</strong>困っている人を見ると積極的に助ける。特に技術的な問題は、できる限り助ける。人に教えることも自分の学習過程、ウィンウィン。</p>
                <p><strong>💬 シェアが好き：</strong>新しいことを学んだら人に共有したくなる。ブログを書いたり、ノートを取ったり、自慢するためではなく、知識は流動すべきだと思う。人の役に立つと嬉しい。</p>
                <p><strong>🎯 目標が明確：</strong>自分が何を望んでいるか分かっていて、そのために努力する。でも目標のために生活を犠牲にしない、遊ぶ時は遊ぶ。バランスが大事。</p>
                <p><strong>🌟 積極的で楽観的：</strong>困難に遭遇しても簡単に諦めない。失敗したら経験として蓄積、次はもっと良くする。良い心構えを保つ、物事は必ず解決する。</p>
            `
        }
    },
    thoughts: {
        zh: {
            title: '🔥 我的想法',
            content: `
                <p><strong>💪 关于现在：</strong>18岁，大一。知道自己在做什么，也知道自己要什么。不是盲目自信，是清楚自己的能力和方向。</p>
                <p><strong>🎯 关于学习：</strong>学校的进度太慢，所以自己学。不是为了卷别人，是不想被落下。技术更新这么快，停下来就是退步。</p>
                <p><strong>⚡ 关于行动：</strong>想做的事情会去做，不会等所谓的"合适时机"。机会是做出来的，不是等来的。失败了大不了重来，但不试永远不知道。</p>
                <p><strong>🚀 关于未来：</strong>目标很明确——做出真正有价值的东西。不是为了证明给谁看，是为了证明给自己看。五年后的我，会感谢现在拼命的自己。</p>
                <p><strong>👑 关于态度：</strong>低调做人，高调做事。不需要到处说自己多厉害，作品会说话。但该争取的不会退让，该拿的不会客气。</p>
            `
        },
        en: {
            title: '🔥 My Thoughts',
            content: `
                <p><strong>💪 About Now:</strong> 18 years old, freshman. Know what I'm doing and what I want. Not blind confidence, but clear about my abilities and direction.</p>
                <p><strong>🎯 About Learning:</strong> School pace is too slow, so I learn on my own. Not to compete with others, but don't want to fall behind. Tech updates so fast, stopping means falling back.</p>
                <p><strong>⚡ About Action:</strong> Do what I want to do, won't wait for the "right time". Opportunities are made, not waited for. Failure? Just restart, but never trying means never knowing.</p>
                <p><strong>🚀 About Future:</strong> Goal is clear - create truly valuable things. Not to prove to others, but to prove to myself. Future me will thank present me for working hard.</p>
                <p><strong>👑 About Attitude:</strong> Low-key person, high-profile work. No need to brag about how good I am, work speaks. But won't back down when should fight, won't be polite when should take.</p>
            `
        },
        ja: {
            title: '🔥 私の考え',
            content: `
                <p><strong>💪 今について：</strong>18歳、大学一年生。自分が何をしているか、何が欲しいか分かっている。盲目的な自信ではなく、自分の能力と方向性を明確に理解している。</p>
                <p><strong>🎯 学習について：</strong>学校の進度が遅すぎるから、自分で学ぶ。他人と競争するためではなく、遅れたくないから。技術の更新がこんなに速い、止まることは後退すること。</p>
                <p><strong>⚡ 行動について：</strong>やりたいことはやる、いわゆる「適切な時期」を待たない。チャンスは作るもの、待つものではない。失敗したら最悪やり直せばいい、でも試さなければ永遠に分からない。</p>
                <p><strong>🚀 未来について：</strong>目標は明確——本当に価値のあるものを作る。誰かに証明するためではなく、自分に証明するため。5年後の私は、今頑張っている自分に感謝するだろう。</p>
                <p><strong>👑 態度について：</strong>控えめな人、派手な仕事。自分がどれだけすごいか言いふらす必要はない、作品が語る。でも争うべき時は譲らない、取るべき時は遠慮しない。</p>
            `
        }
    }
};

let currentLang = 'zh';
let currentDetail = null;

// 详情按钮点击
document.querySelectorAll('.detail-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const detailType = this.dataset.detail;
        currentDetail = detailType;
        showDetail(detailType, currentLang);
    });
});

function showDetail(type, lang) {
    const modal = document.getElementById('detailModal');
    const title = document.getElementById('detailTitle');
    const content = document.getElementById('detailContent');
    
    const data = detailData[type][lang];
    title.textContent = data.title;
    content.innerHTML = data.content;
    
    modal.classList.add('active');
}

// 关闭详情弹窗
document.querySelector('.close-detail').addEventListener('click', function() {
    document.getElementById('detailModal').classList.remove('active');
});

// 点击弹窗外部关闭
document.getElementById('detailModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
    }
});

// 语言切换
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.dataset.lang;
        currentLang = lang;
        
        // 更新按钮状态
        document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // 更新内容
        if (currentDetail) {
            showDetail(currentDetail, lang);
        }
    });
});

// 添加一些可爱的交互效果
document.querySelectorAll('.skill-item, .project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// 头像点击效果
const avatar = document.querySelector('.avatar-circle');
if (avatar) {
    avatar.addEventListener('click', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = 'float 3s ease-in-out infinite';
        }, 10);
        
        // 添加一个旋转效果
        this.style.transform = 'rotate(360deg) scale(1.1)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 500);
    });
    
    avatar.style.transition = 'transform 0.5s ease-out';
    avatar.style.cursor = 'pointer';
}

// 彩蛋：konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // 触发彩蛋效果
        document.body.style.animation = 'rainbow 2s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 2000);
        
        // 添加彩虹动画
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        alert('🎉 你发现了彩蛋！');
    }
});

console.log('👋 欢迎来到我的网站！');
console.log('💡 小提示：试试输入上上下下左右左右BA');

// 记忆翻牌游戏
const emojis = ['🎮', '🎨', '🎵', '📚', '☕', '🌸', '⭐', '💖'];
let cards = [];
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;
let gameTime = 0;
let gameInterval = null;
let isGameRunning = false;
let canFlip = true;

// 打开游戏弹窗
document.querySelector('[data-game="true"]').addEventListener('click', function() {
    document.getElementById('gameModal').classList.add('active');
});

// 关闭游戏弹窗
document.querySelector('.close-game').addEventListener('click', function() {
    document.getElementById('gameModal').classList.remove('active');
    stopGame();
});

// 点击弹窗外部关闭
document.getElementById('gameModal').addEventListener('click', function(e) {
    if (e.target === this) {
        this.classList.remove('active');
        stopGame();
    }
});

// 开始游戏
document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('restartBtn').addEventListener('click', restartGame);

function startGame() {
    // 重置游戏状态
    moves = 0;
    gameTime = 0;
    matchedPairs = 0;
    flippedCards = [];
    isGameRunning = true;
    canFlip = true;
    
    document.getElementById('moves').textContent = moves;
    document.getElementById('time').textContent = gameTime;
    document.getElementById('pairs').textContent = matchedPairs;
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('gameOver').classList.remove('active');
    
    // 创建卡片
    createCards();
    
    // 开始计时
    gameInterval = setInterval(() => {
        gameTime++;
        document.getElementById('time').textContent = gameTime;
    }, 1000);
}

function createCards() {
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.innerHTML = '';
    
    // 创建卡片数组（每个emoji两张）
    cards = [...emojis, ...emojis];
    
    // 洗牌
    cards.sort(() => Math.random() - 0.5);
    
    // 创建卡片元素
    cards.forEach((emoji, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.emoji = emoji;
        card.dataset.index = index;
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">?</div>
                <div class="card-back">${emoji}</div>
            </div>
        `;
        
        card.addEventListener('click', () => flipCard(card));
        gameBoard.appendChild(card);
    });
}

function flipCard(card) {
    if (!isGameRunning || !canFlip) return;
    if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
    if (flippedCards.length >= 2) return;
    
    // 翻牌
    card.classList.add('flipped');
    flippedCards.push(card);
    
    // 如果翻了两张牌
    if (flippedCards.length === 2) {
        moves++;
        document.getElementById('moves').textContent = moves;
        canFlip = false;
        
        checkMatch();
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const emoji1 = card1.dataset.emoji;
    const emoji2 = card2.dataset.emoji;
    
    if (emoji1 === emoji2) {
        // 配对成功
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            flippedCards = [];
            matchedPairs++;
            document.getElementById('pairs').textContent = matchedPairs;
            canFlip = true;
            
            // 检查是否完成
            if (matchedPairs === 8) {
                endGame();
            }
        }, 500);
    } else {
        // 配对失败
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            canFlip = true;
        }, 1000);
    }
}

function stopGame() {
    isGameRunning = false;
    clearInterval(gameInterval);
}

function endGame() {
    stopGame();
    document.getElementById('finalMoves').textContent = moves;
    document.getElementById('finalTime').textContent = gameTime;
    
    // 评级
    let rating = '';
    if (moves <= 12) {
        rating = '🏆 完美！记忆力超强！';
    } else if (moves <= 16) {
        rating = '⭐ 很棒！继续加油！';
    } else if (moves <= 20) {
        rating = '👍 不错！还有进步空间！';
    } else {
        rating = '💪 加油！多练习会更好！';
    }
    
    document.getElementById('rating').textContent = rating;
    document.getElementById('gameOver').classList.add('active');
}

function restartGame() {
    startGame();
}
