const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];
//selecting dom elements
const btnShare = document.querySelector(".btn-open-sharefact");
const formFact = document.querySelector(".fact-form");
const factList = document.querySelector(".fact_section");

//create dom elements : render facts list
factList.innerHTML = "";
let factHtmlText = initialFacts.map(
  (fact) => `<li class="fact">${fact.text}</li>`
);
let factHtmlSource = initialFacts.map(
  (fact) => `<a class="source">${fact.source}</a>`
);

factHtml = factHtml.join("");
// factHtmlSource = factHtmlSource.join("");
factList.insertAdjacentHTML("afterbegin", factHtml);
factList.insertAdjacentHTML("afterbegin", factHtmlSource);
console.log(factHtml);

//toggling form visibility
btnShare.addEventListener("click", function () {
  if (formFact.classList.contains("hidden")) {
    formFact.classList.remove("hidden");
    btnShare.textContent = "close";
  } else {
    formFact.classList.add("hidden");
    btnShare.textContent = "share a fact";
  }
});

let votesInteresting = 23;
let votesMindblowing = 3;
let votesFalse = 0;

const btn_votes_interesting = document.querySelector(".votes-interesting");
const btn_votes_mindblowing = document.querySelector(".votes-mindblowing");
const btn_votes_false = document.querySelector(".votes-false");

btn_votes_interesting.addEventListener("click", function () {
  votesInteresting = btn_votes_interesting;
});
