const spends = document.querySelectorAll(".spends");
const days_of_week = document.querySelectorAll(".day_of_week");
fetch("./data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < 7; i++) {
      spends[i].innerText = "$" + data[i].amount;
      days_of_week[i].innerText = data[i].day;
    }
  });
