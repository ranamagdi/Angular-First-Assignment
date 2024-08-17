import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  userName: string = '';
  showDetails: boolean = false;
  buttonText: string = 'Display Details';
  clickLog: string[] = [];
  clickCount: number = 0;
  itemsStyle={
    'background-color': 'blue'
  }
  onReset(): void {
    this.userName = '';
    this.logClick();
  }

  toggleDetails(): void {
    this.showDetails = !this.showDetails;
    this.buttonText = this.showDetails ? 'Hide Details' : 'Display Details';
    this.logClick();
  }

  checkEmptyOrNot(): boolean {
    return this.userName.trim() === '';
  }

  logClick(): void {
    this.clickCount++;
    const timestamp = new Date().toLocaleTimeString();
    this.clickLog.push(`Click ${this.clickCount} at ${timestamp}`);
  }

}
