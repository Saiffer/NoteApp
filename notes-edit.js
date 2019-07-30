const noteId = location.hash.subString(1)
const notes = getSavedNotes()
const note = notes.find((note) => {
	return note.id === noteId
})

if(note === undefined) {
	location.assign("/index.html")
} 