import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre',
  templateUrl: './nombre.component.html',
  styleUrls: ['./nombre.component.scss']
})
export class NombreComponent implements OnInit {

  nombre = ''

  constructor() { }

  borrarCampos() {
    this.nombre = ''
  }

  ngOnInit(): void {
  }

}
