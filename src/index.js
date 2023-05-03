document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => { //adds an event listener to the submit button 
       e.preventDefault()
       buildTask(e.target.new_task_description.value) //id was previously labeled new-task-description, but was causing an unknown syntax error // gets the string value of the new task
       form.reset 
  })
})


// Create a new element to store the value we captured from the eventListener
function buildTask(task) {
  let li = document.createElement('li') // appends the string value to a li element
  console.log(li.className)
  let deleteButton = document.createElement('button') // creates button element
  document.addEventListener('click', handleDeleteButton)
  deleteButton.textContent = "x"
  li.textContent = `${task} `
  li.appendChild(deleteButton) // appends the created button as a child to the parent element li
  console.log(li)
  document.querySelector('#tasks').appendChild(li) //appends the li element as a child under the parent element ul
  
}

function handleDeleteButton() {
  const unorderedList = document.querySelector('ul')
  const list = document.querySelector('li')
  list.className = 'taskList'
  unorderedList.removeChild(list)
}