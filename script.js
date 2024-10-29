const questions = [
   // HTML Questions
   { question: "Q:01) What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Mark Language"], answer: "Hyper Text Markup Language" },
   { question: "Q:02) Choose the correct HTML element for the largest heading:", options: ["<h1>", "<h6>", "<heading>", "<h3>"], answer: "<h1>" },
   { question: "Q:03) What is the correct HTML element for inserting a line break?", options: ["<lb>", "<break>", "<br>", "<newline>"], answer: "<br>" },
   { question: "Q:04) How can you make a numbered list?", options: ["<ul>", "<list>", "<ol>", "<dl>"], answer: "<ol>" },
   { question: "Q:05) Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?", options: ["title", "alt", "src", "longdesc"], answer: "alt" },
   { question: "Q:06) What does <a> stand for?", options: ["Anchor", "Add", "Link", "None of these"], answer: "Anchor" },
   { question: "Q:07) What is the correct HTML element for playing video files?", options: ["<media>", "<movie>", "<video>", "<play>"], answer: "<video>" },
   { question: "Q:08) How do you create a hyperlink in HTML?", options: ["<a href='url'>link</a>", "<link url='url'>link</link>", "<a>link</a>", "<a link='url'>link</a>"], answer: "<a href='url'>link</a>" },
   { question: "Q:09) Which of these elements is self-closing?", options: ["<div>", "<p>", "<img>", "<section>"], answer: "<img>" },
   { question: "Q:10) Which HTML attribute is used to define inline styles?", options: ["styles", "font", "class", "style"], answer: "style" },

   // CSS Questions
   { question: "Q:01) What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
   { question: "Q:02) Which property is used to change the background color?", options: ["color", "bgcolor", "background-color", "bg-color"], answer: "background-color" },
   { question: "Q:03) How do you select an element with id 'header'?", options: ["#header", ".header", "header", "*header"], answer: "#header" },
   { question: "Q:04) How do you make each word in a text start with a capital letter?", options: ["text-transform: uppercase", "text-transform: capitalize", "text-transform: lowercase", "text-transform: inherit"], answer: "text-transform: capitalize" },
   { question: "Q:05) Which property is used to change the font of an element?", options: ["font-family", "font-weight", "font-style", "font-size"], answer: "font-family" },
   { question: "Q:06) How do you make a list that lists items with numbers?", options: ["list-style-type: upper-roman", "list-style-type: decimal", "list-style-type: lower-alpha", "list-style-type: upper-alpha"], answer: "list-style-type: decimal" },
   { question: "Q:07) Which property is used to add space between elements?", options: ["spacing", "margin", "padding", "border"], answer: "margin" },
   { question: "Q:08) What is the default value of the 'position' property?", options: ["static", "absolute", "relative", "fixed"], answer: "static" },
   { question: "Q:09) Which property is used to make the text bold?", options: ["font-style", "text-decoration", "font-weight", "font-size"], answer: "font-weight" },
   { question: "Q:10) Which CSS property controls the text size?", options: ["font-style", "text-style", "font-size", "text-size"], answer: "font-size" },

 // JavaScript Questions
 { question: "Q:01) What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script href='xxx.js'>", "<script name='xxx.js'>", "<script src='xxx.js'>", "<script file='xxx.js'>"], answer: "<script src='xxx.js'>" },
 { question: "Q:02) How do you write 'Hello World' in an alert box?", options: ["alertBox('Hello World');", "msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');"], answer: "alert('Hello World');" },
 { question: "Q:03) How do you create a function in JavaScript?", options: ["function myFunction()", "function:myFunction()", "function = myFunction()", "function => myFunction()"], answer: "function myFunction()" },
 { question: "Q:04) How do you call a function named 'myFunction'?", options: ["call myFunction", "call function myFunction", "myFunction()", "myFunction;"], answer: "myFunction()" },
 { question: "Q:05) How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if i = 5", "if (i == 5)", "if i == 5 then"], answer: "if (i == 5)" },
 { question: "Q:06) How does a WHILE loop start?", options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while (i++ <= 10)"], answer: "while (i <= 10)" },
 { question: "Q:07) How does a FOR loop start?", options: ["for (i = 0; i <= 5; i++)", "for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5)"], answer: "for (i = 0; i <= 5; i++)" },
 { question: "Q:08) How do you add a comment in JavaScript?", options: ["//This is a comment", "'This is a comment", "<!--This is a comment-->", "# This is a comment"], answer: "//This is a comment" },
 { question: "Q:09) What is the correct way to write a JavaScript array?", options: ["var colors = (1:'red', 2:'green')", "var colors = 'red', 'green'", "var colors = ['red', 'green']", "var colors = {1:'red', 2:'green'}"], answer: "var colors = ['red', 'green']" },
 { question: "Q:10) How do you round the number 7.25 to the nearest integer?", options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"], answer: "Math.round(7.25)" }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 3000; 
let timer;

function startQuiz() {
    document.getElementById("start-btn").style.display = "none"; 
    document.getElementById("question-container").style.display = "block"; 
    document.getElementById("timer").style.display = "block"; 
    document.getElementById("score").style.display = "block"; 
    showQuestion();
    startTimer(); 
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            document.getElementById("timer").innerText = `Time: ${minutes}m ${seconds}s`;
        } else {
            clearInterval(timer);
            alert("Time's up!");
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question").innerText = questionData.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";
    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectAnswer(option);
        optionsContainer.appendChild(button);
    });
    document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedOption) {
    const questionData = questions[currentQuestionIndex];
    const feedbackElement = document.createElement("div");
    
    if (selectedOption === questionData.answer) {
        score++;
        feedbackElement.innerText = "Correct!";
        feedbackElement.className = "correct";
    } else {
        feedbackElement.innerText = "wrong!";
        feedbackElement.className = "incorrect";
    }

    document.getElementById("options").appendChild(feedbackElement);
    document.getElementById("score").innerText = `Score: ${score}`;
    document.getElementById("next-btn").style.display = "block";
    
    setTimeout(() => {
        feedbackElement.remove();
    }, 2000);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    document.getElementById("question-container").innerHTML = `<h2>Quiz Over!</h2><p>Your score: ${score}</p>`;
    document.getElementById("next-btn").style.display = "none";
}
