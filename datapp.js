document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);

// Local Text
function getTextData(){
    fetch('text.txt').then(function(res){
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById('out').innerHTML = data;
    })
    .catch(function(error){
        console.log(error);
    });
};


// Local JSON
function getJsonData(){
    fetch('data.json').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let out = '';
        data.forEach(function(timetable){
            out = out + `<li>${timetable.aine} (${timetable.opetaja})</li>`;
            console.log(out);
        });
        document.getElementById('out').innerHTML = out;
    })
    .catch(function(error){
        console.log(error);
    });
};