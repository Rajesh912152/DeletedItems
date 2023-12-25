let rootEl=document.getElementById('root');

let headingEl=document.createElement('h1')
headingEl.textContent="Your ordered Items"
headingEl.classList.add('heading')
rootEl.appendChild(headingEl)

let unorderedEl=document.createElement('ul');
rootEl.appendChild(unorderedEl)

let itemsContainer=[
    {
    itemName: "Veg Biryani",
    uniqueNo: 1,
},
{
    itemName: "Chicken 65",
    uniqueNo: 2,
},
{
    itemName: "Paratha",
    uniqueNo: 3,
}
]

function removeEl(liId){
    let liIdEl=document.getElementById(liId)
    unorderedEl.removeChild(liIdEl)
}
function additems(item){
    let liId="li"+item.uniqueNo
    let paraId="paraId"+item.uniqueNo
    let btnId="btnId"+item.uniqueNo

    let orderedList=document.createElement('li')
    orderedList.id=liId
    orderedList.classList.add('d-flex','flex-row','justify-content-center',"mb-3")
    unorderedEl.appendChild(orderedList)

    let paraEl=document.createElement('p')
    paraEl.textContent=item.itemName
    paraEl.classList.add('para')
    paraEl.id=paraId
    orderedList.appendChild(paraEl)

    let btnEl=document.createElement('button')
    btnEl.classList.add('btn','btn-danger')
    btnEl.id=btnId
    btnEl.textContent="Cancle"
    orderedList.appendChild(btnEl)

    btnEl.onclick=function(){
        removeEl(liId)
    }
}

for (let item of itemsContainer){
    additems(item)
}