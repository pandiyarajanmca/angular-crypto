import { Component, OnInit } from '@angular/core';
import { ISlimScrollOptions } from 'ngx-slimscroll';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.scss']
})
export class AssetsComponent implements OnInit {
  opts: ISlimScrollOptions ;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: '#c2c7e3',
      gridBackground: '#f5f5f5',
      barWidth: '8',
    };
  }

}
