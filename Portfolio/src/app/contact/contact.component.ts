import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css',"contact.component.partial.css"]
})
export class ContactComponent {
showLink(event: Event) {
  if(event.target != event.currentTarget){
    let elem = event.target as HTMLElement;
    if(elem.classList.contains("svg-card")){
      this.selectedLink = elem.getAttribute("data-link");
    }
    else{
      let nearestDiv = this.findNearestDiv(elem);
      if (nearestDiv) {
          this.selectedLink = nearestDiv.getAttribute("data-link");
      }
    }
  }
 
}
selectedLink: any;
findNearestDiv(element: HTMLElement): HTMLElement | null {
  while (element && element !== document.body) {
      if (element.classList.contains("svg-card")) {
          return element;
      }
      element = element.parentElement!;
  }
  return null;
}
}
