import { Component, OnInit } from '@angular/core';
import { InstaFace } from '../models/insta-face-card';
import { InstaFaceComponent } from "../insta-face/insta-face.component";
import { InstaFacesServices } from '../services/insta-faces.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [InstaFaceComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  
  instaFaces!: InstaFace[];

  constructor(private instaFacesServices: InstaFacesServices) {}

  ngOnInit(): void {
    this.instaFaces = this.instaFacesServices.getInstaFaces();
  }
}
