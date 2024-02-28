// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 지도학습3-의사결정트리';
const canvasTitleText = '의사결정트리란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
의사결정트리는 데이터를 분석하고 판단하는 데 도움을 주는
중요한 도구 중 하나입니다. 처음에 가장 중요한 질문을 하고,
그에 따라 여러 가지 다른 질문을 하면서 정답에 가까워지는 방식입니다. <br><br>

의사결정트리는 데이터를 분석할 때 가장 중요한 기준을 선택하고,
그에 따라 데이터를 계속 분류하거나 예측합니다.
이렇게 하면 복잡한 문제를 간단한 질문으로 나누어 해결할 수 있고,
결정을 내릴 때 명확한 근거를 남길 수 있게 됩니다. <br><br>

의사결정트리는 예측 모델, 분류 모델, 그리고 데이터 분석에서
많이 사용됩니다.
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
    contentsImg.src = '../../static/imgs/8/pg2_graphic.svg';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight * 0.7;
        contentsImg.style.height = `${contentsImgHeight}px`;

        console.log(contentsImg.clientHeight)
    }, 0);
})
