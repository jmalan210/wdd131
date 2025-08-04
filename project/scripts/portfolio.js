const images = [
    {
        imageName: "Health Poster One",
        description: "A health poster campaign for Word Health Org.",
        category: "posters",
        fileName: "images/portfolio1.webp"

    },
    {
        imageName: "Health Poster Two",
        description: "A health poster campaign for Word Health Org.",
        category: "posters",
        fileName: "images/portfolio2.webp"

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
        imageName: "Jewel Beetle",
        description: "Image of a Jewel Beetle",
        category: "whimsical",
        fileName: "images/portfolio5.jpg"
    },
    {
        imageName: "Font Poster",
        description: "A poster celebrating a font family",
        category: "posters",
        fileName: "images/portfolio6.jpg"

    },

    {
        imageName: "Whimsy in Photoshop",
        description: "An exercise in whimsy.",
        category: "whimsical",
        fileName: "images/portfolio7.webp"

    },
    {
        imageName: "Morsl Logo",
        description: "A logo for a fictional company",
        category: "logo",
        fileName: "images/portfolio8.jpg"

    },
    {
        imageName: "JM Design Logo",
        description: "A logo for a fictional company",
        category: "logo",
        fileName: "images/logo.svg"

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
        imageName: "Robot City",
        description: "An exercise in Adobe Illustrator",
        category: "whimsical",
        fileName: "images/portfolio11.webp"

    },
    {
        imageName: "Typography Experiment One",
        description: "A typography experiment",
        category: "whimsical",
        fileName: "images/portfolio12.webp"

    },
    {
        imageName: "Typography Experiment Two",
        description: "A typography experiment",
        category: "whimsical",
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

    }


];

const allImagesLink = document.querySelector("#all");
const logosLink = document.querySelector("#logo");
const postersLink = document.querySelector("#posters");
const printLink = document.querySelector("#print");
const webLink = document.querySelector("#web");
const whimLink = document.querySelector("#whimsical");

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

        card.appendChild(img);

        document.querySelector(".image-grid").appendChild(card);
    });
}

