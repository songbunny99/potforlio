let noteFeed;
let noteNumber;
let noteContent;
let viewDetailButton;

// Refactored as objects 
// how to reference [object name.property name]
let querySelectors = {
  noteInput: document.querySelector("textarea"),
  addNoteButton: document.querySelector(".note-input button"),
  modal: document.querySelector(".detail-modal"),
  modalInput: document.querySelector(".detail-modal-content p"),
  modalClose: document.querySelector(".detail-modal span"),
  deletemodal: document.querySelector(".delete-modal"),
  displayScreen: document.querySelector(".display-screen"),
};
let functions = {
  CreateFeedElements () {
    noteFeed = document.createElement("div");
    noteNumber = document.createElement("input");
    noteContent = document.createElement("p");
    viewDetailButton = document.createElement("button");
  },
  CreateNote (event) {
    noteNumber.value = "Note";
    noteNumber.readOnly = true;

    noteNumber.ondblclick = () => {
      noteNumber.readOnly = false;
      noteNumber.select();
      noteNumber.onkeyup = (event) => {
        // if keyPress == enter && noteNum != 0
        if (event.keyCode === 13 && noteNumber.value != 0) {
          noteNumber.blur();
          noteNumber.readOnly = true;
        } else if (event.keyCode === 13 && noteNumber.value == 0) {
          noteNumber.value = "Note";
          noteNumber.blur();
          noteNumber.readOnly = true;
        }
      };
    };
    querySelectors.displayScreen.appendChild(noteFeed);

    noteFeed.classList.add("note-feed");

    noteFeed.appendChild(noteNumber);
    noteFeed.appendChild(noteContent);

    noteContent.innerText = querySelectors.noteInput.value;

    noteFeed.appendChild(viewDetailButton);

    viewDetailButton.innerHTML = "View Detail";

    event.preventDefault();

    querySelectors.noteInput.value = "";
  },
  DetailModal () {
    querySelectors.modal.classList.add("active");
    querySelectors.modalInput.innerHTML = noteContent.innerHTML;
  },
};

// Code starts here
querySelectors.addNoteButton.addEventListener("click", function (event) {
  functions.CreateFeedElements();
  let condition = querySelectors.noteInput.value.length >= 1;
  if (condition) {
    functions.CreateNote(event);
    viewDetailButton.addEventListener("click", functions.DetailModal);
  }
});
querySelectors.modalClose.addEventListener("click", () => {
  querySelectors.modal.classList.remove("active");
});

/* create date class above note-feed */
let date = new Date();

/* add tooltip(double-click to edit) when you hover on the notename */