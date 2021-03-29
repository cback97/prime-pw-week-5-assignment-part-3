console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    title = {
        album: title,
        creator: artist,
        birth: yearPublished
    }
    collection.push(title);
    return console.log(title);
}

addToCollection('Myself', 'Nav', '2017')