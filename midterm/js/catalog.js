
const catalogRef = document.querySelector("#catalog");

// Data
const catalogItems = [
  {
    image: "<img src='../images/i210-midterm-product1.webp'/>",
    name: "My First Fire",
  },
  {
    image: "<img src='../images/i210-midterm-product2.webp'/>",
    name: "My First Fire",
  },
  {
    image: "<img src='../images/i210-midterm-product3.webp'/>",
    name: "My First Fire",
  },

  

];

catalogRef.innerHTML = "";

for (let index = 0; index < catalogItems.length; index++) {
  const item = catalogItems[index];

  const newArticle = document.createElement("article");
  const newImg = document.createElement("img");
  newImg.src = item.image;
  newArticle.appendChild(newImg);

  const newP = "<p>" + item.name + "</p>";
  newArticle.innerHTML += newP;

  menuRef.appendChild(newArticle);
}