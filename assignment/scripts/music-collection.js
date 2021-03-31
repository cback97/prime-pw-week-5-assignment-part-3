console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublished) {
    
    title = {
        album: title,
        by: artist,
        released: yearPublished
    }
    collection.push(title);
    return (title)
}

addToCollection('Myself', 'Nav', '2017')
addToCollection('Nothing Was The Same', 'Drake', '2013')
addToCollection('Man On The Moon', 'Kid Cudi', '2009')
addToCollection('Forrest Hills Drive', 'J. Cole', '2014')
addToCollection('OneX', 'Three Days Grace', '2006')
addToCollection('The Album About Nothing', 'Wale', '2015')

console.log(collection)

function showCollection(array) {
    console.log('We are in showCollection:')
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])

    }
}
showCollection(collection)


function findByArtist(artist) {
    // console.log('We are in findByArtist:')
    let searchedArtists = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].by === artist) {
            searchedArtists.push(artist)
            return console.log('Artist found', searchedArtists);
        }

    }
    return console.log('Artist not found', searchedArtists = []);
}
//Testing Matches in Collection
findByArtist('Drake')
findByArtist('Wale')
findByArtist('Nav')
//Testing Non-Match in Collection
findByArtist('Kevin Bacon')