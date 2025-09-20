// Ejercicio 4: Clases y Métodos

class CuentaBancaria {
  readonly titular: string;
  private saldo: number = 0;

  constructor(titular: string) {
    this.titular = titular;
  }

  depositar(monto: number): void {
    if (!isFinite(monto) || monto <= 0) {
      console.error("Error: el monto a depositar debe ser un número positivo.");
      return;
    }
    this.saldo += monto;
    console.log(`Depósito: L ${monto.toFixed(2)} | Saldo actual: L ${this.saldo.toFixed(2)}`);
  }

  retirar(monto: number): void {
    if (!isFinite(monto) || monto <= 0) {
      console.error("Error: el monto a retirar debe ser un número positivo.");
      return;
    }
    if (monto > this.saldo) {
      console.error("Error: saldo insuficiente.");
      return;
    }
    this.saldo -= monto;
    console.log(`Retiro: L ${monto.toFixed(2)} | Saldo actual: L ${this.saldo.toFixed(2)}`);
  }

  consultarSaldo(): void {
    console.log(`Saldo de ${this.titular}: L ${this.saldo.toFixed(2)}`);
  }
}


// Ejemplo
const cuenta = new CuentaBancaria("Empresa Alvarado");
cuenta.depositar(1000);
cuenta.retirar(250);
cuenta.consultarSaldo();

