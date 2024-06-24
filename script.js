const h1 = document.querySelector("h1");

console.log(h1.textContent);
const nav = document.querySelector("#nav");
const moreNews = document.querySelectorAll(".more-news");
console.log(moreNews);
const h2 = document.createElement("h2");
h2.innerHTML = "hello";
h2.style.backgroundColor = "red";
h2.style.color = "white";
document.querySelector(".child2").appendChild(h2);
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("bgc");
});
moreNews.forEach(function (item, i) {
  item.addEventListener("click", function (e) {
    const target = e.target;
    moreNews[i].classList.toggle("bgc");
  });
});
