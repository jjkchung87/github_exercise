const btn = document.querySelector('button');
const body = document.querySelector('body');


body.addEventListener('click',function(event){
    if(event.target === btn) {
        console.log('clicked')
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        body.style.backgroundColor = `rgb(${r},${g},${b})`
        // body.style.backgroundColor = 'black'   }
}})

