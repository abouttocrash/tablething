
import { Block } from './Block'
import { Section } from './Section'


export enum Colors {
    bgRed = "bgRed",
    bgWhite = "bgWhite",
    white = "white",
    blueBright = "blueBright",
    yellow = "yellow"

}

export type TOptions = {
    textColor:Colors,
    drawTopLine:boolean,
    drawBottomLine:boolean
}
export class TableThing{
    tableName:string 
    tWidth:number
    result = ``
    blocks:Array<Block> = []
    constructor(tableName:string){
        this.tableName = tableName;
        this.tWidth = (process.stdout.columns - 2)
    }
    
    drawBlock(fill:Array<string>):Block{
        let block = new Block(1,this.tWidth);
        let section = new Section(fill.join("\n"),this.tWidth,0)
        block.addSection(section)
        this.blocks.push(block)

        return block
    }

    drawCells(cells:Array<string>):Block{
        let block = new Block(cells.length,this.tWidth);
        let sections = block.calculateSections(cells.length)
        cells.forEach((c,i)=>{
            let section = new Section(c,sections[i],i)
            block.addSection(section)
        })
        this.blocks.push(block)

        return block
    }


    printBlocks(){
        this.blocks.forEach(b=>{
            b.print()
        })
    }
    
    drawLines(){
        this.result += "+"
        for(let i = 0 ;i < this.tWidth-1;i++){this.result += "-" }
        this.result += "+\n"
        return this
    }
    
    returnTable(){
        return this.result
    }
    
}