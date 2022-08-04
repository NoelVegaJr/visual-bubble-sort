const array = document.querySelector('.array');


function createArray(count=100) {
    
    for(let i=0; i < count; i++){
        const number = Math.floor(Math.random()*100)+1;
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${number * 5}px`;
        bar.setAttribute('data-number', number);
        array.appendChild(bar);
    }
}

async function swapStyles(element1, element2) {
    return new Promise(resolve => {
        let temp = element1.style.height;
        element1.style.height = element2.style.height;
        element2.style.height = temp;

        resolve();
    })
}



async function bubbleSort() {
    const elements = document.querySelectorAll('.bar');
    
    for(let i=0; i < elements.length; i++) {
        for(let j=0; j < elements.length - i - 1; j++) {
            const val1 = Number.parseInt(elements[j].style.height);
            const val2 = Number.parseInt(elements[j + 1].style.height);

            elements[j].style.backgroundColor = 'red';
            elements[j + 1].style.backgroundColor = 'red';
            await new Promise(resolve => {
                setTimeout(()=> {
                    resolve();
                },100)
            })

            if(val1 > val2) {
               await swapStyles(elements[j], elements[j + 1])
            }

            elements[j].style.backgroundColor = 'purple';
            elements[j + 1].style.backgroundColor = 'purple';
        }
        elements[elements.length - i - 1].style.backgroundColor = 'green';
    }
    
}


createArray(60);
bubbleSort();


