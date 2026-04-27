//getElementById()
let title = document.getElementById("title");
title.textContent = "Hello JavaScript";
console.log(title.textContent);

//getElementsByClassName()
let texts = document.getElementsByClassName("text");
console.log(texts[0].innerHTML);

//getElementsByTagName()
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);

//querySelector()
let heading = document.querySelector("#title");
title.innerHTML = "<span>Hello DOM</span>";

//querySelectorAll()
let allTexts = document.querySelectorAll(".text");
allTexts.forEach(item => console.log(item.textContent));

//event handling(click event)
function changeText() {
  title.textContent = "Button Clicked!";
}
//event listner
title.addEventListener("click", function () {
  alert("Title clicked!");
});

