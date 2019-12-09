// Raamat
class Raamat{
    constructor(a, p, i){
        this.autor = a;
        this.pealkiri = p;
        this.isbn = i;
    };
};

// Kasutajaliides
class KL{
    puhastaSisend(){
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    };
    lisaRaamatTabelisse(r){
        const rida = document.createElement('tr');
        // täidame rida tabeli andmetega
        rida.innerHTML = `
          <td>${r.pealkiri}</td>
          <td>${r.autor}</td>
          <td>${r.isbn}</td>
          <td><a href="#" class="kustuta">X</a></td>
        `;
        // lisame rida tabelisse
        const tabel = document.getElementById('book-list');
        tabel.appendChild(rida);
    };
    teade(s, stiil){
        const div = document.createElement('div');
        div.className = `alert ${stiil}`;
        // lisame sõnumi tekst divi sisse
        const tekst = document.createTextNode(s);
        div.appendChild(tekst);
        // leiame elemendid, mille suhtes tuleb lisada uus element
        const konteiner = document.querySelector('.container');
        const vorm = document.getElementById('book-form');
        // lisame teade dokumendi
        konteiner.insertBefore(div, vorm);
      
        // kustutame teade 5 sekundi möödumisel
        setTimeout(function(){ 
          document.querySelector('.alert').remove();
         }, 5000);
    };
    kustutaRaamatTabelist(kustutaElement){
        if(kustutaElement.className === 'kustuta'){
            const tabeliRida = kustutaElement.parentElement.parentElement;
            tabeliRida.remove();
            return true;
          };
    };
};

// kirjeldame raamatu lisamise sündmust
document.getElementById('book-form').addEventListener('submit', lisaRaamat);
// raamatu lisamise funktsioon
function lisaRaamat(e){
  // võtame andmed vormist
  const pealkiri = document.getElementById('title').value;
  const autor = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // loome raamat andmete põhjal
  const raamat = new Raamat(autor, pealkiri, isbn);

  // loome kasutaja liidese objekt temaga opereerimiseks
  const kl = new KL();

  // kui mingid andmed on puudu, 
  // siis anname märku
  if(pealkiri == '' | autor == '' | isbn == ''){
    kl.teade('Tuleb täita kõik väljad!', 'invalid');
  } else {
    // muidu
    // lisame sisestatud raamat tabelisse
    console.log(raamat);
    kl.lisaRaamatTabelisse(raamat);

    // loome LS objekt funktsionaali kutsumiseks
    //const ls = new LS();                                      !!!

    // salvestame raamatu andmed LS-sse
    //ls.salvestaRaamat(raamat);                                !!!
    // anname teade lisamisest
    kl.teade('Raamat on lisatud!', 'valid');
  }

  // puhastame väljad sisestatud andmetest
  kl.puhastaSisend();
  e.preventDefault();
};

// raamatu kustutamise sündmus
document.getElementById('book-list').addEventListener('click', kustutaRaamat);

function kustutaRaamat(e){
  // loome kasutaja liidese objekt temaga opereerimiseks
  const kl = new KL();

  // kutsume tabelis oleva raamatu kustutamise
  // funktsioon
  // loome X link, millel clickime kustutamiseks
  const X = e.target;
  // saame kustutava raamatu isbn kätte
  isbn = X.parentElement.previousElementSibling.textContent;
  // kustutame andmed tabeli väljundist
  kl.kustutaRaamatTabelist(X);

  // loome LS objekt funktsionaali kutsumiseks
  //const ls = new LS();                                        !!!

  // kustutame andmed LS-st
  //onKustutatud = ls.kustutaRaamatLS(isbn);                    !!!
  
  // väljastame vastav teade
  //if(onKustutatud){                                           !!!
   kl.teade('Raamat on kustutatud', 'valid');
  //}                                                           !!!
  
  e.preventDefault();
};
