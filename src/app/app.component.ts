import { Component, OnInit } from '@angular/core';
import { InstaFaceComponent } from './insta-face/insta-face.component';
import { InstaFace } from './models/insta-face-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InstaFaceComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  premierPost! : InstaFace
  deuxiemePost! : InstaFace
  troisiemePost! : InstaFace

  ngOnInit(): void {
    this.premierPost = new InstaFace(
      'Yahya',
      'Mon meilleur ami depuis toujours',
      'https://picsum.photos/id/192/300/',
      new Date(),
      10
    )
    this.deuxiemePost = new InstaFace(
      'Nabila',
      'Mon meilleur ami depuis toujours',
      'https://picsum.photos/id/12/300/',
      new Date(),
      11
    )
    this.troisiemePost = new InstaFace(
      'Badr',
      'Mon meilleur ami depuis toujours',
      'https://picsum.photos/id/16/300/',
      new Date(),
      11
    )
  }
}
