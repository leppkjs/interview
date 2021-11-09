abstract class Character {
    abstract draw()
}

export class Warrior extends Character {
    private pathPattern: number;

    constructor(pathPattern: number) {
        super();
        this.pathPattern = pathPattern
    }

    public draw() {
        let x, y: number = 0;
        if (this.pathPattern == 1) {
            x += 4;
        } else if (this.pathPattern == 2) {
            y += 10;
        } else if (this.pathPattern == 4) {
            x += 4;
            y += 10;
        }

        // drawing by x, y
    }
}


export interface PathPattern {
    nextX(): number;
    nextY(): number;
}

export class EastMovePattern implements PathPattern{
    nextX(): number {
        return 4;
    }

    nextY(): number {
        return 10;
    }
}

export class EastMovePattern implements PathPattern{
    nextX(): number {
        return 4;
    }

    nextY(): number {
        return 10;
    }
}