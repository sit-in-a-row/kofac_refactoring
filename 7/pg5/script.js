// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 지도학습2-k-NN';
const canvasTitleText = '학습 정리 - 요약 및 복습 내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[개요]'
const contentsLiText = `
<ul class="contentsUl">
    <li>k-NN은 지도 학습 알고리즘 중 하나로, 주어진 데이터의 패턴을 학습하고 새로운 데이터를 분류하는 데 사용됩니다.</li>
</ul>
`

const contentsH2_2Text = `[핵심 개념]`;
const contentsLi_2Text = `
<div id="textContainer">
    <div id="subTextContainer1">
        <h3 id="subTextTitle">1. 거리 측정</h3>
        <ul class="contentsUl">
            <li>k-NN은 데이터 포인트 간의 거리를 측정하여 유사성을 판단합니다.</li>
            <li>주로 유클리드 거리 등 거리 측정 방법을 활용합니다.</li>
        </ul>
    </div>

    <div id="subTextContainer2">
        <h3 id="subTextTitle">2. k값 선택</h3>
        <ul class="contentsUl">
            <li>k-NN에서는 이웃의 개수를 나타내는 k값을 선택해야 합니다.</li>
            <li>적절한 k값 선택이 모델의 성능에 영향을 미칩니다.</li>
        </ul>
    </div>
</div>
`;

const contentsH2_3Text = `[학습과 예측 과정]`;
const contentsLi_3Text = `
<ul class="contentsUl">
    <li>모델은 학습 데이터를 기반으로 패턴을 학습하고, <br> 새로운 데이터가 주어지면 가장 가까운 이웃을 통해 예측을 수행합니다.</li>
</ul>
`;

// DOM 요소 생성 및 설정
function createElementWithClass(elementType, className) {
    const element = document.createElement(elementType);
    element.className = className;
    return element;
}

// 공통 스타일 계산
function calculateStyleValue(reference, percentage) {
    return reference * (percentage / 100);
}

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

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);

    const contentsH2 = document.createElement('h2');
    contentsH2.className = 'contentsH2'
    contentsH2.innerHTML = contentsH2Text;
    contentsH2.style.marginTop = `${windowHeight * (3/100)}px`;
    contentsH2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi = document.createElement('div');
    contentsLi.className = 'contentsLi';
    contentsLi.innerHTML = contentsLiText;

    const contentsH2_2 = document.createElement('h2');
    contentsH2_2.className = 'contentsH2'
    contentsH2_2.innerHTML = contentsH2_2Text;
    contentsH2_2.style.marginTop = `${windowHeight * (2.2/100)}px`;
    contentsH2_2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_2 = document.createElement('div');
    contentsLi_2.className = 'contentsLi';
    contentsLi_2.innerHTML = contentsLi_2Text;

    const contentsH2_3 = document.createElement('h2');
    contentsH2_3.className = 'contentsH2'
    contentsH2_3.innerHTML = contentsH2_3Text;
    contentsH2_3.style.marginTop = `${windowHeight * (2.2/100)}px`;
    contentsH2_3.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_3 = document.createElement('div');
    contentsLi_3.className = 'contentsLi';
    contentsLi_3.innerHTML = contentsLi_3Text;

    contentsArticle.append(contentsH2, contentsLi, contentsH2_2, contentsLi_2, contentsH2_3, contentsLi_3);
})
