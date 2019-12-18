document.getElementById('btn1').addEventListener('click', getTextData);
document.getElementById('btn2').addEventListener('click', getJsonData);
document.getElementById('btn3').addEventListener('click', getApiData);

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

// Remote API
function getApiData(){
    fetch('https://api.github.com/users').then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let out = '';
        data.forEach(function(users){
            out = out + `<li>${users.login}<br>`
            out = out + `<img src="${users.avatar_url}" width="100px"></li>`
        })
        document.getElementById('out').innerHTML = out;
    })
    .catch(function(error){
        console.log(error);
    });
};