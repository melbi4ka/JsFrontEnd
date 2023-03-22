function solve() {
  const answ = [...document.querySelectorAll(".quiz-answer .answer-wrap")];

  answ.forEach((el) => el.addEventListener("click", onClick));
  const sections = [...document.querySelectorAll("section")];

  const resultEl = document.querySelector("#results h1");
  const resultDiv = document.getElementById("results");

  let clicks = 1;
  let results = [];
  const rightRes = [
    "onclick",
    "JSON.stringify()",
    "A programming API for HTML and XML documents",
  ];

  function onClick(e) {
    results.push(e.target.textContent);

    if (clicks === 3) {
      sections[clicks - 1].style.display = "none";
      resultDiv.style.display = "block";
      let all = 0;
      for (const el of results) {
        for (const x of rightRes) {
          if (x === el) {
            all++;
          }
        }
      }

      if (all === 3) {
        resultEl.textContent = "You are recognized as top JavaScript fan!";
      } else {
        resultEl.textContent = `You have ${all} right answers`;
      }
    } else {
      sections[clicks - 1].style.display = "none";
      sections[clicks].style.display = "block";
    }

    clicks += 1;
    console.log(results);
  }

  //TODO...
}

document.body.innerHTML = `
 <div id="quizzie">
        <h1>JavaScript Quiz</h1>

        <section>
            <ul class="quiz-step step1 current">
                <li class="question">
                    <div class="question-wrap">
                        <h2>Question #1: Which event occurs when the user clicks on an HTML element?</h2>
                    </div>
                </li>
                <li class="quiz-answer low-value" data-quizIndex="2">
                    <div class="answer-wrap">
                        <p class="answer-text">onclick</p>
                    </div>
                </li>
                <li class="quiz-answer high-value" data-quizIndex="4">
                    <div class="answer-wrap">
                        <p class="answer-text">onmouseclick</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="hidden">
            <ul class="quiz-step step1 current">
                <li class="question">
                    <div class="question-wrap">
                        <h2>Question #2: Which function converting JSON to string?</h2>
                    </div>
                </li>
                <li class="quiz-answer low-value" data-quizIndex="2">
                    <div class="answer-wrap">
                        <p class="answer-text">JSON.toString()</p>
                    </div>
                </li>
                <li class="quiz-answer high-value" data-quizIndex="4">
                    <div class="answer-wrap">
                        <p class="answer-text">JSON.stringify()</p>
                    </div>
                </li>
            </ul>
        </section>
        <section class="hidden">
            <ul class="quiz-step step1 current">
                <li class="question">
                    <div class="question-wrap">
                        <h2>Question #3: What is DOM?</h2>
                    </div>
                </li>
                <li class="quiz-answer low-value" data-quizIndex="2">
                    <div class="answer-wrap">
                        <p class="answer-text">A programming API for HTML and XML documents</p>
                    </div>
                </li>
                <li class="quiz-answer high-value" data-quizIndex="4">
                    <div class="answer-wrap">
                        <p class="answer-text">The DOM is your source HTML</p>
                    </div>
                </li>
            </ul>
        </section>
        <ul id="results">
            <li class="results-inner">
                <h1></h1>
            </li>
        </ul>
    </div>
    </main>
    </div>
`;

result();

let sections = document.getElementsByTagName("section");
let results = document.getElementById("results");

sections[0].querySelectorAll(".answer-text")[0].click();
sections[1].querySelectorAll(".answer-text")[0].click();
sections[2].querySelectorAll(".answer-text")[0].click();

assert.equal(
  results.style.display,
  "block",
  "The result element should be not displayed!"
);
assert.equal(
  results.children[0].textContent.trim(),
  "You have 2 right answers",
  "The expected output is different"
);
