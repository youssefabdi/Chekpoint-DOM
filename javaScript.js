 

let plusbtn = document.getElementsByClassName('plusBtn')
for (let i = 0; i < plusbtn.length; i++) {
    plusbtn[i].addEventListener('click',function(e){
        let qte=e.target.previousElementSibling
        console.log(qte)
        qte.innerHTML=+ (qte.innerHTML) +1
        let price=e.target.nextElementSibling.nextElementSibling.nextElementSibling
        let unitPrice=e.target.nextElementSibling
        price.innerHTML = +(unitPrice.innerHTML) * parseInt(qte.innerHTML) 
        UpdateTotalPrice()
    })
}
let sustraction = document.getElementsByClassName('sustraction-btn')
for (let i = 0; i < sustraction.length; i++) {
    sustraction[i].addEventListener('click',function(e){
        let qte=e.target.nextElementSibling
       if (qte.innerHTML>0){
        qte.innerHTML=+(qte.innerHTML) -1
       }
        
        let price=e.target.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling
        let unitPrice=e.target.nextElementSibling.nextElementSibling.nextElementSibling
        price.innerHTML = +(unitPrice.innerHTML) * parseInt(qte.innerHTML) 
         UpdateTotalPrice()
    })
    
}

function UpdateTotalPrice(){
    let price=document.getElementsByClassName('price')
    let total=0;
    for (let i = 0; i< price.length; i++) {
      total +=parseInt(price[i].innerHTML)     
    }
    let totalprice=document.getElementById('totalPrice')
    totalprice.innerHTML= total
}
var heartBtn = document.getElementsByClassName('fa-heart')
for (let el of heartBtn ) {
    el.addEventListener('click',function(e){
        e.target.classList.toggle('red')
    })
}
