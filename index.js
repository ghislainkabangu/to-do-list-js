/** @format */

let parentBox = document.querySelector(".parentBox");
let inputValue = document.querySelector(".inputValue");
let buttonSubmit = document.querySelector(".buttonSubmit");

function callChild() {
  let divBox = document.createElement("div");
  let paragraph = document.createElement("p");
  let remove = document.createElement("button");
  let modif = document.createElement("button");
  let paragraphNewVlue;

  divBox.classList.add("divBox");

  if (inputValue.value == "") {
    // paragraph.innerHTML =
    // "vous n'avez saisis aucun texte, celui-ci est un texte par defaut. Cliquez sur modifier pour saisir votre propre texte";
    inputValue.ariaRequired();
  } else {
    paragraph.innerHTML = inputValue.value;
  }

  modif.innerHTML = "modifier";
  modif.title = "Cliqez ici pour modifer le texte de cette ligne";
  remove.innerHTML = "supprimer";
  remove.title = "Cliqez ici pour supprimer cette ligne";

  divBox.appendChild(paragraph);
  divBox.append(modif);
  divBox.appendChild(remove);
  parentBox.appendChild(divBox);

  modif.addEventListener("click", () => {
    paragraphNewVlue = prompt("entrez la nouvelle valuer ou le nouveau texte");
    paragraph.innerHTML = paragraphNewVlue;
    if (paragraphNewVlue == "") {
      paragraph.innerHTML =
        "vous n'avez rien saisis comme texte lors de la modification.";
    }
  });

  remove.addEventListener("click", () => {
    parentBox.removeChild(divBox);
  });
}

buttonSubmit.addEventListener("click", () => {
  buttonSubmit.preventDefault;
  callChild();
  inputValue.value = "";
});
