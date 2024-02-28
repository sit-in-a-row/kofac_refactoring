// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const pgNum = '1-2';
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 전문가 시스템 개발하기';
const canvasTitleText = '학습 정리 - 요약 및 복습 내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[규칙]'
const contentsLiText = `
<ul class="contentsUl">
    <li>문제 해결을 위한 지식 표현의 형태</li>
    <span class="grayText">예) [IF 조건, THEN 결과] </span>
</ul>
`

const contentsH2_2Text = `[추론]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>여러 규칙과 사실의 논리적 관계를 통해 새로운 지식(규칙과 사실)을 도출하는 행위</li>
</ul>
`;

const contentsH2_3Text = `[전문가 시스템]`;
const contentsLi_3Text = `
<ul class="contentsUl">
    <li>특정 영역 전문가의 의사결정 능력을 모사하는 컴퓨터 시스템으로 지식(규칙과 사실)을 통해 추론</li>
    <ul class="contentsUl-sub">
        <li>지식 베이스: 다양한 규칙과 사실로 구성</li>
        <li>추론 엔진: 지식 베이스의 지식을 추론하여 새로운 지식(규칙과 사실) 생성</li>
        <li>사용자 인터페이스: 사용자로부터 질문을 입력받고, 적절한 답변을 출력하는 환경</li>
    </ul>
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
