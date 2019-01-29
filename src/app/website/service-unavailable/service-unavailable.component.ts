import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-unavailable',
  templateUrl: './service-unavailable.component.html',
  styleUrls: ['./service-unavailable.component.scss']
})
export class ServiceUnavailableComponent implements OnInit {
  menu_active: any = 'verificaionPage'; // for give active class to resgister menu for service-unavailable url
  constructor() { }

  ngOnInit() {
  }

}
