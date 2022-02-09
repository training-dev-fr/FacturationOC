fetch("./data.json")
    .then(result => result.json())
    .then(data => {
        const d = new Date();
        let previous = new Date();
        let day = d.getDate();
        previous.setMonth(d.getMonth() - 1);
        let current = data.listElement.find(element => {
            return element.min <= day && element.max >= day
        });
        document.querySelector(".m").innerHTML = `<span class="title">Pour le mois de ${d.toLocaleString('default', { month: 'long' })} :</span> ${current.sentence1}`;
        if (current.sentence2) {
            document.querySelector(".mprevious").innerHTML = `<span class="title">Pour le mois de ${previous.toLocaleString('default', { month: 'long' })} :</span> ${current.sentence2}`;
        }
    })