import { IPosition } from "../Sokoban";
import { MovableMapElt } from "./MapElt";

export class Block extends MovableMapElt {

    public position: IPosition

    constructor(pos: IPosition){
        super(pos)
    }
}