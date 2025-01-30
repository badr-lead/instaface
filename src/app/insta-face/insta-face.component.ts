import { Component, OnInit, Input } from '@angular/core';
import { InstaFace } from '../models/insta-face-card';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-insta-face',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './insta-face.component.html',
  styleUrl: './insta-face.component.scss'
})
export class InstaFaceComponent implements OnInit {
  @Input() instaFace! : InstaFace

  aimerBouttonTexte! : string
  utilisateurDejaAime! : boolean

  ngOnInit(): void {

    this.aimerBouttonTexte = 'J\'aime'
    this.utilisateurDejaAime = false
  }

  onLike() {
    if (this.utilisateurDejaAime) {
      this.dislike()
    }
    else {
      this.like()
    } 
  }

  dislike() {
    this.instaFace.removeLike();
    this.aimerBouttonTexte = 'J\'aime';
    this.utilisateurDejaAime = false
  }

  like() {
    this.instaFace.addLike();
    this.aimerBouttonTexte = 'J\'aime pas';
    this.utilisateurDejaAime = true
  }

}
