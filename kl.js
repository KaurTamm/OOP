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
    naitaRaamatud(){
        const ls = new LS();
        // vaatame, millised raamatud on olemas
        const raamatud = ls.loeRaamatud();
        raamatud.forEach(function(raamat){
          // loeme andmed LS-st ühekaupa
          // ja teisendame Raamat objektiks
          const r = new Raamat(raamat['autor'], raamat['pealkiri'], raamat['isbn']);
          // Loome kl objekt väljastamiseks
          const kl = new KL();
          // väljastame tabeli rida
          kl.lisaRaamatTabelisse(r);
        });
    };
};