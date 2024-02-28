// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 인공신경망과 딥러닝 이해';
const canvasTitleText = '딥러닝이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
// const contentsH2Text = '튜링테스트란?'
const contentsPText = `
딥러닝은 인간의 신경망 원리를 모방한 기계학습 중 하나입니다. <br><br>

딥러닝은 입력층, 은닉층, 출력층으로 구성되어 있습니다. 입력층을 통해 받은 
데이터셋은 은닉층을 통해 학습되어 출력층을 통해 결과가 나오게 됩니다. 
따라서 은닉층이 많을수록 좀 더 복잡한 데이터를 처리하고, 더 정확한 결과를 도출할 수 있습니다. <br><br>

딥러닝은 다양한 속성을 조율하여 학습 할 수 있습니다. <br><br>

학습률은 신경망 학습의 속도와 안정성을 조절하는 중요한 매개변수입니다. 
에포크는 데이터셋이 학습된 횟수로, 이 수가 많을수록 정확도가 높아집니다. 
배치사이즈는 한 번에 처리되는 데이터의 양을 의미합니다. 
배치사이즈가 크면 학습 속도가 향상되고, 작으면 안정성과 일반화 능력이 향상됩니다.
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
    contentsImg.src = '../../static/imgs/10/pg2_graphic.svg';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight;
        contentsImg.style.height = `${contentsImgHeight * 0.7}px`;

        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0.2}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
});