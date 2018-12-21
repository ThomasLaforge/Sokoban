import { MovableMapElt } from "./MapElt";
import { IPosition, Direction } from "../Sokoban";

export class Player extends MovableMapElt {

    public orientation: Direction

    constructor(pos: IPosition){
        super(pos)
    }

    move(direction: Direction){
        super.move(direction)
        this.orientation = direction
    }

}