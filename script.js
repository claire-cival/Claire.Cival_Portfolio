// message de bienvenue
document.addEventListener('DOMContentLoaded', () => {
  console.log("Bienvenue sur mon portfolio !");
  // alert("Bienvenue sur mon portfolio !");
});

// effet “pulse” sur le bouton Home au scroll (optionnel)
const btn = document.querySelector('.btn');
btn.addEventListener('mouseenter', () => btn.classList.add('pulse'));
btn.addEventListener('mouseleave', () => btn.classList.remove('pulse'));

