const mainnavTwo = document.querySelector('.portfolionav');
const hambuttonTwo = document.querySelector('#menu2');

hambuttonTwo.addEventListener('click', () => {
    mainnavTwo.classList.toggle('open');
    hambuttonTwo.classList.toggle('open');
});



const images = [
    {
        imageName: "Health Poster One",
        description: "A health poster campaign for Word Health Org.",
        category: "posters",
        fileName: "images/portfolio1.jpg"

    },
    {
        imageName: "Health Poster Two",
        description: "A health poster campaign for Word Health Org.",
        category: "posters",
        fileName: "images/portfolio2.jpg"

    },
    {
        imageName: "Health Poster Three",
        description: "A health poster campaign for Word Health Org.",
        category: "posters",
        fileName: "images/portfolio3.webp"

    },
    {
        imageName: "Business Card",
        description: "A sample business card",
        category: "print",
        fileName: "images/portfolio4.webp"

    },
    
    {
        imageName: "Font Poster",
        description: "A poster celebrating a font family",
        category: "posters",
        fileName: "images/portfolio6.webp"

    },

    
    {
        imageName: "Morsl Logo",
        description: "A logo for a fictional company",
        category: "logo",
        fileName: "images/portfolio8.webp"

    },
        
    {
        imageName: "Book Cover One",
        description: "A typography cover for a book",
        category: "print",
        fileName: "images/portfolio9.jpg"

    },
    {
        imageName: "Book Cover Two",
        description: "A typography cover for a book",
        category: "print",
        fileName: "images/portfolio10.jpg"

    },
    
    {
        imageName: "Typography Experiment One",
        description: "A typography experiment",
        category: "abstract",
        fileName: "images/portfolio12.webp"

    },
    {
        imageName: "Typography Experiment Two",
        description: "A typography experiment",
        category: "abstract",
        fileName: "images/portfolio13.webp"

    },
    {
        imageName: "Magazine Spread",
        description: "A magazine spread",
        category: "print",
        fileName: "images/portfolio14.webp"

    },
    {
        imageName: "Rafting Webpage",
        description: "An original web design",
        category: "web",
        fileName: "images/portfolio15.webp"

    },
{
        imageName: "Scotland Webpage",
        description: "An original web design",
        category: "web",
        fileName: "images/portfolio16.webp"

    },
    {
        imageName: "Business Logo",
        description: "An original logo design",
        category: "logo",
        fileName: "images/portfolio17.svg"
    }


];

const allImagesLink = document.querySelector("#all");
const logosLink = document.querySelector("#logo");
const postersLink = document.querySelector("#posters");
const printLink = document.querySelector("#print");
const webLink = document.querySelector("#web");
const abstractLink = document.querySelector("#abstract");

createImageCard(images);

function createImageCard(images) {
    document.querySelector(".image-grid").innerHTML = "";
    images.forEach(image => {
        let card = document.createElement("section");
        let img = document.createElement("img");

        img.setAttribute("src", image.fileName);
        img.setAttribute("alt", `${image.imageName}`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "300");
        img.setAttribute("height", "auto")

        card.appendChild(img);

        document.querySelector(".image-grid").appendChild(card);
    });
}

allImagesLink.addEventListener("click", () => {
    let title = document.querySelector("h3")
    title.textContent = ("All Images");
    createImageCard(images);
    
});

const logos = images.filter(image => image.category === "logo");
const posters = images.filter(image => image.category === "posters");
const print = images.filter(image => image.category === "print");
const web = images.filter(image => image.category === "web");
const abstract = images.filter(image => image.category === "abstract");


logosLink.addEventListener("click", () => {
    document.querySelector(".image-grid").innerHTML = "";
    let title = document.querySelector("h3")
    title.textContent = ("Logos");
    createImageCard(logos);

});



postersLink.addEventListener("click", () => {
    document.querySelector(".image-grid").innerHTML = "";
    let title = document.querySelector("h3")
    title.textContent = ("Posters");    
    createImageCard(posters);

});



printLink.addEventListener("click", () => {
    document.querySelector(".image-grid").innerHTML = "";
    let title = document.querySelector("h3")
    title.textContent = ("Print & Stationery");
    createImageCard(print);

});



webLink.addEventListener("click", () => {
    document.querySelector(".image-grid").innerHTML = "";
    let title = document.querySelector("h3")
    title.textContent = ("Web Design");
    createImageCard(web);

});



abstractLink.addEventListener("click", () => {
    document.querySelector(".image-grid").innerHTML = "";
    let title = document.querySelector("h3")
    title.textContent = ("Abstract");
    createImageCard(abstract);

});