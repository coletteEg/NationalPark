let addBtn = document.querySelectorAll('button')
let message = document.querySelector('#message')

function addPark(event) {
    event.preventDefault()
    console.log(event.target)
    let park = event.target.id
    console.log(park)
    axios.post('http://localhost:4000/bucket/add', {park}).then(response => {
        console.log(response.data)
        let {data} = response
        let newList= document.querySelector('ul')
        newList.innerHTML = ''
        for(i = 0; i < data.length; i++){
            let list = document.createElement('li')
            list.textContent = data[i]
            document.querySelector(".myBucket").appendChild(list)
            deleteBtn = document.createElement("button")
            deleteBtn.textContent = "delete"
            list.appendChild(deleteBtn)
            deleteBtn.addEventListener('click', deletePark)
            list.addEventListener('click', crossOffPark)

        }

    })


}

for(let i = 0; i < addBtn.length; i++){
    addBtn[i].addEventListener("click", addPark)
}
console.log(addBtn)

let deletePark = (event) => {
    let bye = event.target
    let byePark = bye.parentNode.textContent
    byePark = byePark.split("")
    for(i = 0; i < 6; i++){
        byePark.pop()
    }
    byePark = byePark.join("")
    axios.delete(`/bucket/delete/${byePark}`).then(response => {
        let {data} = response
        let newList= document.querySelector('ul')
        newList.innerHTML = ''
        for(i = 0; i < data.length; i++){
            let list = document.createElement('li')
            list.textContent = data[i]
            document.querySelector(".myBucket").appendChild(list)
            deleteBtn = document.createElement("button")
            deleteBtn.textContent = "delete"
            list.appendChild(deleteBtn)
            deleteBtn.addEventListener('click', deletePark)
            list.addEventListener('click', crossOffPark)

}})


}
let crossOffPark = (event) => {
    event.target.classList.toggle("checked")
    if(event.target.classList.contains("checked")){
        message.textContent="You've visited this park!"
    }else {
        message.textContent="Park has been added back to unvisited parks"
    }
}

