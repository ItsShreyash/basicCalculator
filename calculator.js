var butt = document.querySelectorAll('button');

let store = "";
Array.from(butt).forEach((buttons)=>{
    buttons.addEventListener('click',(e)=>{
        // console.log(buttons.value);
        if(buttons.value == "="){
            document.querySelector('input').value = eval(store);
            store = eval(store);
        }
        else if(buttons.value == 'C') {
            store = "";
            document.querySelector('input').value = store;
        }
        else{
            store = store + buttons.value;
            document.querySelector('input').value = store;
        }
        
    });
});
