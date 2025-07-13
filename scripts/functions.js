function checkCheckbox() {
    if (document.getElementById('checkboxId').checked) { renderBooksContent4OneBook(0); }
    else { renderBooksContent() }
}

function likedFunction(j) {
    if (books[j].liked == false) { books[j].liked = true; books[j].likes += 1 }
    else { books[j].liked = false; books[j].likes += -1 };
    checkCheckbox();
}

