// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const pgNum = '1-2';
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 나만의 AI챗봇 개발하기';
const canvasTitleText = '챗봇은 어떻게 개발되었을까?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsH2Text = '챗봇이란?'
const contentsLiText = `
<ul class="contentsUl">
    <li>챗봇은 인간과 컴퓨터 사이에 보다 자연스럽고 원활한 상호작용의 생성을 목표로 튜링테스트를 통과할 수 있도록 개발되었습니다.</li>
    <li>따라서 챗봇은 사용자가 입력한 텍스트를 이해하고 응답합으로써 사람과 사람 사이의 대화를 시뮬레이션하도록 개발되었습니다.</li>
</ul>
`

const contentsH2_2Text = `챗봇의 진화`;
const contentsLi_2Text = `
<ul class="contentsUl">
    <li>과거 챗봇은 규칙 기반으로 미리 정의된 일련의 규칙을 따르도록 프로그래밍되어 있어, 
    특정한 질문에만 응답할 수 있다는 단점이 있었습니다. 
    인간의 언어를 컴퓨터가 이해할 수 있는 자연어처리 기술과 인공지능 기술이 발전됨에 따라 
    AI 기반 챗봇은 인간이 하고자 하는 언어를 이해하고 의도를<br>인식하여 개인화된 응답을 제공할 수 있게 되었습니다.</li>
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


    // 오른쪽 이미지 영역 추가
    const contentsImg = document.createElement('img');
    contentsImg.className = 'contentsImg';
    contentsImg.src = '../../static/imgs/1/pg2.5_graphic.png';
    contentsImg.style.marginTop = `${windowHeight * (5.5/100)}px`;
    contentsImg.style.maxWidth = `${windowWidth * (30/100)}px`;
    contentsImg.style.transform = `translate(0, ${-50}px)`;

    contentsDiv.append(contentsImg);
})
