const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const name = products.name;

populateSelectionList(products);

function populateSelectionList(products) {
    products.forEach(product => {
        const selectionList = document.getElementById("productselection");
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectionList.appendChild(option);

    }
)};

let count = localStorage.getItem("totalReviews") || 0;
document.getElementById("submitbutton");
submitbutton.addEventListener('click', () => {
localStorage.setItem("totalReviews", String(++count))
window.location.href = "review.html"

});

