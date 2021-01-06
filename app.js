console.log('JavaScript Connected!')

// Select <span> from indexe.html
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const num3 = document.querySelector('#num3');
const btn  = document.querySelector('#btn');


// fucntion to get a new number each time
function num(){
    let random1 = Math.floor(Math.random() * 3) + 1
    let random2 = Math.floor(Math.random() * 3) + 1
    let random3 = Math.floor(Math.random() * 3) + 1

    if(random1 == 3 && random2 == 3 && random3 == 3){
        alert('you win');
    }else if(random1 == 2 && random2 == 2 && random3 == 2){
        alert('Oh That was close!');
    }else if(random1 == 1 && random2 == 1 && random3 == 1){
        alert('Oh That was close!');
    }
    // console.log(random)
    num1.textContent = random1
    num2.textContent = random2
    num3.textContent = random3
}


btn.addEventListener("click", function(){num()});





