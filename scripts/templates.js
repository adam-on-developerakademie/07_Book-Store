function hearts(j) {
    if (books[j].liked) {
        return (`<img id="heartOn${j}" src="./assets/ico/Like.png" alt="Like is true" onclick="likedFunction(${j})" class="heartOn">
            <img id="heartOff${j}" src="./assets/ico/Dislike.png" alt="Like is false" onclick="likedFunction(${j})" class="heartOff switchOff">`)
    } else {
        return (`<img id="heartOn${j}" src="./assets/ico/Like.png" alt="Like is true" onclick="likedFunction(${j})" class="heartOn switchOff">
            <img id="heartOff${j}" src="./assets/ico/Dislike.png" alt="Like is false" onclick="likedFunction(${j})" class="heartOff">`)
    }
}

function myCommentInput(j) {
    return `<input id="myInputId${j}" class="myInputComment" type="text" autocomplete="off" onkeydown="if(event.key==='Enter') {commentAdd(${j})}" placeholder="Gib dein Kommentar ab. "></input>`
}

function myContentTable(j) {
    let contentTable = '';
    for (i = 0; i < 3; i++) {
        let myTablePropertie = 'books[j].' + myBookObjectNamesArray[i + 1];
        contentTable += `<tr><th class="row1">${myBookObjectNamesArray[i + 1]}</th><th class="row2">: ${eval(myTablePropertie)}</th></tr>`
    }
    contentTable = `<table>` + contentTable + `</table>`
    return(contentTable)
}
function myPriceAndLikes(j){
    let myPriceContent= `<div class="priceAndLikes"><div class="priceAndLikesInner"> <div class="myPrice">${books[j].price} €</div></div><div class="likesAndHeart">${hearts(j)}<div class="myLikes">${books[j].likes}</div></div></div></div>`
    console.log(myPriceContent)
    return(myPriceContent)

}