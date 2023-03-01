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

let votesInteresting = 23;
let votesMindblowing = 23;
let votesFalse = 0;

const btn_votes_interesting = document.querySelector(".votes-interesting");
const btn_votes_mindblowing = document.querySelector(".votes-mindblowing");
const btn_votes_false = document.querySelector(".votes-false");

btn_votes_interesting.addEventListener("click", function () {
  votesInteresting = btn_votes_interesting;
});

if (votesInteresting === votesMindblowing) {
  console.log("both are equal");
}
