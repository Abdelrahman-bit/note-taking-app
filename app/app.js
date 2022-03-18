const inputFeald = document.querySelector('.input');
const addNoteButton = document.querySelector('.newNote');
const main = document.querySelector('#test');

// if there is no notes creat massage says nothing to show!
let emptyNote = document.createElement('h3');
emptyNote.innerText = 'Create a new note to show'
main.appendChild(emptyNote);
emptyNote.style.visibility = 'hidden';
    
// an array of all the notes elements 'text area'
let notesArray;
if(JSON.parse(localStorage.getItem('Notes'))){
    notesArray = [...JSON.parse(localStorage.getItem('Notes'))];
    renderNote();
}else{
    notesArray = []
}


// event listeners ----------------
addNoteButton.addEventListener('click', (e)=>{
    if(inputFeald.value != ''){
        emptyNote.style.visibility = 'hidden'
        addNote(inputFeald.value);
    }else{
        emptyNote.style.visibility = 'visible'
    }
    clearInput()

})

//  functions ---------------------

// land the local storage function to store data.
function saveLocalNote(){
    localStorage.setItem('Notes', JSON.stringify(notesArray));
}

function clearInput(){
    inputFeald.value = '';
}

function addNote(element){
    if(element.trim() != ''){
        notesArray.push(element);
    }
    saveLocalNote()
    renderNote(element);
}

function deleteNote(e){
    e.path[1].remove();
    notesArray.forEach((element, index) =>{
        if(element.trim() === e.path[1].innerText.trim()){
            notesArray.splice(index, 1);
            saveLocalNote();
        }
    });
}
function createNote(note){
    const noteNode = document.createElement('div');
        noteNode.classList.add('noteContainer');
        noteNode.innerHTML = `<textarea id="test" class="note">${note}</textarea>
        <img class="deleteI" src="/assits/kindpng_2004814.png">`;
        main.appendChild(noteNode);
        // add event listeners for the delete button
        noteNode.children[1].addEventListener("click", deleteNote);
}

function renderNote(addNote = undefined){
    if(addNote){
        createNote(addNote)
    }else{
        if(notesArray){
            notesArray.forEach((element) =>{
                createNote(element)
            })
        }
    }
}



