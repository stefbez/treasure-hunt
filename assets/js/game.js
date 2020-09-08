$(document).ready(function () {
  const startBtn = document.getElementById("start-btn");
  const welcomePageRules = document.getElementById("welcome-page-rules");
  const welcomePageStory = document.getElementById("welcome-page-story");
  const easyClues = document.getElementById("start-game-easy");
  const medClues = document.getElementById("start-game-med");
  const hardClues = document.getElementById("start-game-hard");
  const easyQuestionPage = document.getElementById("question-page-easy");
  const medQuestionPage = document.getElementById("question-page-med");
  const hardQuestionPage = document.getElementById("question-page-hard");

  var shuffleEasyQuestions = [];
  var currentEasyQuestion;
  var thisEasyQuestion;

  var shuffleMedQuestions = [];
  var currentMedQuestion;
  var thisMedQuestion;

  var captainName;
  var level = 0;



  $(startBtn).click(function () {
    captainName = document.getElementById("captain-name-typed").value;
    if (captainName.length === 0) {
      $("#missingName").text("Please enter your name");
    } else {
      $(welcomePageRules).addClass("hide");
      $(welcomePageStory).removeClass("hide");
      document.getElementById("captainName").innerHTML = captainName;
      runWelcomePageStory();
    }
  });

  function runWelcomePageStory() {
    $(easyClues).click(function () {
      $(welcomePageStory).addClass("hide");
      shuffleEasyQuestions = questionEasy.sort(() => Math.random() - 0.5);
      currentEasyQuestion = 0;
      $(easyQuestionPage).removeClass("hide");
      $("#correct-answers").removeClass("hide");
      nextEasyQuestion();
    });
    $(medClues).click(function () {
      $(welcomePageStory).addClass("hide");
      shuffleMedQuestions = questionMed.sort(() => Math.random() - 0.5);
      currentMedQuestion = 0;
      $(medQuestionPage).removeClass("hide");
      $("#correct-answers").removeClass("hide");
      nextMedQuestion();
    });
  }

//   --------- Easy Questions ----------

  function nextEasyQuestion() {
    showEasyQuestion(shuffleEasyQuestions[currentEasyQuestion]);
  }

  function showEasyQuestion(questionEasy) {
    thisEasyQuestion = {
      q: shuffleEasyQuestions[level].question,
      a: shuffleEasyQuestions[level].easyA,
      b: shuffleEasyQuestions[level].easyB,
      c: shuffleEasyQuestions[level].easyC,
      cor: shuffleEasyQuestions[level].correct,
    };

    $("#easy-question").text(thisEasyQuestion.q);
    $("#easyA").text(thisEasyQuestion.a);
    $("#easyB").text(thisEasyQuestion.b);
    $("#easyC").text(thisEasyQuestion.c);
  }


  $(".easy-answer-button").on("click", function () {
    const chosenAnswer = this.id
    const answerText = this.innerHTML
    if (chosenAnswer == thisEasyQuestion.cor) {
      $("#correct").append(`${answerText} `);
    } else {
      console.log("wrong");
    }
    if (level === 2) {
      $(easyQuestionPage).addClass("hide");
      $("#map-page").removeClass("hide");
      $("#mapEasy").removeClass("hide");
      initMap();
    } else {
      level = level + 1;
      nextEasyQuestion();
    }
  });


//   --------- Med Questions ----------

function nextMedQuestion() {
    showMedQuestion(shuffleMedQuestions[currentMedQuestion]);
  }

  function showMedQuestion(questionMed) {
    thisMedQuestion = {
      q: shuffleMedQuestions[level].question,
      a: shuffleMedQuestions[level].medA,
      b: shuffleMedQuestions[level].medB,
      c: shuffleMedQuestions[level].medC,
      cor: shuffleMedQuestions[level].correct,
    };

    $("#med-question").text(thisMedQuestion.q);
    $("#medA").text(thisMedQuestion.a);
    $("#medB").text(thisMedQuestion.b);
    $("#medC").text(thisMedQuestion.c);
  }


  $(".med-answer-button").on("click", function () {
    const chosenAnswer = this.id;
    const answerText = this.innerHTML
    if (chosenAnswer == thisMedQuestion.cor) {
      $("#correct").append(`${answerText} `);
    } else {
      console.log("wrong");
    }
    if (level === 2) {
      $(medQuestionPage).addClass("hide");
      $("#map-page").removeClass("hide");
      $("#mapMed").removeClass("hide");
      initMap();
    } else {
      level = level + 1;
      nextMedQuestion();
    }
  });

  //   --------- Hard Questions ----------

  $("#restart").on("click", function () {
      window.location.reload();
  })

  // ------ QUESTIONS ------

  const questionEasy = [
    {
      question: "Easy question 1",
      easyA: "easy answer 1",
      easyB: "easy answer 2",
      easyC: "easy answer 3",
      correct: "easyA",
    },
    {
      question: "Easy question 2",
      easyA: "easy answer 1",
      easyB: "easy answer 2",
      easyC: "easy answer 3",
      correct: "easyB",
    },
    {
      question: "Easy question 3",
      easyA: "easy answer 1",
      easyB: "easy answer 2",
      easyC: "easy answer 3",
      correct: "easyC",
    },
  ];

    const questionMed = [
    {
      question: "Medium question 1",
      medA: "med answer 1",
      medB: "med answer 2",
      medC: "med answer 3",
      correct: "medA",
    },
    {
      question: "Medium question 2",
      medA: "med answer 1",
      medB: "med answer 2",
      medC: "med answer 3",
      correct: "medB",
    },
    {
      question: "Medium question 3",
      medA: "med answer 1",
      medB: "med answer 2",
      medC: "med answer 3",
      correct: "medC",
    },
  ];
  const questionHard = [
    {
      id: 1,
      question: "Hard question 1",
      answers: {
        a: "answer 1",
        b: "answer 2",
        c: "answer 3",
      },
      correctAnswer: "c",
    },
  ];
});
