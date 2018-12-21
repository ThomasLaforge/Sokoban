import { Limit } from "./Limite";
import { Objectif } from "./Objectif";
import { Block } from "./Block";
import { IPosition, Direction } from "../Sokoban";
import { MovableMapElt, MapElt } from "./MapElt";

export class SokobanMap {

    public limits: Limit[]
    public objectives: Objectif[]
    public blocks: Block[]
    public player: MovableMapElt

    constructor( limits: Limit[], objectives: Objectif[], blocks: Block[], player: MovableMapElt ){
        this.limits = limits
        this.objectives = objectives
        this.blocks = blocks
        this.player = player
    }

    canMove(elt: MovableMapElt, direction: Direction){
        let copyElt = new MovableMapElt(elt.position)
        switch (direction) {
            case Direction.UP:      
                copyElt.position.y++;
                break;
            case Direction.DOWN:    
                copyElt.position.y--;  
                break;
            case Direction.RIGHT:   
                copyElt.position.x++;  
                break;
            case Direction.LEFT:    
                copyElt.position.x--;  
                break;
        }
        
        let eltOnNextPosition = this.getMapEltsOnPosition(copyElt.position)

        // return !this.copyElt.collides()
        return true
    }

    move(elt: MovableMapElt, direction: Direction){
        // move elt if possible
        this.canMove(elt, direction) && elt.move(direction)
        // move recursively
        // Warning ! don't check if not movable elt on collision
        // this.hasCollision(elt) && this.getMapEltsOnPosition(elt.position).forEach( (e: MovableMapElt) => this.move(e, direction) )
    }

    isComplete(){
        return this.objectives
            .filter(o => this.blocks.findIndex(b => b.collides(o.position)) !== -1)
            .length === this.objectives.length
    }

    hasCollision(elt: MovableMapElt){
        return this.getMapEltsOnPosition(elt.position).length > 1
    }

    getAllElts(){
        return ([] as MapElt[]).concat(...this.limits, ...this.objectives, ...this.blocks, this.player)
    }

    getMapEltsOnPosition(pos: IPosition){
        return this.getAllElts().filter( (elt: MapElt) => elt.collides(pos))
    }

}