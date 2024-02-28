// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 딥러닝1-CNN';
const canvasTitleText = 'CNN이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
// const contentsH2Text = '튜링테스트란?'
const contentsPText = `
CNN(Convolutional Neural Network) 기술은 컴퓨터 비전과 이미지 처리 분야에서 중요한 역할을 합니다. 
이 기술은 이미지 내의 패턴과 특징을 인식하여 얼굴 인식, 이미지 분류, 자동차의 자율주행 시스템 등에 활용됩니다. 
CNN은 복잡한 이미지 데이터를 효율적으로 처리하고 분석할 수 있게 해 주며, 
이를 통해 시스템은 사물의 형태나 텍스처를 정확하게 파악할 수 있습니다. <br><br>

이와 같이 인공지능은 사람이 하나씩 점검할 수 없는 부분에서 사람을 보완하여 
더 안전한 세상이 되도록 도와줍니다.
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
    contentsImg.src = '../../static/imgs/11/pg2_graphic.gif';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight;
        contentsImg.style.height = `${contentsImgHeight * 0.7}px`;

        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0.2}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
});