// console.log('index.js is here');
const articleContainer = document.querySelector("#article-container")
// console.log('articleContainer', articleContainer)

function createArticle (park) {
    
    return /*html*/ `
            <div class="column article">
                <article class="park-article">
                    <h3 class="park-name">${park.name}</h3>
                    <p class="park-location">${park.state}</p>
                </article>
            </div>
    `
}

function appendToDOM (data) {
    articleContainer.innerHTML += data
}

function getData(url) {
    fetch(url)
    .then(parks => parks.json())
    .then(parsedData => {
        console.table(parsedData)
        parsedData.forEach( park => {
            // console.log(park.name, park.state)
            const populatedHTML = createArticle(park)
            // console.log(populatedHTML)
            appendToDOM(populatedHTML)
            updateStyles(park);
        });
    })
}
getData(`http://localhost:8088/parks`)

updateStyles = (park) => {
    console.log('called update styles')
    const parkTitle = document.getElementsByClassName('park-name')

    if (park.visited == true) {
        console.log(true)
        parkTitle.classList.toggle('visited-park')
    } else {
        console.log(false)
        parkTitle.className = 'not-visited'
    }
}