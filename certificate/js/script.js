fetch("js/test.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject)
        const cert = jsonObject['certificate'];

       cert.forEach((cert, index) => {
            const course = cert.courses;
            console.table(course);

            //certificate div and table th -- BEGIN HERE
            const certificate = document.createElement('div');
            certificate.setAttribute('class','certificate');

            const logo = document.createElement('div');
            logo.setAttribute('class','logo');

            const certitle = document.createElement('div');
            certitle.setAttribute('class','cert-title');

            const certname = document.createElement('h2');
            certname.setAttribute('class','cert-name');
            certname.innerText = 'Business Admin';

            const byuilogo = document.createElement('div');
            byuilogo.setAttribute('class','byui-logo');
            const byuih1 = document.createElement('h1');
            byuih1.setAttribute('class','byuih1');
            const byuih2 = document.createElement('h2');
            byuih2.setAttribute('class','byuih2');


            const byui = document.createElement('div');
            const table = document.createElement('table');
            table.setAttribute('id','table');

            const tr = document.createElement('tr');

            //const th = document.createElement('th');
            //certificate div and table th - END HERE


           course.forEach((courses) => {
               console.log(courses.accounting);
                //const td = document.createElement('td');
                //document.getElementById(`${index}`).appendChild(option);
           })
        })
    });