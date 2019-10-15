const inputs = document.querySelectorAll(".controls input");

//dataset pulls from our data prefix in the html, anything after data-will be added to the dataset object
function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  //have to use document (root) itself to set the property with the new value for variables
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

inputs.forEach(input => input.addEventListener("change", handleUpdate));

inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));
