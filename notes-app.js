let notes = getSavedNotes()

const filters = {
	searchText: "",
	sortBy: "byEdited",
	sortByCreated: "byCreated"
}

renderNotes(notes, filters)



document.querySelector("#create-note").addEventListener("click", function(e) {
	const id = uuidv4()
	const timestamp = moment().valueOf()
	notes.push({
		id: id,
		title: "",
		body: "",
		createdAt: timestamp,
		updatedAt: timestamp
	})
	saveNotes(notes)
	location.assign(`/edit.html#${id}`)
})


document.querySelector("#search-text").addEventListener("input" , (e) => {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})

document.querySelector("#filter-by").addEventListener("change", (e) => {
	filters.sortBy = e.target.value
	renderNotes(notes, filters)
})

window.addEventListener("storage", (e) => {
	if(e.key === "notes") {
		notes = JSON.parse(e.newValue)
		renderNotes(notes, filters)
	}
})













// const now = moment()
// now.substract(1, "week").substract(20, "days")
// console.log(now.format("MMMM Do, YYYY"))
// console.log(now.fromNow())
// const nowTimestamp = now.valueOf()
// console.log(moment(nowTimestamp).toString())


const birthDay = moment().set({'year': 1990, 'month': 11, 'date': 28})

console.log(birthDay.format('MMM D, YYYY').toString())












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


