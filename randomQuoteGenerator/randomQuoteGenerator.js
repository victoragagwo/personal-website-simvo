const randomQuoteGeneratorElement = document.getElementById('random-quote-generator');
const colors = [
    [ "#FF8080", "#FFCF96" ],
    [ "#96FF96", "#96FFFF" ],
    [ "#9696FF", "#96b4ffff" ],
    [ "#FFFF96", "#FF9696" ],
    [ "#FFB347", "#FF6961" ],
    [ "#77DD77", "#AEC6CF" ],
    [ "#CBAACB", "#FFB347" ],
    [ "#F49AC2", "#B39EB5" ],
    [ "#FF6961", "#77DD77" ],
    [ "#AEC6CF", "#F49AC2" ],
    [ "#B39EB5", "#CBAACB" ],
    [ "#FFCF96", "#FF8080" ]
];
function getRandomColorCombo() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}
async function getNewRandomQuote() {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
        alert('There was a problem getting a new quote!');
        return;
    }
    const data = await response.json();
    
    const quoteText = data.content;
    const quoteAuthor = data.author;
    document.getElementById('random-quote-text').innerHTML = quoteText;
    document.getElementById('random-quote-author').innerHTML = quoteAuthor;

    const colorCombo = getRandomColorCombo();
    randomQuoteGeneratorElement.style.background = 'linear-gradient(45deg, ' + colorCombo[0] + ', ' + colorCombo[1] + ')';
}