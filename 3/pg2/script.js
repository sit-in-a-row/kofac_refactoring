// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능의 이해 &nbsp|&nbsp 맹목적 탐색과 정보 이용 탐색';
const canvasTitleText = '길찾기 문제란 무엇일까?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
길찾기 알고리즘은 그래프에서 두 지점간의 <br> 최단 경로 또는 특정 조건을 만족하는 <br> 경로를 찾는데 사용되는 알고리즘입니다.
`

const algo_aText = `
<div class="infoCardTitle">너비 우선 탐색 알고리즘(Breadth-First Search)</div>
<ul>
    <li class="infoCardParagraph">개념: 너비 우선 탐색으로, 가까운 노드부터 우선적으로 탐색하는 알고리즘입니다.</li>
    <li class="infoCardParagraph">작동 방식: 큐를 사용하여 현재 노드의 인접 노드를 모두 방문한 후 해당 노드의 인접 노드를
    큐에 추가하는 방식으로 작동합니다.</li>
    <li class="infoCardParagraph">활용 분야: 최단 경로 찾기, 트리나 그래프의 레벨 순회 등에 사용됩니다.</li>
</ul>
`

const algo_bText = `
<div class="infoCardTitle">깊이 우선 탐색 알고리즘(Depth-First Search)</div>
<ul>
    <li class="infoCardParagraph">개념: 깊이 우선 탐색으로, 한 경로를 최대한 깊게 탐색한 후 다른 경로로 이동하는 알고리즘입니다.</li>
    <li class="infoCardParagraph">작동 방식: 스택 또는 재귀 함수를 사용하여 깊이를 우선으로 탐색합니다.</li>
    <li class="infoCardParagraph">활용 분야: 그래프의 순회, 미로 찾기, 연결 요소 찾기 등에 사용됩니다.</li>
</ul>
`

const algo_cText = `
<div class="infoCardTitle">탐욕적 최상 우선 탐색 알고리즘(Greedy Best-First Search)</div>
<ul>
    <li class="infoCardParagraph">개념: 현재 노드에서 가장 유망해 보이는 노드로 이동하는 알고리즘입니다.</li>
    <li class="infoCardParagraph">작동 방식: 각 노드의 휴리스틱(목표까지의 추정 거리)을 계산하여, 가장 낮은 휴리스틱 값을 가진 노드를
    선택하고 반복합니다.</li>
    <li class="infoCardParagraph">활용 분야: 퍼즐 해결 등의 그래프 기반 탐색 문제에 주로 사용됩니다.</li>
</ul>
`

const algo_dText = `
<div class="infoCardTitle">A* 탐색 알고리즘(A-star Algorithm)</div>
<ul>
    <li class="infoCardParagraph">개념: 휴리스틱을 사용하여 목표 지점까지의 최단 경로를 찾는 알고리즘입니다.</li>
    <li class="infoCardParagraph">작동 방식: 경로의 예측 비용과 현재까지의 이동 비용을 고려하여 최적의 경로를 찾습니다.</li>
    <li class="infoCardParagraph">활용 분야: 게임 개발, 로봇의 경로 계획, 자율 주행 차량 등에 사용됩니다.</li>
</ul>
`

// 페이지별 개별 콘텐츠
document.addEventListener('DOMContentLoaded', () => {
    // 요소 추가에 필요한 변수들 정의
    const contentsCanvas = document.querySelector('.contentsCanvas');
    const canvasTitle = document.querySelector('.canvasTitle');
    const canvasTitleContainer = document.querySelector('.canvasTitleContainer');

    // 위치 계산에 필요한 변수들 정의
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const contentsCanvasInfo = document.getElementsByClassName('contentsCanvas');
    const contentsCanvasWidth = Array.from(contentsCanvasInfo)[0].clientWidth;
    const contentsDivPaddingLeft = parseInt(canvasTitleContainer.style.paddingLeft, 10);
    const contentsArticleWidth = canvasTitleContainer.clientWidth - contentsDivPaddingLeft;

    const contentsDiv = document.createElement('div');
    contentsDiv.className = 'contentsDiv';
    contentsDiv.style.paddingLeft = `${contentsDivPaddingLeft}px`;
    contentsDiv.style.paddingRight = `${contentsDivPaddingLeft}px`;
    contentsDiv.style.width = `${contentsCanvasWidth - (2 * contentsDivPaddingLeft)}px`

    // 왼쪽 텍스트 영역 추가
    const contentsArticle = document.createElement('article');
    contentsArticle.className = 'contentsArticle';
    contentsArticle.style.width = `${contentsArticleWidth}px`;

    const contentsP = document.createElement('div');
    contentsP.className = 'contentsP';
    contentsP.innerHTML = contentsPText;

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);
    contentsArticle.append(contentsP);

    // 왼쪽 버튼 추가
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button4 = document.createElement('button');

    button1.style.marginTop = '30px';

    button1.className = 'btn-big btn-blue1 infoPgBtn';
    button2.className = 'btn-big btn-blue1 infoPgBtn';
    button3.className = 'btn-big btn-blue1 infoPgBtn';
    button4.className = 'btn-big btn-blue1 infoPgBtn';

    button1.id = 'algoButton1'
    button2.id = 'algoButton2'
    button3.id = 'algoButton3'
    button4.id = 'algoButton4'

    button1.innerHTML = '너비 우선 탐색 알고리즘이란?';
    button2.innerHTML = '깊이 우선 탐색 알고리즘이란?';
    button3.innerHTML = '탐욕적 최상 우선 탐색 알고리즘이란?';
    button4.innerHTML = 'A* 탐색 알고리즘이란?';

    contentsArticle.append(button1, button2, button3, button4);

    // 오른쪽 이미지 영역 추가
    const contentsImg = document.createElement('img');
    contentsImg.className = 'contentsImg';
    contentsImg.src = '../../static/imgs/3/pg2_graphic.png';
    contentsImg.style.width = '35vw';

    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight * 0.9;
        contentsImg.style.height = `${contentsImgHeight * 0.6}px`;

        contentsImg.style.marginTop = `${contentsCanvasHeight * 0.2}px`;

        // 버튼별 이벤트 리스너 추가
        button1.addEventListener('click', ()=>{
            createInfoCard(contentsImgHeight, 'algo_a');
        })

        button2.addEventListener('click', ()=>{
            createInfoCard(contentsImgHeight, 'algo_b');
        })

        button3.addEventListener('click', ()=>{
            createInfoCard(contentsImgHeight, 'algo_c');
        })

        button4.addEventListener('click', ()=>{
            createInfoCard(contentsImgHeight, 'algo_d');
        })

    }, 0);
})

function createInfoCard(contentsImgHeight, algo_type) {
    const contentsDiv = document.querySelector('.contentsDiv');
    
    const lastChild = contentsDiv.lastChild;
    if (lastChild) {
        contentsDiv.removeChild(lastChild);
    }
    
    const infoCard = document.createElement('div');
    const infoCardPadding = window.innerHeight * 0.02;
    infoCard.className = 'infoCard';
    infoCard.style.height = `${contentsImgHeight - (2 * infoCardPadding)}px`;
    infoCard.style.marginTop = `-${contentsImgHeight/10}px`;

    const algoGif = document.createElement('img');
    algoGif.className = 'infoGif';
    algoGif.style.width = '90%';
    algoGif.src = `../../static/imgs/3/pg2_${algo_type}.gif`;
    infoCard.appendChild(algoGif);

    const algoText = document.createElement('div');
    algoText.className = 'infoText';
    switch(algo_type) {
        case 'algo_a':
            algoText.innerHTML = algo_aText;
            break;
        case 'algo_b':
            algoText.innerHTML = algo_bText;
            break;
        case 'algo_c':
            algoText.innerHTML = algo_cText;
            break;
        case 'algo_d':
            algoText.innerHTML = algo_dText;
            break;
        default:
            algoText.innerHTML = "설명을 추가해야 합니다.";
    }

    infoCard.appendChild(algoText);
    
    contentsDiv.appendChild(infoCard);
}