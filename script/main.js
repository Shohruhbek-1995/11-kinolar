let elPokimonsList = $(".js-list");
let elFindNameFilm = $(".js-film-name-input");
let elRezultFind = $(".js-result-fil-name");
let elForm = $(".js-form");
let newLiTemplate = document.querySelector("#item").content;


let elList = document.createElement("ul");

let a = [];

elList.classList.add("list-unstyled");

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault();

  let b = 0;
  elList.innerHTML = "";
  

  

  let findFilmIndex = movies.findIndex((name) => {
    if(name.title == elFindNameFilm.value){
    return name.title == elFindNameFilm.value;
    }
  })

  console.log(findFilmIndex);
  
  if(findFilmIndex >= 0){
    let elNewLi = newLiTemplate.cloneNode(true);
    elNewLi.querySelector(".heading").textContent = movies[findFilmIndex].title.toString();
    elNewLi.querySelector(".film-genres").textContent = movies[findFilmIndex].genres.toString();
    elNewLi.querySelector(".film-year").textContent = movies[findFilmIndex].year.toString();
    elList.append(elNewLi);
    elRezultFind.append(elList);
    b++;
  }
  if(b == 0){
    let newLiTemplate = document.querySelector("#item").content;
    let elNewLi = newLiTemplate.cloneNode(true);
    elNewLi.querySelector(".heading").textContent = "Bunday kino yo'q";
    elList.append(elNewLi);
    elRezultFind.append(elList);
  }

})

let creatItem = function(kino){
  let newLi  = document.createElement("li");
  let newHeading = document.createElement("h2");
  let newp = document.createElement("p");
  let newPTitle = document.createElement("p");
  newPTitle.textContent = kino.genres.toString();
  newHeading.textContent = kino.title.toString();
  newp.textContent = kino.year.toString()
  newLi.append(newHeading, newp, newPTitle);
  newLi.className = "js-border";
  newLi.classList.add("my-2");
  newHeading.className = "text-center";
  newp.className = "text-center";
  newPTitle.className = "text-center";
  return newLi
}

let fragment = document.createDocumentFragment();

movies.forEach(function(kino){
  fragment.append(creatItem(kino));
})

elPokimonsList.append(fragment);