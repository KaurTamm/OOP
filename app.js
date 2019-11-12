// document
let sisu;
sisu = document;                    // Sisu HTMLis
sisu = document.all;                // HTML tagid kasutamis järjekorras
sisu = document.all[2];             // Konkreetne HTML tag
sisu = document.all.length;         // Palju on HTML tage kasutusel
sisu = document.head;               // Head sisu
sisu = document.body;               // Body sisu
sisu = document.doctype;            // Doctype
sisu = document.domain;             // Domeen
sisu = document.URL;                // URL
sisu = document.charset;            // Character set
sisu = document.contentType;        // Sisu tüüp

// form
sisu = document.forms;              // Kõik formid
sisu = document.forms[0];           // Esimene form
sisu = document.forms[0].id;        // Esimese formi id
sisu = document.forms[0].method;    // Form method
sisu = document.forms[0].action;    // Form action

// links
sisu = document.links;              // Kõik lingid
sisu = document.links[0];           // Esimene link
sisu = document.links[0].className; // Esimese lingi klassid
sisu = document.links[0].classList; // Esimese lingi klasside list
console.log(sisu);