// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 지도학습2-k-NN';
const canvasTitleText = 'k-NN 알고리즘이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
k-NN은 "k-Nearest Neighbors"의 약자로, 한글로는 "k-최근접 이웃"으로
불리며, 데이터 간의 거리를 기반으로 하는 간단하면서도 강력한 머신러닝
알고리즘 중 하나입니다. <br><br>

이 알고리즘은 데이터 포인트 간의 거리를 계산하여 주어진 데이터 포인트와
가장 가까운 이웃을 찾아내는데, 이는 마치 주변의 유사한 데이터를 고려하여
의사결정을 내리는 것과 유사합니다. <br><br>

이웃의 수는 k로 표현되며, 예를 들어
k를 3으로 설정하면 가장 가까운 3개의 이웃을 찾아내 판단을 내립니다.
`

const infoCardText1 = `
k의 개수가 5인 경우 0번 데이터 포인트 주변 
5개의 가장 가까운 데이터 포인트가 무엇인지 확인할 수 있습니다. <br><br>

이 결과에 따라 0번 데이터 포인트가 어떤 군집에 분류되는지 확인할 수 있습니다.
`

const infoCardText2 = `
그렇다면 k가 5일 때 0번 데이터 포인트의 주변에 초록색 3개, 파란색 2개가 있다면 어떤 색으로 분류할 수 있을까요? <br><br>

다수결의 원칙에 따라 0번 포인트는 
초록색으로 결정됩니다.
`

const infoCardText3 = `
0번 포인트를 조금 오른쪽으로 이동하면, 가장 가까운 노드 5개 중 초록색이 2개, 파란색이 3개인 상황이 됩니다. <br><br>

이 경우 0번 데이터 포인트의 군집은 파란색 군집으로 결정됩니다.
`

const infoCardText4 = `
k-NN알고리즘을 잘 이해하셨나요? <br><br>

실습을 통해 ★데이터 포인트가 어떤 색의 군집으로 분류될지 확인해 볼까요?
`

document.addEventListener('DOMContentLoaded', () => {
    const contentsCanvas = document.querySelector('.contentsCanvas');
    const canvasTitleContainer = document.querySelector('.canvasTitleContainer');
    const contentsCanvasInfo = document.getElementsByClassName('contentsCanvas')[0];
    const contentsCanvasWidth = contentsCanvasInfo.clientWidth;
    const contentsDivPaddingLeft = parseInt(canvasTitleContainer.style.paddingLeft, 10);

    const createContentsDiv = () => {
        const div = document.createElement('div');
        div.className = 'contentsDiv';
        div.style.paddingLeft = div.style.paddingRight = `${contentsDivPaddingLeft}px`;
        div.style.width = `${contentsCanvasWidth - (2 * contentsDivPaddingLeft)}px`;
        return div;
    };

    const createArticleAndParagraph = (contentsPText) => {
        const article = document.createElement('article');
        article.className = 'contentsArticle';
        const div = document.createElement('div');
        div.className = 'contentsP';
        div.innerHTML = contentsPText;
        article.append(div);
        return article;
    };

    const createInfoCard = () => {
        const infoCard = document.createElement('div');
        infoCard.className = 'infoCard';
        const contentsCanvasHeight = contentsCanvasInfo.clientHeight;
        infoCard.style.marginTop = `-${contentsCanvasHeight * 0.09}px`;
        infoCard.style.width = `${contentsCanvasWidth * 0.5}px`;
        return infoCard;
    };

    const createInfoCardTopContainer = (src, text) => {
        const container = document.createElement('div');
        const graphic = document.createElement('img');
        graphic.className = 'infoCardGraphic';
        graphic.src = src;
        const textDiv = document.createElement('div');
        textDiv.className = 'infoCardText';
        textDiv.innerHTML = text;
        container.append(graphic, textDiv);
        return container;
    };

    const createInfoCardBottomContainer = () => {
        const container = document.createElement('div');
        container.className = 'infoCardBottomContainer';
        const prevArrow = document.createElement('div');
        const nextArrow = document.createElement('div');
        prevArrow.className = nextArrow.className = 'arrowIcon';
        prevArrow.innerHTML = '&#8592;';
        nextArrow.innerHTML = '&#8594;';
        const indicatorContainer = document.createElement('div');
        indicatorContainer.className = 'pageIndicatorContainer';
        for (let i = 0; i < 4; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'pageIndicator';
            indicatorContainer.append(indicator);
        }
        container.append(prevArrow, indicatorContainer, nextArrow);
        return {container, prevArrow, nextArrow, indicatorContainer};
    };

    const updateCard = (cardIndex, infoCardGraphic, infoCardText, indicators) => {
        const graphics = ['../../static/imgs/7/pg2_graphic_1.svg', 
        '../../static/imgs/7/pg2_graphic_2.svg', 
        '../../static/imgs/7/pg2_graphic_3.svg', 
        '../../static/imgs/7/pg2_graphic_4.svg'];

        const texts = [infoCardText1, infoCardText2, infoCardText3, infoCardText4];

        infoCardGraphic.src = graphics[cardIndex];
        infoCardText.innerHTML = texts[cardIndex];
        indicators.forEach((indicator, index) => {
            indicator.style.backgroundColor = index === cardIndex ? 'white' : 'transparent';
        });
    };

    const contentsDiv = createContentsDiv();
    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(createArticleAndParagraph(contentsPText));

    const infoCard = createInfoCard();
    const {container, prevArrow, nextArrow, indicatorContainer} = createInfoCardBottomContainer();
    let cardIndex = 0;
    const indicators = Array.from(indicatorContainer.children);
    const topContainer = createInfoCardTopContainer('../../static/imgs/7/pg2_graphic_1.svg', infoCardText1);

    infoCard.append(topContainer, container);
    contentsDiv.appendChild(infoCard);

    const update = (direction) => {
        cardIndex = direction === 'next' ? (cardIndex + 1) % 4 : (cardIndex + 3) % 4;
        updateCard(cardIndex, topContainer.firstChild, topContainer.lastChild, indicators);
    };

    prevArrow.addEventListener('click', () => update('prev'));
    nextArrow.addEventListener('click', () => update('next'));

    setTimeout(() => {
        const contentsCanvasInfo = document.getElementsByClassName('contentsCanvas');
        const contentsCanvasHeight = Array.from(contentsCanvasInfo)[0].clientHeight;

        infoCard.style.marginTop = `-${contentsCanvasHeight * 0.09}px`;
        infoCard.style.height = `${contentsCanvasHeight * 0.85}px`;
        
        indicatorContainer.firstChild.style.backgroundColor = 'white'
    }, 0);
});
