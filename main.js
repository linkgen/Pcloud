// Declare currentCorrectKey as a global variable
const currentCorrectKey = ['pixel', 'logic', 'codec', 'cloud', 'crash', 'debug', 'stack'][(new Date().getUTCDay() + 6) % 7];

function convertLink() {
    const linkInput = document.getElementById('link-input').value;
    const linkKey = document.getElementById('link-key').value.toLowerCase();
    
    // Check if the entered link matches the expected pattern
    const regex = /^https:\/\/u.pcloud.link\/publink\/show\?code=([\w-]+)$/;
    const match = linkInput.match(regex);

    if (match) {
        // Valid link format
        const code = match[1]; // Extract the code from the link
        const encodedCode = encodeCode(code);

        // Get the current UTC day (0 for Sunday, 1 for Monday, etc.)
        const today = (new Date().getUTCDay() + 6) % 7; 

        // Define the expected keys based on UTC day
        const expectedKeys = ['pixel', 'logic', 'codec', 'cloud', 'crash', 'debug', 'stack'];
        const currentDomain = window.location.origin;

        if (linkKey === expectedKeys[today]) {
            const convertedLink = `${currentDomain}/Pcloud/?id=${encodedCode}`; // Replace 'example.com' with your domain
            document.getElementById('link-input').style.display = 'none';
            document.getElementById('link-key').style.display = 'none';
            document.getElementById('getKeyButton').style.display = 'none';
            document.querySelector('.btn-get-started').style.display = 'none';
            const resultsContainer = document.getElementById('results');
            resultsContainer.style.display = 'block';
            resultsContainer.querySelector('#convertedLink').textContent = convertedLink;
            document.getElementById('conversionStatus').textContent = 'Link Converted Successfully';
            document.getElementById('conversionStatus').classList.add("success");
        } else {
            document.getElementById('conversionStatus').textContent = 'Wrong Key Entered';
            document.getElementById('conversionStatus').classList.add("invalid");
        }
    } else {
        // Invalid link format
        document.getElementById('conversionStatus').textContent = 'Entered Invalid Link';
        document.getElementById('conversionStatus').classList.add("invalid");
    }
}

function encodeCode(code) {
    // Define the character mapping for encoding
    const charMapping = {
        A: 'S', B: 'T', C: 'U', D: 'V', E: 'W', F: 'X', G: 'Y', H: 'Z',
        I: 'A', J: 'B', K: 'C', L: 'D', M: 'E', N: 'F', O: 'G', P: 'H',
        Q: 'I', R: 'J', S: 'K', T: 'L', U: 'M', V: 'N', W: 'O', X: 'P',
        Y: 'Q', Z: 'R',
        a: 's', b: 't', c: 'u', d: 'v', e: 'w', f: 'x', g: 'y', h: 'z',
        i: 'a', j: 'b', k: 'c', l: 'd', m: 'e', n: 'f', o: 'g', p: 'h',
        q: 'i', r: 'j', s: 'k', t: 'l', u: 'm', v: 'n', w: 'o', x: 'p',
        y: 'q', z: 'r',
        '1': '8', '2': '3', '3': '1', '4': '0', '5': '9',
        '6': '2', '7': '4', '8': '5', '9': '6', '0': '7'
    };
    
    // Encode the code using the character mapping
    const encodedChars = Array.from(code).map(char => charMapping[char] || char);
    return encodedChars.join('');
}

function copyToClipboard() {
    const convertedLink = document.getElementById('convertedLink').textContent;
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = convertedLink;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert('Link copied to clipboard!');
}

function openshrtlink() {
    // Define the mapping of keys to URLs
    const keyToURL = {
        'pixel': 'https://shrinkforearn.xyz/9SGmZLE',
        'logic': 'https://shrinkforearn.xyz/LD2NPbbt',
        'codec': 'https://shrinkforearn.xyz/s2TUf2',
        'cloud': 'https://shrinkforearn.xyz/HTJX',
        'crash': 'https://shrinkforearn.xyz/R6Vvx8',
        'debug': 'https://shrinkforearn.xyz/5N36',
        'stack': 'https://shrinkforearn.xyz/o2ymcUAD'
    };

    // Check if the currentCorrectKey is in the mapping
    if (currentCorrectKey in keyToURL) {
        // Open the corresponding URL in a new tab/window with no referrer
        window.open(keyToURL[currentCorrectKey], '_blank', 'noreferrer');
    }
}
