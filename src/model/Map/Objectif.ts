import { IPosition } from "../Sokoban";
import { MapElt } from "./MapElt";

export class Objectif extends MapElt {

    constructor(pos: IPosition){
        super(pos)
    }
}