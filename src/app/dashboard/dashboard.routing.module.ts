import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {  DashboardComponent} from './dashboard.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AccountComponent } from './account/account.component';
import { TrustComponent } from './trust/trust.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SupportsComponent } from './supports/supports.component';
import { AssetsComponent } from './assets/assets.component';
import {MobileComponent} from './account/mobile/mobile.component';
import {KycComponent} from './account/kyc/kyc.component';
import { TransactionNewComponent } from './transaction-new/transaction-new.component';
import { TransactionVideoComponent } from './transaction-video/transaction-video.component';
import { MobileNumberVerificationComponent } from './mobile-number-verification/mobile-number-verification.component';
import { TrustDocumentComponent } from './account/trust-document/trust-document.component';
import { AccountSetupComponent } from './account-setup/account-setup.component';
import { UploadsComponent } from './account/uploads/uploads.component';


const routes: Routes = [
    { path: 'home', component: DashboardComponent},
    { path: '', component: DashboardComponent},
    { path: 'account', component: AccountComponent},
    { path: 'my-trust', component: TrustComponent},
    { path: 'assets', component: AssetsComponent},
    { path: 'notifications', component: NotificationsComponent},
    { path: 'support', component: SupportsComponent},
    { path: 'kyc', component: KycComponent},
    { path: 'mobile-verifications', component: MobileComponent},
    { path: 'upload-documents', component: UploadsComponent},
    { path: 'transaction-new', component: TransactionNewComponent},
    { path: 'transaction-video', component: TransactionVideoComponent},
    { path: 'send-btc-to-trust', component: MobileNumberVerificationComponent},
    { path: 'trust-documents', component: TrustDocumentComponent},
    { path: 'account-setup', component: AccountSetupComponent},

];

@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)]
})
export class DashboardRoutingModule { }
