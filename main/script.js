const chapter1Text = '인공지능의 이해';
const chapter1_1Text = '나만의 AI 챗봇 개발하기';
const chapter1_2Text = '8-퍼즐 문제 해결하기';
const chapter1_3Text = '길찾기 문제 해결하기';
const chapter1_4Text = '전문가 시스템 개발하기';

const chapter2Text = '인공지능과 학습';
const chapter2_1Text = '기계학습이란?';
const chapter2_2Text = '지도학습1 - 선형회귀';
const chapter2_3Text = '지도학습2 - k-NN';
const chapter2_4Text = '지도학습3 - 의사결정트리';
const chapter2_5Text = '비지도학습 - k-means 클러스터링(k-평균 알고리즘)';
const chapter2_6Text = '인공신경망과 딥러닝 이해';
const chapter2_7Text = '딥러닝1 - 합성곱신경망(CNN)';
const chapter2_8Text = '딥러닝2 - 음성인식솔루션(STT) 음성합성솔루션(TTS)';
const chapter2_9Text = '딥러닝3 - 순환신경망(RNN/LSTM)';

const chapter3Text = '인공지능과 사회적 영향';
const chapter3_1Text = '인공지능과 공존하는 삶1 - 데이터 편향';
const chapter3_2Text = '인공지능과 공존하는 삶2 - 윤리적 딜레마';


document.addEventListener('DOMContentLoaded', ()=>{
    const backgroundImg = document.getElementById('img1');
    const windowWidth = window.innerWidth;
    const backgroundImgWidth = backgroundImg.clientWidth;
    const letterBox = (windowWidth - backgroundImgWidth)/2;
    const menuBoxPadding = letterBox + (windowWidth * 0.05);

    const menuBox = document.createElement('div');
    menuBox.className = 'menuBox';
    menuBox.style.right = `${menuBoxPadding}px`;

    const chapter1 = document.createElement('h2');
    const chapter1_1 = document.createElement('button');
    const chapter1_2 = document.createElement('button');
    const chapter1_3 = document.createElement('button');
    const chapter1_4 = document.createElement('button');

    const chapter2 = document.createElement('h2');
    const chapter2_1 = document.createElement('button');
    const chapter2_2 = document.createElement('button');
    const chapter2_3 = document.createElement('button');
    const chapter2_4 = document.createElement('button');
    const chapter2_5 = document.createElement('button');
    const chapter2_6 = document.createElement('button');
    const chapter2_7 = document.createElement('button');
    const chapter2_8 = document.createElement('button');
    const chapter2_9 = document.createElement('button');

    const chapter3 = document.createElement('h2');
    const chapter3_1 = document.createElement('button');
    const chapter3_2 = document.createElement('button');

    chapter1.innerHTML = chapter1Text;
    chapter1_1.innerHTML = chapter1_1Text;
    chapter1_2.innerHTML = chapter1_2Text;
    chapter1_3.innerHTML = chapter1_3Text;
    chapter1_4.innerHTML = chapter1_4Text;

    chapter2.innerHTML = chapter2Text;
    chapter2_1.innerHTML = chapter2_1Text;
    chapter2_2.innerHTML = chapter2_2Text;
    chapter2_3.innerHTML = chapter2_3Text;
    chapter2_4.innerHTML = chapter2_4Text;
    chapter2_5.innerHTML = chapter2_5Text;
    chapter2_6.innerHTML = chapter2_6Text;
    chapter2_7.innerHTML = chapter2_7Text;
    chapter2_8.innerHTML = chapter2_8Text;
    chapter2_9.innerHTML = chapter2_9Text;

    chapter3.innerHTML = chapter3Text;
    chapter3_1.innerHTML = chapter3_1Text;
    chapter3_2.innerHTML = chapter3_2Text;

    // id 설정
    chapter1_1.id = 'chapter1_1';
    chapter1_2.id = 'chapter1_2';
    chapter1_3.id = 'chapter1_3';
    chapter1_4.id = 'chapter1_4';

    chapter2_1.id = 'chapter2_1';
    chapter2_2.id = 'chapter2_2';
    chapter2_3.id = 'chapter2_3';
    chapter2_4.id = 'chapter2_4';
    chapter2_5.id = 'chapter2_5';
    chapter2_6.id = 'chapter2_6';
    chapter2_7.id = 'chapter2_7';
    chapter2_8.id = 'chapter2_8';
    chapter2_9.id = 'chapter2_9';

    chapter3_1.id = 'chapter3_1';
    chapter3_2.id = 'chapter3_2';

    menuBox.append(chapter1, 
        chapter1_1, 
        chapter1_2, 
        chapter1_3, 
        chapter1_4, 
        chapter2, 
        chapter2_1, 
        chapter2_2, 
        chapter2_3, 
        chapter2_4, 
        chapter2_5, 
        chapter2_6, 
        chapter2_7, 
        chapter2_8, 
        chapter2_9, 
        chapter3, 
        chapter3_1, 
        chapter3_2
    );

    document.body.appendChild(menuBox);

    console.log(backgroundImg);
    console.log(windowWidth);
    console.log(backgroundImgWidth);
});

    
