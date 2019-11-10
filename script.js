function fetchChuckNorrisFactJSON() {
    const url = `https://api.chucknorris.io/jokes/random`;
    axios.get(url)
        .then(function(response) {
            return response.data;
        })
        .then(function(fact) {
            console.log('data decoded from JSON:', fact);

            // Build a block of HTML
            const factHtml = `
            <img src="${fact.icon_url}" />
            <p><strong>${fact.value}</strong></p>
            `;
            document.querySelector('#chuck-norris').innerHTML = factHtml;
        });
}

let elementDel = document.getElementById('reload');
elementDel.addEventListener('click', function() {
    fetchChuckNorrisFactJSON();
});

fetchChuckNorrisFactJSON();

