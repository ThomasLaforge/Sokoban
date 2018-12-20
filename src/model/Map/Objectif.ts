import { IPosition } from "../Sokoban";
import { MapElt } from "./MapElt";

export class Objectif extends MapElt {

    public position: IPosition

    constructor(pos: IPosition){
        super(pos)
    }
}