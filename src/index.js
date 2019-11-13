console.log('index.js is here');

function getData(url) {
    fetch(url)
        .then(parks => parks.json())
        .then(parsedData => {
            console.log('parsed park data', parsedData)
        })
}

getData(`http://localhost:8088/parks`)