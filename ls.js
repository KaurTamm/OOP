class LS{
    loeRaamatud(){
        let raamatud;
        // kui raamatud veel LS-s ei eksisteeri
        if(localStorage.getItem('raamatud') === null){
          raamatud = [];
        } else {
          // kui aga raamatud juba olemas, saame need kätte
          raamatud = JSON.parse(localStorage.getItem('raamatud'));
        }
        return raamatud;
    };
    salvestaRaamat(r){
        const raamatud = this.loeRaamatud();
        // lükame uue raamatud andmed massiivi
        raamatud.push(r);
        // lisame andmed LS-sse
        localStorage.setItem('raamatud', JSON.stringify(raamatud));
    };
    kustutaRaamatLS(isbn){
        const raamatud = this.loeRaamatud();
        raamatud.forEach(function(raamat, index){
          // loeme andmed LS-st ühekaupa
          // ja võrdleme
          if(raamat.isbn === isbn){
            raamatud.splice(index, 1); // kustutame valitud element
          }
        });
        // lisame andmed LS-sse
        localStorage.setItem('raamatud', JSON.stringify(raamatud));
        // kinnitame kustutamist teade väljastamiseks
        return true;
    };
};