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
    contentTable = `<table class="table1">` + contentTable + `</table>`
    return (contentTable)
}

function myPriceAndLikes(j) {
    let myNumber = ((books[j].price).toFixed(2)).replace('.',',')
    let myPriceContent = `<div class="priceAndLikes"><div class="priceAndLikesInner"> <div class="myPrice">${myNumber} €</div></div><div class="likesAndHeart">${hearts(j)}<div class="myLikes">${books[j].likes}</div></div></div></div>`
    return (myPriceContent)

}

function noClickLeftRight(j, myPropertie) {
    let myLeftRightClick =
        `<div class="titleContent"> ${eval(myPropertie)}</div><div class="myLeftRight">
            <img src="./assets/ico/left-146369_1280.png" alt="Left" class="myLeft" onclick="checkIn(), myOnclickLeft(${j})">
           <img src="./assets/img/${books[j].bookimage}" alt="Image placeholder" class="tempImg">
           <img src="./assets/ico/right-146368_1280.png" alt="Right" class="myRight" onclick="checkIn(), myOnclickRight(${j})">
        </div>`;
    return (myLeftRightClick)
}

