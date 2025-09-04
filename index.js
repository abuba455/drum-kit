// let numberOfButtons = document.querySelectorAll('.drum').length

// for(let i = 0; i < numberOfButtons; i++){
//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//         alert('i got clicked')
//     })
// }

let button = document.querySelectorAll('.drum').forEach(button => {
//addEventListner does 2 things
//what event to listen to 
//what it should dos

    document.addEventListener('click', () => {

       let audio = new Audio('sounds/tom-1.mp3')
       audio.play()

    })

})



