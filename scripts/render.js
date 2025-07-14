

function createMyBookObjectNamesArray() {
    let myBookObjectNames = '';
    for (const objectName in books[0]) {
        myBookObjectNames += '"' + objectName + '",';
    }
    myBookObjectNames = myBookObjectNames.substring(0, myBookObjectNames.length - 1);
    myBookObjectNames = '[' + myBookObjectNames + ']'
    myBookObjectNamesArray = JSON.parse(myBookObjectNames)
    //console.log(myBookObjectNames)
    //console.log(myBookObjectNamesArray)
}

function renderBooksContent() {
    myBook.innerHTML = '';
    for (j = 0; j < books.length; j++) {
        myBook.innerHTML += `<li id=book${j} class="myBook>">${setMyBookContent(j)}</li>`
    }
}

function setMyBookContent(j) {
    let myContent = ''; let contentValue = '';let myPropertie = 'books[j].' + myBookObjectNamesArray[0]
        contentValue += `<div class="titleContent"> ${eval(myPropertie)}<img src="./assets/img/${books[j].bookimage}" alt="Image placeholder" class="tempImg"></div>`;
        contentValue += myContentTable(j);
        contentValue += myPriceAndLikes(j); 
        myContent += `${contentValue}`
        myContent += commentsContent(j) 
    return myContent
}

function commentsContent(j) {
    let myComents = `<p>Kommentare:</p>`
    for (k = 0; k < books[j].comments.length; k++) {
        myComents += `<p>${books[j].comments[k].name}: ${books[j].comments[k].comment}</p>`
    }
    myComents = `${myComents}<p class="myInputTemplate">${myCommentInput(j)}<img src="./assets/img/pencil.png" alt="pencil image" class="saveComentImg"></p>`
    return myComents
}

function renderBooksContent4OneBook(j) {
    myBook.innerHTML = `<li id=book${j} class="myBook>">${setMyBookContent(j)}</li>`
}

//renderBooksContent()
//renderBooksContent4OneBook(2)