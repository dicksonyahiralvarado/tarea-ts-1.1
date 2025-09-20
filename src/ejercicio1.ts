// Ejercicio 1: Interfaces, Enums y Tipos de Unión

enum EstadoProducto {
  Disponible = "Disponible",
  Agotado = "Agotado",
  Descontinuado = "Descontinuado"
}

type IDProducto = string | number;

interface Producto {
  id: IDProducto;
  nombre: string;
  precio: number;
  estado: EstadoProducto;
  descripcion?: string;
}

function mostrarDetallesProducto(p: Producto): void {
  console.log("--- Detalles del Producto ---");
  console.log(`ID: ${p.id}`);
  console.log(`Nombre: ${p.nombre}`);
  console.log(`Precio: L ${p.precio.toFixed(2)}`);
  console.log(`Estado: ${p.estado}`);
  if (p.descripcion) {
    console.log(`Descripción: ${p.descripcion}`);
  }
  console.log("-----------------------------\n");
}

const productoNum: Producto = {
  id: 101,
  nombre: "Mouse",
  precio: 250.5,
  estado: EstadoProducto.Disponible,
  descripcion: "Mouse USB"
};

const productoStr: Producto = {
  id: "SKU-2025",
  nombre: "Teclado",
  precio: 850,
  estado: EstadoProducto.Agotado
};

mostrarDetallesProducto(productoNum);
mostrarDetallesProducto(productoStr);

