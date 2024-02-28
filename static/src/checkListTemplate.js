// 공통 스타일 계산
function calculateStyleValue(reference, percentage) {
    return reference * (percentage / 100);
}

// DOM 요소 생성 및 설정
function createElementWithClass(elementType, className) {
    const element = document.createElement(elementType);
    element.className = className;
    return element;
}

document.addEventListener('DOMContentLoaded', () => {
    // 요소 추가에 필요한 변수들 정의
    const contentsCanvas = document.querySelector('.contentsCanvas');
    const canvasTitleContainer = document.querySelector('.canvasTitleContainer');

    // 오버플로우 막기
    document.body.style.overflow = 'hidden';

    // 현재 해상도 및 이미지 사이즈 확인
    const backgroundImgs = document.getElementsByClassName('backgroundImg');
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const imgInfo = Array.from(backgroundImgs);
    const imgHeight = imgInfo[0].clientHeight;
    const imgWidth = imgInfo[0].clientWidth;

    // 콘텐츠 영역 설정
    const contentsSection = createElementWithClass('section', 'contentsSection');
    const contentsSectionMarginTop = calculateStyleValue(windowHeight, 4.5);
    const contentsSectionMarginBottom = calculateStyleValue(windowHeight, 8);
    const contentsSectionMarginLeftRight = calculateStyleValue(windowWidth, 3.8);
    const letterBox = (windowWidth - imgWidth) / 2;

    contentsSection.style.cssText = `
        height: ${windowHeight - (contentsSectionMarginTop + contentsSectionMarginBottom)}px;
        width: ${windowWidth - (2 * (letterBox + contentsSectionMarginLeftRight))}px;
        top: ${contentsSectionMarginTop}px;
        left: ${letterBox + contentsSectionMarginLeftRight}px;
    `;

    // 헤더 인덱스 및 콘텐츠 캔버스 생성 (체크리스트에서도 콘텐츠 캔버스의 높이 계산을 위해, 생성은 하되 투명도 0으로 설정)
    const headerIndex = createElementWithClass('header', 'headerIndex');
    headerIndex.innerHTML = '더미';
    headerIndex.style.opacity = '0';

    // 체크리스트 영역 추가

    // 체크리스트 선택지 추가 (퀴즈 영역 시 정의한 요소 차용)
    const quizSelectionContainer = createElementWithClass('div', 'quizSelectionContainer');
    const quizSelection1 = createElementWithClass('div', 'checkListSelection');
    const quizSelection2 = createElementWithClass('div', 'checkListSelection');
    const checkBox1 = createElementWithClass('div', 'checkBox');
    const checkBox2 = createElementWithClass('div', 'checkBox');
    const checkBoxSize = calculateStyleValue(windowHeight, 6);
    const quizSelectionMargin = parseInt(canvasTitleContainer.style.paddingLeft);
    
    quizSelection1.id = 'checkListSelection1';
    quizSelection2.id = 'checkListSelection2';
    checkBox1.id = 'checkBox1';
    checkBox2.id = 'checkBox2';

    checkBox1.style.width = `${checkBoxSize}px`;
    checkBox1.style.height = `${checkBoxSize}px`;
    checkBox2.style.width = `${checkBoxSize}px`;
    checkBox2.style.height = `${checkBoxSize}px`;

    quizSelectionContainer.style.marginLeft = `${quizSelectionMargin}px`;
    quizSelectionContainer.style.marginRight = `${quizSelectionMargin}px`;

    quizSelection1.innerHTML = quizSelection1Text;
    quizSelection2.innerHTML = quizSelection2Text;

    quizSelection1.style.padding = '2vh 2vw';
    quizSelection2.style.padding = '2vh 2vw';

    const quizQuestionMarginTop = calculateStyleValue(windowHeight, 10.5);
    quizSelectionContainer.style.marginTop = `${quizQuestionMarginTop}px`;

    const contentsSectionWidth = parseInt(contentsSection.style.width);
    const quizSelectionMarginLeftRight = calculateStyleValue(windowWidth, 6);
    const quizSelectionWidth = `${contentsSectionWidth - (2 * quizSelectionMarginLeftRight)}px`;

    quizSelection1.style.width = quizSelectionWidth;
    quizSelection2.style.width = quizSelectionWidth;
    

    // DOM 요소 추가
    quizSelection1.appendChild(checkBox1);
    quizSelection2.appendChild(checkBox2);
    quizSelectionContainer.append(quizSelection1, quizSelection2);
    contentsCanvas.appendChild(quizSelectionContainer);

    // 체크리스트 클릭 시 V표시 이벤트 리스너 설정
    var isChecked1 = false;
    var isChecked2 = false;

    const checkBox1Click = document.getElementById('checkBox1');
    checkBox1Click.addEventListener('click', () => {
        if (!isChecked1) {
            isChecked1 = true;
            const checkIcon = createElementWithClass('img', 'checkIcon');
            checkIcon.src = '../../static/imgs/common/check.png';
            checkBox1.appendChild(checkIcon);
        }
        else {
            isChecked1 = false;
            checkBox1.innerHTML = '';
        }
    })

    const checkBox2Click = document.getElementById('checkBox2');
    checkBox2Click.addEventListener('click', () => {
        if (!isChecked2) {
            isChecked2 = true;
            const checkIcon = createElementWithClass('img', 'checkIcon');
            checkIcon.src = '../../static/imgs/common/check.png';
            checkBox2.appendChild(checkIcon);
        }
        else {
            isChecked2 = false;
            checkBox2.innerHTML = '';
        }
    })

    const checkSelection1Click = document.getElementById('checkListSelection1');
    checkSelection1Click.addEventListener('click', () => {
        if (!isChecked1) {
            isChecked1 = true;
            const checkIcon = createElementWithClass('img', 'checkIcon');
            checkIcon.src = '../../static/imgs/common/check.png';
            checkBox1.appendChild(checkIcon);
        }
        else {
            isChecked1 = false;
            checkBox1.innerHTML = '';
        }
    })

    const checkSelection2Click = document.getElementById('checkListSelection2');
    checkSelection2Click.addEventListener('click', () => {
        if (!isChecked2) {
            isChecked2 = true;
            const checkIcon = createElementWithClass('img', 'checkIcon');
            checkIcon.src = '../../static/imgs/common/check.png';
            checkBox2.appendChild(checkIcon);
        }
        else {
            isChecked2 = false;
            checkBox2.innerHTML = '';
        }
    })

});