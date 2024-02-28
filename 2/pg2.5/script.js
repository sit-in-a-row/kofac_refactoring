// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 8-퍼즐 문제 해결하기';
const canvasTitleText = '챗봇은 어떻게 개발되었을까?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '[맹목적 탐색]'
const contentsLiText = `
<ul class="contentsUl">
    <li>너비 우선 탐색: 현재 상태와 인접한 모든 상태를 우선적으로 탐색하는 방식</li>
    <li>깊이 우선 탐색: 현재 상태와 인접한 상태 중에서 하나의 상태를 우선적으로 탐색하는 방식</li>
</ul>
`

const contentsH2_2Text = `[정보 이용 탐색]`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>탐욕적 최상 우선 탐색: 목표 상태와 비교하여 얼마나 목표 상태에 가까운지를 추정하여 가급적 목표 상태에 가까운 상태를 
    선택하여 탐색하는 방식(추정 정보만 활용)</li>
    <li>A* 탐색: 목표 상태와 비교하는 것(추정 정보)과 함께 초기 상태에서 현재 상태에 이르기까지의 경로를 합산한 값<br>(주어진 정보)을 기준으로 
    다음 상태를 선택하여 탐색하는 방식(추정 정보 + 주어진 정보 활용)</li>
</ul>
`;

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


    // // 오른쪽 이미지 영역 추가
    // const contentsImg = document.createElement('img');
    // contentsImg.className = 'contentsImg';
    // contentsImg.src = '../../static/imgs/1/pg2.5_graphic.png';
    // contentsImg.style.marginTop = `${windowHeight * (5.5/100)}px`;
    // contentsImg.style.maxWidth = `${windowWidth * (30/100)}px`;
    // contentsImg.style.transform = `translate(0, ${-50}px)`;

    // contentsDiv.append(contentsImg);
})
