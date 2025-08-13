const url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
const userInput =document.querySelector(".amount input")
const select = document.querySelectorAll(".select-container select")

for(let x of select){
    for(let y in countryList){
        let option =document.createElement("option")
        option.innerHTML=y
        option.value=y
        x.append(option)
    }
    x.addEventListener("change",(event)=>{
        let val=event.target.value
  let img = event.target.parentElement.querySelector("img")
        img.src=`https://flagsapi.com/${countryList[val]}/flat/64.png`
    })
}

const btn=document.querySelector("button")
btn.addEventListener("click",changeMsg)
 async function changeMsg(e){
    e.preventDefault()
    const msg=document.querySelector(".msg")
    const input=userInput.value
    const from=select[0].value
    const to =select[1].value
    let newUrl=`${url}/${from.toLowerCase()}.json`
    let data=await (await fetch(newUrl)).json()
    let exchangeValue=data[`${from.toLowerCase()}`][`${to.toLowerCase()}`]
    msg.innerHTML=`${input} ${from} = ${exchangeValue*input} ${to}`
 }
 function defaultLoad(e) {
    select[0].value="USD"
    select[1].value="INR"
    changeMsg(e)
 }
 window.addEventListener("load",defaultLoad)

 