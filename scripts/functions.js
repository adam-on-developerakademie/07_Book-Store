function checkCheckbox() {
    if (document.getElementById('checkboxId').checked) { renderBooksContent4OneBook(0); }
    else { renderBooksContent() }
}

function likedFunction(j) {
    if (books[j].liked == false) { books[j].liked = true; books[j].likes += 1 }
    else { books[j].liked = false; books[j].likes += -1 };
    checkCheckbox();
}

function commentAdd(j) {
    if (document.getElementById('myInputNameId').value == '') { document.getElementById('myInputNameId').focus(); document.getElementById('myInputNameId').classList.toggle('letsRed') }
    else {
        let myUserName = document.getElementById('myInputNameId').value; let myCommentContent = document.getElementById('myInputId' + j).value
        let myComment = `{"name": "${myUserName}", "comment": "${myCommentContent}"}`
        myComment = JSON.parse(myComment)
        books[j].comments.splice(0, 0, myComment);
        checkCheckbox()
    }
}
