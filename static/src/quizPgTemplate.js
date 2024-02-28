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

document.addEventListener('DOMContentLoaded', ()=> {
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
    
    // 헤더 인덱스 및 콘텐츠 캔버스 생성 (퀴즈에서도 콘텐츠 캔버스의 높이 계산을 위해, 생성은 하되 투명도 0으로 설정)
    const headerIndex = createElementWithClass('header', 'headerIndex');
    headerIndex.innerHTML = '더미';
    headerIndex.style.opacity = '0';
    
    const contentsCanvas = createElementWithClass('main', 'contentsCanvas');
    const canvasMarginTop = calculateStyleValue(windowHeight, 2.35);
    contentsCanvas.style.marginTop = `${canvasMarginTop}px`;
    
    // 퀴즈 제목 컨테이너 생성
    const contentsSectionWidth = parseInt(contentsSection.style.width);
    const contentsSectionHeight = parseInt(contentsSection.style.height);
    const quizTitleContainer = createElementWithClass('header', 'quizPgTitleContainer');
    const quizTitleContainerMarginTop = calculateStyleValue(windowHeight, 2);
    quizTitleContainer.style.top = '0px';
    quizTitleContainer.style.marginTop = `${quizTitleContainerMarginTop}px`;
    document.body.appendChild(quizTitleContainer);
    
    const quizTitleIcon = createElementWithClass('img', 'quizTitleIcon');
    quizTitleIcon.src = '../../static/imgs/common/icon_quiz.svg';
    quizTitleIcon.style.width = `${(windowWidth - (2 * (letterBox + contentsSectionMarginLeftRight)))/20}px`
    quizTitleIcon.style.marginRight = `${calculateStyleValue(windowWidth, 1)}px`;
    
    const quizTitle = createElementWithClass('h1', 'quizTitle');
    quizTitle.innerHTML = quizTitleText;
    
    // 퀴즈 영역 추가
    // 퀴즈 발문
    const quizQuestion = createElementWithClass('h3', 'quizQuestion');
    // const quizQuestionMarginTop = calculateStyleValue(windowHeight, 10.5);
    const quizQuestionMarginTop = calculateStyleValue(contentsSectionHeight, 10);
    quizQuestion.innerHTML = quizQuestionText;
    quizQuestion.style.marginTop = `${quizQuestionMarginTop}px`;
    
    // 퀴즈 선택지 추가
    const quizSelectionContainer = createElementWithClass('div', 'quizSelectionContainer');
    const quizSelection1 = createElementWithClass('div', 'quizSelection');
    const quizSelection2 = createElementWithClass('div', 'quizSelection');
    const quizSelection3 = createElementWithClass('div', 'quizSelection');
    const quizSelection4 = createElementWithClass('div', 'quizSelection');

    quizSelection1.innerHTML = quizSelection1Text;
    quizSelection2.innerHTML = quizSelection2Text;
    quizSelection3.innerHTML = quizSelection3Text;
    quizSelection4.innerHTML = quizSelection4Text;
    
    quizSelection1.id = 'quizSelection1';
    quizSelection2.id = 'quizSelection2';
    quizSelection3.id = 'quizSelection3';
    quizSelection4.id = 'quizSelection4';

    quizSelectionContainer.style.marginTop = `${quizQuestionMarginTop}px`;

    // 퀴즈 선택지 폭 계산
    const quizSelectionMarginLeftRight = calculateStyleValue(windowWidth, 13);
    const quizSelectionWidth = `${contentsSectionWidth - (2 * quizSelectionMarginLeftRight)}px`;
    
    quizSelection1.style.width = quizSelectionWidth;
    quizSelection2.style.width = quizSelectionWidth;
    quizSelection3.style.width = quizSelectionWidth;
    quizSelection4.style.width = quizSelectionWidth;
    
    // 장식 요소 추가
    const quizCharacter = createElementWithClass('img', 'graphic');
    const quizGraphic = createElementWithClass('img', 'graphic');
    
    const quizCharacterWidth = (windowWidth - (2 * (letterBox + contentsSectionMarginLeftRight)))/4;
    
    quizCharacter.src = '../../static/imgs/common/character_quiz.png';
    quizGraphic.src = '../../static/imgs/common/graphic_bottomRight_quiz.png';
    
    quizCharacter.style.width = `${quizCharacterWidth}px`;
    quizCharacter.style.height = 'auto';
    quizCharacter.style.bottom = `-${calculateStyleValue(windowHeight, 8)}px`;
    quizCharacter.style.left = `-${(letterBox + contentsSectionMarginLeftRight)/1.5}px`;
    
    quizGraphic.style.width = `${(windowWidth - (2 * (letterBox + contentsSectionMarginLeftRight)))/3.5}px`
    quizGraphic.style.bottom = `${calculateStyleValue(windowHeight, 0.3)}px`;
    quizGraphic.style.right = `${(letterBox + contentsSectionMarginLeftRight)/1.2}px`;
    
    // DOM에 요소 추가
    document.body.append(contentsSection, quizCharacter, quizGraphic);
    contentsSection.append(headerIndex, contentsCanvas);
    quizTitleContainer.append(quizTitleIcon, quizTitle);
    quizSelectionContainer.append(quizSelection1, quizSelection2, quizSelection3, quizSelection4);
    contentsCanvas.append(quizQuestion, quizSelectionContainer);

    // 콘텐츠 캔버스 높이 설정 (헤더 인덱스 추가 후에 계산)
    setTimeout(() => {
        const headerIndexHeight = headerIndex.clientHeight;
        const contentsCanvasHeight = windowHeight - (contentsSectionMarginTop + contentsSectionMarginBottom + headerIndexHeight + canvasMarginTop);
        contentsCanvas.style.height = `${contentsCanvasHeight}px`;
    }, 0);
    console.log(windowWidth, contentsSectionWidth, quizCharacterWidth);

    if (windowWidth < contentsSectionWidth + quizCharacterWidth/5) {
        console.log('캐릭터 삭제');
        quizCharacter.style.opacity = '0';   
    }
});
