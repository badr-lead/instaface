export class InstaFace {
    // Ce point d'interrogation signifie que la propiete peut ne pas avoir de valeur, peut etre undefined. 
    location? : string;

    constructor(public title: string,
                public description : string,
                public imageUrl : string,
                public createdAt : Date,
                public likes : number
    ) {}

    addLike(): void {
        this.likes++
    }
    removeLike(): void {
        this.likes--
    }

    // Pour faciliter l'attribution, l'assignation de cette valeur.
    // On va rajouter une nouvelle methode, qui sera setLocation,
    // pour permettre au code qui consomme cette classe d'ajouter une localisation
    // de maniere semantique.
    setLocation(location : string): void {
        this.location = location    
    }
}