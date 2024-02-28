// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const pgNum = '1-2';
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 나만의 AI챗봇 개발하기';
const canvasTitleText = '학습 정리 - 요약 및 복습 내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[튜링테스트]'
const contentsLiText = `
<ul class="contentsUl">
    <li>컴퓨터가 인간과 얼마나 비슷하게 대화할 수 있는지를 기준으로 컴퓨터에 지능이 있는지를 판별하는 시험</li>
    <li>질의자 1명, 응답자 2명으로 구성되며 질의자와 응답자 중 1명은 사람, 나머지 응답자는 컴퓨터</li>
    <li>질의자는 컴퓨터 응답자와 사람 응답자 간 각각 대화를 시도한 후, 응답자 중 누가 컴퓨터인지 판별</li>
</ul>
`

const contentsH2_2Text = `[챗봇]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>인간과 컴퓨터 간의 자연스럽고 원활한 상호작용을 위해 개발</li>
    <li>사용자가 입력한 텍스트를 컴퓨터가 이해하고 응답하여 사람과 사람 사이의 대화 시뮬레이션</li>
    <li>자연어처리 기술과 인공지능 기술의 발전에 따라 더욱 발전된 챗봇 등장</li>
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

    const contentsH2 = document.createElement('h2');
    contentsH2.className = 'contentsH2'
    contentsH2.innerHTML = contentsH2Text;
    contentsH2.style.marginTop = `${windowHeight * (6/100)}px`;
    contentsH2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi = document.createElement('div');
    contentsLi.className = 'contentsLi';
    contentsLi.innerHTML = contentsLiText;

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);

    const contentsH2_2 = document.createElement('h2');
    contentsH2_2.className = 'contentsH2'
    contentsH2_2.innerHTML = contentsH2_2Text;
    contentsH2_2.style.marginTop = `${windowHeight * (6/100)}px`;
    contentsH2_2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsLi_2 = document.createElement('div');
    contentsLi_2.className = 'contentsLi';
    contentsLi_2.innerHTML = contentsLi_2Text;

    contentsArticle.append(contentsH2, contentsLi, contentsH2_2, contentsLi_2);
})
