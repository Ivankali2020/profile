
function loop(className){
    for (let i = 0; i < 7; i++) {
        let rec = document.createElement('div');
        let parRec = document.createElement('div');
        let box = document.getElementById(className);
        console.log(className);
        box.append(parRec);
        parRec.classList.add('d-flex');
        parRec.setAttribute('id',className+i)
        parRec.append(rec);
        rec.classList.add('rec');
        for (let j = 0; j < 3 ; j++) {
            let rec = document.createElement('div');
            let par = document.getElementById(className+i);
            par.append(rec);
            rec.classList.add('rec');
        }
    }
}

loop('box');
loop('boxTwo');