const allItems = JSON.parse(localStorage.getItem('items')) || []

const showAll = () => {
    showItem()
}

let gottenIndex;

const addItem = () => {
    const userInput = document.getElementById('item')
    if (userInput.value.trim() === '') {
        // alert('empty')
        // message.innerHTML = `<div class="alert alert-danger p-2 fw-bold text-center role"alert">Please fill in the empty input!</div>`
        // setTimeout(() => {
        //     message.style.display = 'none'
        // }, 3000);

        toast('Please fill in the empty input!', '#000', '#f00')
    } else {
        allItems.push(userInput.value)
        const stringified = JSON.stringify(allItems)
        localStorage.setItem('items', stringified)
        toast('Item added!', '#000', '#f00')
        userInput.value = ''
        // show.innerHTML = allItems
        showItem()
    }
}

const deleteItem = (index) => {
    const confirmed = confirm('Are you sure you want to delete?')
    console.log(confirmed);
    if (confirmed) {
        const prompting = prompt("Type the word 'DELETE' to confirm you are responsible for this")
        console.log(prompting);
        if (prompting === 'DELETE') {
            allItems.splice(index, 1)
            console.log(allItems);
            const stringified = JSON.stringify(allItems)
            localStorage.setItem('items', stringified)
            showItem()
        } else {
            alert('Type in the correct information')
        }

    } else (
        showItem()
    )
}

const getIndex = (index) => {
    gottenIndex = index
    const editInput = document.getElementById('editItem')
    editInput.value = allItems[gottenIndex]
}

const saveEdit = () => {
    const editInput = document.getElementById('editItem')

    if(editInput.value.trim() === '') {
        toast('Please fill in the empty input!', '#000', '#f00')
    } else {
        // console.log(editInput.value);
        allItems.splice(gottenIndex, 1, editInput.value)
        localStorage.setItem('items', JSON.stringify(allItems))
        toast('Edited Successfully', '#000', '#f00')
        showItem()
    }
}

function showItem() {
    show.innerHTML = ''
    for (let i = 0; i < allItems.length; i++) {
        show.innerHTML += `
        <div class="my-2 row">
           <p class='text-start'>${i + 1}. ${allItems[i]}</p>
              <div class="d-flex gap-2">
                <button class="btn btn-sm btn-danger" Onclick="deleteItem()">Delete</button>
                <button class="btn btn-sm btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" Onclick="getIndex(${i})">Edit</button>
              </div>
        </div>
        `
    }
}

function toast(info, background, color) {
    Toastify({
  text: info,
  duration: 3000,
//   destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: background,
    color: color,
    fontSize: '1rem'
  },
  onClick: function(){} // Callback after click
}).showToast();
}