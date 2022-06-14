import './hello-auguste.css'

class HelloAuguste {
    buttonCssClass = 'hello-button'

    render() {
        const button = document.createElement('button');
        button.textContent = 'Hello Auguste';
        button.onclick = function () {
            const p = document.createElement('p');
            p.textContent = "Morning Igor";
            p.classList.add('hello-text')
        document.body.appendChild(p);     
    }
    button.classList.add(this.buttonCssClass);
    document.body.appendChild(button);
}
}


export default HelloAuguste;
