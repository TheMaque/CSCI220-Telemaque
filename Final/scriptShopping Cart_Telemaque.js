function eventListeners(){
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
    });
}

function loadJSON(){
    fetch('item.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
       data.forEach(product => {
           console.log(product);
       })

    })
}   
       