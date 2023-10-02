import '../scss/app.scss';


const serveursFavoris = [];
const favorisBtn = document.querySelectorAll('.btn');

favorisBtn.forEach(bouton => {
    bouton.addEventListener('click', () => {

        const serveurItem = bouton.closest('.serveurItem');
        const estFavori = serveursFavoris.includes(serveurItem);
        

        if (estFavori) {
            const index = serveursFavoris.indexOf(serveurItem);
            serveursFavoris.splice(index, 1);
            bouton.style.backgroundColor = '';
            serveurItem.style.backgroundColor = '';
            window.alert('Serveur n est plus favori !');
            
            
        } else {
            serveursFavoris.push(serveurItem);
            bouton.style.backgroundColor = 'pink';
            serveurItem.style.backgroundColor = 'green';
            serveurItem.style.color = 'black';
            window.alert('Serveur marqué comme favori !');
        }
        
    });
});





