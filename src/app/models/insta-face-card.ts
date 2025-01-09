export class InstaFace {
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
}