const questionJson = [
  {
    correctAnswer: 'Hyderabad',
    options: ['secundrabad', 'somajiguda ', 'chandigarh', 'Hyderabad'],
    question:
      "In which city is charminar situated?",
  },
    {
      correctAnswer: 'Three',
      options: ['Two', 'Three ', 'Four', 'Five'],
      question:
        "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
      correctAnswer: 'Jaipur',
      options: ['Jodhpur', 'pali ', 'Bhilwara', 'Jaipur'],
      question:
        "What is the capital of 'Rajasthan'?",
    },
    {
      correctAnswer: 'White',
      options: ['black', 'pink ', 'blue', 'White'],
      question:
        "What is the color of milk?",
    },
    {
      correctAnswer: 'L. Frank Baum',
      options: ['Suzzane Collins', 'James Fenimore Cooper', 'L. Frank Baum', 'Donna Leon'],
      question:
        "Which author wrote the wonderful wizard of 'Oz'?",
    },
    {
      correctAnswer: 'Narendra Modi',
      options: ['Draupadi Murmu', 'Rahul Gandhi', 'Narendra Modi', 'Amit shah'],
      question:
        "Who is the prime minister of  India?",
    },
    {
      correctAnswer: 'Atlanta United',
      options: ['Atlanta United', 'Atlanta Impact', 'Atlanta Bulls', 'Atlanta Stars'],
      question:
        "Which of these is a soccer teambased in Atlanta?",
    },
    {
      correctAnswer: 'A. Nanny',
      options: ['A. Sow', 'A.Lioness', 'A.Hen', 'A. Nanny'],
      question:
       "A female goat is known as what?",
    },
    {
      correctAnswer: 'P. L. Travers',
      options: ['J. R. R. Tolkien', 'P. L. Travers', 'Lewis Carroll', 'Enid Blyton'],
      question:
        "Which author wrote 'Marry Poppins'?",
    }
  ]

  // const questionObj = {
  //   category:'Food & Drink',
  //   id:'qa-10',
  //   correctAnswer :'Three',
  //   options:['Two','Three','Four','Five'],
  //   question:
  //         "How many pieces of bun are in a Mcdonald's Big Mac?"
  // }

  //Destructuring the object
    
    let score =0;
    let currentQuestion = 0;
    let selectedAns = null;
    const totalScore = questionJson.length;
    const quesEl = document.getElementById("question");
    const optionEl = document.getElementById("options");
    const scoreEl = document.getElementById("score");
    const nextEl  = document.getElementById("next");
    const submitEl = document.getElementById("submit");

    showQuestion();
    submitEl.addEventListener("click",()=>{
      if(selectedAns){
        checkAnswer(selectedAns);
        nextQuestion();
      }
      else {
        alert("Please select an answer before submitting!!");
      }

    });
    nextEl.addEventListener('click',()=>{
      nextQuestion();
      scoreEl.textContent=`Score: ${score}/${totalScore}`;
    }
    );

//create Function
    function showQuestion(){
      const { options,question} = questionJson[currentQuestion];
      //setting question and context
      quesEl.textContent = question;
      const shuffledOptions = shuffleOptions(options);
      shuffledOptions.forEach((opt)=>
        {
          const btn = document.createElement("button");
          btn.textContent = opt;
          optionEl.appendChild(btn);
          btn.addEventListener('click',() => {
            if(selectedAns===null){
            selectedAns = opt;
            btn.style.backgroundColor= '#f57424';}
          });
        });
    }  
    
    function nextQuestion() {
      currentQuestion++;
      optionEl.textContent='';
      selectedAns=null;
      if(currentQuestion >= questionJson.length){
        quesEl.textContent =`Quiz Completed!!`;
        // btnEl.textContent='';
        nextEl.remove();
        submitEl.remove();
      }
      else{
        showQuestion();
      }
    }

  // shuffleOptions(options);
    //Shuffling the options

    function shuffleOptions(options){
      for(let i= options.length-1;i>=0;i--){
        const j = Math.floor(Math.random()*i);
        // const j = Math.floor(Math.random()*i+1);
        // const j = Math.floor(Math.random()*options.length);
        [options[i],options[j]]=[options[j],options[i]];
      }
     return options;
    }

    function checkAnswer(selectedAns){
      const correctAnswer = questionJson[currentQuestion].correctAnswer;
      if(selectedAns.trim()===correctAnswer.trim()){
        score+=1;
      }
      else{
        score-=0.25;
      }
      scoreEl.textContent =`Score: ${score}/${totalScore}`;
    }
 

    