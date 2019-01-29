import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { DashboardComponent } from './dashboard.component';
import { RighttmenuComponent } from './righttmenu/righttmenu.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AccountComponent } from './account/account.component';
import { TrustComponent } from './trust/trust.component';
import { HeaderComponent } from './header/header.component';
import { AuthService as SocialAuthSerive } from 'angularx-social-login/src/auth.service';
import { AuthService } from './../_service/auth.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { SupportsComponent } from './supports/supports.component';
import { MobileComponent } from './account/mobile/mobile.component';
import { KycComponent } from './account/kyc/kyc.component';
import { UploadsComponent } from './account/uploads/uploads.component';
import { TablePaginationComponent } from './table-pagination/table-pagination.component';
import { AssetsComponent } from './assets/assets.component';
import { NgSlimScrollModule, SLIMSCROLL_DEFAULTS } from 'ngx-slimscroll';
import { NgbDateNativeAdapter, NgbDateAdapter, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerAdapter } from './datepicker-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { NgSelectModule } from '@ng-select/ng-select';
import { TransactionNewComponent } from './transaction-new/transaction-new.component';
import { TransactionVideoComponent } from './transaction-video/transaction-video.component';
import { MobileNumberVerificationComponent } from './mobile-number-verification/mobile-number-verification.component';
import { TrustDocumentComponent } from './account/trust-document/trust-document.component';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { InternationalPhoneModule } from 'ng4-intl-phone';
import { TrustService } from './../_service/trust.service'

import { UserService } from '../_service/user.service';
import {TokenService} from '../_service/token.service';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import { KYCService } from './../_service/kyc.service';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule, NgSlimScrollModule, ReactiveFormsModule ,
     NgbModule, FormsModule, OwlModule, NgSelectModule, InternationalPhoneModule,  SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }), ],
  declarations: [
    DashboardComponent,
    RighttmenuComponent,
    LeftmenuComponent,
    AccountComponent,
    NgbdDatepickerAdapter,
    TrustComponent,
    HeaderComponent,
    NotificationsComponent,
    SupportsComponent,
    MobileComponent,
    KycComponent,
    UploadsComponent,
    TablePaginationComponent,
    AssetsComponent,
    TransactionNewComponent,
    TransactionVideoComponent,
    MobileNumberVerificationComponent,
    TrustDocumentComponent,
    AccountSetupComponent,

  ],

  providers: [AuthService, KYCService, TokenService, {

    provide: SLIMSCROLL_DEFAULTS,
    useValue: {
      alwaysVisible : false
    }
  },
    { provide: NgbDateAdapter, useClass: NgbDateNativeAdapter },
    UserService,
    TokenService
  ]
})
export class DashboardModule {}
