//Get notes from locale storage

const getSavedNotes = () => {
		const notesJSON = localStorage.getItem("notes")

		if(notesJSON !== null) {
		return JSON.parse(notesJSON)
	} else {
		return []
	}
}

//Save the notes to local storage

const saveNotes = (notes) => {
	localStorage.setItem("notes", JSON.stringify(notes))
}

//Generate the DOM structure for a note

const generateNoteDom = (note) => {
	const noteEl = document.createElement("p")

		if(note.title.length > 0) {
			noteEl.textContent = note.title
		} else {
			noteEl.textContent = "Unnamed note"
		}
		return noteEl
}


//Render aplication notes

const renderNotes = function (notes, filters) {
	const filteredNotes = notes.filter(function (note) {
		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	document.querySelector("#notes").innerHTML = ""

	filteredNotes.forEach((note) => {
		const noteEl = generateNoteDom(note)
		document.querySelector("#notes").appendChild(noteEl)
	})
}