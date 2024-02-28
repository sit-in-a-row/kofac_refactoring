// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 딥러닝3-순환신경망(RNN/LSTM)';
const canvasTitleText = 'RNN? LSTM?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
RNN(Recurrent Neural Network)은 시간에 따라 변하는 데이터를 처리하는 데 적합한 딥러닝 기술로, 
언어 모델링과 음성 인식 등에 사용됩니다. 하지만 
장기 의존성 문제가 있어, 이를 해결하기 위해LSTM(Long Short-Term Memory)이 개발 
되었습니다. LSTM은 복잡한 언어 구조와 긴 시퀀스 
데이터를 더 잘 처리하며, 텍스트 생성, 시계열 예측, 
감정 분석 등 다양한 분야에서 활용됩니다.
`

const algo_aText = `
<div class="infoCardTitle">RNN</div>
<div class="infoCardParagraph">순환신경망의 가장 기초적인 형태.</div>

`

const algo_bText = `
<div class="infoCardTitle">LSTM</div>
<div class="infoCardParagraph">RNN 모델에서 기울기 소실 문제를 방지하는 신경망 모델로 Cell State를 추가한 형태.</div>
`

// 페이지별 개별 콘텐츠
document.addEventListener('DOMContentLoaded', () => {
    // 요소 추가에 필요한 변수들 정의
    const contentsCanvas = document.querySelector('.contentsCanvas');
    const canvasTitle = document.querySelector('.canvasTitle');
    const canvasTitleContainer = document.querySelector('.canvasTitleContainer');

    // 위치 계산에 필요한 변수들 정의
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const contentsCanvasInfo = document.getElementsByClassName('contentsCanvas');
    const contentsCanvasWidth = Array.from(contentsCanvasInfo)[0].clientWidth;
    const contentsDivPaddingLeft = parseInt(canvasTitleContainer.style.paddingLeft, 10);
    const contentsArticleWidth = canvasTitleContainer.clientWidth - contentsDivPaddingLeft;

    const contentsDiv = document.createElement('div');
    contentsDiv.className = 'contentsDiv';
    contentsDiv.style.paddingLeft = `${contentsDivPaddingLeft}px`;
    contentsDiv.style.paddingRight = `${contentsDivPaddingLeft}px`;
    contentsDiv.style.width = `${contentsCanvasWidth - (2 * contentsDivPaddingLeft)}px`

    // 왼쪽 텍스트 영역 추가
    const contentsArticle = document.createElement('article');
    contentsArticle.className = 'contentsArticle';
    contentsArticle.style.width = `${contentsArticleWidth * 1.75}px`;

    const contentsP = document.createElement('div');
    contentsP.className = 'contentsP';
    contentsP.innerHTML = contentsPText;

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);
    contentsArticle.append(contentsP);

    // 왼쪽 버튼 추가
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');

    button1.style.marginTop = '30px';

    button1.className = 'btn-big btn-blue1 infoPgBtn';
    button2.className = 'btn-big btn-blue1 infoPgBtn';

    button1.id = 'algoButton1'
    button2.id = 'algoButton2'

    button1.innerHTML = 'RNN 원리 확인하기';
    button2.innerHTML = 'LSTM 원리 확인하기';

    contentsArticle.append(button1, button2);

    // 오른쪽 이미지 영역 추가
    const contentsImg = document.createElement('img');
    contentsImg.className = 'contentsImg';
    contentsImg.src = '../../static/imgs/13/pg2_graphic.gif';
    contentsImg.style.width = '45vw';
    contentsImg.style.marginTop = '-2vh';

    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight * 0.9;

        // 버튼별 이벤트 리스너 추가
        button1.addEventListener('click', ()=>{
            createInfoCard(contentsImgHeight, 'algo_a');
        })

        button2.addEventListener('click', ()=>{
            createInfoCard(contentsImgHeight, 'algo_b');
        })
    }, 0);
})

function createInfoCard(contentsImgHeight, algo_type) {
    const contentsDiv = document.querySelector('.contentsDiv');
    
    const lastChild = contentsDiv.lastChild;
    if (lastChild) {
        contentsDiv.removeChild(lastChild);
    }
    
    const infoCard = document.createElement('div');
    const infoCardPadding = window.innerHeight * 0.02;
    infoCard.className = 'infoCard';
    infoCard.style.height = `${contentsImgHeight - (2 * infoCardPadding)}px`;
    infoCard.style.marginTop = `-${contentsImgHeight/10}px`;

    const algoGif = document.createElement('img');
    algoGif.className = 'infoGif';
    algoGif.style.width = '30vw';
    // algoGif.style.height = '60%';
    algoGif.src = `../../static/imgs/13/pg2_${algo_type}.gif`;
    infoCard.appendChild(algoGif);

    const algoText = document.createElement('div');
    algoText.className = 'infoText';
    switch(algo_type) {
        case 'algo_a':
            algoText.innerHTML = algo_aText;
            break;
        case 'algo_b':
            algoText.innerHTML = algo_bText;
            break;
        default:
            algoText.innerHTML = "설명을 추가해야 합니다.";
    }

    infoCard.appendChild(algoText);
    
    contentsDiv.appendChild(infoCard);
}