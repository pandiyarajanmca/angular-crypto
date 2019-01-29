import { Component, OnInit } from '@angular/core';
import { ISlimScrollOptions } from 'ngx-slimscroll';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-mobile-number-verification',
  templateUrl: './mobile-number-verification.component.html',
  styleUrls: ['./mobile-number-verification.component.scss']
})
export class MobileNumberVerificationComponent implements OnInit {
  opts: ISlimScrollOptions ;
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: "#c2c7e3",
      gridBackground: "#f5f5f5",
      barWidth: '8',
    };

  }

}
