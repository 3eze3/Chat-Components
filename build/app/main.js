function showHidden() {
  const data = [
    {
      day: "mon",
      amount: 17.45,
    },
    {
      day: "tue",
      amount: 34.91,
    },
    {
      day: "wed",
      amount: 52.36,
    },
    {
      day: "thu",
      amount: 31.07,
    },
    {
      day: "fri",
      amount: 23.39,
    },
    {
      day: "sat",
      amount: 43.28,
    },
    {
      day: "sun",
      amount: 25.48,
    },
  ];
  const bars = document.querySelectorAll(".content__bar");
  const boxs = document.querySelectorAll(".content__box");
  bars.forEach((bar, index) => {
    boxs[index].textContent = `$ ${data[index].amount}`;
    bar.addEventListener("mouseout", () => {
      boxs[index].classList.remove("active");
    });

    bar.addEventListener("mouseover", () => {
      boxs[index].classList.add("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showHidden();
});
