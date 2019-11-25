// Raamatu constructor
function Raamat(p, a, i){
    this.pealkiri = p;
    this.author = a;
    this.isbn = i;
};

// Kasutaja liidese constructor
function UI(){

};

UI.prototype.puhastaSisend = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
};

UI.prototype.lisaRaamatTabelisse = function(r){
    const rida = document.createElement('tr');
    rida.innerHTML = `
    <td>${r.pealkiri}</td>
    <td>${r.author}</td>
    <td>${r.isbn}</td>
    `;
    tabel = document.getElementById('book-list');
    tabel.appendChild(rida);
};

UI.prototype.teade = function(s){
    const div = document.createElement('div');
    const tekst = document.createTextNode(s);
    div.appendChild(tekst);
    const container = document.querySelector('.container');
    const vorm = document.getElementById('book-form');
    container.insertBefore(div, vorm);
};

document.getElementById('book-form').addEventListener('submit', lisaRaamat);

// Raamatu lisamise funktsioon

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const raamat = new Raamat(pealkiri, author, isbn);
    console.log(raamat);

    const ui = new UI();

    if(pealkiri == '' || author == '' || isbn == ''){
        ui.teade('Tule täita kõik väljad!');
    }else{
        ui.lisaRaamatTabelisse(raamat);
        ui.teade('Raamat on lisatud!');
    };
    
    ui.puhastaSisend();

    e.preventDefault();
};