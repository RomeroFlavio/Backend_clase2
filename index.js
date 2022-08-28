class Usuario{
    constructor(nombre, apellido, libros = [], mascotas = []){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
    }

    getFullName(){
        console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido}`)
    }

    addPet(mascota){
        this.mascotas.push(mascota);
    }

    countPets(){
        console.log(this.mascotas.length);
    }

    addBook(libro, autor){
        this.libros.push({
            libro: libro,
            autor: autor,
        });
    }

    getBookNames(){
        console.log(this.libros.map((lib) => lib.libro));
    }
}

const Usuario1 = new Usuario(
    "Flavio",
    "Romero",
    [
        {
            libro: "Rayuela",
            autor: "julio Cortázar",
        },
        {
            libro: "El Principito",
            autor: "Antoine de Saint-Exupéry",
        },
    ],
    ["Tom", "Felix", "Pedro"],
)

Usuario1.getFullName();
Usuario1.getBookNames();
Usuario1.countPets();

Usuario1.addPet("Dilan");
Usuario1.countPets();

Usuario1.addBook("La sombra del dinosaurio", "Pablo De Santis");
Usuario1.getBookNames();