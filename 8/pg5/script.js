// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 지도학습3-의사결정트리';
const canvasTitleText = '학습 정리 - 요약 및 복습 내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[루트 노드]'
const contentsLiText = `
<ul class="contentsUl">
    <li>트리의 시작점으로 모든 데이터를 포함하고 있으며, 가장 중요한 특성을 선택하여 데이터를 분할하는 역할을 합니다.</li>
</ul>
`

const contentsH2_2Text = `[분기 노드]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>루트 노드를 제외한 모든 노드로, 특정 조건에 따라 데이터를 분할하는 역할을 합니다.</li>
</ul>
`;

const contentsH2_3Text = `[잎 노드]`;
const contentsLi_3Text = `
<ul class="contentsUl">
    <li>더는 분할할 수 없는 노드로, 최종적인 예측값을 나타냅니다.</li>
</ul>
`;

const contentsH2_4Text = `[가지]`;
const contentsLi_4Text = `
<ul class="contentsUl">
    <li>노드에서 조건에 따라 생성되며, 다음 노드로 이어지는 경로를 나타냅니다.</li>
</ul>
`;

const contentsH2_5Text = `[조건]`;
const contentsLi_5Text = `
<ul class="contentsUl">
    <li>각 분기 노드에서 사용되는 데이터의 특성과 값을 나타냅니다.</li>
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
    contentsH2_2.style.marginTop = `${windowHeight * (1.5/100)}px`;
    contentsH2_2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_2 = document.createElement('div');
    contentsLi_2.className = 'contentsLi';
    contentsLi_2.innerHTML = contentsLi_2Text;

    const contentsH2_3 = document.createElement('h2');
    contentsH2_3.className = 'contentsH2'
    contentsH2_3.innerHTML = contentsH2_3Text;
    contentsH2_3.style.marginTop = `${windowHeight * (1.5/100)}px`;
    contentsH2_3.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_3 = document.createElement('div');
    contentsLi_3.className = 'contentsLi';
    contentsLi_3.innerHTML = contentsLi_3Text;

    const contentsH2_4 = document.createElement('h2');
    contentsH2_4.className = 'contentsH2'
    contentsH2_4.innerHTML = contentsH2_4Text;
    contentsH2_4.style.marginTop = `${windowHeight * (1.5/100)}px`;
    contentsH2_4.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_4 = document.createElement('div');
    contentsLi_4.className = 'contentsLi';
    contentsLi_4.innerHTML = contentsLi_4Text;

    const contentsH2_5 = document.createElement('h2');
    contentsH2_5.className = 'contentsH2'
    contentsH2_5.innerHTML = contentsH2_5Text;
    contentsH2_5.style.marginTop = `${windowHeight * (1.5/100)}px`;
    contentsH2_5.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_5 = document.createElement('div');
    contentsLi_5.className = 'contentsLi';
    contentsLi_5.innerHTML = contentsLi_5Text;

    contentsArticle.append(contentsH2, contentsLi, contentsH2_2, contentsLi_2, contentsH2_3, contentsLi_3, contentsH2_4, contentsLi_4, contentsH2_5, contentsLi_5);
})
