// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 딥러닝2-STT TTS';
const canvasTitleText = 'STT? TTS?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
// const contentsH2Text = '튜링테스트란?'
const contentsPText = `
STT(Speech to Text) 기술은 음성을 텍스트로 변환하여 
음성 명령과 메모 작성에 활용되며, TTS(Text to Speech) 기술은 
텍스트를 자연스러운 음성으로 변환해 오디오북이나 
언어 학습 도구에 사용됩니다. <br><br>

이번 차시에서는 STT와 TTS를 활용한 게임을 통해 
각 기술에 관해 더 알아봅시다!
`

// 페이지별 개별 콘텐츠
document.addEventListener('DOMContentLoaded', () => {
    // 요소 추가에 필요한 변수들 정의
    const contentsCanvas = document.querySelector('.contentsCanvas');
    const canvasTitleContainer = document.querySelector('.canvasTitleContainer');

    // 위치 계산에 필요한 변수들 정의
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const contentsCanvasInfo = document.getElementsByClassName('contentsCanvas');
    const contentsCanvasWidth = Array.from(contentsCanvasInfo)[0].clientWidth;
    const contentsDivPaddingLeft = parseInt(canvasTitleContainer.style.paddingLeft, 10);

    const contentsDiv = document.createElement('div');
    contentsDiv.className = 'contentsDiv';
    contentsDiv.style.paddingLeft = `${contentsDivPaddingLeft}px`;
    contentsDiv.style.paddingRight = `${contentsDivPaddingLeft}px`;
    contentsDiv.style.width = `${contentsCanvasWidth - (2 * contentsDivPaddingLeft)}px`

    // 왼쪽 텍스트 영역 추가
    const contentsArticle = document.createElement('article');
    contentsArticle.className = 'contentsArticle';

    // const contentsH2 = document.createElement('h2');
    // contentsH2.className = 'contentsH2'
    // contentsH2.innerHTML = contentsH2Text;
    // contentsH2.style.marginTop = `${windowHeight * (6/100)}px`;
    // contentsH2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsP = document.createElement('div');
    contentsP.className = 'contentsP';
    contentsP.innerHTML = contentsPText;

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);
    // contentsArticle.append(contentsH2, contentsP);
    contentsArticle.append(contentsP);

    // 오른쪽 이미지 영역 추가
    const contentsImg = document.createElement('img');
    contentsImg.className = 'contentsImg';
    contentsImg.src = '../../static/imgs/12/pg2_graphic.svg';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight;
        contentsImg.style.height = `${contentsImgHeight * 0.8}px`;

        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0.05}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
});