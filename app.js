const curDate = () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  let dot = " : ";

  hour < 10
    ? (document.getElementById("hour").innerText = "0" + hour + dot)
    : (document.getElementById("hour").innerText = hour + dot);
  minute < 10
    ? (document.getElementById("minute").innerText = "0" + minute + dot)
    : (document.getElementById("minute").innerText = minute + dot);
  second < 10
    ? (document.getElementById("second").innerText = "0" + second)
    : (document.getElementById("second").innerText = second);
};

// curDate();
setInterval(function () {
  curDate();
}, 1000);



function greetingText() {
  let now = new Date();
  let hour = now.getHours();
  if (hour >= 6 && hour < 12) {
    document.getElementById("greeting-text").innerText = "Good Morning";
  } else if (hour >= 12 && hour < 20) {
    document.getElementById("greeting-text").innerText = "Good Afternoon";
  } else if (hour >= 20 && hour < 24) {
    document.getElementById("greeting-text").innerText = "Good Evening";
  } else if (hour >= 24 && hour < 6) {
    document.getElementById("greeting-text").innerText = "Good Night";
  }
}

greetingText();