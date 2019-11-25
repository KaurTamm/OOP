// Constructor

function Isik(e, p){
    this.ees = e;
    this.pere = p;
};

// Object.prototype

Isik.prototype.taisNimi = function(){
    return `${this.ees} ${this.pere}`
};

function Klient(e, p, t, s){
    Isik.call(this, e, p);
    this.tel = t;
    this.status = s;
};

Klient.prototype = Object.create(Isik.prototype);
Klient.prototype.constructor = Klient;

Klient.prototype.taisNimi = function(){
    return `${this.ees} ${this.pere} - sinul on ${this.status} tase`
}

const kaur = new Klient('Kaur', 'Tamm', '1234 5678', 'silver');
console.log(kaur);
console.log(kaur.taisNimi());