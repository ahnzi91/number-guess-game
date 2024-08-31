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
let playButton = document.getElementById("play-button"); // HTML에서 Button 가져오기.
let userInput = document.getElementById("user-input"); // 사용자가 입력한 번호를 가져오기 위한 초석.

playButton.addEventListener("click", play);

// 랜덤 번호를 뽑을 함수
function pickRandomNum() {
  computerNum = Math.floor( Math.random() * 100 ); // Math.random() : 랜덤 숫자를 뽑을 수 있게 도와주는 함수, Math.floor() : 버림 함수
  console.log("정답 : ", computerNum);
}

// playButton의 addEventListener에 들어갈 함수
function play() {
  // 사용자가 입력한 번호 가져오기
  let userValue = userInput.value;
  console.log(userValue);
}

pickRandomNum();