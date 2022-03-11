let felinos = document.querySelectorAll(".item"); //peguei os post felinos e armazenei na variavel felinos


felinos.forEach(felino => { // removi os posts
    felino.style.display = "none";
});

function criarPost (url, titulo, desc){ // criar uma function que crie um item 
    //let html = '<div class="item"><img src="' + url + '"><h2>' + titulo + '</h2><p>' + desc + '</p></div>';
    let div = document.createElement("div");
    div.className = "item";

    let img = document.createElement("img");
    img.setAttribute("src", url);
    div.appendChild(img);

    let h2 = document.createElement("h2");
    h2.innerText = titulo;
    div.appendChild(h2);

    let p = document.createElement("p");
    p.innerText = desc;
    div.appendChild(p);

    let container = document.querySelectorAll(".container");

    container[1].appendChild(div);
}


//criar varios items
criarPost("https://picsum.photos/430/430?grayscale", "Lorem picsum 2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?blur", "Lorem picsum 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?blur=2", "Lorem picsum 3", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?grayscale&blur=2", "Lorem picsum 4", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?random=1", "Lorem picsum 5", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
criarPost("https://picsum.photos/430/430?random=2", "Lorem picsum 6", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex sequi nemo unde? Recusandae, sequi repellendus quisquam officiis itaque amet");
