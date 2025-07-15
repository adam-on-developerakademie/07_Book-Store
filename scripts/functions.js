function checkCheckbox(j) {
    if (document.getElementById('checkboxId').checked) { renderBooksContent4OneBook(j); }
    else { renderBooksContent(j) }
}

function likedFunction(j) {
    if (books[j].liked == false) { books[j].liked = true; books[j].likes += 1 }
    else { books[j].liked = false; books[j].likes += -1 };
    saveToLocalStorage();
    checkCheckbox(j);
}

function commentAdd(j) {booksVar[0] = document.getElementById('myInputNameId').value;  saveToLocalStorage();
    if (document.getElementById('myInputNameId').value == '') { document.getElementById('myInputNameId').focus(); document.getElementById('myInputNameId').classList.toggle('letsRed'); booksVar[2] = j }
    else {
        if (document.getElementById('myInputId' + j).value == '') { document.getElementById('myInputId' + j).focus(); document.getElementById('myInputId' + j).classList.toggle('letsRed') } else {
            let myUserName = document.getElementById('myInputNameId').value; let myCommentContent = document.getElementById('myInputId' + j).value
            let myComment = `{"name": "${myUserName}", "comment": "${myCommentContent}"}`
            myComment = JSON.parse(myComment)
            books[j].comments.splice(0, 0, myComment);
            saveToLocalStorage();
            checkCheckbox(j)
        }
    }
}

function checkIn() {
    document.getElementById('checkboxId').checked = true
    saveToLocalStorage();
}

function saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(books));
    localStorage.setItem('booksVar', JSON.stringify(booksVar));
}

function loadFromLocalStorage(i) {
    if (typeof localStorage != 'undefined') {
        if (localStorage.getItem('books') != null && localStorage.getItem('booksVar') != null) {
            books = JSON.parse(localStorage.getItem('books'));
            booksVar = JSON.parse(localStorage.getItem('booksVar'));
            document.getElementById('myInputNameId').value = booksVar[0]
            document.getElementById('checkboxId').value = booksVar[1]
            if (document.getElementById('checkboxId').checked) { renderBooksContent4OneBook(i) } else { renderBooksContent() };
        } else { saveToLocalStorage() }
    }
}

function myOnclickLeft(l) {
    if (l - 1 == -1) { l = books.length - 1 } else { l = l - 1 };
    { renderBooksContent4OneBook(l) }
}
function myOnclickRight(l) {
    if (l + 1 == books.length) { l = 0 } else { l = l + 1 };
    { renderBooksContent4OneBook(l) }
}

function goBack() {
    booksVar[0] = document.getElementById('myInputNameId').value
    saveToLocalStorage();
    myElement = 'myInputId' + booksVar[2]
    document.getElementById(myElement).focus()
}