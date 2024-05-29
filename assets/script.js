const img = document.querySelector('#card_img')
const id = document.querySelector('.id');
const nome = document.querySelector('#nome')

const form = document.querySelector('.form');
const input = document.querySelector('.input')

const specie = document.querySelector('.species');
const gerero = document.querySelector('.gender');
const statos = document.querySelector('.status ');

const btnPrev = document.querySelector('.prev');
const btnNext = document.querySelector('.next');

let point = 1;

const fethApi = async (personagem) =>{

const ApiPersonagem = await fetch(`https://rickandmortyapi.com/api/character/${personagem}`)

if(ApiPersonagem.status === 200){
    const data = await ApiPersonagem.json();
return data;
}

    
}

const renderPersonage = async (personagem) =>{
    nome.innerHTML = '...loading';
    id.innerHTML = '';

    const data = await fethApi(personagem);
    
    if(data){
        img.style.display = 'block'
    nome.innerHTML = data.name;
    id.innerHTML = data.id;
    specie.innerHTML = data.species;
    gerero.innerHTML = data.gender;
    statos.innerHTML = data.status
    img.src = data.image;

    input.value = '';
}
else{
    img.style.display = 'none'
    nome.innerHTML = 'Digite Outro Número'
}
}

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    renderPersonage(input.value)
    
})

btnNext.addEventListener('click', () =>{
    point += 1
    renderPersonage(point)
})

btnPrev.addEventListener('click', () =>{
    if(point > 1){
        point -= 1;
    renderPersonage(point);
    }
    
})
renderPersonage(point)