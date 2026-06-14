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


const allStudent = JSON.parse(localStorage.getItem('itemz')) || []

const showAll = () => {
    showName()
}

let gottenIndex;

const addStudent = () => {
    const studentName = document.getElementById('student')
    if (studentName.value.trim() === '') {
        // alert('hiiiiiiiiiii')
        // message.innerHTML = `<div class="alert alert-danger p-2 fw-bold text-center" role="alert">Please Fill in the empty input </div>`

        // setTimeout(() => {
        //     message.style.display = 'none'
        // }, 1500);

        toast('Empty Input')
        showName()
    } else {
        // console.log(studentName.value);
        allStudent.push(studentName.value)
        const stringified = JSON.stringify(allStudent)
        localStorage.setItem('itemz', stringified)
        toast('Name Added!')
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

const getIndex = (index) => {
    console.log(index);
    gottenIndex = index
    const editName = document.getElementById('studentEdit')
    editName.value = allStudent[gottenIndex]
}

const deleteItem = (index) => {
    const confirem = confirm('Are you sure you want to Delete this Item');
    console.log(confirem);
    if (confirem) {
        const promting = prompt("Type the word 'DELETE' to confirm you are responsible for this")
        console.log(promting);
        if (promting === 'DELETE') {
            allStudent.splice(index, 1)
            const stringified = JSON.stringify(allStudent)
            localStorage.setItem('itemz', stringified)
            showName()
        } else {
            alert('Type correct information')
        }
    } else {
        showName()
    }
}

function showName() {
    display.innerHTML = ''
    for (let i = 0; i < allStudent.length; i++) {
        display.innerHTML += `
        <p>${i + 1}. ${allStudent[i]}</p>
        <button class="btn btn-warning" Onclick="deleteItem(${i})">DELETE</button>
        <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" Onclick="getIndex(${i})">Edit</button>
        `
    }
}

function toast(info) {
    Toastify({
        text: info,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

const saveEdit = () => {
    const editName = document.getElementById('studentEdit')
    if (editName.value.trim() === '') {
        // alert('hiiiiiiiiiii')
        toast('Empty Input')
    } else {
        allStudent.splice(gottenIndex, 1, editName.value)
        localStorage.setItem('itemz', JSON.stringify(allStudent))
        toast('Edited successfully')
        showName()


        // // console.log(studentName.value);
        // allStudent.push(studentName.value)
        // studentName.value = ''
        // display.innerHTML = ''
        // showName()
        // console.log(allStudent);
        // document.getElementById('display').innerHTML = allStudent
        // for(let i=0; i<allStudent.length; i++) {
        //     display.innerHTML += `<p> ${i+1}. ${allStudent[i]}</p>`
        // }
        // display.innerHTML = allStudent
    }
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