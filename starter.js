// Define the mapping from the provided format
        const formatMapping = {
            S: 'A', T: 'B', U: 'C', V: 'D', W: 'E', X: 'F', Y: 'G', Z: 'H', A: 'I', B: 'J', C: 'K', D: 'L',
            E: 'M', F: 'N', G: 'O', H: 'P', I: 'Q', J: 'R', K: 'S', L: 'T', M: 'U', N: 'V', O: 'W', P: 'X',
            Q: 'Y', R: 'Z', s: 'a', t: 'b', u: 'c', v: 'd', w: 'e', x: 'f', y: 'g', z: 'h', a: 'i', b: 'j',
            c: 'k', d: 'l', e: 'm', f: 'n', g: 'o', h: 'p', i: 'q', j: 'r', k: 's', l: 't', m: 'u', n: 'v',
            o: 'w', p: 'x', q: 'y', r: 'z', '8': '1', '3': '2', '1': '3', '0': '4', '9': '5', '2': '6', '4': '7',
            '5': '8', '6': '9', '7': '0'
        };

        // Function to decode the text
        function decodeText(encodedText) {
            let decodedText = "";
            for (const char of encodedText) {
                if (formatMapping[char]) {
                    decodedText += formatMapping[char];
                } else {
                    decodedText += char;
                }
            }
            return decodedText;
        }

        // Function to get URL parameter by name
        function getUrlParameter(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }

        // Get the "id" parameter from the URL
        const idParam = getUrlParameter("id");

        // Make a fetch request after decoding
        if (idParam) {
            const decodedText = decodeText(idParam);

            const fetchUrl = `https://u.pcloud.link/publink/show?code=${decodedText}`;
            const headers = {
                'Referer': '',
                // Add any other headers as needed
            };

            fetch(fetchUrl, { headers })
                .then(response => response.text())
                .then(data => {
                    const match = data.match(/"downloadlink": "(.*?)"/);
                    if (match) {
                        const downloadLink = match[1].replace(/\\\//g, '/');
                        window.location.replace(downloadLink); // redirect to the download link
                    } else {
                        console.error("Download link not found in response data.");
                    }
                })
                .catch(error => {
                    console.error("Fetch request failed:", error);
                });
        } else {
            console.error("No 'id' parameter found in the URL.");
        }