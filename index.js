// console.log('index.js is here');
const articleContainer = document.querySelector("#article-container")
// console.log('articleContainer', articleContainer)

function createArticle (park) {
// console.log("TCL: createArticle -> park", park)    
const parkTitle = document.getElementsByClassName('park-name')
if (park.visited == true) {
    return /*html*/ `
    <div class="column article">
        <article class="park-article">
            <h3 class="park-name visited-park">${park.name}</h3>
            <p class="park-location">${park.state}</p>
        </article>
    </div>
`
    // parkTitle.classList.add('visited') 
    // parkTitle.classList.add('visited-park')
} else {
    return /*html*/ `
    <div class="column article">
        <article class="park-article">
            <h3 class="park-name not-visited">${park.name}</h3>
            <p class="park-location">${park.state}</p>
        </article>
    </div>
`
    // parkTitle.className = 'not-visited'
}
    // return /*html*/ `
    //         <div class="column article">
    //             <article class="park-article">
    //                 <h3 class="park-name">${park.name}</h3>
    //                 <p class="park-location">${park.state}</p>
    //             </article>
    //         </div>
    // `
}

function appendToDOM (data) {
    // updateStyles(data)
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
            
            // updateStyles(park, populatedHTML)
        });
    })
}
getData(`http://localhost:8088/parks`)

updateStyles = (park, html) => {
    // console.log('called update styles', html)
    const parkTitle = document.getElementsByClassName('park-name')
    
    // for (let i = 0, len = parkTitle.length; i < len; i++) {
    //     if (park.visited == true) {
    //         console.log(true, html)
    //         parkTitle.classList.add('visited') 
    //         // parkTitle.classList.add('visited-park')
    //     } else {
    //         console.log(false)
    //         parkTitle.className = 'not-visited'
    //     }
    // }
    

}