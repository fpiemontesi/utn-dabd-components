import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pieza',
  templateUrl: './pieza.component.html',
  styleUrls: ['./pieza.component.css']
})
export class PiezaComponent {
  @Input() material: string = 'neumatico';
  @Output() onAgregarMaterialClick = new EventEmitter<string>();

  agregarPieza() {
    this.onAgregarMaterialClick.emit('Hola padre');
  }
}
