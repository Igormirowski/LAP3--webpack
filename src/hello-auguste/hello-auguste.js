import './hello-auguste.class'

class HelloAuguste {
    render() {
        const button = document.createElement('button');
        button.textContent = 'Hello Auguste';
        button.onclick = function () {
            const p = document.createElement('p');
            p.textContent = "Motning Auguste";
            p.classList.add('hello-text')
        document.body.appendChild(p);     
    }
    button.classList.add('hello-button');
    document.body.appendChild(button);
}
}


export default HelloAuguste;
