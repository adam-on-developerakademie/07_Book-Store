function createMyBookObjectNamesArray() {
    let myBookObjectNames = '';
    for (const objectName in books[0]) {
        myBookObjectNames += '"' + objectName + '",';
    }
    myBookObjectNames = myBookObjectNames.substring(0, myBookObjectNames.length - 1);
    myBookObjectNames = '[' + myBookObjectNames + ']'
    myBookObjectNamesArray = JSON.parse(myBookObjectNames)
}

function renderBooksContent() {
    myBook.innerHTML = '';document.querySelector(':root').style.setProperty('--position', 'relative');
    for (j = 0; j < books.length; j++) {
        myBook.innerHTML += `<li id=book${j} class="myBook>">${setMyBookContent(j)}</li>`
    }
}

function setMyBookContent(j) {
    let myContent = ''; let contentValue = ''; let myPropertie = 'books[j].' + myBookObjectNamesArray[0]
    contentValue += noClickLeftRight(j, myPropertie)
    contentValue += myContentTable(j);
    contentValue += myPriceAndLikes(j);
    myContent += `${contentValue}`
    myContent += commentsContent(j)
    return myContent
}

function commentsContent(j) {
    let myComents = ''; let myComentsHead = ''
    if (books[j].comments.length == 1) { myComentsHead = `<p class="commentsTitle">${books[j].comments.length} Kommentar:</p>` } else { myComentsHead = `<p class="commentsTitle">${books[j].comments.length} Kommentare:</p>` }
    for (k = 0; k < books[j].comments.length; k++) {
        myComents += `<tr><th class="commentRow1">${books[j].comments[k].name}:</th><th class="commentRow2">${books[j].comments[k].comment}</th></tr>`
    }
    let myComentsfooter = `<div class="myInputTemplate">${myCommentInput(j)}<img src="./assets/img/pencil.png" alt="pencil image" class="saveComentImg" onclick="commentAdd(${j})"></div>`
    myComents = `${myComentsHead}<div class="myComents"><table class="table2">${myComents}</table></div>${myComentsfooter}`
    return myComents
}

function renderBooksContent4OneBook(j) {
    document.querySelector(':root').style.setProperty('--position', 'absolute');
    myBook.innerHTML = `<li id=book${j} class="myBook>">${setMyBookContent(j)}</li>`   

}
