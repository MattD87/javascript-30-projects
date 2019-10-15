const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open"); //toggles our open class that grows the text and flex size
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) { //safari uses flex-grow where other browsers use flex, so we cover both bases here
    this.classList.toggle("open-active"); //toggles the open-active for our transition animation 
  }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen)); //when clicked, run function to open panel

panels.forEach(panel => panel.addEventListener("transitionend", toggleActive)); //when transition ends, have our open-active text animation happen
