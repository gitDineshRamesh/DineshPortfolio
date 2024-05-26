import { Component, OnInit, ElementRef, Output, EventEmitter, viewChild, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {
  componentToNavigate: string = ""
  initial = "";
binding: any;
  ngOnInit(): void {
    this.initial = "active";
  }
  
  changeActive(element:any){
    console.log(element);
    if(!element){
      return;
    }
    let e = element as Event;
    if(e.target != e.currentTarget){
      let elem = e.target as HTMLElement;
      let otherE = document.querySelectorAll(".active");
      otherE.forEach(li => {
          li.classList.remove("active");
      });
      var compName = "";
      if(elem.classList.contains("text")){
        elem.parentElement?.classList.add("active");
        compName = elem.innerText;
      }else{
        elem.classList.add("active");
        let firstChild = elem.firstChild as HTMLElement;
        compName = firstChild.textContent || "";
      }
      console.log(compName);
      this.initial = "";
    }
  }
  
}
