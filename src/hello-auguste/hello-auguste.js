class HelloAuguste {
    render() {
        const button = document.createElement('button');
        button.textContent = 'Hello Auguste';
        button.onclick = function () {
            const p = document.createElement('p');
            p.textContent = "Motning Auguste";
        document.body.appendChild(p);     
    }
    
    document.body.appendChild(button);
}
}


export default HelloAuguste;
