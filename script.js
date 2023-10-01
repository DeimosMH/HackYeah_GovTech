import { ChatGPTAPI } from './chatgpt'

function displayDate() {
    var today = new Date();
    var date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    document.getElementById('dateTime').innerHTML = dateTime;
}

(async () => {
    // await import('https://code.chatgptjs.org/chatgpt-latest.min.js');
    // import('https://code.chatgptjs.org/chatgpt-latest.min.js')
    try {
        document.getElementById('submitBtn').addEventListener('click', async () => {
            let inputText = document.getElementById('tekstGPT').value;

            async function example() {
                const api = new ChatGPTAPI({
                    apiKey: process.env.OPENAI_API_KEY
                })

                // let response = await chatGPT(inputText);
                const response = await api.inputText;

                document.getElementById('response').innerText = response;
            }
        })
    }
    catch (err) {
        console.error(err);
    };
});