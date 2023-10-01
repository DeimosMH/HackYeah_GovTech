let currentQAIndex = 0;

function displayNextQA() {
    let questionElement = document.getElementById('question');  // Element na pytania.
    let answerElement = document.getElementById('answer');      // Element na odpowiedzi.
    let resultDisplay = document.getElementById('resultdata');

    if (currentQAIndex < qAndA.length) {
        questionElement.innerText = qAndA[currentQAIndex].q;
        answerElement.innerText = qAndA[currentQAIndex].a;
        currentQAIndex++;
        typeWriter();
    } else {

        questionElement.innerText = "Propozycja AI";
        answerElement.innerText = finalResponse;
        resultDisplay.style.display = "block";
        
        let btn = document.getElementById('btn');
        btn.style.display = 'none';
    }
}