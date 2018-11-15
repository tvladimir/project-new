import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-new';

  img_path = ['/assets/images/UNADJUSTEDNONRAW_thumb_3ea.jpg',
              '/assets/images/UNADJUSTEDNONRAW_thumb_405.jpg',
              '/assets/images/UNADJUSTEDNONRAW_thumb_413.jpg']
  public currentImagePlace: number;
  public imagePath: string;

  constructor(){
    this.currentImagePlace = 0;
    this.imagePath = this.img_path[this.currentImagePlace];
  }

  showAlert(typeButton: string){
    const typeText = typeButton === 'left' ? 'first' : 'last';

    const message = "This is a " + typeText + "last Picture";

    console.log(message);

  }

  onSliderButtonClick(typeButton: string) {
    switch (typeButton) {

      case 'left':
        if (this.currentImagePlace > 0){
          this.currentImagePlace--;
          this.imagePath = this.img_path[this.currentImagePlace];
        }else{
            this.showAlert(typeButton);
        }
        break;

      case 'right':
        if (this.currentImagePlace < this.img_path.length - 1){
          this.currentImagePlace++;
          this.imagePath = this.img_path[this.currentImagePlace];
        }else{
            this.showAlert(typeButton);
        }
      break;
    
      default:
        break;
    }
  }
}
