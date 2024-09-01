// 랜덤 번호를 지정한다.
// 사용자가 번호를 입력한다. 그리고 go라는 버튼을 누른다.
// 만약에 사용자가 랜덤 번호를 맞추면, "맞췄습니다."
// 랜덤 번호가 사용자 번호보다 작으면, "Down!!"
// 랜덤 번호가 사용자 번호보다 크면, "Up!!"
// Reset 버튼 클릭 시 게임 리셋된다.
// 5번의 기회를 모두 사용하면 게임이 종료된다. (더이상 추측 불가, 버튼 disabled)
// 사용자가 1 ~ 100 범위 밖에 숫자를 입력하면 알려주고 기회를 차감하지 않는다.
// 사용자가 이미 입력한 숫자를 다시 한 번 입력하면 알려주고 기회를 차감하지 않는다.

let computerNum = 0; // 랜덤 번호 변수 정의
let playButton = document.getElementById("play-button"); // 플레이 버튼 가져오기
let userInput = document.getElementById("user-input"); // 사용자가 입력한 번호를 가져오기
let resultArea = document.getElementById("result-area"); // 결과값 보여주는 div 가져오기
let resetButton = document.getElementById("reset-button"); // 리셋 버튼 가져오기
let chanceArea = document.getElementById("chance-area");

let chances = 5; // 남은 기회 5번
let gameOver = false; // 게임 오버를 위한 변수
let histories = []; // 사용자가 입력했던 숫자를 담을 변수

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

// 랜덤 번호를 뽑을 함수
function pickRandomNum() {
  computerNum = Math.floor( Math.random() * 100 ); // Math.random() : 랜덤 숫자를 뽑을 수 있게 도와주는 함수, Math.floor() : 버림 함수
  console.log("정답 : ", computerNum);
}

// playButton의 addEventListener에 들어갈 함수
function play() {
  // 사용자가 입력한 번호 가져오기
  let userValue = userInput.value;

  // Input 값에 대한 유효성 검사
  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1~100 사이의 숫자를 입력해주세요!!";
    userInput.value = "";
    userInput.focus();
    return;
  }

  chances --; // 플레이 버튼 누를 때 마다 chances가 하나씩 줄어든다.
  console.log("남은 기회 : ", chances);

  chanceArea.textContent = `남은 기회 : ${chances}번`;

  if (userValue < computerNum) {
    resultArea.textContent = "Up!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Down!!";
  } else {
    resultArea.textContent = "정답입니다!!";
  }

  // 사용자가 입력한 값 histories 배열에 넣어주기.
  histories.push(userValue);

  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver === true) {
    playButton.disabled = true;
  }
}

// resetButton의 addEventListener에 들어갈 함수
function reset() {
  // 사용자 Input 창이 깨끗하게 정리가 되어야 한다.
  userInput.value = "";
  
  // 새로운 번호가 생성이 된다.
  pickRandomNum();
  
  // 문구가 새로 생성된다.
  resultArea.textContent = "결과가 나온다.";
}

pickRandomNum();