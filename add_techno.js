const technonameField = document.querySelector('#techno-name');
const technoDescriptionField = document.querySelector('#techno-description');
const technoUrlField = document.querySelector('#techno-url');
const addTechnoForm = document.querySelector('#add-techno-form');

addTechnoForm.addEventListener('submit', evt => {
    evt.preventDefault();
    
    const payload = {
        id: Date.now(), // On ajoute l'id pour notre FASS
        name: technonameField.value,
        description: technoDescriptionField.value,
        url: technoUrlField.value
    }


    fetch('https://us-central1-pwa-technos-lisa.cloudfunctions.net/addTechno', {  
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(resp => {
            console.log(resp);
        })
        .catch(err =>console.error);
})
