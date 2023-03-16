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

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

loadFactsDatafromDB();
async function loadFactsDatafromDB() {
  const response = await fetch(
    "https://jphffcaehhqxjtqjxxgo.supabase.co/rest/v1/fact",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGZmY2FlaGhxeGp0cWp4eGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NTUyMDQsImV4cCI6MTk5MzAzMTIwNH0.IUsn11iVNurEeRvkjUmhAqY1KaLg8yp-I-gC_-vm2Sw",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwaGZmY2FlaGhxeGp0cWp4eGdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0NTUyMDQsImV4cCI6MTk5MzAzMTIwNH0.IUsn11iVNurEeRvkjUmhAqY1KaLg8yp-I-gC_-vm2Sw",
      },
    }
  );
  const data = await response.json();
  createFactsList(data);
}

const list = [1, 23, 4, 456, 87, 8, 2];
console.log(list.filter((ele) => ele > 10));
//selecting dom elements
const btnShare = document.querySelector(".btn-open-sharefact");
const formFact = document.querySelector(".fact-form");
const factList = document.querySelector(".fact_section");

// createFactsList(initialFacts);

//create dom elements : render facts list
function createFactsList(dataArray) {
  factList.innerHTML = "";
  let factHtmlText = dataArray.map(
    (fact) => `<li class="fact">
  <p>
  ${fact.text}
  <a
    class="source"
    href="${fact.source}"
    target="_blank"
    >source</a
  >
</p>
<span class="fact-tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }"
  >${fact.category}</span
></li>`
  );

  factHtmlText = factHtmlText.join("");
  factList.insertAdjacentHTML("afterbegin", factHtmlText);
}

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
