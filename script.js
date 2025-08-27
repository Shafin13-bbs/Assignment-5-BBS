console.log('file working')


// Heart Icon Click Handler

const heartIcons = document.getElementsByClassName('heart-icons')
for(const heart of heartIcons){
    heart.addEventListener('click',function(){
       const initialHeart = parseInt(document.getElementById('initial-heart').innerText)
       const addedHearts = initialHeart + 1
       document.getElementById('initial-heart').innerText = addedHearts
    })
}