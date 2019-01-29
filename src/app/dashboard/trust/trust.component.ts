import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ISlimScrollOptions, SlimScrollEvent } from 'ngx-slimscroll';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.component.html',
  styleUrls: ['./trust.component.scss']
})
export class TrustComponent implements OnInit {
  opts: ISlimScrollOptions ;
  page = 0;
  perpage = 10;
  total = 0;
  defaultBindingsList = [
    { value: 1, label: 'Vilnius' },
    { value: 2, label: 'Kaunas' },
    { value: 3, label: 'Pavilnys'}
 ];
  transactions: any = [{
    'WishType': 'Payment',
    'Description': 'Transfer BTC to the following wallet add...',
    'Date': '12-12-2018',
    'TrusteeFee': '00.00',
    'Status': 'Submitted'
  },
  {
    'WishType': 'Payment',
    'Description': 'Transfer BTC to the following wallet add...',
    'Date': '12-12-2018',
    'TrusteeFee': '00.00',
    'Status': 'Submitted'
  },
  {
    'WishType': 'Payment',
    'Description': 'Transfer BTC to the following wallet add...',
    'Date': '12-12-2018',
    'TrusteeFee': '00.00',
    'Status': 'Submitted'
  },
  {
    'WishType': 'Payment',
    'Description': 'Transfer BTC to the following wallet add...',
    'Date': '12-12-2018',
    'TrusteeFee': '00.00',
    'Status': 'Submitted'
  },
  {
    'WishType': 'Payment',
    'Description': 'Transfer BTC to the following wallet add...',
    'Date': '12-12-2018',
    'TrusteeFee': '00.00',
    'Status': 'Submitted'
  }];
  constructor(private modalService: NgbModal, public authService: AuthService ) { }

  ngOnInit() {
    this.opts = {
      position: 'right',
      barBackground: "#c2c7e3",
      gridBackground: "#f5f5f5",
      barWidth: '8',
    };
  }
  paginate(page) {
    console.log(page);

    // this.data['data'] = this.dataSource.slice(start, end);
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
