"use strict";
    let books = ["Love_in_the_time_of_cholera", "The_davinche_code", "The_power_of_myth", "1984",
        "The_brothers_karamazove",
        "Beyond_god_and_evil", "Lolita",
        "Why_there_is_no_god", "The_god_delusion", 
    "Crime_and_punishment"];
        
let root = document.getElementById('root');
let imgObj = {
    Love_in_the_time_of_cholera : "img/unnamed(1).jpg",
    The_davinche_code: "img/unnamed(2).jpg",
    The_power_of_myth: "img/unnamed(3).jpg",
    1984: "img/unnamed(4).jpg",
    The_brothers_karamazove: "img/unnamed(5).jpg",
    Beyond_god_and_evil: "img/unnamed(6).jpg",
    Lolita: "img/unnamed(7).jpg",
    Why_there_is_no_god: "img/unnamed(8).jpg",
    The_god_delusion: "img/unnamed(9).jpg",
    Crime_and_punishment: "img/unnamed(10).jpg"
};
let booksInf = {
    Love_in_the_time_of_cholera: {
        title: "Love in the time of cholera",
        language: "English",
        author: "Gabriel Garcia Marquez"
    },
    The_davinche_code: {
        title: "The davinche code",
        language:"English",
            author:"Dan Brown"
    },
    The_power_of_myth: {
        title:"The power of myth",
            language:"English",
        author:"Joseph Campbell"
   },
1984: {
    title: "1984",
            language:"English",
        author:"George Orwell"
   },
    The_brothers_karamazove: {
    title: "The brothers karamazove",
            language:"Russian",
        author:"Fyodor Dostoyevsky"
   },
    Beyond_god_and_evil: {
    title:"Beyond god and evil",
            language:"English",
        author:"Friedrich Nietzsche"
   },
Lolita: {
    title:"Lolita",
            language:"Russian",
        author:"Vladimir Nabokov"
   },
    Why_there_is_no_god: {
    title:"Why there is no god",
            language:"English",
        author:"Armin Navabi"
   },
    The_god_delusion : {
    title:"The god delusion",
            language:"English",
        author:"Richard Dawkins"
   },
    Crime_and_punishment: {
    title:"Crime and punishment",
            language:"Russian",
        author:"Fyodor Dostoyevsky"
   },
};
const root = document.getElementById("root");
const ul = document.createElement("ul");
ul.innerHTML = "";
root.appendChild(ul);
function renderbox ()
for (let i = 0; i < box.length; i++) {
    const li = document.createElement("li");
    li.setAttribute("id", books[i]);
    h1 = document.createElement("h1");
    h1.innerHTML = "booksInf[books[i]].title";
        
    h3 = document.createElement("h3");
    h3.innerHTML = "booksInf[books[i]].author";

    const p = document.createElement("p");
    p.innerHTML = "booksInf[books[i]].language";

    const img = document.createElement("img");
    img.setAttribute("src", imgObj[books[i]]);
        
    li.appendChild(h1);
    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(img);
    ul.appendChild(li);

}
};
renderbox();

