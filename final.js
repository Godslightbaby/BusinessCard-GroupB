let final = JSON.parse(localStorage.getItem('details'))
const div = document.getElementById('info')
console.log(div)

let counter = 0;

for(let key in final){
    div.children[counter].innerText= `${key.toUpperCase()} : ${final[key]}`

    counter++
}