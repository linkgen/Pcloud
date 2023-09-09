// Check if "?id=" is present in the URL
            if (window.location.href.includes('?id=')) {
                // If "?id=" is present, change the h1 content
                document.querySelector('#hero h1').innerHTML = '<h1>STARTING  <span>DOWNLOAD </span></h1>';
                // Remove the elements you mentioned
                document.querySelector('#conversionStatus').style.display = 'none';
                document.querySelector('form').style.display = 'none';

document.getElementById('getKeyButton').style.display = 'none';

                document.querySelector('#results').style.display = 'none';
            }
