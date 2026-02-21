
const app = document.getElementById('app');

// --- Data --- //
const tests = {
    innerStar: {
        id: 'innerStar',
        title: "Discover Your Inner Star!",
        description: "Answer a few simple questions to find out your personality type.",
        calculation: 'mostVoted',
        questions: [
            { text: "If you were a star, what kind would you be?", answers: [{ text: "A super bright, dazzling one!", value: 'A' }, { text: "A cool, mysterious, distant one.", value: 'B' }, { text: "A friendly one in a big group (a constellation).", value: 'C' }] },
            { text: "Your spaceship is exploring a new galaxy. What do you do first?", answers: [{ text: "Land on the most colorful planet!", value: 'A' }, { text: "Scan for alien life from a safe distance.", value: 'B' }, { text: "Try to communicate with any ships you see.", value: 'C' }] },
            { text: "You found a magic space crystal! What power does it give you?", answers: [{ text: "The power to create amazing art and music!", value: 'A' }, { text: "The power to know all the secrets of the universe.", value: 'B' }, { text: "The power to make friends with everyone you meet.", value: 'C' }] },
            { text: "What's your favorite space snack?", answers: [{ text: "Sparkling stardust candy!", value: 'A' }, { text: "Quiet moon cheese.", value: 'B' }, { text: "Cosmic party popcorn to share.", value: 'C' }] }
        ],
        results: {
            'A': { title: "The Dazzling Comet", description: "You're full of energy, creativity, and love to be the center of attention. You leave a trail of sparkle wherever you go!", image: "https://images.unsplash.com/photo-1534278931741-314a575b583f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Wise Nebula", description: "You are thoughtful, curious, and a little mysterious. You have a deep and wise inner world where amazing ideas are born.", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Friendly Galaxy", description: "You are a social butterfly who loves being with friends. You bring people together and create a universe of fun!", image: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    futurePartner: {
        id: 'futurePartner',
        title: "Future Partner's Face Test",
        description: "Find out what your future best friend might look like!",
        calculation: 'mbti',
        questions: [
            { text: "When you meet a new friend, do you...", answers: [{ text: "Talk a lot and get excited!", value: 'E' }, { text: "Listen quietly and observe.", value: 'I' }] },
            { text: "On the weekend, you'd rather...", answers: [{ text: "Go on a big adventure outdoors!", value: 'S' }, { text: "Imagine and create your own world indoors.", value: 'N' }] },
            { text: "If a friend is sad, you...", answers: [{ text: "Try to solve their problem with logic.", value: 'T' }, { text: "Give them a big hug and comfort them.", value: 'F' }] },
            { text: "You like your room to be...", answers: [{ text: "Super neat and organized.", value: 'J' }, { text: "A little messy and full of interesting things.", value: 'P' }] },
            { text: "At a party, you are more likely to...", answers: [{ text: "Be the center of all the fun and games.", value: 'E' }, { text: "Have a deep chat with one or two friends.", value: 'I' }] },
            { text: "Your ideal pet would be...", answers: [{ text: "A loyal dog that loves to play fetch.", value: 'S' }, { text: "A mysterious cat that has its own secrets.", value: 'N' }] },
            { text: "When you build with LEGOs, you...", answers: [{ text: "Follow the instructions perfectly.", value: 'T' }, { text: "Build whatever your heart desires!", value: 'F' }] },
            { text: "When planning a fun day, you...", answers: [{ text: "Make a detailed schedule of activities.", value: 'J' }, { text: "Just see where the day takes you!", value: 'P' }] }
        ],
        results: {
            'ISTJ': { title: "The Loyal Guardian", description: "A reliable and kind friend with a warm, gentle smile and steady, trustworthy eyes.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ISFJ': { title: "The Gentle Protector", description: "A caring and sweet face, with expressive eyes that show they're always looking out for you.", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INFJ': { title: "The Wise Counselor", description: "A mysterious and thoughtful look, with a calm expression and eyes that seem to know your secrets.", image: "https://images.unsplash.com/photo-1516726884483-7d1253721376?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INTJ': { title: "The Clever Strategist", description: "An intense and intelligent face, with sharp, focused eyes and a hint of a smile.", image: "https://images.unsplash.com/photo-1588516135832-063a69137596?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ISTP': { title: "The Bold Explorer", description: "A cool and adventurous look, with a playful smirk and eyes full of curiosity.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ISFP': { title: "The Artistic Adventurer", description: "A creative and gentle face, with dreamy eyes and a unique, artistic flair.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INFP': { title: "The Poetic Dreamer", description: "A kind and whimsical face, with soft, caring eyes and a thoughtful, faraway look.", image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'INTP': { title: "The Curious Thinker", description: "A quirky and intelligent face, with bright, curious eyes that are always analyzing the world.", image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESTP': { title: "The Energetic Dynamo", description: "A bold and confident face, with a big, daring grin and eyes that sparkle with excitement.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESFP': { title: "The Sparkling Entertainer", description: "A fun-loving and expressive face, with a contagious laugh and eyes that are always smiling.", image: "https://images.unsplash.com/photo-1526510747491-58f928a7630f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENFP': { title: "The Enthusiastic Champion", description: "A bright and cheerful face, with a wide, optimistic smile and eyes full of passion.", image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENTP': { title: "The Witty Debater", description: "A clever and mischievous face, with a playful glint in their eyes and a quick, witty smile.", image: "https://images.unsplash.com/photo-1542327897-414ecb6364b9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESTJ': { title: "The Confident Leader", description: "A strong and determined face, with a confident expression and a commanding presence.", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ESFJ': { title: "The Caring Host", description: "A warm and friendly face, with a welcoming smile that makes everyone feel at home.", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENFJ': { title: "The Inspiring Guide", description: "An engaging and charismatic face, with a magnetic smile and eyes that inspire trust.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'ENTJ': { title: "The Bold Commander", description: "A powerful and ambitious face, with a sharp, focused look and an air of natural authority.", image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    friendshipStyle: {
        id: 'friendshipStyle',
        title: "My Friendship Style Test",
        description: "Find out what kind of friend you are!",
        calculation: 'mostVoted',
        questions: [
            { text: "A friend hasn't replied to your message. What do you think?", answers: [{ text: "They're just busy, they'll reply later.", value: 'A' }, { text: "Oh no! Did I say something wrong?", value: 'B' }, { text: "I'll just wait. They'll text me when they can.", value: 'C' }] },
            { text: "When you're having a tough day, you...", answers: [{ text: "Talk about it with a close friend.", value: 'A' }, { text: "Worry a lot and really need a hug.", value: 'B' }, { text: "Prefer to handle it by myself first.", value: 'C' }] },
            { text: "A new student joins your class. You...", answers: [{ text: "Say hi and ask them to play at recess!", value: 'A' }, { text: "Hope they like you and try really hard to be their friend.", value: 'B' }, { text: "Give them space and let them settle in.", value: 'C' }] },
            { text: "Your best friend is playing with someone else. You feel...", answers: [{ text: "Happy for them! I'll join in or do my own thing.", value: 'A' }, { text: "A little left out and wish they would invite me.", value: 'B' }, { text: "It's cool. I can have fun on my own.", value: 'C' }] }
        ],
        results: {
            'A': { title: "The Steady Supporter", description: "You are a loyal and trustworthy friend. People know they can always count on you, and you build friendships that are strong and last long!", image: "https://images.unsplash.com/photo-1562783530-df28387211e8?q=80&w=1894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'B': { title: "The Eager Friend", description: "You have a huge heart and love your friends very much! You're always full of excitement and joy when you're with them.", image: "https://images.unsplash.com/photo-1623998021882-942699f43a9f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'C': { title: "The Independent Explorer", description: "You are a strong and confident friend. You enjoy your own adventures but you are always there for your friends when they need you.", image: "https://images.unsplash.com/photo-1589992896382-03c6a3b03431?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    },
    tetoEgen: {
        id: 'tetoEgen',
        title: "Friendship Vibe: Teto vs. Egen",
        description: "Are you an expressive Teto or a reserved Egen friend?",
        calculation: 'mostVoted',
        questions: [
            { text: "When you give a friend a gift, you...", answers: [{ text: "Can't wait to see them open it and get excited!", value: 'T' }, { text: "Leave it for them to find and enjoy later.", value: 'E' }] },
            { text: "To say thank you, you'd rather...", answers: [{ text: "Give them a big hug and say 'Thank you!' many times.", value: 'T' }, { text: "Do something nice for them in return later.", value: 'E' }] },
            { text: "Your friend is showing you jejich new toy. You...", answers: [{ text: "Gasp and say 'Wow, that's so cool!'", value: 'T' }, { text: "Nod and say 'Nice. Can I see how it works?'", value: 'E' }] },
            { text: "How do you show you care?", answers: [{ text: "By telling them they're your best friend all the time.", value: 'T' }, { text: "By making sure they have everything they need.", value: 'E' }] }
        ],
        results: {
            'T': { title: "A Sweet Teto Friend", description: "You are full of affection and love to express it! Your friends always know how much you care because you show it with big reactions and lots of words.", image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
            'E': { title: "A Cool Egen Friend", description: "You are a strong, silent pillar for your friends. You might not use a lot of words, but your actions and loyalty speak volumes.", image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
        }
    }
};

// --- App State --- //
let currentTestId = null;
let currentQuestionIndex = 0;
let userAnswers = [];

// --- Render Functions --- //
function renderTestSelectionScreen() {
    app.innerHTML = `
        <div class="fade-in">
            <h1>Choose Your Test!</h1>
            <div class="test-selection-grid">${Object.keys(tests).map(testId => {
                const test = tests[testId];
                return `<button class="test-select-btn" data-id="${test.id}">
                            <h2>${test.title}</h2>
                            <p>${test.description}</p>
                        </button>`;
            }).join('')}</div>
        </div>
    `;

    document.querySelectorAll('.test-select-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            currentTestId = e.currentTarget.dataset.id;
            renderStartScreen(currentTestId);
        });
    });
}

function renderStartScreen(testId) {
    const test = tests[testId];
    app.innerHTML = `
        <div class="fade-in">
            <h1>${test.title}</h1>
            <p>${test.description}</p>
            <button class="btn" id="start-btn">Start Test</button>
        </div>
    `;
    document.getElementById('start-btn').addEventListener('click', () => startTest(testId));
}

function renderQuestion() {
    const test = tests[currentTestId];
    const question = test.questions[currentQuestionIndex];
    const answersHtml = question.answers.map(answer => 
        `<button class="btn answer-btn" data-value="${answer.value}">${answer.text}</button>`
    ).join('');

    app.innerHTML = `
        <div class="fade-in">
            <h1>${question.text}</h1>
            <div class="answers-grid">${answersHtml}</div>
            <div class="progress-bar-container">
              <div class="progress-bar" style="width: ${((currentQuestionIndex) / test.questions.length) * 100}%"></div>
            </div>
        </div>
    `;

    document.querySelectorAll('.answer-btn').forEach(button => {
        button.addEventListener('click', (e) => selectAnswer(e.target.dataset.value));
    });
}

function renderResult() {
    const test = tests[currentTestId];
    const resultType = calculateResult();
    const result = test.results[resultType];

    app.innerHTML = `
        <div class="fade-in">
            <h1>${result.title}</h1>
            ${result.image ? `<img src="${result.image}" alt="${result.title}" class="result-image">` : ''}
            <p>${result.description}</p>
            <button class="btn" id="restart-btn">Try Again</button>
            <button class="btn" id="home-btn">Back to Home</button>
        </div>
    `;
    document.getElementById('restart-btn').addEventListener('click', () => startTest(currentTestId));
    document.getElementById('home-btn').addEventListener('click', renderTestSelectionScreen);
}

// --- Logic --- //
function startTest(testId) {
    currentTestId = testId;
    currentQuestionIndex = 0;
    userAnswers = [];
    renderQuestion();
}

function selectAnswer(value) {
    userAnswers.push(value);
    currentQuestionIndex++;
    const test = tests[currentTestId];
    if (currentQuestionIndex < test.questions.length) {
        renderQuestion();
    } else {
        renderResult();
    }
}

function calculateResult() {
    const test = tests[currentTestId];
    if (test.calculation === 'mbti') {
        const counts = userAnswers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});

        const e = counts['E'] || 0;
        const i = counts['I'] || 0;
        const s = counts['S'] || 0;
        const n = counts['N'] || 0;
        const t = counts['T'] || 0;
        const f = counts['F'] || 0;
        const j = counts['J'] || 0;
        const p = counts['P'] || 0;

        return (e >= i ? 'E' : 'I') + (s >= n ? 'S' : 'N') + (t >= f ? 'T' : 'F') + (j >= p ? 'J' : 'P');

    } else { // mostVoted
        const counts = userAnswers.reduce((acc, curr) => {
            acc[curr] = (acc[curr] || 0) + 1;
            return acc;
        }, {});
        return Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    }
}

// --- Initial Load ---
renderTestSelectionScreen();
