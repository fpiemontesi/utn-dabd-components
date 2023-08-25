import { Component } from '@angular/core';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent {
  saludo: string = 'Hola mundo';
  nombre: string = 'Franco';
  nombrePieza: string = 'Ruleman';

  mostrarAlerta(valor: string) {
    alert(valor)
  }

  actualizarNombre(nuevoNombre: string) {
    this.nombre = nuevoNombre;
  }

  actualizarValorNombre($evento: any) {
    this.nombre = $evento.target.value;
    console.log(this.nombre);
  }

  agregarPieza(mensaje: string) {
    alert('El hijo me dice: ' + mensaje);
  }
}
