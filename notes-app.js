const notes = getSavedNotes()

const filters = {
	searchText: ""
}

renderNotes(notes, filters)

document.querySelector("#create-note").addEventListener("click", function(e) {
	const id = uuidv4()

	notes.push({
		id: id,
		title: "",
		body: ""
	})
	saveNotes(notes)
	location.assign(`/edit.html#${id}`)
})


document.querySelector("#search-text").addEventListener("input" , (e) => {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", (e) => {
	console.log(e.target.value)
})