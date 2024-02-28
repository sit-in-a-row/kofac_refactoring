// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 지도학습1-선형회귀';
const canvasTitleText = '회귀분석이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
회귀분석은 두 변수 간의 관계를 이해하고 예측하는 통계 기법입니다.
회귀분석에는 2가지 변수가 있습니다. <br><br>

1. 독립변수: 종속변수에 영향을 미치는 변수, 원인이 되는 변수입니다.
예를 들면 공부 시간이나 수면 시간 등이 해당합니다. <br><br>

2. 종속변수: 분석의 결과로 나타나는 변수로 예측하고싶은 변수, 
결과로 나타나는 변수입니다.
예를 들면 시험 성적이 해당합니다. <br><br>

간단한 선형 회귀분석에서는 두 변수 간의 관계를 방정식으로 
나타냅니다. <br><br>

방정식은 Y=β_0+β_1 X+ε로 표현되며, 여기서 w는 기울기, b는 절편, x는 독립변수, y는 종속변수를 나타냅니다.
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
    contentsImg.src = '../../static/imgs/6/pg2_graphic.gif';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight * 0.7;
        contentsImg.style.height = `${contentsImgHeight}px`;

        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
})
