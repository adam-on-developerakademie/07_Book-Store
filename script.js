
let myBookObjectNamesArray = []
function createMyBookObjectNamesArray() {
    let myBookObjectNames = '';
    for (const objectName in books[0]) {
        myBookObjectNames += '"' + objectName + '",';
    }
    myBookObjectNames = myBookObjectNames.substring(0, myBookObjectNames.length - 1)
    myBookObjectNames = '[' + myBookObjectNames + ']'
    myBookObjectNamesArray = JSON.parse(myBookObjectNames)
    console.log(myBookObjectNames)
    console.log(myBookObjectNamesArray)


}
createMyBookObjectNamesArray()

let myBook = document.getElementById('myBooksId')
myBook.innerHTML = ''

function renderBooksContent() {
    for (j = 0; j < books.length; j++) {
     myBook.innerHTML += `<div id=book${j}>${setMyBookContent(j)}</div><br>`
    }
}
function setMyBookContent(j) {
let myContent=''
    for (i = 0; i < myBookObjectNamesArray.length; i++) {
        let myPropertie = 'books[j].' + myBookObjectNamesArray[i]
        myContent += `<p>${myBookObjectNamesArray[i]}: ${eval(myPropertie)}</p>`
    }
    return myContent
}
//setMyBookContent()
renderBooksContent()
