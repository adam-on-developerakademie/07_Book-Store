

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
        myBook.innerHTML += `<li id=book${j}>${setMyBookContent(j)}</li>`
    }
}

function setMyBookContent(j) {
    let myContent = ''; let contentValue = ''
    for (i = 0; i < myBookObjectNamesArray.length - 1; i++) {
        let myPropertie = 'books[j].' + myBookObjectNamesArray[i]
        if (i == 0) { contentValue = `${eval(myPropertie)} <img src="./assets/img/read.png" alt="Image placeholder" class="tempImg">` }
        if (i > 0 && i < 4) { i = 3; contentValue = myContentTable(j) }
        if (i == 4) {i=10; contentValue = myPriceAndLikes(j) }
        myContent += `<p class="content` + i + `">` + contentValue + `</p>`
    }
    myContent = myContent + commentsContent(j) + myCommentInput(j)
    return myContent
}

function commentsContent(j) {
    let myComents = 'Kommentare:'
    for (k = 0; k < books[j].comments.length; k++) {
        myComents += `<p>${books[j].comments[k].name}: ${books[j].comments[k].comment}</p>`
    }
    return myComents
}

function renderBooksContent4OneBook(j) {
    myBook.innerHTML = `<li id=book${j}>${setMyBookContent(j)}</li>`
}

//renderBooksContent()
//renderBooksContent4OneBook(2)