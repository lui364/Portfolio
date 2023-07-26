import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public active : boolean = true;


   
  setActive(){
    this.active = !this.active;
  }
  
  setMenu(){
     this.active = true;

    
  }
}
