import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-protected-component',
  templateUrl: './protected-component.component.html',
  styleUrls: ['./protected-component.component.scss']
})
export class ProtectedComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
