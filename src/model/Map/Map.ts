import { Limit } from "./Limite";
import { Objectif } from "./Objectif";
import { Block } from "./Block";
import { IPosition, Direction } from "../Sokoban";
import { MapElt } from "./MapElt";

export class SokobanMap {

    public limits: Limit[]
    public objectives: Objectif[]
    public blocks: Block[]
    public player: MapElt


    canMove(direction: Direction){
        return true
    }

    isComplete(){
        return this.objectives
            .filter(o => this.blocks.findIndex(b => b.collides(o.position)) !== -1)
            .length === this.objectives.length
    }

}