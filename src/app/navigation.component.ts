import { Component, OnInit,ViewChild,HostListener } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MdIconRegistry} from '@angular/material';
declare var $:JQuery;
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
showScrollButton:boolean = false;
@ViewChild('start') start;
   constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'google',
        sanitizer.bypassSecurityTrustResourceUrl('assets/image/google.svg'));
        iconRegistry.addSvgIcon(
        'facebook',
        sanitizer.bypassSecurityTrustResourceUrl('assets/image/facebook.svg'));
        iconRegistry.addSvgIcon(
        'twitter',
        sanitizer.bypassSecurityTrustResourceUrl('assets/image/twitter.svg'));
  }

  ngOnInit(): void  {
  if (this.isOver()) 
        this.start.close();
      
  }
isOver(): boolean {
   
      return window.matchMedia(`(max-width: 960px)`).matches;
    
  }
  close(){
  if (this.isOver()) 
        this.start.close();
  }
   @HostListener('window:scroll', ['$event'])
    onScroll(event) {
        if (window.pageYOffset > 150 && !this.showScrollButton){
            this.showScrollButton = true;
        }
        if(window.pageYOffset < 149 && this.showScrollButton){
            this.showScrollButton = false;
        }
    }
    scrollUp(){
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    }
}
