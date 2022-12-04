import { Section } from "./Section";
import { Colors } from "./TableThing";
import chalk from 'chalk'

export class Block{
    
    protected sections:Array<Section> = []
    private tWidth:number
    constructor(sections:number,tWitdh:number){
        this.tWidth = tWitdh
        
    }
    calculateSections(length: number) {
        const division = Math.floor(this.tWidth / length)
        const diff = this.tWidth - (division * length)
        
        let sections:Array<number> = []
        for(let i = 0;i<length;i++){
            sections.push(division)
        }
        for(let i = 0 ;i < diff;i++){
            sections[i] += 1
        }
        return sections;
    }
    
    addSection(section:Section){
        this.sections.push(section)
    }

    getBlockDepth(){
        let depth = 0
        for(let s of this.sections){
            let currentDepth = s.getDepth()
            if( currentDepth > depth)
                depth = currentDepth
        }
       return depth
        
    }
    print(){
        if(this.sections.length == 1){
            console.log(this.drawLines(1));
            this.sections[0].draw()
            console.log(this.drawLines(1));
        }
        else{
            let arr:Array<string> = []
            let n = 0;
            let x = 0;
            let newLine = ""
            for(let i = 0; i < this.sections.length;i++){
                for(let j = 0;j < this.getBlockDepth();j++){
                    if(n == 0)
                        newLine += this.sections[n].data[x] == undefined? this.sections[n].endLine("|") :this.sections[n].data[x]
                    else
                        newLine += this.sections[n].data[x] == undefined? this.sections[n].endLine("") :this.sections[n].data[x]
                    if(n == this.sections.length -1){
                        n = -1
                        arr.push(newLine)
                        newLine = ""
                        x++;
                    }
                    n++
                }
            }
            console.log(this.drawLines(this.sections.length));
            arr.forEach(d=>{
                console.log(d);
                
            })
            console.log(this.drawLines(this.sections.length));
        }
       
        
    }
    setRowColor(index:number,color:Colors){
        for(let s of this.sections){
            s.data[index-1] = this.returnChalk(color,s.data[index-1])
         }
    }
    private drawLines(b:number){
        let newLine = "+"
        for(let i = 0 ;i < this.tWidth - 2;i++){newLine += "-"}
        newLine += "+"
        return newLine
    }

    private returnChalk(color:Colors,text:string){
        let aux = text.substring(1,text.length-1)
        let coloredText = ""
        switch(color){
            case Colors.white:coloredText = chalk.white(aux);break;
            case Colors.blueBright:coloredText = chalk.blueBright(aux);break;
            case Colors.bgRed: coloredText = chalk.bgRed(aux);break;
            case Colors.bgWhite:coloredText = chalk.bgWhite(aux);break;
            case Colors.yellow: coloredText = chalk.yellow(aux);break;
            default:coloredText = chalk.white(aux);break;
        }
        return `${chalk.white("|")}${coloredText}${chalk.white("|")}`
    }
}