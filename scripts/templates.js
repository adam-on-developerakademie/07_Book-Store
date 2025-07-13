function hearts(j) {
    if (books[j].liked) {
        return (`<img id="heartOn${j}" src="./assets/ico/Like.png" alt="Like is true" onclick="likedFunction(${j})" class="heartOn">
            <img id="heartOff${j}" src="./assets/ico/Dislike.png" alt="Like is false" onclick="likedFunction(${j})" class="heartOff switchOff">`)
    } else {
        return (`<img id="heartOn${j}" src="./assets/ico/Like.png" alt="Like is true" onclick="likedFunction(${j})" class="heartOn switchOff">
            <img id="heartOff${j}" src="./assets/ico/Dislike.png" alt="Like is false" onclick="likedFunction(${j})" class="heartOff">`)
    }
}

function myCommentInput(j){
    return`<input id="myInputId${j}" class="myInput${j}" type="text" autocomplete="off" onkeydown="if(event.key==='Enter') {commentAdd(${j})}" placeholder="Gib dein Kommentar ab. "></input>` }