function crearheader() {
    let header1 = document.createElement('header');
    header1.className = "titulo2";
    header1.innerText = "Jennifer Gonzalez";

    
    let div = document.createElement('div');
    div.className = "divc";

    header1.appendChild(div); 

    return header1;
}

document.body.appendChild(crearheader());

export {
    crearHeader
}
