
// Heart Icon Click Handler

const heartIcons = document.getElementsByClassName('heart-icons')
for(const heart of heartIcons){
    heart.addEventListener('click',function(){
       const initialHeart = parseInt(document.getElementById('initial-heart').innerText)
       const addedHearts = initialHeart + 1
       document.getElementById('initial-heart').innerText = addedHearts
    })
}

// Copy Button Click Handler

const copyButton = document.getElementsByClassName('copy-button')
for(const copy of copyButton){
    copy.addEventListener('click',function(){
       const initialCopy = parseInt(document.getElementById('initial-copy').innerText)
       const addedCopy = initialCopy + 1
       document.getElementById('initial-copy').innerText = addedCopy
       alert('Number Copied')
    })
}


// Copy save system Implement

document.getElementById('all-cards').addEventListener('click',function(e){
    const copied = e.target
    const serviceNumber = copied.parentNode.parentNode.children[2].children[0].innerText
    if(copied.className.includes('copy-button')){
        navigator.clipboard.writeText(serviceNumber)
    }
})






// Call Button event handler

document.getElementById('all-cards').addEventListener('click',function(e){
    const callBtn = e.target
    const serviceName = callBtn.parentNode.parentNode.children[1].children[0].innerText
    const serviceNumber = callBtn.parentNode.parentNode.children[2].children[0].innerText
    const coins = parseInt(document.getElementById('coins').innerText)
    const now = new Date()
    if(callBtn.className.includes('call-btn')){
        if(coins >= 20){
            alert(`Service Name: ${serviceName}\nService Number: ${serviceNumber}\nIt will reduce 20 coins`)
            const presentCoin = coins - 20
            document.getElementById('coins').innerText = presentCoin
        }
        else{
            alert("Your don't have enough coins for call\nPlease collect coins")
            return
        }
        
        const callHistory = document.getElementById('call-history')
        const updatedHistory = document.createElement('div')
        updatedHistory.innerHTML = `
        <div class="flex justify-between items-center my-4 p-3 rounded-xl bg-slate-200">
        <div>
        <h1 class="font-bold text-[17px] w-45">${serviceName}</h1>
        <h1 class=" text-xm">${serviceNumber}</h1>
        </div>
        <div>
        <p>${now.toLocaleTimeString('en-US', { timeZone: 'Asia/Dhaka' })}</p>
        </div>
        </div>
        `
        callHistory.append(updatedHistory)
    }
})

document.getElementById('clear-btn').addEventListener('click',function(){
    const callHistory = document.getElementById('call-history')
    callHistory.innerHTML = ''
})