console.log("Hello JS");

const btn_share = document.querySelector(".btn-open-sharefact");
const form_fact = document.querySelector(".fact-form");

btn_share.addEventListener("click", function () {
  if (form_fact.classList.contains("hidden")) {
    form_fact.classList.remove("hidden");
    btn_share.textContent = "close";
  } else {
    form_fact.classList.add("hidden");
    btn_share.textContent = "share a fact";
  }
});
