console.log('index.js is here');
const articleContainer = document.querySelector('#article-container')

function getData(url) {
    fetch(url)
    .then(parks => parks.json())
    .then(parsedData => {
        console.table(parsedData)
        articleContainer.innerHTML = buildArticles(parsedData.name, parsedData.state)
    })
}

getData(`http://localhost:8088/parks`)

const buildArticles = (name, state) => {
    return /*html*/ `
        <div class="column">
            <article class="park-article">
                <h3 class="park-name">${name}</h3>
                <p class="park-location">${state}</p>
            </article>
        </div>
    `
}

