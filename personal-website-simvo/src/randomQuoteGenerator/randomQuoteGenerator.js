const randomQuoteGeneratorElement = document.getElementById('random-quote-generator');
const quoteTextElement = document.getElementById('random-quote-text');
const quoteAuthorElement = document.getElementById('random-quote-author');
const quoteStatusElement = document.getElementById('random-quote-status');
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
    try {
        if (quoteStatusElement) {
            quoteStatusElement.innerText = 'Loading quote...';
        }
        if (quoteTextElement) {
            quoteTextElement.innerText = '';
        }
        if (quoteAuthorElement) {
            quoteAuthorElement.innerText = '';
        }

        const response = await fetch('https://text-analysis-tool-en1g.onrender.com/api/quotes');
        if (!response.ok) {
            throw new Error(`Quote API responded with ${response.status}`);
        }

        const data = await response.json();
        if (!Array.isArray(data) || data.length === 0) {
            throw new Error('Quote API returned no quotes');
        }

        const randomQuote = data[Math.floor(Math.random() * data.length)];
        const quoteText = randomQuote.text || 'Quote unavailable.';
        const quoteAuthor = randomQuote.author ? randomQuote.author.replace(', type.fit', '') : 'Unknown';

        if (quoteTextElement) {
            quoteTextElement.innerText = quoteText;
        }
        if (quoteAuthorElement) {
            quoteAuthorElement.innerText = quoteAuthor;
        }
        if (quoteStatusElement) {
            quoteStatusElement.innerText = '';
        }

        const colorCombo = getRandomColorCombo();
        if (randomQuoteGeneratorElement) {
            randomQuoteGeneratorElement.style.background = 'linear-gradient(45deg, ' + colorCombo[0] + ', ' + colorCombo[1] + ')';
        }
    } catch (error) {
        if (quoteStatusElement) {
            quoteStatusElement.innerText = 'Failed to load quote. Please try again.';
        }
        console.error('Error fetching quote:', error);
    }
}