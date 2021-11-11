function startQuiz() {
    document.getElementById('btn').style.visibility = "hidden";
    return displayQuestion();
  }
  
  var pos = 0, test, test_staus, question, option, options, opA, opB, opC, opD, score = 0;
  
  
  (function() {
    const myQuestions = [
      {
        question: "Which one is the first fully suported 64-bit operating system?",
        answers: {
          a: "Windows Vista",
          b: "Mac",
          c: "Linux"
         },
        correctAnswer: "c" 
      
      },
      {
        question: "Computer Hard Disk was first introduced in 1956 by?",
        answers: {
          a: "IBM",
          b: "Apple",
          c: "Dell"
        },
        correctAnswer: "a"
      },
      {
        question: "In computer world, Trojan refer to?",
        answers: {
          a: "Virus",
          b: "Malware",
          c: "Worm",
         
        },
        correctAnswer: "b"
      },
      {
        question: "Which one of the following is a programming language?",
        answers: {
          a: "HTTP",
          b: "HTML",
          c: "FTP",
         
        },
        correctAnswer: "b"
      },
       {
        question: "Which protocol is used to received e-mail?",
        answers: {
          a: "SMTP",
          b: "HTTP",
          c: "POP3",
         
        },
        correctAnswer: "c"
      },
       {
        question: "Which computer program covnverts assembly language to machine language?",
        answers: {
          a: "Assembler",
          b: "Compatator",
          c: "Compiler",
         
        },
        correctAnswer: "a"
      },
       {
        question: "In which year '@' sign first chosen for its use in e-mail address?",
        answers: {
          a: "1976",
          b: "1972",
          c: "1980",
         
        },
        correctAnswer: "b"
      },
       {
        question: "A folder in windows computer can't be made with the name",
        answers: {
          a: "can",
          b: "con",
          c: "make",
         
        },
        correctAnswer: "b"
      },
       {
        question: "A computer use which type of number system to calculate and to store data?",
        answers: {
          a: "hexadecimal",
          b: "octal",
          c: "binary",
         
        },
        correctAnswer: "c"
      },
       {
        question: "What is the extension type of the excel 2007 files?",
        answers: {
          a: ".xls",
          b: "None of the above",
          c: ".xsl",
         
        },
        correctAnswer: "b"
      },
    ];
  
    function buildQuiz() {
      // store HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        //  store list of answer choices
        const answers = [];
  
        // and for each available answer...
        for (letter in currentQuestion.answers) {
          // ...add an HTML radio button
          answers.push(
            `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
             </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answers"> ${answers.join("")} </div>
           </div>`
        );
      });
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join("");
    }
  
    function showResults() {
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll(".answers");
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if (userAnswer === currentQuestion.correctAnswer) {
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = "lightgreen";
        } else {
          // if answer is wrong or blank
          // color the answers red
          answerContainers[questionNumber].style.color = "red";
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }
      
      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");
  
    // display quiz right away
    buildQuiz();
  
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    showSlide(0);
  
    // on submit, show results
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();