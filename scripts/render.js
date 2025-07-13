

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
        myBook.innerHTML += `<div id=book${j}>${setMyBookContent(j)}</div><br>`
    }
}

function setMyBookContent(j) {
    let myContent = ''; let contentValue = ''
    for (i = 0; i < myBookObjectNamesArray.length - 1; i++) {
        let myPropertie = 'books[j].' + myBookObjectNamesArray[i]
        if (i == 3) { contentValue = hearts(j) } else { contentValue = eval(myPropertie) }
        myContent += `<p>${myBookObjectNamesArray[i]}: ${contentValue}</p>`
    }
    myContent = myContent + myCommentsContent(j)
    return myContent
}

function myCommentsContent(j) {
    let myComents = 'comments:'
    for (k = 0; k < books[j].comments.length; k++) {
        myComents += `<p>${books[j].comments[k].name}: ${books[j].comments[k].comment}</p>`
    }
    return myComents
}

function renderBooksContent4OneBook(j) {
    myBook.innerHTML = `<div id=book${j}>${setMyBookContent(j)}</div><br>`
}

//renderBooksContent()
//renderBooksContent4OneBook(2)