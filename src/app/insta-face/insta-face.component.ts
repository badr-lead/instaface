import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-insta-face',
  standalone: true,
  imports: [],
  templateUrl: './insta-face.component.html',
  styleUrl: './insta-face.component.scss'
})
export class InstaFaceComponent implements OnInit {
  title! : string;
  description! : string;
  createdAt! : Date;
  likes! : number;
  imageUrl! : string
  aimerBouttonTexte! : string
  utilisateurDejaAime! : boolean

  ngOnInit(): void {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours';
    this.createdAt = new Date();
    this.likes = 0;
    this.imageUrl! = 'https://picsum.photos/id/192/300/'
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
    this.likes--;
    this.aimerBouttonTexte = 'J\'aime';
    this.utilisateurDejaAime = false
  }

  like() {
    this.likes++;
    this.aimerBouttonTexte = 'J\'aime pas';
    this.utilisateurDejaAime = true
  }

}
