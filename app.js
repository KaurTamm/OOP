// Raamatu constructor
function Raamat(p, a, i){
    this.pealkiri = p;
    this.author = a;
    this.isbn = i;
};

document.getElementById('book-form').addEventListener('submit', lisaRaamat);

// Raamatu lisamise funktsioon

function lisaRaamat(e){
    const pealkiri = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const raamat = new Raamat(pealkiri, author, isbn);
    console.log(raamat);
    
    e.preventDefault();
};