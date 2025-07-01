const products = [
  {
    name: "Kırmızı Tişört",
    description: "Pamuklu ve rahat tişört.",
    price: "199 TL"
  },
  {
    name: "Siyah Pantolon",
    description: "Slim fit erkek pantolon.",
    price: "399 TL"
  },
  {
    name: "Spor Ayakkabı",
    description: "Koşu için ideal hafif ayakkabı.",
    price: "599 TL"
  }
];

const productList = document.getElementById("product-list");

products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <strong>${product.price}</strong>
  `;
  productList.appendChild(div);
});
