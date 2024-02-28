// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 8-퍼즐 문제 해결하기';
const canvasTitleText = '학습 정리 - 요약 및 복습 내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[맹목적 탐색]'
const contentsLiText = `
<ul class="contentsUl">
    <li>너비 우선 탐색, 깊이 우선 탐색: 어떠한 정보도 사용하지 않음</li>
</ul>
`

const contentsH2_2Text = `[정보 이용 탐색]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>탐욕적 최상 우선 탐색: 추정한 정보만 사용</li>
    <li>A* 탐색: 추정한 정보와 주어진 정보를 모두 사용</li>
</ul>
`;

const contentsH2_3Text = `[추정한 정보]`;
const contentsLi_3Text = `
<ul class="contentsUl">
    <li>목표 상태와 비교하여 제 위치에 있지 않은 타일의 개수</li>
</ul>
`;

const contentsH2_4Text = `[주어진 정보]`;
const contentsLi_4Text = `
<ul class="contentsUl">
    <li>초기 상태부터 현재 상태까지 거쳐 온 경로 수. 즉, 트리 구조에서 현재 상태의 레벨값</li>
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
    contentsLi_3.innerHTML = contentsLi_2Text;


    const contentsH2_4 = document.createElement('h2');
    contentsH2_4.className = 'contentsH2'
    contentsH2_4.innerHTML = contentsH2_4Text;
    contentsH2_4.style.marginTop = `${windowHeight * (2.2/100)}px`;
    contentsH2_4.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_4 = document.createElement('div');
    contentsLi_4.className = 'contentsLi';
    contentsLi_4.innerHTML = contentsLi_4Text;

    contentsArticle.append(contentsH2, contentsLi, contentsH2_2, contentsLi_2, contentsH2_3, contentsLi_3, contentsH2_4, contentsLi_4);
})
