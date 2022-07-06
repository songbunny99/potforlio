var followButton = document.querySelector(".feed-user-profile button")
var likeButton = document.querySelector(".feed-footer button:first-child")
let commentButton = document.querySelector(".feed-footer button:last-child")

let feedComment = document.querySelector(".feed-comment")
let feedInput = document.querySelector(".feed-comment textarea")
let submitButton = document.querySelector(".feed-comment button")

let commentBox = document.querySelector(".comment-box")
let commentContent = document.querySelector(".comment-content");
let comment = document.querySelector(".comment-content p")

/* show feed-comment */
function mouseClickHandle() {
    feedComment.classList.toggle("active");
}
commentButton.addEventListener("click", mouseClickHandle);

/* follow/following status change */
followButton.addEventListener("click", function () {
    this.classList.toggle("following");

    if (this.following) {
        this.innerHTML = "Follow"
    } else {
        this.innerHTML = "Following"
    }
    this.following = !this.following
})

/* like-button change */
likeButton.addEventListener("click", function () {
    this.classList.toggle("active");

    let addNumber = 10;
    if (this.following) {
        this.innerHTML = addNumber + " Likes"

    } else {
        addNumber++
        this.innerHTML = addNumber + " Likes"
    }
    this.following = !this.following
})
