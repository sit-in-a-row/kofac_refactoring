// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 기계학습이란?';
const canvasTitleText = '학습 정리 - 요약 및 복습내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[전통적인 프로그래밍]'
const contentsLiText = `
<ul class="contentsUl">
    <li>개발자가 명확한 규칙과 지침을 코드로 작성하여 특정 작업을 수행한다.</li>
    <li>가능한 시나리오를 모두 고려하여 규칙을 만들어야 한다.</li>
</ul>
`

const contentsH2_2Text = `[기계학습]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>데이터로 직접 패턴을 학습하여 독립적인 예측이나 결정을 내릴 수 있다.</li>
    <li>개발자는 데이터를 제공하고, 알고리즘은 이 데이터로 학습하여 작동한다.</li>
</ul>
`;

const contentsH2_3Text = `[응용 분야]`;
const contentsLi_3Text = `
<ul class="contentsUl">
    <li>전통적인 프로그래밍은 고정된 문제에 적합하며, 변화하는 데이터나 불명확한 상황에는 제한적일 수 있다.</li>
    <li>기계학습은 데이터가 많고, 패턴이 복잡하거나 변화하는 상황에 더 적합하며, 예측 모델링, 패턴 인식 등 다양한 분야에서 활용된다.</li>
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
