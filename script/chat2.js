let currentQAIndex = 0;

function displayNextQA() {
    let questionElement = document.getElementById('question');  // Element na pytania.
    let answerElement = document.getElementById('answer');      // Element na odpowiedzi.

    if (currentQAIndex < qAndA.length) {
        questionElement.innerText = qAndA[currentQAIndex].q;
        answerElement.innerText = qAndA[currentQAIndex].a;
        currentQAIndex++;
        // setTimeout(typeWriter, speed);
    } else {

        questionElement.innerText = "Propozycja AI";
        answerElement.innerText = finalResponse;
        
        let btn = document.getElementById('btn');
        btn.style.display = 'none';
    }
}