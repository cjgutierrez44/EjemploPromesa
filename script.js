let id = 0;
url = "https://rickandmortyapi.com/api/character/"

const idInput = document.getElementById("id");
const Cheader = document.getElementById("Cheader");
const Cbody = document.getElementById("Cbody");
const nombre = document.getElementById("nombre");
const foto = document.getElementById("foto");
const errorS = document.getElementById("error");

function promesa(id) {
 return new Promise((resolve, reject)=>{
    fetch(url + id).then(response=>{
        response.json().then(data=>{
            if(data.error != undefined){
                reject(data.error);
            }else{
                resolve(data);
            }
        })
    })
})
}

idInput.onkeyup = function(){
    Cheader.classList.remove("d-none");
    Cbody.classList.remove("d-none");
    id = idInput.value;
    if(id.trim() == ""){
        id = 0;
        return null;
    }
    promesa(id).then(data=>{
        nombre.innerHTML = data.name;
        foto.src = data.image;
        error.classList.add("d-none");
    }).catch(error=>{
        console.error(error);
        nombre.innerHTML = "NO ENCONTRADO";
        foto.src = "https://placehold.co/600x400";
        errorS.classList.remove("d-none");
    }).finally(()=>{
        console.log("fin");
    });
}