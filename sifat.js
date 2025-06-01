
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true  
    });
    document.getElementById("current-time").textContent = "Current Time: " + timeString;
  }

  setInterval(updateTime, 1000);
  updateTime();
