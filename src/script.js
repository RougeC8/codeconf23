


let all_speackers = document.querySelector(".all_card") //écouter un clic sur tout
all_speackers.addEventListener("click", function (e) {// détecter le clic sur l'élément
let mySection = e.target.closest(".speaker") //cherche le parent de type "section" de l'élément réellement cliqué
//console.log(mySection.classList)
if(mySection.classList.contains("card--active")) { //classlist liste des classes à l'élément -> speaker active
  mySection.classList.remove("card--active")// retire classe
}
  else { // ajout de la classe mais avant vérifier si élément ouvert avant d'ouvrir élement sur lequel on clic
   if(document.querySelector(".card--active")) {document.querySelector(".speaker--active").classList.remove("speaker--active")} //si un actif, on le retire
    mySection.classList.add("card--active") //ajout de la classe
  } 
})


