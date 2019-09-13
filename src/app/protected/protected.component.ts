import { Component, OnInit } from '@angular/core';
import {Reservation} from "./reservation";

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss']
})
export class ProtectedComponent implements OnInit {

  hours = ['2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM',
  '12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM',
  '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM', '1:30 PM', '2:00 PM'];
  persons = ['1 Persona', '2 Personas', '3 Personas', '4 Personas', '5 Personas', '6 Personas', '7 Personas',
    '8 Personas', '9 Personas', '10 Peronas', '11 Personas', '12 Personas', '13 Personas', '14 Personas',
  '15 Personas', '16 Personas', '17 Personas', '18 Personas', '19 Personas', '20 Personas'];

  opcionFecha: '0';
  opcionReservacion: '0';
  opcionPersonas: '0';
  verFecha  = '';
  verReservacion = '';
  verPersonas: '0';
  reservation: Reservation;
  constructor() {
  }

  ngOnInit() {
  }

      guardar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
        debugger;
        this.reservation = new Reservation();
        this.reservation.fecha = this.opcionFecha;
        this.reservation.cantidadDePersonas = this.opcionPersonas;
        this.reservation.hora = this.opcionReservacion;
        window.localStorage.setItem('reservation', JSON.stringify(this.reservation));
   // console.log(this.verFecha);
  }


  showReservation() {
    // Pasamos el valor seleccionado a la variable verSeleccion
  debugger;
    this.reservation = JSON.parse( window.localStorage.getItem('reservation'));
    // console.log(this.verFecha);
  }
}
