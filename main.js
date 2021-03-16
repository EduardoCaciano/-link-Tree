'mode strict'

const links = {
    "nome": "Eduardo da Silva Caciano",
    "img": "MinhaFoto.jpg",
    "links": [
        {
            "titulo": "Linkedin",
            "url": "https://www.linkedin.com/in/eduardo-da-silva-caciano-5b5281206/-silva-caciano-5b5281206.com.br/"
        },
        {
            "titulo": "Instagram",
            "url": "https://www.instagram.com/eduh_caciano_/"
        },
        {
            "titulo": "Whatsapp",
            "url": "https://api.whatsapp.com/send?phone=5511986964639"
        },
        {
            "titulo": "GitHub",
            "url": "https://github.com/EduardoCaciano"
        }
    ]
}

const avatar = document.getElementById('avatar');
avatar.src = links.img;

const titulo = document.getElementById('titulo');
titulo.textContent = links.nome;

const site = document.getElementsByTagName('a')[0]
site.textContent = links.links[0].titulo;
site.href = links.links[0].url;

const site1 = document.getElementsByTagName('a')[1]
site1.textContent = links.links[1].titulo;
site1.href = links.links[1].url;

const site2 = document.getElementsByTagName('a')[2]
site2.textContent = links.links[2].titulo;
site2.href = links.links[2].url;

const site3 = document.getElementsByTagName('a')[3]
site3.textContent = links.links[3].titulo;
site3.href = links.links[3].url;
        



