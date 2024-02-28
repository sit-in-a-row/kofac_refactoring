// infoPgTemplate.js에서 가져갈 정보들 (페이지 번호, 헤더 인덱스 텍스트, 캔버스 타이틀)
const headerIndexText = '인공지능과 학습 &nbsp|&nbsp 기계학습이란?';
const canvasTitleText = '8-퍼즐이란 무엇일까?';

// 페이지별 콘텐츠에 사용될 텍스트 정보
const contentsPText = `
기계학습과 전통적인 프로그래밍은 문제 해결 방식에서 크게 다릅니다. 
전통적인 프로그래밍에서는 프로그래머가 문제를 해결하기 위한 명확한 지시사항(코드)을 컴퓨터에 입력합니다. 
예를 들어 "만약 A라면 B를 하라"와 같은 명령입니다. <br><br>

반면, 기계학습에서는 프로그래머가 컴퓨터에 명령을 직접 입력하는 대신, 데이터와 기대 결과를 입력합니다. 
그러면 컴퓨터는 이 데이터를 분석하여 스스로 문제를 해결하는 방법을 학습합니다. 
예를 들어 많은 사진을 보여주며 "이것이 고양이다"라고 알려주면, 컴퓨터는 고양이를 인식하는 법을 스스로 학습합니다. <br><br>

이처럼 기계학습은 데이터를 통해 스스로 학습하고 판단하는 방식으로, 전통적인 프로그래밍과 다른 접근법이 적용됩니다.
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
    contentsImg.src = '../../static/imgs/5/pg2_graphic.svg';
    contentsDiv.append(contentsImg);

    setTimeout(() => {
        const contentsCanvasHeight = (Array.from(contentsCanvasInfo)[0].clientHeight);
        const contentsImgHeight = contentsCanvasHeight * 0.7;
        contentsImg.style.height = `${contentsImgHeight}px`;

        // contentsImg.style.marginTop = `-${contentsCanvasHeight * 0}px`;
        console.log(contentsImg.clientHeight)
    }, 0);
})
