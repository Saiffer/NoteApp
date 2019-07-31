let notes = getSavedNotes()

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

window.addEventListener("storage", (e) => {
	if(e.key === "notes") {
		notes = JSON.parse(e.newValue)
		renderNotes(notes, filters)
	}
})


const now = moment()
now.minute(1)
console.log(now.toString())















// const dateOne = new Date("December 17 2004 7:37:52")
// const dateTwo = new Date()

// const timeStampOne = dateOne.getTime()
// const timeStampTwo = dateTwo.getTime()

// if(timeStampOne > timeStampTwo) {
// 	console.log(dateOne.toString())
// } else {
// 	console.log(dateTwo.toString())
// }

// console.log(timeStampOne)
// console.log(timeStampTwo)


