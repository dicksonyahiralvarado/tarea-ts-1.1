// Ejercicio 3: Arrays

function repetirNombre(nombre: string, veces: number): string[] {
  if (!Number.isInteger(veces) || veces <= 0) return [];
  return Array.from({ length: veces }, () => nombre);
}


// Ejemplo de uso
console.log(repetirNombre("Yahir", 3)); // ["Yahir", "Yahir", "Yahir"]

