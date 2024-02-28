// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 딥러닝2-STT TTS';
const canvasTitleText = '학습 정리 - 요약 및 복습 내용';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[TTS(Text-to-Speech)]'
const contentsLiText = `
<ul class="contentsUl">
    <li>TTS는 텍스트 데이터를 인간의 음성과 유사한 오디오 신호로 변환하는 기술이다.</li>
    <li>TTS 시스템은 텍스트를 분석하여 발음, 억양, 강세를 결정하고, 이를 합성된 음성으로 변환한다.</li>
</ul>
`

const contentsH2_2Text = `[STT(Speech-to-Text)]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>STT는 오디오 신호(사람의 음성)를 텍스트 데이터로 변환하는 기술이다.</li>
    <li>STT 시스템은 음성 신호를 분석하여 언어 구성 요소를 식별하고, 이를 텍스트로 변환한다.</li>
</ul>
`;

const contentsH2_3Text = `[TTS vs STT]`;
const contentsLi_3Text = `
<ul class="contentsUl">
    <li>TTS는 텍스트를 음성으로 변환하는 반면, STT는 음성을 텍스트로 변환한다.</li>
    <li>TTS는 자연스러운 음성 합성에 중점을 두는 반면, STT는 정확한 음성 인식과 변환에 초점을 맞춘다.</li>
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
