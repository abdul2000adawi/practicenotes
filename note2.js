const noteContainer = document.querySelector('#app');
const addNoteButton = noteContainer.querySelector('.add-note');



getNotes().forEach(note => {
    const noteElement=createNoteElement(note.id,note.content);
    noteContainer.insertBefore(noteElement,addNoteButton);
    
});


addNoteButton.addEventListener('click',()=>addNote());

//get the array of notes existing in the local storage
function getNotes(){
    return JSON.parse(localStorage.getItem('stickynotes-notes') || '[]')
}

//array of notes to save the new notes to the local storage
function saveNotes(notes){
    localStorage.setItem('stickynotes-notes', JSON.stringify(notes));
}


//build a new element to create a new note
function createNoteElement(id, content){
    const element=document.createElement('textarea');
    element.classList.add('note');
    element.value=content;
    element.placeholder="Empty sticky note"

    element.addEventListener('change',function(){
        updateNote(id,element.value)
    })

    element.addEventListener('dblclick', function(){
        const doDelete=confirm("Are you sure you want to delete this note?")

        if(doDelete){
            deleteNote(id,element);
        }
    })

    return element;
}

//add a note and save it to the local storage 
function addNote(){
    const existingNotes = getNotes();
    const noteObject={
        id: Math.floor(Math.random() * 100000),
        content:""
    };

    const notesElement= createNoteElement(noteObject.id,noteObject.content);
    noteContainer.insertBefore(notesElement,addNoteButton);


    existingNotes.push(noteObject);
    saveNotes(existingNotes);
}


//to update the notes
function updateNote(id, newContent){
    const notes=getNotes();
    const targetNote=notes.filter(note=>note.id==id)[0];

    targetNote.content=newContent;
    saveNotes(notes);
}

//to delete the note
function deleteNote(id, element){

    const notes=getNotes().filter(note=>note.id != id);
    saveNotes(notes)
    noteContainer.removeChild(element);
}