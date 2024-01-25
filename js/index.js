const btn = document.getElementById("submit-button");
const label = document.querySelectorAll("label");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  console.log(name);
});

label.forEach((element) => {
  element.addEventListener("click", (e) => {
    let labelId = e.target.getAttribute("id");
    let index = labelId.indexOf("-");
    let id = labelId.slice(0, index);
    console.log(id);

    document.getElementById(id).focus();
  });
});
