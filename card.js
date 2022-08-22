let formEle = document.forms[0]
const div = document.getElementById('info')
console.log(div)
// const divsec = document.getElementsByTagName('div')[2]
// const divthird = document.getElementsByTagName('div')[3]
// const para = document.getElementsByTagName('div')[0]


formEle.addEventListener('submit', function(event){
    event.preventDefault();

    let form = event.currentTarget;

    let formData = new FormData(form)

    let obj = Object.fromEntries(formData.entries())

    localStorage.details = JSON.stringify(obj)
    displayData(obj)

    formEle.reset()
})


function displayData(data){
    let obj_length = Object.keys(data).length;
    
    // console.log{obj_length}
    for(let i = 0; i < obj_length; i++){
        let obj_key = Object.keys(data)[i]
        let obj_value = data[`${obj_key}`]
        
        div.children[i].innerText = `${obj_key.toUpperCase()} : ${obj_value}`
    }
    
}

let mainImg = document.getElementsByClassName('design')[0]

let template = document.getElementsByClassName('mainTemp')
let temp = [...template[0].children]

temp.forEach((element, index)=>{
    element.addEventListener("click" , ()=>{


        if (index == 0){
            mainImg.setAttribute("src", "./bizimg.jpg")
        }
       else if (index == 1){
            mainImg.setAttribute("src", "./image2.jpg")
        }
        else if (index == 2){
            mainImg.setAttribute("src", "./design.webp")
        }
    })
})


// function screenshot(){
// console.log('download')
//     html2canvas(document.querySelector("#info")).then(canvas => {
//         // window.print(canvas)
//         document.body.appendChild(canvas)
//     });
// }
function screenshot(){
    var opt = {
        margin:       1,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
const element = document.getElementsByClassName("bizCard")[0];
html2pdf()
.set(opt)
.from(element)
.save()

}



