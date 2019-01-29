import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_service/auth.service'
import { Router, ActivatedRoute } from '@angular/router';
import { TokenService } from '../../_service/token.service';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  menu_active: any = 'verificaionPage'; // for give active class to resgister menu for register-verificaion url
  code = String;
  flag = false;
  invalidFlag = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private tokenService: TokenService
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.code = params['activationCode'];
    });
  }

  ngOnInit() {
    if (this.code) {
      this.authService.verifyEmail({ activationCode: this.code })
        .subscribe(
          (result) => {
            this.flag = true
          },
          (err) => {
            if(err.code == 404){
               this.invalidFlag = true;
            }else
            this.tokenService.processError('[register]', err)
          }
        )
    }

  }

}
