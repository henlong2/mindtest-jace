const questions = [
    {
        question: "주말에 당신의 계획은?",
        answers: [
            { text: "집에서 푹 쉬면서 나만의 시간을 보낸다.", type: "내향적" },
            { text: "친구들과 밖에서 신나게 논다.", type: "외향적" },
            { text: "새로운 것을 배우거나 취미 활동을 한다.", type: "탐구적" },
            { text: "봉사 활동이나 다른 사람을 돕는 일을 한다.", type: "이타적" }
        ]
    },
    {
        question: "새로운 사람을 만났을 때 당신은?",
        answers: [
            { text: "먼저 다가가 인사를 건넨다.", type: "외향적" },
            { text: "상대방이 먼저 다가오기를 기다린다.", type: "내향적" },
            { text: "관찰하며 어떤 사람인지 파악한다.", type: "분석적" },
            { text: "친근하게 대하며 공통점을 찾으려 노력한다.", type: "친화적" }
        ]
    },
    {
        question: "어떤 일을 계획할 때 당신은?",
        answers: [
            { text: "큰 그림을 그리고 즉흥적으로 진행한다.", type: "자유로운" },
            { text: "세부 계획까지 꼼꼼하게 세운다.", type: "계획적" },
            { text: "필요한 정보만 수집하고 유연하게 대처한다.", type: "실용적" },
            { text: "다른 사람들과 상의하여 함께 결정한다.", type: "협력적" }
        ]
    },
    {
        question: "갈등 상황에 놓였을 때 당신의 반응은?",
        answers: [
            { text: "직접 나서서 문제를 해결하려 한다.", type: "적극적" },
            { text: "상황을 회피하고 싶어 한다.", type: "회피형" },
            { text: "이해관계자들의 의견을 조율하려 한다.", type: "중재자" },
            { text: "논리적으로 상황을 분석하고 해결책을 제시한다.", type: "분석적" }
        ]
    }
];

const resultTypes = {
    "내향적": {
        title: "사색가형",
        description: "당신은 조용하고 사려 깊은 **사색가형**이군요! 혼자만의 시간을 소중히 여기며 내면의 세계를 탐구하는 것을 즐깁니다. 깊이 있는 생각을 통해 자신만의 통찰을 얻고, 신중하게 행동하는 경향이 있습니다."
    },
    "외향적": {
        title: "활동가형",
        description: "당신은 에너지가 넘치고 활발한 **활동가형**입니다! 사람들과 함께하는 것을 좋아하고 새로운 경험에 거리낌이 없습니다. 적극적으로 자신을 표현하며 주변에 긍정적인 영향을 미칩니다."
    },
    "탐구적": {
        title: "탐험가형",
        description: "당신은 항상 새로운 것을 배우고 탐험하려는 **탐험가형**입니다! 지적 호기심이 많고 미지의 세계를 탐험하는 것을 즐깁니다. 새로운 지식과 경험을 통해 끊임없이 성장하려 합니다."
    },
    "이타적": {
        title: "조력자형",
        description: "당신은 다른 사람을 돕는 것을 좋아하는 따뜻한 **조력자형**입니다! 타인의 감정에 공감하고 어려운 사람을 기꺼이 돕습니다. 주변 사람들에게 긍정적인 영향력을 미치며, 공동체의 화합을 중요하게 생각합니다."
    },
    "분석적": {
        title: "분석가형",
        description: "당신은 논리적이고 분석적인 **분석가형**입니다! 문제를 해결할 때 감정보다는 이성을 앞세우며, 데이터와 사실을 기반으로 판단합니다. 복잡한 상황도 명확하게 파악하고 체계적으로 접근하는 능력이 뛰어납니다."
    },
    "친화적": {
        title: "관계자형",
        description: "당신은 사람들과의 관계를 중요시하는 친화적인 **관계자형**입니다! 원만하고 긍정적인 관계를 유지하려 노력하며, 다른 사람들과의 소통을 통해 행복을 느낍니다. 갈등보다는 화합을 추구하며 타협 능력이 뛰어납니다."
    },
    "자유로운": {
        title: "자유영혼형",
        description: "당신은 틀에 얽매이지 않는 **자유영혼형**입니다! 즉흥적이고 유연하며, 정해진 규칙보다는 자신의 직관을 따르는 것을 좋아합니다. 새로운 아이디어를 만들어내고 독창적인 방식으로 문제를 해결합니다."
    },
    "계획적": {
        title: "계획가형",
        description: "당신은 체계적이고 꼼꼼한 **계획가형**입니다! 목표를 설정하고 달성하기 위해 세부적인 계획을 세우는 것을 즐깁니다. 미리 준비하고 예측하여 안정적이고 효율적인 결과를 추구합니다."
    },
    "실용적": {
        title: "실용주의형",
        description: "당신은 현실적이고 실용적인 **실용주의형**입니다! 불필요한 것을 줄이고 효율성을 중요하게 생각합니다. 문제에 직면했을 때 가장 효과적인 해결책을 찾아내며, 현실적인 관점에서 판단합니다."
    },
    "협력적": {
        title: "협동가형",
        description: "당신은 다른 사람들과 함께 일하는 것을 선호하는 **협동가형**입니다! 팀워크를 중요하게 생각하고 공동의 목표를 달성하기 위해 노력합니다. 타인의 의견을 존중하고 함께 시너지를 내는 것을 즐깁니다."
    },
    "적극적": {
        title: "선도자형",
        description: "당신은 주도적이고 적극적인 **선도자형**입니다! 새로운 일에 도전하는 것을 두려워하지 않으며, 문제를 해결하기 위해 솔선수범합니다. 리더십을 발휘하여 다른 사람들을 이끄는 데 능숙합니다."
    },
    "회피형": {
        title: "평화추구형",
        description: "당신은 갈등을 피하고 평화를 추구하는 **평화추구형**입니다! 불편한 상황이나 대립을 좋아하지 않으며, 조용하고 안정적인 환경을 선호합니다. 스트레스를 줄이고 조화를 이루려는 경향이 있습니다."
    },
    "중재자": {
        title: "조정자형",
        description: "당신은 갈등 상황에서 중재자 역할을 하는 **조정자형**입니다! 서로 다른 의견을 가진 사람들을 이해하고 조율하여 합리적인 해결책을 찾는 데 능합니다. 공정하고 객관적인 시각으로 상황을 바라봅니다."
    }
};


let currentQuestionIndex = 0;
let selectedAnswer = null; // 현재 선택된 답변
let scores = {}; // 각 성격 유형의 점수를 저장할 객체

// DOM 요소 가져오기
const gameScreen = document.getElementById('game-screen');
const resultScreen = document.getElementById('result-screen');
const questionElement = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultTypeElement = document.getElementById('result-type');
const resultDescriptionElement = document.getElementById('result-description');
const restartButton = document.getElementById('restart-button');

// 게임 시작 및 재시작
function startGame() {
    currentQuestionIndex = 0;
    scores = {}; // 점수 초기화
    selectedAnswer = null;
    gameScreen.style.display = 'block'; // 게임 화면 보이기
    resultScreen.style.display = 'none'; // 결과 화면 숨기기
    nextButton.style.display = 'none'; // 다음 버튼 숨김 (초기에는 답변 선택 전이므로)
    showQuestion(); // 첫 질문 표시
}

// 질문 표시
function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    questionElement.textContent = questionData.question;
    answersContainer.innerHTML = ''; // 이전 답변 버튼 제거
    selectedAnswer = null; // 새로운 질문 시 선택 초기화
    nextButton.style.display = 'none'; // 새로운 질문 시 다음 버튼 숨김

    questionData.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('answer-button');
        button.dataset.type = answer.type; // 어떤 유형의 점수를 올릴지 데이터셋에 저장
        button.addEventListener('click', () => selectAnswer(button, answer.type));
        answersContainer.appendChild(button);
    });
}

// 답변 선택
function selectAnswer(button, type) {
    // 이전에 선택된 버튼이 있다면 selected 클래스 제거
    const previouslySelected = answersContainer.querySelector('.answer-button.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    button.classList.add('selected'); // 현재 버튼에 selected 클래스 추가
    selectedAnswer = type; // 선택된 답변의 유형 저장
    nextButton.style.display = 'block'; // 답변 선택 시 다음 버튼 표시
}

// 다음 질문 또는 결과 보기
nextButton.addEventListener('click', () => {
    if (selectedAnswer) {
        // 선택된 답변의 유형에 점수 추가
        scores[selectedAnswer] = (scores[selectedAnswer] || 0) + 1;

        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion(); // 다음 질문 표시
        } else {
            showResult(); // 모든 질문이 끝나면 결과 표시
        }
    } else {
        alert("답변을 선택해주세요!"); // 답변을 선택하지 않았을 때 알림
    }
});

// 결과 표시
function showResult() {
    gameScreen.style.display = 'none'; // 게임 화면 숨기기
    resultScreen.style.display = 'block'; // 결과 화면 보이기

    let maxScore = -1;
    let finalTypeKey = ""; // 가장 높은 점수를 받은 유형의 키 (예: "내향적")
    let finalTypeTitle = "알 수 없음"; // 결과 화면에 표시될 제목
    let finalDescription = "당신의 성격 유형을 분석하는 데 문제가 발생했습니다.";

    // 가장 높은 점수를 받은 성격 유형 찾기
    for (const type in scores) {
        if (scores[type] > maxScore) {
            maxScore = scores[type];
            finalTypeKey = type;
        }
    }

    // 최고점 유형이 하나일 경우
    const topTypes = [];
    for (const type in scores) {
        if (scores[type] === maxScore) {
            topTypes.push(type);
        }
    }

    if (topTypes.length === 1 && resultTypes[topTypes[0]]) {
        finalTypeTitle = resultTypes[topTypes[0]].title;
        finalDescription = resultTypes[topTypes[0]].description;
    } else if (topTypes.length > 1) {
        // 최고점 유형이 여러 개일 경우 (동점)
        let combinedTitles = topTypes.map(type => resultTypes[type] ? resultTypes[type].title : '').filter(Boolean);
        let combinedDescriptions = topTypes.map(type => resultTypes[type] ? resultTypes[type].description : '').filter(Boolean);

        if (combinedTitles.length > 0) {
            finalTypeTitle = `${combinedTitles.join(' & ')} 혼합형`; // 예: 사색가형 & 분석가형 혼합형
            finalDescription = "당신은 여러 성격 유형의 특징을 고루 가지고 있는 복합적인 성격의 소유자입니다. 상황에 따라 다양한 면모를 보이며 유연하게 대처하는 능력이 뛰어납니다.\n\n" +
                               "주요 특징:\n" + combinedDescriptions.join('\n\n');
        } else {
            finalTypeTitle = "복합적인 성격 유형";
            finalDescription = "당신은 여러 성격 유형의 특징을 가지고 있습니다. 당신의 행동 패턴은 다양한 상황에서 유연하게 발휘될 수 있습니다.";
        }
    } else {
        // 점수가 전혀 없는 경우 (모든 답변을 건너뛰었거나 오류 발생 시)
        finalTypeTitle = "알 수 없음";
        finalDescription = "답변 데이터가 부족하여 성격 유형을 판단하기 어렵습니다. 다시 테스트해 주세요!";
    }
    
    resultTypeElement.innerHTML = finalTypeTitle;
    resultDescriptionElement.innerHTML = finalDescription;
}

// 다시 시작 버튼 클릭 이벤트 리스너
restartButton.addEventListener('click', startGame);

// 페이지 로드 시 게임 시작
startGame();