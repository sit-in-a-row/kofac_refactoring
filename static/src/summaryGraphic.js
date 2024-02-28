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

// 위치 계산에 필요한 요소 불러오기
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const backgroundImgs = document.getElementsByClassName('backgroundImg');
const imgInfo = Array.from(backgroundImgs);
const imgWidth = imgInfo[0].clientWidth;
const letterBox = (windowWidth - imgWidth) / 2;
const contentsSectionMarginLeftRight = calculateStyleValue(windowWidth, 3.8);

// 장식 요소 추가
document.body.style.overflow = 'hidden';
const summaryCharacter = createElementWithClass('img', 'graphic');
const summaryGraphic = createElementWithClass('img', 'graphic');
const summaryCharacterWidth = (windowWidth - (2 * (letterBox + contentsSectionMarginLeftRight)))/4;

summaryCharacter.src = '../../static/imgs/common/character_summary.png';
summaryGraphic.src = '../../static/imgs/common/graphic_bottomLeft_summary.png';

// summaryCharacter.style.transform = 'scale(0.9)';
// summaryCharacter.style.bottom = `-${calculateStyleValue(windowHeight, 10)}px`;
// summaryCharacter.style.right = `${calculateStyleValue(windowWidth, 9)}px`;

summaryCharacter.style.width = `${summaryCharacterWidth}px`;
summaryCharacter.style.height = 'auto';
summaryCharacter.style.bottom = `-${calculateStyleValue(windowHeight, 8)}px`;
summaryCharacter.style.right = `${(letterBox + contentsSectionMarginLeftRight)/3}px`;


summaryGraphic.style.width = `${(windowWidth - (2 * (letterBox + contentsSectionMarginLeftRight)))/3.5}px`
summaryGraphic.style.bottom = `${calculateStyleValue(windowHeight, 0.3)}px`;
summaryGraphic.style.left = `${(letterBox + contentsSectionMarginLeftRight)/1.2}px`;

document.body.append(summaryCharacter, summaryGraphic);