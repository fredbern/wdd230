const requestData = "questionaire.json"
fetch(requestData)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const quest = jsonObject['questionaire'];  
        const form = document.createElement('form');
        form.setAttribute('class','form');
        form.setAttribute('action','personality.html');
        form.setAttribute('method','get');

        const fieldset = document.createElement('fieldset');
        fieldset.setAttribute('class','fieldset');
        fieldset.setAttribute('id','fieldset');

        const legend = document.createElement('legend');
        legend.setAttribute('class','legend');
        legend.setAttribute('id','legend');
        legend.innerText = 'Questionaire';

        
        
        
        const button = document.createElement('input');
        button.setAttribute('class','submit');
        button.setAttribute('type','submit');
        button.setAttribute('value','Get Personality Trait');


        form.appendChild(fieldset);
        fieldset.appendChild(legend);
        form.appendChild(button);
        document.querySelector('#main').appendChild(form);

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
            ans.forEach((answers,) => {
                const option = document.createElement('option');
                option.setAttribute('class','option');
                option.setAttribute('value',`${answers[1]}`);
                option.innerText = `${answers[0]}`;
                document.getElementById(`${index}`).appendChild(option);

            })
        })






    });