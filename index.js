const userTimeElement = document.getElementById("user-time");

const updateTime = () => {
  userTimeElement.textContent = `${Date.now()}`;
};
updateTime();
setInterval(updateTime, 300);
