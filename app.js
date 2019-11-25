// Class

class Isik{
    // Constructor
    constructor(e, p, skp){
        this.eesnimi = e;
        this.perenimi = p;
        this.synnikuupaev = new Date(skp);
    };
    // Tervitus
    tervitus(){
        return `Tere, ${this.eesnimi} ${this.perenimi}!`
    };
    // Vanuse arvutamine
    vanus(){
        let diff = Date.now() - this.synnikuupaev.getTime();
        diff = new Date(diff);
        diff = diff.getUTCFullYear();
        return diff - 1970;
    };
    abielus(uusPereNimi){
        this.perenimi = uusPereNimi;
        return this.perenimi;
    };
}

const kaur = new Isik('Kaur', 'Tamm', '1995-02-19');

console.log(kaur.vanus());
kaur.abielus('Random');
console.log(kaur.tervitus());