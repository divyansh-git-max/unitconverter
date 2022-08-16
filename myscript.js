var feet = document.getElementById('feet');


var cm = document.getElementById('cm');




feet.addEventListener('input', function(){
    let f = this.value;
    

    let c = f*30.48;

    cm.value = c;
});

cm.addEventListener('input', function(){
    let c = this.value;
    

    let f = c/30.48;

    if(!Number.isInteger(f)){
        f = f.toFixed(2);
    }

    feet.value = f;

});

