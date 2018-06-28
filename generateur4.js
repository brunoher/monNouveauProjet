
/*var kaamelottSegments = {
    quoteStart: [
        "Hé ben,",
        "J'suis pas une spécialiste,",
        "Par exemple,",
        "Une fois pour toutes,",
        "Incandescente, c'est :"
    ],
    quoteMid: [
        " si un jour j'oublie que je suis boniche,",
        " mais à mon avis, là,",
        " quand elle est partie du jour au lendemain sans prévenir,",
        " le nord, selon comme on est tourné,",
        " qui peut accaparer des objets"
    ],
    quoteEnd: [
        " vous serez gentil de me le rappeler!",
        " vous allez mourir.",
        " elle s'est conduite comme la reine des putes.",
        " ça change tout!",
        " sans resurgir sur autrui."
    ]
};

var classicSegments = {
    quoteStart: [
        "Choisissez un travail que vous aimez",
        "J'ai appris que le courage",
        "La victoire obtenue par la violence",
        "En politique,",
        "L'art de la médecine"
    ],
    quoteMid: [
        " et vous n'aurez pas à travailler",
        " n'est pas l'absence de peur,",
        " équivaut à une défaite,",
        " on succède à des imbéciles",
        " consiste à distraire le malade"
    ],
    quoteEnd: [
        " un seul jour de votre vie.",
        " mais la capacité de la vaincre.",
        " car elle est momentanée.",
        " et on est remplacé par des incapables.",
        " pendant que la nature le guérit."
    ]
};

var segmentsByTheme = {
    kaamelott: kaamelottSegments,
    classique: classicSegments
};



function generateByTheme () {
    var choice = prompt("Choisissez un thème entre Classique et Kaamelott");
    if (choice) {
        choice = choice.toLowerCase();
    } else {
        console.log("Au revoir !");
        return;
    }    

    var quoteSegments = segmentsByTheme[choice];
    
    if (!quoteSegments) {
        console.log("Veuillez entrer Classique ou Kaamelott");
        generateByTheme();
        return;
    } 
    
    generateMultipleQuotes(quoteSegments);     
    
}


function generateIndex(length) {
    return Math.floor(Math.random() * length);
}


function restart() {
    var redo = confirm("Voulez-vous générer de nouvelles citations?");
    if (redo) {
        generateByTheme();
    }
    else {
        console.log("Merci et à bientôt!");
    }
}


function generateMultipleQuotes(quoteSegments) {
    var quotesNumber = Number(prompt("Combien de citations (entre 1 et 5) souhaitez-vous générer?"));
    if ((quotesNumber > 1) && (quotesNumber <= 5)) {
        for (var i = 0; i < quotesNumber; i++) {
            generateQuote(quoteSegments);
        }

    }
    else {
        console.log("Veuillez entrer un chiffre entre 1 et 5.");
    } 
    restart();
}


function generateQuote(quoteSegments) {
    var indexStart = generateIndex(quoteSegments.quoteStart.length);
    var indexMid = generateIndex(quoteSegments.quoteMid.length);
    var indexEnd = generateIndex(quoteSegments.quoteEnd.length);
    var quote = quoteSegments.quoteStart[indexStart] + quoteSegments.quoteMid[indexMid] + quoteSegments.quoteEnd[indexEnd];
    console.log(quote);

}

generateByTheme();
*/


var slider = document.getElementById('slider-container');

function initSlider() {
    for (var i = 1; i < 4; i ++) {
        var img = document.createElement('img');
        img.src = 'images/imageSlider'+i+'.jpg';
        img.className = 'image-slider';
        slider.appendChild(img);
    }
}

initSlider();

var btnLeft = document.getElementById('btn-left');
var btnRight = document.getElementById('btn-right');

var currentImage = 1;

btnRight.addEventListener('click', function(){
    var marginLeft = '-' + (100 * currentImage) + '%';
    slider.style.marginLeft = marginLeft;
    currentImage ++;
});

btnLeft.addEventListener('click', function(){
    var marginLeft = (100 * currentImage) + '%';
    slider.style.marginLeft = marginLeft;
    currentImage ++;
})




