import { IPosition } from "../Sokoban";
import { MapElt } from "./MapElt";

export class Limit extends MapElt {

    constructor(pos: IPosition){
        super(pos)
    }
}