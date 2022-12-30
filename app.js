const bottleCon = document.querySelector(".chilled-can img");
const footerImg = document.querySelectorAll(".footer img");
const barsIcon = document.querySelector(".icon i");
const delIcon = document.querySelector(".fa-sharp");
const ulDisplay = document.querySelector(".details");
const displayData = [
  {
    index: "0",
    background: "var(--blueColor)",
    image: "./chil-bluuuuuuu.png",
  },
  {
    index: "1",
    background: "var(--redColor)",
    image: "./chill-white-removebg-preview.png",
  },
  {
    index: "2",
    background: "var( --blackColor)",
    image: "./black-chill-removebg-preview.png",
  },
];
footerImg.forEach((img, index) => {
  img.onmouseover = () => {
    const data = displayData.filter((data, index) => {
      return index == data.index;
    });

    document.body.style.backgroundColor = `${data[index].background}`;
    bottleCon.src = `${data[index].image}`;
    img.classList.add("translate");
  };
  img.onmouseout = () => {
    document.body.style.backgroundColor = "var(--blueColor)";
    bottleCon.src = "./chil-bluuuuuuu.png";
    img.classList.remove("translate");
  };
});

barsIcon.addEventListener("click", (e) => {
  ulDisplay.classList.add("show");
  delIcon.classList.add("show-fa");
});
delIcon.addEventListener("click", (e) => {
  ulDisplay.classList.remove("show");
  delIcon.classList.remove("show-fa");
});
