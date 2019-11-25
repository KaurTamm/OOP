let eesNimi;
let pereNimi;
let vanus;

function taisNimi(eesNimi, pereNimi){
    return `${eesNimi} ${pereNimi}`;
}

function arvutaVanus(vanus){
    vanus = new Date(vanus);
    diff = Date.now() - vanus.getTime();
    vanusDate = new Date(diff);
    aastaDate = vanusDate.getUTCFullYear();
    age = aastaDate - 1970;
    return `Vanus : ${age}`;
}

console.log(taisNimi("Kaur", "Tamm"));
console.log(arvutaVanus("1995-02-19"));