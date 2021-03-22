import { validateURL } from "./js/urlChecker";
import { handleSubmit } from "./js/formHandler";
import "./styles/base.scss";
import "./styles/footer.scss";
import "./styles/form.scss";
import "./styles/header.scss";
import "./styles/results.scss";

console.log("I EXIST");

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".loading").classList.add("hideLoading");

  document.querySelector(".btn-analyze").addEventListener("click", (e) => {
    console.log("inside event listener");
    e.preventDefault();
    handleSubmit();
  });
});
export { handleSubmit, validateURL };
