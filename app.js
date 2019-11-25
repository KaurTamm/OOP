// Constructor

function Isik(e, p, skp){
    this.ees = e;
    this.pere = p;
    this.synnikuupaev = new Date(skp);

    this.taisNimi = function(){
        return `${this.ees} ${this.pere}`
    };

    this.getAge = function(){
        const diff = Date.now() - this.synnikuupaev.getTime();
        const vanusDateKujul = new Date(diff);
        const taisAasta = vanusDateKujul.getUTCFullYear();
        const vanus = taisAasta - 1970;
        return vanus;
    };
};

const kaur = new Isik('Kaur', 'Tamm', '1995-02-19');
console.log(kaur);
console.log(kaur.getAge());