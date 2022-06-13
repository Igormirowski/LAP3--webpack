import logo from './logo.png'

function addLogo() {
    const img = document.createElement('img');
    img.alt = 'futureproof logo';
    img.width = 300;
    img.src = logo;
        const body = document.querySelector('body');
        body.appendChild(img);
}


export default addLogo;
