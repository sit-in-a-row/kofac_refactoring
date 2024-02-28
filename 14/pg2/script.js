// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 사회적 영향 &nbsp|&nbsp 인공지능과 공존하는 삶1-데이터 편향';
const canvasTitleText = '데이터 편향성이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
// const contentsH2Text = '튜링테스트란?'
const contentsPText = `
데이터 편향성이란 기계학습에서 사용되는 데이터가 특정 
집단이나 사상에 치우친 것을 의미합니다. <br><br>

예를 들어 어떤 데이터가 특정 성별이나 인종에 관한 정보가 많지 않다면, 그 기계학습 모델은 그 성별이나 인종과 관련해
제대로 된 결정을 내리기 어렵습니다. 이는 기계학습 모델이 현실세계의 다양성을 제대로 반영하지 못하게 만들고, 
결국 잘못된 또는 불공정한 결과를 낳게 합니다. <br><br>

따라서 기계학습 분야에서는 데이터를 다양하고 공정하게 수집하는 것이 매우 중요합니다.
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
    contentsImg.src = '../../static/imgs/14/pg2_graphic.svg';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasWidth = (Array.from(contentsCanvasInfo)[0].clientWidth);
        const contentsImgWidth = contentsCanvasWidth;
        contentsImg.style.width = `${contentsImgWidth * 0.5}px`;

        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0.05}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
});