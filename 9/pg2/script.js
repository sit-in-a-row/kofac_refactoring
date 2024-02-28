// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 비지도학습-k-means 클러스터링';
const canvasTitleText = 'k-means 클러스터링이란?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
k-means 클러스터링은 데이터를 여러 그룹으로 나누는 알고리즘으로, 사용자가
지정한 클러스터 수에 따라 데이터를 묶습니다. 알고리즘은 무작위로 클러스터
중심을 할당하고, 이후 중심을 기반으로 데이터 포인트를 가장 가까운 클러스터에
할당합니다. 이 작업을 반복하여 중심을 업데이트하고 클러스터를 최적화합니다. <br><br>

k-means는 간단하면서도 다양한 분야에서 데이터 그룹화에 활용되는
효과적인 방법입니다.
`;

const infoCardText1 = `
위와 같이 무작위로 찍힌 점들을 3가지로 묶어봅시다.
군집의 중심점인 센트로이드를 찍어야 한다고 할 때,
우리는 그 점을 어디에 찍어야 할까요? <br><br>

화면을 클릭해서 표시를 남겨 봅시다.
`;

const infoCardText2 = `
어떤가요? 처음에 생각했던 점과 비슷한가요? <br><br>

k-means 클러스터링은 이러한 중심점을 찾아주는 
알고리즘이랍니다!
`;

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
        graphic.id = 'infoCardGraphic';
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
        for (let i = 0; i < 2; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'pageIndicator';
            indicatorContainer.append(indicator);
        }
        container.append(prevArrow, indicatorContainer, nextArrow);
        return {container, prevArrow, nextArrow, indicatorContainer};
    };

    const updateCard = (cardIndex, infoCardGraphic, infoCardText, indicators) => {
        const graphics = ['../../static/imgs/9/pg2_graphic_1.svg', '../../static/imgs/9/pg2_graphic_2.svg'];
        const texts = [infoCardText1, infoCardText2];
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
    const topContainer = createInfoCardTopContainer('../../static/imgs/9/pg2_graphic_1.svg', infoCardText1);
    infoCard.append(topContainer, container);
    contentsDiv.appendChild(infoCard);

    const update = (direction) => {
        cardIndex = direction === 'next' ? (cardIndex + 1) % 2 : (cardIndex + 3) % 2;
        updateCard(cardIndex, topContainer.firstChild, topContainer.lastChild, indicators);
    };

    prevArrow.addEventListener('click', () => update('prev'));
    nextArrow.addEventListener('click', () => update('next'));

    setTimeout(() => {
        const contentsCanvasInfo = document.getElementsByClassName('contentsCanvas');
        const contentsCanvasHeight = Array.from(contentsCanvasInfo)[0].clientHeight;

        infoCard.style.marginTop = `-${contentsCanvasHeight * 0.09}px`;
        infoCard.style.height = `${contentsCanvasHeight * 0.85}px`;

        indicatorContainer.firstChild.style.backgroundColor = 'white';
    }, 0);

    // 클릭 시 별 그리는 로직 추가
    const infoCardGraphics = document.getElementsByClassName('infoCardGraphic');
    Array.from(infoCardGraphics).forEach(infoCardGraphic => {
        infoCardGraphic.addEventListener('click', (event) => {
            const x = event.clientX; // 클릭된 x 좌표
            const y = event.clientY; // 클릭된 y 좌표
            console.log('클릭됨');
            console.log(`클릭된 좌표: (${x}, ${y})`);

            // 별 모양의 div 요소 생성
            const starDiv = document.createElement('div');
            starDiv.className = 'star';
            starDiv.style.position = 'absolute';
            starDiv.style.left = `${x}px`;
            starDiv.style.top = `${y - 10}px`; // 별의 위치를 조정하여 마우스 클릭 위치에 따라 겹치지 않도록 함

            // 별 모양의 텍스트 추가
            starDiv.innerText = '★';

            // 별 모양 추가
            document.body.appendChild(starDiv);

            // 생성된 별에 대한 클릭 이벤트 추가
            starDiv.addEventListener('click', () => {
                // 별을 클릭하면 해당 별을 제거
                starDiv.remove();
            });
        });
    });



});
