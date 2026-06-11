const allStudent = []
const addStudent = () => {
    const userInput = document.getElementById('studentName')
    if (userInput.value == '') {
        message.innerHTML = `<div class="alert alert-danger"> Please fill in the empty input </div>`
        setTimeout(() => {
            message.style.display = 'none'
        }, 1500);
    } else {
        allStudent.push(userInput.value)
        console.log(allStudent);
        userInput.value = ''
        showItem()
        console.log(allStudent)
    }
}

const deleteItem = (index) => {
    // console.log ('I will Delete')
    const confirmu = confirm('Are you sure you want to delete')
    console.log(confirmu);
    if (confirmu) {
        const prompting = prompt("Type the word 'DELETE' to confirm you are responsible for this")
        console.log(prompting);
        if (prompting === 'DELETE') {
            allStudent.splice(index, 1)
            showItem()
        }else{
            alert('Type the correct information')
        }
    } else {
        showItem()
    }

}

function showItem() {
    show.innerHTML = ''
    for (let i = 0; i < allStudent.length; i++) {
        show.innerHTML += `
        <p> ${i + 1}. ${allStudent[i]}</p>
        <button class="btn btn" onclick="deleteItem(${i})" >Delete</button>
        <button class="btn btn">Edit</button>
        `
    }
}