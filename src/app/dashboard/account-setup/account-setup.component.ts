import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormArray, FormGroup } from '@angular/forms';
import { AuthService } from '../../_service/auth.service';
import { TrustService } from '../../_service/trust.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import {Router} from '@angular/router';

@Component({
  selector: 'app-account-setup',
  templateUrl: './account-setup.component.html',
  styleUrls: ['./account-setup.component.scss']
})
export class AccountSetupComponent implements OnInit {
  updateValue;
  successMsg;
  errMsg = "Something went wrong";

  accountSetupForm: any;
  @ViewChild('successSwal') private successSwal: SwalComponent;
  @ViewChild('errorSwal') private errorSwal: SwalComponent;
  constructor(
    private formBuilder: FormBuilder, 
    public authService: AuthService,
    public trustService: TrustService,
    private router: Router,

    ) { }

  ngOnInit() {
    
    this.accountSetupForm = this.formBuilder.group({
      trustName: ['', Validators.required],
      trustPeriod: ['', Validators.required],
      trustEstablishmentAmount: ['', Validators.required],
      protector: ['', Validators.required],
      fundManager: ['', Validators.required],
      alternativeContact: ['', Validators.required]
    });
  }

  accountSetup(){
    this.updateValue = {
      name: this.accountSetupForm.value.trustName,
      period: this.accountSetupForm.value.trustPeriod,
      establishmentAmount: this.accountSetupForm.value.trustEstablishmentAmount,
      protector: this.accountSetupForm.value.protector,
      type: 'A1',
      fundManager: this.accountSetupForm.value.fundManager,
      alternativeContact: this.accountSetupForm.value.alternativeContact,
      paymentStatus: 'PENDING',
      status: 'PENDING',       
    }

    this.trustService.trustSetup(this.updateValue)
      .subscribe( (response) => {
        if (response.status === true) {
          this.successMsg = response.message;
          this.accountSetupForm.reset();
          setTimeout(() => {
            this.successSwal.show();
          }, 300);
        } else {
          this.errMsg = response.message;
          setTimeout(() => {
            this.errorSwal.show();
          }, 300);
        }
          
      },
      (err) => {
        this.errMsg = err;
          setTimeout(() => {
            this.errorSwal.show();
          }, 300);
      });

  }

}
