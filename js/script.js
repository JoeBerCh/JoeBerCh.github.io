$(document).ready(function () {
    $('.card-display').slick({
        autoplay: true,
        dots: false,
        arrows: false
    });
});

const tarotCards = [
    { name: 'El Loco', image: 'https://www.odiseajung.com/wp-core-files/images/2015/02/fool-219x400.jpg', message: 'El Loco indica nuevas aventuras, decisiones impulsivas y libertad.' },
    { name: 'El Mago', image: 'https://acdn.mitiendanube.com/stores/002/304/650/products/mci-2834589788415292739-fbc33fa659059627df17010588644126-640-0.jpg', message: 'El Mago sugiere creatividad, habilidades y la capacidad de manifestar tus deseos.' },
    { name: 'La Sacerdotisa', image: 'https://miistico.com/wp-content/uploads/2021/12/la-suma-sacerdotisa-tarots.jpeg', message: 'La Sacerdotisa simboliza sabiduría interior, intuición y conocimiento oculto.' },
    { name: 'La Emperatriz', image: 'https://gcdn.emol.cl/tarot-y-suenos/files/2012/01/tarot-emperatriz.jpg', message: 'La Emperatriz representa fertilidad, naturaleza y abundancia.' },
    { name: 'El Emperador', image: 'https://i.pinimg.com/originals/97/ae/0c/97ae0c289ad3b9de6e54be5b4c6f97dc.jpg', message: 'El Emperador simboliza autoridad, poder y estructura en la vida.' },
    { name: 'El Sumo Sacerdote', image: 'https://i.pinimg.com/474x/a1/e8/a2/a1e8a2b6f989232e8378f84b8f0bcf50.jpg', message: 'El Sumo Sacerdote indica tradición, espiritualidad y aprendizaje.' },
    { name: 'Los Enamorados', image: 'https://ih1.redbubble.net/image.2869110842.4811/st,small,845x845-pad,1000x1000,f8f8f8.u3.jpg', message: 'Los Enamorados representan el amor, la unión y decisiones importantes en las relaciones.' },
    { name: 'El Carro', image: 'https://mantenlosimple.com/wp-content/uploads/2023/04/el-carro-tarot.jpeg', message: 'El Carro indica éxito a través de la determinación y el control.' },
    { name: 'La Justicia', image: 'https://mantenlosimple.com/wp-content/uploads/2023/05/justicia-tarot-rider.jpg', message: 'La Justicia representa la verdad, el equilibrio y la imparcialidad.' },
    { name: 'El Ermitaño', image: 'https://mantenlosimple.com/wp-content/uploads/2023/04/ermitano-tarot.jpeg', message: 'El Ermitaño simboliza la introspección, la búsqueda de sabiduría y el retiro espiritual.' },
    { name: 'La Rueda de la Fortuna', image: 'https://e7.pngegg.com/pngimages/891/338/png-clipart-wheel-of-fortune-rider-waite-tarot-deck-major-arcana-rota-fortunae-taro-destiny-cartoon.png', message: 'La Rueda de la Fortuna sugiere cambios, ciclos y el destino en movimiento.' },
    { name: 'La Fuerza', image: 'https://i.pinimg.com/550x/d3/74/ec/d374ec9e3c174cbe2087754b68960dab.jpg', message: 'La Fuerza simboliza coraje, paciencia y el control sobre las pasiones.' },
    { name: 'El Colgado', image: 'https://i.pinimg.com/474x/29/02/51/2902514bd3b30f5f1019dd3499d498ec.jpg', message: 'El Colgado sugiere sacrificio, una nueva perspectiva o un momento de pausa.' },
    { name: 'La Muerte', image: 'https://ih1.redbubble.net/image.652391447.4707/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg', message: 'La Muerte no es el fin, sino una transformación profunda y nuevos comienzos.' },
    { name: 'La Templanza', image: 'https://2.bp.blogspot.com/-ziKyXXJ07-A/UCO3weKpOVI/AAAAAAAABMs/UGbTY15WjYk/s1600/14.jpg', message: 'La Templanza simboliza el equilibrio, la moderación y la armonía en la vida.' },
    { name: 'El Diablo', image: 'https://mantenlosimple.com/wp-content/uploads/2023/05/diablo-tarot-rider.jpg', message: 'El Diablo sugiere ataduras, obsesiones o estar atrapado en hábitos negativos.' },
    { name: 'La Torre', image: 'https://cursosdetarot.cl/assets/galeria/blog/3/16.jpg', message: 'La Torre representa cambios repentinos, crisis y liberación de estructuras viejas.' },
    { name: 'La Estrella', image: 'https://mantenlosimple.com/wp-content/uploads/2023/05/estrella-tarot.png?w=640', message: 'La Estrella trae esperanza, inspiración y una guía luminosa en momentos difíciles.' },
    { name: 'La Luna', image: 'https://cdn.pixabay.com/photo/2021/05/13/06/39/tarot-6249977_1280.jpg', message: 'La Luna simboliza ilusiones, el inconsciente y la confusión emocional.' },
    { name: 'El Sol', image: 'https://mantenlosimple.com/wp-content/uploads/2023/05/sol-tarot-rider.jpg', message: 'El Sol es claridad, éxito y la llegada de nuevas oportunidades brillantes.' },
    { name: 'El Juicio', image: 'https://mantenlosimple.com/wp-content/uploads/2023/05/juicio-tarot-rider.jpg', message: 'El Juicio indica una llamada a despertar, una evaluación de la vida y nuevos comienzos.' },
    { name: 'El Mundo', image: 'https://mantenlosimple.com/wp-content/uploads/2023/05/el-mundo-tarot.jpeg', message: 'El Mundo simboliza la realización, el cumplimiento y el cierre de ciclos.' }
];

function drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * tarotCards.length);
    const selectedCard = tarotCards[randomIndex];

    document.getElementById('cardImage').src = selectedCard.image;
    document.getElementById('cardImage').alt = selectedCard.name;
    document.getElementById('cardMessage').textContent = selectedCard.message;
}

document.getElementById('drawCard').addEventListener('click', drawRandomCard);

// Variable
const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list-container');
let on_off = true;

const gallery = document.querySelectorAll('.gallery-content .img-card img');
const modal = document.querySelector('.modal');
const imgModal = document.querySelector('#imgModal');
const caption = document.querySelector('#caption');

// Responsive Menu
btnMenu.addEventListener('click', () => {

    if (on_off) {
        menu.style.left = "auto";
        menu.style.transition = "300ms";
        on_off = false;
    } else {
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "300ms";
        on_off = true;
    }

});

// Gallery
gallery.forEach((images) => {

    images.addEventListener('click', (event) => {
        modal.style.display = "block";

        let srcImg = event.target.src;
        let altImg = event.target.alt;

        imgModal.src = srcImg;
        caption.innerHTML = altImg;

    });

});

// Close Modal
document.querySelector('#closeModal').addEventListener('click', () => {
    modal.style.display = "none";
});