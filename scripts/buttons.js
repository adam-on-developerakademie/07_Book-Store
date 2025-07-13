

function likedFunction(j) {
    if (books[j].liked == false) {
        books[j].liked = true; books[j].likes += 1; document.getElementById('heartOff' + j).classList.toggle('switchOff'); document.getElementById('heartOn' + j).classList.toggle('switchOff')
    }
    else {
        books[j].liked = false; books[j].likes += -1; document.getElementById('heartOff' + j).classList.toggle('switchOff'); document.getElementById('heartOn' + j).classList.toggle('switchOff')
    };

    console.log(books[j].liked);
    console.log(document.getElementById('heartOff' + j).classList);
    renderBooksContent();


}
