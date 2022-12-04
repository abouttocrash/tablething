"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
class Section {
    constructor(text, lineWidth, current) {
        this.lineWidth = -1;
        this.rows = -1;
        this.text = "";
        this.data = [];
        this.depth = 0;
        this.lineWidth = lineWidth;
        this.text = text;
        this.calculateSpace(current);
    }
    calculateSpace(cc) {
        let newLine = "";
        let separator = cc > 0 ? "" : "|";
        for (let c of this.text) {
            newLine += c;
            if (newLine.length + 2 == this.lineWidth) {
                this.data.push(this.endLine(`${separator}${newLine}`));
                newLine = "";
                this.depth += 1;
            }
            else {
                if (c == '\n') {
                    newLine = newLine.substring(0, newLine.length - 1).trim();
                    this.data.push(this.endLine(`${separator}${newLine}`));
                    newLine = "";
                    this.depth += 1;
                }
            }
        }
        this.data.push(this.endLine(`${separator}${newLine.trim()}`));
        this.depth += 1;
    }
    getDepth() {
        return this.depth;
    }
    draw() {
        this.data.forEach(d => {
            console.log(`${d}`);
        });
    }
    endLine(newLine) {
        let c = newLine.length;
        for (let j = c; j < this.lineWidth - 1; j++) {
            newLine += " ";
        }
        newLine += "|";
        return newLine;
    }
}
exports.Section = Section;
