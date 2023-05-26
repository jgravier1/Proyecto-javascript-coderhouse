

# Proyecto de JavaScript - CoderHouse

## Comisión :51885

- Alumno: Juan Camilo Gravier Ortega
- Profesor: Omar Jesús Maniás
- Tutor: Fernando Moyano

## Descripción del proyecto

mi primera entrga del proyecto de JavaScript, un juego de papel y tijera interactivo en el que el usuario juega contra la computadora. Para ello, utilizo condicionales, ciclos y funciones en JavaScript

```javascript
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🪨"
    } else if (jugada == 2) {
        resultado = "Papel 📃"
    } else if (jugada == 3) {
        resultado = "Tijera ✂️"
    } else {
        resultado = "MAL ELEGIDO"
    }
    return resultado
```

## Enlaces

- [LinkedIn](https://www.linkedin.com/in/JuanCamiloGravierOrtega/)

- [Instagram](https://www.instagram.com/juancamilogravier/?next=%2F)

