import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss'],
})
export class SuccessAlertComponent implements OnInit {
  employeeID = 202210;
  employeeName = 'Kiran';

  allowServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = '';
  serverCreated = false;
  serverID = 10;
  serverStatus = '';
  servers = ['testserver', 'testserver 2'];

  userName = '';

  showSecret = false;
  log: any = [];

  constructor() {
    setTimeout(() => {
      this.allowServer = true;
    }, 2000);

    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
  }

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  getEmployeeId() {
    return this.employeeName;
  }

  OnCreateServer(): void {
    this.serverCreationStatus = 'New server is created ';
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onCreateServerName(event: Event): void {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  onRegisterUser(event: any): void {
    this.userName = (event.target as HTMLInputElement).value;
  }

  getServerStatus(): any {
    return this.serverStatus;
  }

  getColor(): any {
    return this.serverStatus === 'Online' ? 'green' : 'red';
  }

  // tslint:disable-next-line:typedef
  addToggle(): any {
    this.showSecret = !this.showSecret;
    this.log.push(new Date());
  }
}
