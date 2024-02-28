function router(btnName, btnNum){
    // DOM이 완전히 로드된 후 바로 실행되므로, 여기서 별도로 체크할 필요 없음
    const btn = document.getElementById(btnName);
    if (btn) {
        btn.addEventListener('click', () => {
            // 실제 웹사이트의 URL 구조에 맞게 경로 수정 필요
            window.location.href = `/${btnNum}`; // 예시 경로
        });
    } else {
        console.log(`링크 찾을 수 없음: ${btnName} not found.`);
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    router('chapter1_1', 1);
    router('chapter1_2', 2);
    router('chapter1_3', 3);
    router('chapter1_4', 4);
    router('chapter2_1', 5);
    router('chapter2_2', 6);
    router('chapter2_3', 7);
    router('chapter2_4', 8);
    router('chapter2_5', 9);
    router('chapter2_6', 10);
    router('chapter2_7', 11);
    router('chapter2_8', 12);
    router('chapter2_9', 13);
    router('chapter3_1', 14);
    router('chapter3_2', 15);
});
