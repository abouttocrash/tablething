export class Section{
    lineWidth:number = -1;
    rows:number = -1;
    text:string = ""
    data:Array<string> = []
    private depth = 0;

    constructor(text:string,lineWidth:number,current:number){
        this.lineWidth = lineWidth
        this.text = text;
        this.calculateSpace(current)
    }
    
    calculateSpace(cc:number){
        let newLine = ""
        let separator = cc > 0? "": "|"
        
        for (let c of this.text){
            newLine += c
            if(newLine.length+2 == this.lineWidth ){
                this.data.push(this.endLine(`${separator}${newLine}`))
                newLine = ""
                this.depth += 1
            }
            
            else{
                if( c == '\n'){
                    newLine = newLine.substring(0,newLine.length-1).trim()
                    this.data.push(this.endLine(`${separator}${newLine}`))
                    newLine = ""
                    this.depth += 1
                }
            }
            
        }
        this.data.push( this.endLine(`${separator}${newLine.trim()}`))
        this.depth += 1
    }
    getDepth(){
        return this.depth
    }
    draw(){
        this.data.forEach(d=>{
            console.log(`${d}`);
        })
    }
    
    endLine(newLine:string){
        let c = newLine.length 
        for(let j = c;j < this.lineWidth-1;j++){ newLine+=" "}
        newLine += "|"
        return newLine
    }
}