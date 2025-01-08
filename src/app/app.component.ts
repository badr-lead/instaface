import { Component } from '@angular/core';
import { InstaFaceComponent } from './insta-face/insta-face.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InstaFaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
