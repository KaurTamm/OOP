// Class

class Isik{
    // Constructor
    constructor(e, p){
        this.eesnimi = e;
        this.perenimi = p;
    };
    // Tervitus
    tervitus(){
        return `Tere, ${this.eesnimi} ${this.perenimi}!`
    };
};

class Klient extends Isik{
    // Constructor
    constructor(e, p, t, s){
        super(e, p);
        this.telefon = t;
        this.status = s;
    };
    // Static method
    static kuutasu(){
        return 5;
    };
};

const kaur = new Klient('Kaur', 'Tamm', '1234 5678', 'silver');
console.log(kaur.tervitus());
console.log(Klient.kuutasu());