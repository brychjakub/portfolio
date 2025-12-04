const surveyData = [];
const hiddenValues = [
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [4, 3, 2, 1, 0],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
];
let selectedOptions = new Map();
for (let i = 1; i <= 240; i++) {
  selectedOptions.set(i, undefined);
}

// Set number of questions
for (let i = 0; i < 240; i++) {
  const options = hiddenValues[i].map((value, index) => ({
    label: ["vn", "sn", "n", "sv", "uv"][index],
    icon: ["👎", "👎🏻", "🤷", "👍🏻", "👍"][index],
    hiddenValue: value,
  }));

  surveyData.push({
    question: `${i + 1}`,
    options,
  });
}
let current_row_selection = new Array(selectedOptions.size).fill(-1);

function renderSurvey() {
  const surveyContainer = document.getElementById("survey-container");

  // Render each question and its options
  surveyData.forEach((survey, i) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerText = survey.question;

    const optionsDiv = document.createElement("div");
    survey.options.forEach((option, j) => {
      const optionButton = document.createElement("button");
      optionButton.innerText = option.icon;
      optionButton.title = option.label;
      optionButton.id = `option-${i}-${j}`;

      // Add event listener to each option button
      optionButton.addEventListener("click", () => {
        // Add 'selected' class to the clicked option button
        const selectedOptionButton = document.getElementById(
          `option-${i}-${j}`
        );
        selectedOptionButton.classList.add("selected");

        // Enable all other option buttons
        survey.options.forEach((otherOption, otherJ) => {
          if (otherJ !== j) {
            const otherOptionButton = document.getElementById(
              `option-${i}-${otherJ}`
            );
            otherOptionButton.removeAttribute("disabled");
          }
        });

        // Remove 'selected' class from all other option buttons
        survey.options.forEach((otherOption, otherJ) => {
          if (otherJ !== j) {
            const otherOptionButton = document.getElementById(
              `option-${i}-${otherJ}`
            );
            otherOptionButton.classList.remove("selected");
          }
        });

        // Log the selected option's hidden value to the console
        console.log(
          `Selected option: ${i + 1}:${j + 1}, hidden value: ${
            option.hiddenValue
          }`
        );
        selectedOptions.set(i + 1, option.hiddenValue);
        current_row_selection[i - 1] = j;

        console.log(selectedOptions);
      });

      optionsDiv.appendChild(optionButton);
    });

    surveyContainer.appendChild(questionDiv);
    surveyContainer.appendChild(optionsDiv);
  });
}
renderSurvey();

function getHiddenValues() {
  let rows_to_check1 = [0, 30, 60, 90, 120, 150, 180, 210];

  let letter_counts = { N: 0, E: 0, O: 0, P: 0, S: 0 };
  let letters = "NEOPS";

  for (let j = 1; j < 31; j++) {
    let total_hidden_value = 0;
    let rows_to_check = rows_to_check1.map((i) => i + (j - 1));
    for (let i = 0; i < selectedOptions.size; i++) {
      let current_col_selection = current_row_selection[i - 1];
      if (rows_to_check.includes(i) && current_col_selection != -1) {
        total_hidden_value += hiddenValues[i][current_col_selection];
        {
          if (isNaN(total_hidden_value)) {
            total_hidden_value = 0;
          }
        }
      }
    }

    let letter = letters[(j - 1) % letters.length];
    letter_counts[letter] += total_hidden_value;

    console.log(
      `Value ${rows_to_check
        .map((r) => r + 1)
        .join(", ")}: ${total_hidden_value} (${letter})`
      
    );
  }

  let letter_counts_dict = {};

  // Print the combined value for each letter
  console.log("Combined values:");
  for (const [letter, count] of Object.entries(letter_counts)) {
    console.log(`${letter}: ${count}`);
    letter_counts_dict[letter] = count;
  }

  return letter_counts_dict;
}

function getAllLetters() {
  let allLettersCounts = [];
  let rows_to_check1 = [0, 30, 60, 90, 120, 150, 180, 210];

  let letter_counts = { N: 0, E: 0, O: 0, P: 0, S: 0 };
  let letters = "NEOPS";

  for (let j = 1; j < 31; j++) {
    let total_hidden_value = 0;
    let rows_to_check = rows_to_check1.map((i) => i + (j - 1));
    for (let i = 0; i < selectedOptions.size; i++) {
      let current_col_selection = current_row_selection[i - 1];
      if (rows_to_check.includes(i) && current_col_selection != -1) {
        total_hidden_value += hiddenValues[i][current_col_selection];
        {
          if (isNaN(total_hidden_value)) {
            total_hidden_value = 0;
          }
        }
      }
    }
    let letter = letters[(j - 1) % letters.length];
    letter_counts[letter] += total_hidden_value;
    allLettersCounts.push(`${letter}: ${total_hidden_value}`);
    
    
    console.log(
      `Value ${rows_to_check
        .map((r) => r + 1)
        .join(", ")}: ${total_hidden_value} (${letter})`

    );
  }

  let letter_counts_dict = {};

  // Print the combined value for each letter
  console.log("Combined values:");
  for (const [letter, count] of Object.entries(letter_counts)) {
    console.log(`${letter}: ${count}`);
    letter_counts_dict[letter] = count;
  }
  console.log(allLettersCounts)
  return allLettersCounts;
}



let letters = getHiddenValues();
let allLettersCounts = getAllLetters();
console.log(letters);
console.log("znovu:" + allLettersCounts);


function downloadTextFile() {
  // define data for file
  const letter_counts_dict = getHiddenValues();
  const allLettersCounts = getAllLetters();

  const text = JSON.stringify(letter_counts_dict, null, 2);
  const filename = "NEOPS.txt";

  // create file
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);

  // simulate click to download file
  element.click();

  // remove element from page
  document.body.removeChild(element);
}

function generateTextFile() {
  const q1 = document.getElementById("q1").value;
  const q2 = document.getElementById("q2").value;
  const q3 = document.getElementById("q3").value;
  const q4 = document.getElementById("q4").value;
  const q5 = document.getElementById("q5").value;
  const q6 = document.getElementById("q6").value;
  const q7 = document.getElementById("q7").value;
  const q8 = document.getElementById("q8").value;

  const text = `Jméno a příjmení: ${q1}`;
  const text2 = `Věk: ${q2}`;
  const text3 = `Datum: ${q3}`;
  const text4 = `Pohlaví: ${q4}`;
  const text5 = `Posuzování: ${q5}`;
  const text6 = `Snažil(a) jsem se odpovídat upřímě: ${q6}`;
  const text7 = `Odpověděl(a) jste na všechny výroky?: ${q7}`;
  const text8 = `Zaznamenal(a) jste své odpovědi na správné místo?: ${q8}`;

  const letter_counts_dict = getHiddenValues();
  const allLettersCounts = getAllLetters();

  const newArray = [];


  let x = 0;
  let j = 1;
  let f = 1;

while (x <= 29) {
  
  if (j != 5) {
    newArray.push([f, allLettersCounts[x]]);
    j++;
    console.log(j)

  } else {
    newArray.push([f, allLettersCounts[x]]);

  j = 1;
  f++
  }

  x++;
}

let flatArray = newArray.flat(); // removes outer array brackets

  

  const NEOPS = JSON.stringify(letter_counts_dict, null, 2);
  const letters = JSON.stringify(flatArray, null, 2);


  

  const element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent(text) +
      `\n` +
      encodeURIComponent(text2) +
      `\n` +
      encodeURIComponent(text3) +
      `\n` +
      encodeURIComponent(text4) +
      `\n` +
      encodeURIComponent(text5) +
      `\n` +
      encodeURIComponent(text6) +
      `\n` +
      encodeURIComponent(text7) +
      `\n` +
      encodeURIComponent(text8) +
      `\n` +
      NEOPS
      +
      letters
  );
  element.setAttribute("download", `${q1}`);
  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
