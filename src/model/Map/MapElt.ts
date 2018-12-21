import { IPosition, Direction } from "../Sokoban";

export abstract class MapElt {

    public position: IPosition

    constructor(pos: IPosition){
        this.position = pos
    }

    collides(pos: IPosition){
        return this.position.x === pos.x && this.position.y === pos.y
    }

}

export class MovableMapElt extends MapElt {
    
    constructor(pos: IPosition){
        super(pos)
    }

    move(direction: Direction){
        switch (direction) {
            case Direction.UP:      this.position.y++;  break;
            case Direction.DOWN:    this.position.y--;  break;
            case Direction.RIGHT:   this.position.x++;  break;
            case Direction.LEFT:    this.position.x--;  break;
            default: throw "direction not recognize";
        }
    }

}