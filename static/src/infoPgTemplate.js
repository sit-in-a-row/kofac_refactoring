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

// 헤더 인덱스 및 콘텐츠 캔버스 생성
const headerIndex = createElementWithClass('header', 'headerIndex');
headerIndex.innerHTML = headerIndexText;

const contentsCanvas = createElementWithClass('main', 'contentsCanvas');
const canvasMarginTop = calculateStyleValue(windowHeight, 2.35);
contentsCanvas.style.marginTop = `${canvasMarginTop}px`;

// 콘텐츠 캔버스 내 타이틀 생성
const canvasTitleContainer = createElementWithClass('div', 'canvasTitleContainer');
const canvasTitleBullet = createElementWithClass('div', 'canvasTitleBullet');
const canvasTitle = createElementWithClass('h1', 'canvasTitle');

canvasTitle.innerHTML = canvasTitleText;

// 스타일링 및 구조화
var canvasTitleMarginTop = calculateStyleValue(windowHeight, 3.6);
var canvasTitleMarginLeftRight = calculateStyleValue(windowWidth, 2.45);
canvasTitleContainer.style.paddingTop = `${canvasTitleMarginTop}px`;
canvasTitleContainer.style.paddingLeft = `${canvasTitleMarginLeftRight}px`;

canvasTitleBullet.style.cssText = `
    height: ${calculateStyleValue(windowHeight, 6)}px;
    width: ${calculateStyleValue(windowWidth, 0.5)}px;
    margin-right: ${calculateStyleValue(windowWidth, 0.7)}px;
`;

// DOM에 요소 추가
document.body.appendChild(contentsSection);
contentsSection.append(headerIndex, contentsCanvas);
canvasTitleContainer.append(canvasTitleBullet, canvasTitle);
contentsCanvas.appendChild(canvasTitleContainer);

// 콘텐츠 캔버스 높이 설정 (헤더 인덱스 추가 후에 계산)
setTimeout(() => {
    const headerIndexHeight = headerIndex.clientHeight;
    const contentsCanvasHeight = windowHeight - (contentsSectionMarginTop + contentsSectionMarginBottom + headerIndexHeight + canvasMarginTop);
    contentsCanvas.style.height = `${contentsCanvasHeight}px`;
}, 0);