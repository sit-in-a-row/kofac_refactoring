// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 사회적 영향 &nbsp|&nbsp 인공지능과 공존하는 삶2-윤리적 딜레마';
const canvasTitleText = '윤리적 딜레마 속 당신의 선택은?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
// const contentsH2Text = '튜링테스트란?'
const contentsPText = `
트롤리 딜레마는 하나의 선택으로 많은 사람을 구할지, 
한 사람을 구할지 결정해야 하는 윤리적 문제를 다룹니다. 
몇 가지 상황을 생각해 봅시다. <br><br>

<ul>
브레이크가 고장 난 트롤리가 있습니다. 당신은 트롤리의 진행 방향을 바꿀 수 있습니다. 
바꾸지 않는다면 5명의 인부가, 바꾼다면 1명의 인부가 반드시 죽게 됩니다. 
방향을 바꾸는 선택은 도덕적으로 허용되나요? <br><br>
</ul>

<ul>
아까와 같은 트롤리가 또다시 5명의 인부를 향해 달리고 있습니다. 
육교 위에 서 있는 당신은, 당신 앞에 서 있는 뚱뚱한 사람을 떠밀면 트롤리를 멈출 수 있다는 사실을 알고 있습니다. 
그 사람을 떠밀어 트롤리를 멈추고 5명의 인부를 살리는 선택은 도덕적으로 허용되나요?
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

    // const contentsH2 = document.createElement('h2');
    // contentsH2.className = 'contentsH2'
    // contentsH2.innerHTML = contentsH2Text;
    // contentsH2.style.marginTop = `${windowHeight * (6/100)}px`;
    // contentsH2.style.marginBottom = `${windowHeight * (1.8/100)}px`;

    const contentsP = document.createElement('div');
    contentsP.className = 'contentsP';
    contentsP.innerHTML = contentsPText;

    contentsCanvas.appendChild(contentsDiv);
    contentsDiv.appendChild(contentsArticle);
    // contentsArticle.append(contentsH2, contentsP);
    contentsArticle.append(contentsP);

    // 오른쪽 이미지 영역 추가
    const contentsImg = document.createElement('img');
    contentsImg.className = 'contentsImg';
    contentsImg.src = '../../static/imgs/15/pg2_graphic.svg';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasWidth = (Array.from(contentsCanvasInfo)[0].clientWidth);
        const contentsImgWidth = contentsCanvasWidth;
        contentsImg.style.width = `${contentsImgWidth * 0.45}px`;
        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0.05}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
});