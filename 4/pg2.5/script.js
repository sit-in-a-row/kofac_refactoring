// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 전문가 시스템 개발하기';
const canvasTitleText = '전문가 시스템이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsLiText = `
<ul class="contentsUl">
    <li>비가 온다면(조건) 우산을 챙긴다(행동)는 의미입니다.</li>
</ul>
`

const contentsLi_2Text = `
<ul class="contentsUl">
    <li>'IF 비가 온다 AND 바람이 분다 THEN 우산을 챙긴다.' 같이 AND 조건이 추가되었다면,
    비도 오고 바람도 분다는 2가지 조건이 모두 부합해야 우산을 챙긴다(행동)는 의미입니다.</li>
</ul>
`;

const contentsLi_3Text = `
<ul class="contentsUl">
    <li>'IF 비가 온다 OR 바람이 분다 THEN 우산을 챙긴다' 같이 OR 조건이 추가되었다면, 비가 오거나 바람이 부는
    2가지 조건 중 하나에 부합한다면 우산을 챙긴다는 의미입니다.</li>
</ul>
`

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

    const contentsLi = document.createElement('div');
    contentsLi.className = 'contentsLi';
    contentsLi.innerHTML = contentsLiText;

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);

    const contentsLi_2 = document.createElement('div');
    contentsLi_2.className = 'contentsLi';
    contentsLi_2.innerHTML = contentsLi_2Text;

    const contentsLi_3 = document.createElement('div');
    contentsLi_3.className = 'contentsLi';
    contentsLi_3.innerHTML = contentsLi_3Text;

    contentsArticle.append(contentsLi, contentsLi_2, contentsLi_3);

    setTimeout(() => {
        // 오른쪽 이미지 영역 추가
        const contentsImg = document.createElement('img');
        contentsImg.className = 'contentsImg';
        contentsImg.src = '../../static/imgs/4/pg2.5_graphic.svg';

        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight * 0.9;
        contentsImg.style.height = `${contentsImgHeight * 0.9}px`;

        contentsImg.style.marginTop = `-${contentsCanvasHeight * 0.05}px`;

        contentsDiv.append(contentsImg);
    }, 0);
})
