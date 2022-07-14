const displayScreen = document.querySelector(".display-screen")
const addNoteButton = document.querySelector(".note-input button")
const writeNoteHere = document.querySelector(".note-input textarea")
const note = document.querySelector(".note-feed")
let viewDetailModal = document.querySelector(".detail-modal")
let viewDetailNote = document.querySelector(".detail-modal p")
const viewDetailClose = document.querySelector(".detail-modal-content span")

addNoteButton.addEventListener("click", function (event) {
  event.preventDefault()
  //create note-feed
  let div = document.createElement("div")
  let input = document.createElement("input")
  let p = document.createElement("p")
  let viewDetailButton = document.createElement("button")
  div.classList.add("note-feed")
  input.value = "Note" /* value와 innerHTML/innerText의 차이점? */
  input.setAttribute("readonly", "") /* setAttribute는 속성이름과 속성값을 반드시 함께 기재해야함. 자주하는 실수는 속성값만 기재하는 것! */
  input.title = "double-click to edit note title" /* disabled 된 input도 title 작성 가능! 그렇다면 input이 disabled되었을 때 안되는 것은 무엇인가? */
  p.innerHTML = writeNoteHere.value
  viewDetailButton.innerHTML = "View Detail" /* innerHTML 과 innerText의 차이점? */

  div.appendChild(input);
  div.appendChild(p);
  div.appendChild(viewDetailButton);
  displayScreen.appendChild(div);

  //clear writeNoteHere text
  writeNoteHere.value = ""

  //edit notetitle
  input.addEventListener("dblclick", function () {
    /* 속성 disabled 된 input은 click, dblclick이벤트를 감지할 수 없음
    따라서 속성disabled 대신 속성 read-only로 input을 클릭할 수 없도록 만들어야 함 */
    input.removeAttribute('readonly')
    input.addEventListener("blur", function () {
      input.setAttribute("readonly", "")
    })
  })

  //view detail-modal
  viewDetailButton.addEventListener("click", function () {
    viewDetailModal.classList.add('active')
    viewDetailNote.innerHTML = p.innerHTML
  })

  //close detail-modal
  viewDetailClose.addEventListener("click", function () {
    viewDetailModal.classList.remove('active')
  })

  //view delete-modal
  let note = document.querySelectorAll(".note-feed")
  for (let i = 0; i < note.length; i++) {
    note[i].addEventListener("click", function () {
      deleteModal.classList.add("active")
    })
  }

  //close delete-modal
  deleteClose.addEventListener("click", function () {
    deleteModal.classList.remove("active")
  })
})
