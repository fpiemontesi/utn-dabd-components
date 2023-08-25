import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit, AfterViewInit, OnDestroy {
  ngOnDestroy(): void {
  }
  marca: string = '';

  ngOnInit() {
    this.marca = 'Chevrolet';
  }

  ngAfterViewInit(): void {
    this.marca = 'Jeep';
  }
}
