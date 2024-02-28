// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const pgNum = '1-2';
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 나만의 AI챗봇 개발하기';
const canvasTitleText = '컴퓨터에도 지능이 있을까? 어떻게 판단할까?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '튜링테스트란?'
const contentsLiText = `
<ul class="contentsUl">
    <li>컴퓨터가 인간과 얼마나 비슷하게 대화할 수 있는지를 기준으로 컴퓨터에도 지능이 있는지를 판별하는 시험입니다.</li>
    <li>질의자 1명, 응답자 2명으로 구성됩니다.</li>
    <li>질의자와 응답자 중 1명은 사람이고, 나머지 응답자는 컴퓨터입니다.</li>
    <li>질의자는 컴퓨터 응답자 간, 사람 응답자 간 각각 대화를 시도한 후, 응답자 중 누가 컴퓨터인지 판별합니다.</li>
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
    contentsArticle.append(contentsH2, contentsLi);

    // 오른쪽 이미지 영역 추가
    const contentsImg = document.createElement('img');
    contentsImg.className = 'contentsImg';
    contentsImg.src = '../../static/imgs/1/pg2_graphic.png';
    contentsImg.style.marginTop = `${windowHeight * (5.5/100)}px`;
    contentsImg.style.maxWidth = `${windowWidth * (32/100)}px`;

    contentsDiv.append(contentsImg);
})
