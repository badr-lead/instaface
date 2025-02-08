import { Injectable } from "@angular/core";
import { InstaFace } from "../models/insta-face-card";

@Injectable({
    providedIn: 'root'
})

export class InstaFacesServices {
    private instaFaces: InstaFace[] = [
    new InstaFace(
        'Yahya',
        'Mon meilleur ami depuis toujours',
        'https://picsum.photos/id/192/300/',
        new Date(),
        10
    ),
    new InstaFace(
        'Nabila',
        'Mon meilleur ami depuis toujours',
        'https://picsum.photos/id/12/300/',
        new Date(),
        11
    ),
    new InstaFace(
        'Badr',
        'Mon meilleur ami depuis toujours',
        'https://picsum.photos/id/16/300/',
        new Date(),
        200
    ),
    new InstaFace(
        'Nisrine',
        'Mon meilleur ami depuis toujours',
        'https://picsum.photos/id/25/300/',
        new Date(),
        150
    ).withLocation('Three Rock Mountain')
    ];
    getInstaFaces(): InstaFace[] {
        return [...this.instaFaces];
    }
}