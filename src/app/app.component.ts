import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyAngular';
  version ='1.0';

  changeTitle(event){
    console.log(event.target.value);
    this.title = event.target.value;
    //this.title = (event.key);


  
  }
}
