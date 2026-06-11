const allItem = []
const addItem = () => {
    const itemAdd = document.getElementById('items')
    if (itemAdd.value === '') {
        alert('hissss')
    } else {
        allItem.unshift (itemAdd.value)
        console.log(allItem);
        itemAdd.value = ''
        show.innerHTML = ''
        for (let i=0; i<allItem.length; i++) {
            show.innerHTML += `<p>${i+1}. ${allItem[i]}</p>`
        }
    }
}


// Splice

const arr = [1,2,3,4,5]
arr.splice(2,1, 'pepper')
console.log(arr);