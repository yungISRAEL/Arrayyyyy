// const allItems = ['Bread', 'Milk', 'Fruit', 'Sweet'];
// // console.log(allItems[2]);
// console.log(allItems.length);

// Array are Indexed. Index start from 0.

// Push, pop, shift, unshift
// push - adds item to the end of the array
// pop - removes item at the end of the array
// shift - removes item at the start of the array
// unshift - adds item to the start of the array

// const allStudents = [];
// allStudents.push('Israel')
// allStudents.push('Kenny')

// allStudents.unshift('Olayinka')
// allStudents.shift()
// allStudents.pop()

// console.log(allStudents);

const allStudent = [];
const addStudent = () => {
    const studentName = document.getElementById('student')
    if(studentName.value.trim() === '') {
        // alert('hiiiiiiiiiii')
        message.innerHTML = `<div class="alert alert-danger p-2 fw-bold text-center" role="alert">Please Fill in the empty input </div>`

        setTimeout(() => {
            message.style.display = 'none'
        }, 1500);
    } else{
        // console.log(studentName.value);
        allStudent.push(studentName.value)
        studentName.value = ''
        display.innerHTML = ''
        showName()
        // console.log(allStudent);
        // document.getElementById('display').innerHTML = allStudent
        // for(let i=0; i<allStudent.length; i++) {
        //     display.innerHTML += `<p> ${i+1}. ${allStudent[i]}</p>`
        // }
        // display.innerHTML = allStudent
    } 
}

const deleteItem = (index) => {
    const confirem = confirm ('Are you sure you want to Delete this Item');
    console.log(confirem);
    if(confirem) {
        const promting = prompt("Type the word 'DELETE' to confirm you are responsible for this")
        console.log(promting);
        if(promting === 'DELETE') {
            allStudent.splice(index,1)
            showName()
        }else{
            alert('Type correct information')
        }
    } else {
        showName()
    }
}

function showName() {
    display.innerHTML = ''
    for (let i=0; i < allStudent.length; i++) {
        display.innerHTML += `
        <p>${i+1}. ${allStudent[i]}</p>
        <button class="btn btn" Onclick="deleteItem(${i})">DELETE</button>
        <button class="btn btn">Edit</button>
        `
    }
}

function toast() {
    
}

// const removeStudent = () => {
//     const studentName = document.getElementById('student')
//     if(studentName.value === '') {
//         // alert('meeeeee')
//         allStudent.pop()
//         studentName.value = ''
//         // console.log(allStudent);
//         // document.getElementById('display').innerHTML = allStudent
//         display.innerHTML = ''
//         for(let i=0; i<allStudent.length; i++) {
//             display.innerHTML += `<p> ${i+1}. ${allStudent[i]}</p>`
//         }
//     }
// }

// setTimeout(() => { console.log (111)}, 5000)