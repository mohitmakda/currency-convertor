const firstCurrencyEl = document.getElementById("currency-worth-first")

const secondCurrencyEl = document.getElementById("currency-worth-second")

const worthFirstEl = document.getElementById("worth-first")

const worthSecondEl  = document.getElementById("worth-second")

const exchangeRateEl = document.getElementById("para")

updateRate()


function updateRate(){
   fetch(`https://v6.exchangerate-api.com/v6/eaf85bf1e84d8479712bae1b/latest/${firstCurrencyEl.value}`).then((res)=>res.json()).then((data)=>{
    const rate = data.conversion_rates[secondCurrencyEl.value]
    console.log(rate)
    // eaf85bf1e84d8479712bae1b
 
    exchangeRateEl.innerText= `1 ${firstCurrencyEl.value} = ${rate + " " + secondCurrencyEl.value}`


    worthSecondEl.value=(worthFirstEl.value*rate)
    
   });
}

firstCurrencyEl.addEventListener("change",updateRate)

secondCurrencyEl.addEventListener("change",updateRate)

worthFirstEl.addEventListener("change",updateRate)

