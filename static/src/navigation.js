// 하단 바 생성
const bottomBar = document.createElement('div');
bottomBar.className = 'bottomBar';

// 버튼만 묶어둘 컨테이너 지정
const bottomBtnContainer = document.createElement('div');
bottomBtnContainer.className = 'bottomBtnContainer';

// 버튼 생성
const prevBtn = document.createElement('button');
prevBtn.className = 'btn-small btn-blue1';
prevBtn.id = ''
prevBtn.innerHTML = '이전';

const nextBtn = document.createElement('button');
nextBtn.className = 'btn-small btn-blue1';
nextBtn.innerHTML = '다음';

bottomBtnContainer.append(prevBtn, nextBtn);

// 메인으로 가기 버튼 생성
const homeBtnContainer = document.createElement('div');
homeBtnContainer.className = 'homeBtnContainer';

const homeBtn = document.createElement('button');
homeBtn.className = 'homeBtn';
homeBtn.innerHTML = '메인으로 돌아가기';
homeBtnContainer.appendChild(homeBtn);

homeBtn.addEventListener('click', ()=>{
    window.location.href = '../';
});

// css 그리드를 위한 공백 영역
const empty = document.createElement('div');
empty.className = 'empty';

// 버튼을 bottomBar에 추가
bottomBar.append(homeBtnContainer, bottomBtnContainer, empty);
document.body.appendChild(bottomBar);

// 콘텐츠 출력할 iframe 생성 및 추가
const iframe = document.createElement('iframe');
iframe.className = 'contentsFrame';
document.body.appendChild(iframe);

function resizePageContent() {
    const bottomBarHeight = bottomBar.offsetHeight;
    // 피그마 작업 기준 오리지널 비율
    const originalRatio = 1810 / 1030;

    const iframeHeight = window.innerHeight - bottomBarHeight;
    iframe.style.height = `${iframeHeight}px`;
    iframe.style.width = `${iframeHeight * originalRatio}px`;
}

window.addEventListener('resize', resizePageContent);
resizePageContent(); // 초기 사이즈 조절을 위해 호출

// 네비게이션 관련 기능

var pgIndex = 0
window.pgIndex = pgIndex;

function navigation(pgIndex) {
    iframe.src = `pg${pgList[pgIndex]}/index.html`;
}

prevBtn.addEventListener('click', ()=> {
    if (pgIndex === 0) {
        alert('시작 페이지입니다.')
        pgIndex = 0;
    }
    else {
        pgIndex--;
        navigation(pgIndex);
    }
});

nextBtn.addEventListener('click', ()=> {
    if (pgIndex === pgList.length - 1) {
        alert('마지막 페이지입니다.');
        pgIndex = pgList.length - 1;
    }
    else {
        pgIndex++;
        navigation(pgIndex);   
    }
});

navigation(0);
