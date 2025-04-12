
const output = document.getElementById('terminal-output');

const lines = [
    '> RUN GPT69INDEX.EXE',
    '> MEME SCAN INITIALIZING...',
    '> █████████░ 96%',
    '> FOUND: 69 TOP MEME COINS UNDER $1B',
    '> DEPLOY INDEX? [Y/N]'
];

let index = 0;
let charIndex = 0;

function typeLine() {
    if (index < lines.length) {
        const line = lines[index];
        output.textContent += line[charIndex] || '';

        charIndex++;
        if (charIndex === line.length) {
            output.textContent += '\n';
            index++;
            charIndex = 0;
            setTimeout(typeLine, 500);
        } else {
            setTimeout(typeLine, 50);
        }
    }
}

typeLine();
