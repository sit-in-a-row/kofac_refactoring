// 정답 체크 함수
function checkAnswer(choice) {
    if (choice === answer) {
        return true;
    }
    else {
        return false;
    }
}

// 정답 결과 확인
function quizResultDisplay(isAnswer) {
    const blackOut = document.createElement('div');
    blackOut.className = 'quizBlackOut';

    const resultInfoContainer = document.createElement('div');
    resultInfoContainer.className = 'resultInfoContainer';

    document.body.appendChild(blackOut);
    if (isAnswer === true) {
        const characterIsAnswer = document.createElement('img');
        characterIsAnswer.className = 'characterQuizResult';
        characterIsAnswer.src = '../../static/imgs/common/character_quizO.png';

        const answerTextContainer = document.createElement('div');
        answerTextContainer.className = 'answerTextContainer';

        const answerTitle = document.createElement('div');
        answerTitle.className = 'answerTitle';
        answerTitle.innerHTML = '정답입니다';

        const textIsAnswer = document.createElement('div');
        textIsAnswer.className = 'textQuizResult';
        textIsAnswer.innerHTML = answerText;

        answerTextContainer.append(answerTitle, textIsAnswer);
        resultInfoContainer.append(blackOut, characterIsAnswer, answerTextContainer);
        document.body.appendChild(resultInfoContainer);
    }
    else {
        const characterIsAnswer = document.createElement('img');
        characterIsAnswer.className = 'characterQuizResult';
        characterIsAnswer.src = '../../static/imgs/common/character_quizX.png';
        
        const answerTitle = document.createElement('div');
        answerTitle.className = 'answerTitle';
        answerTitle.innerHTML = '오답입니다';
        
        resultInfoContainer.append(blackOut, characterIsAnswer, answerTitle);
        document.body.appendChild(resultInfoContainer);
    }
}

// 정답 결과 지우고 다른 상호작용 가능한 상태로 만들기
function toNextSelectionReady(isAnswer) {
    const resultInfoContainers = document.getElementsByClassName('resultInfoContainer');
    if (isAnswer) {
        Array.from(resultInfoContainers).forEach(container => {
            container.addEventListener('click', () => {
                container.innerHTML = '';
            });
        });
    } else {
        setTimeout(function() {
            Array.from(resultInfoContainers).forEach(container => {
                container.innerHTML = '';
            });
        }, 1000);
    }
};

document.addEventListener('DOMContentLoaded', ()=> {
    // 퀴즈 버튼 가져오기
    const quizSelection1 = document.getElementById('quizSelection1');
    const quizSelection2 = document.getElementById('quizSelection2');
    const quizSelection3 = document.getElementById('quizSelection3');
    const quizSelection4 = document.getElementById('quizSelection4');

    quizSelection1.addEventListener('click', ()=> {
        var isAnswer = checkAnswer(1);
        quizResultDisplay(isAnswer);
        toNextSelectionReady(isAnswer);
    })

    quizSelection2.addEventListener('click', ()=> {
        var isAnswer = checkAnswer(2);
        quizResultDisplay(isAnswer);
        toNextSelectionReady(isAnswer);
    })

    quizSelection3.addEventListener('click', ()=> {
        var isAnswer = checkAnswer(3);
        quizResultDisplay(isAnswer);
        toNextSelectionReady(isAnswer);
    })

    quizSelection4.addEventListener('click', ()=> {
        var isAnswer = checkAnswer(4);
        quizResultDisplay(isAnswer);
        toNextSelectionReady(isAnswer);
    })
})