import { Component, OnInit } from '@angular/core';
import { ISlimScrollOptions } from 'ngx-slimscroll';
import { AuthService } from '../../_service/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  page = 0;
  perpage = 10;
  total = 0;
  opts: ISlimScrollOptions ;
  tableDemo: any = [{
    'Description': 'This is an unread notification',
    'Date': 'Eurasian Collared-Dove',
    'Action': 'Action',
    'Status': 'unread'
  },
    {
      'Description': 'This is an unread notification',
      'Date': 'Eurasian Collared-Dove',
      'Action': 'Action',
      'Status': 'unread'
    },
    {
      'Description': 'This is an unread notification',
      'Date': 'Eurasian Collared-Dove',
      'Action': ''
    },
    {
      'Description': 'This is an unread notification',
      'Date': 'Eurasian Collared-Dove',
      'Action': ''
    },
    {
      'Description': 'This is an unread notification',
      'Date': 'Eurasian Collared-Dove',
      'Action': ''
    }];
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
