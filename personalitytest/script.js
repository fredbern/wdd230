fetch("test.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const quest = jsonObject['questionaire'];

        quest.forEach((quest, index) => {
            let questions = document.createElement('label');
            questions.setAttribute('class','top');
            questions.innerText = `${quest.question}`;
            let input = document.createElement('select');
            input.setAttribute('required','');
            input.setAttribute('class','select');
            input.setAttribute('id',`${index}`);
            questions.appendChild(input);
            document.querySelector('#fieldset').appendChild(questions);
            
            const ans = quest.answer;
            ans.forEach((answers) => {
                const option = document.createElement('option');
                option.setAttribute('class','option');
                option.setAttribute('value',`${answers[1]}`);
                option.innerText = `${answers[0]}`;
                document.getElementById(`${index}`).appendChild(option);

            })
        })
    });