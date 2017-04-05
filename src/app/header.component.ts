import { Component,Input ,EventEmitter, Output} from '@angular/core';
import { NavigationComponent } from './navigation.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
expand:boolean=false;
searchexpand(){
	this.expand=true;
}
searchcollapse(){
	this.expand=false;
}

  @Input() result:number=0;
@Output() toggleSidenav = new EventEmitter<void>();
}
