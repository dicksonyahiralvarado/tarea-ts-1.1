// Ejercicio 5: Enums y Estructuras de Control

enum DiaSemana {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miércoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sábado",
  Domingo = "Domingo"
}

function esFinDeSemana(dia: DiaSemana): boolean {
  switch (dia) {
    case DiaSemana.Sabado:
    case DiaSemana.Domingo:
      return true;
    default:
      return false;
  }
}


// Pruebas
console.log(esFinDeSemana(DiaSemana.Lunes));   // false
console.log(esFinDeSemana(DiaSemana.Sabado));  // true

