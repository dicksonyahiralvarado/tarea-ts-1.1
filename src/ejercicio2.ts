// Ejercicio 2: Interfaces y Objetos

interface Usuario {
  nombre: string;
  edad: number;
  email?: string;
}

function imprimirUsuario(u: Usuario): void {
  console.log("--- Usuario ---");
  console.log(`Nombre: ${u.nombre}`);
  console.log(`Edad: ${u.edad}`);
  console.log(`Email: ${u.email ?? "No proporcionado"}`);
  console.log("---------------\n");
}

const usuario1: Usuario = { nombre: "Yahir Alvarado", edad: 22 };
const usuario2: Usuario = { nombre: "Dickson Serrano", edad: 25, email: "dickson@yahoo.com" };

imprimirUsuario(usuario1);
imprimirUsuario(usuario2);

