const notesTitle = document.querySelector("#note-title")
const notesBody = document.querySelector("#note-body")
const removeButton = document.querySelector("#remove-note")
const noteId = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) => {
	return note.id === noteId
})

if(note === undefined) {
	location.assign("/index.html")
} 


notesTitle.value = note.title
notesBody.value = note.body

notesTitle.addEventListener("input", (e) => {
	note.title = e.target.value
	saveNotes(notes)
})

notesBody.addEventListener("input", (e) => {
	note.body = e.target.value
	saveNotes(notes)
})

removeButton.addEventListener("click", (e) => {
	removeNote(note.id)
    saveNotes(notes)	
    location.assign("/index.html")
})

window.addEventListener("storage", (e) => {
	if (e.key === "notes") {
		notes = JSON.parse(e.newValue)
		note = notes.find((note) => {
	return note.id === noteId
})

if(note === undefined) {
	location.assign("/index.html")
} 
	}
})