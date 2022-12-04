"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Block = void 0;
const TableThing_1 = require("./TableThing");
const chalk_1 = __importDefault(require("chalk"));
class Block {
    constructor(sections, tWitdh) {
        this.sections = [];
        this.tWidth = tWitdh;
    }
    calculateSections(length) {
        const division = Math.floor(this.tWidth / length);
        const diff = this.tWidth - (division * length);
        let sections = [];
        for (let i = 0; i < length; i++) {
            sections.push(division);
        }
        for (let i = 0; i < diff; i++) {
            sections[i] += 1;
        }
        return sections;
    }
    addSection(section) {
        this.sections.push(section);
    }
    getBlockDepth() {
        let depth = 0;
        for (let s of this.sections) {
            let currentDepth = s.getDepth();
            if (currentDepth > depth)
                depth = currentDepth;
        }
        return depth;
    }
    print() {
        if (this.sections.length == 1) {
            console.log(this.drawLines(1));
            this.sections[0].draw();
            console.log(this.drawLines(1));
        }
        else {
            let arr = [];
            let n = 0;
            let x = 0;
            let newLine = "";
            for (let i = 0; i < this.sections.length; i++) {
                for (let j = 0; j < this.getBlockDepth(); j++) {
                    if (n == 0)
                        newLine += this.sections[n].data[x] == undefined ? this.sections[n].endLine("|") : this.sections[n].data[x];
                    else
                        newLine += this.sections[n].data[x] == undefined ? this.sections[n].endLine("") : this.sections[n].data[x];
                    if (n == this.sections.length - 1) {
                        n = -1;
                        arr.push(newLine);
                        newLine = "";
                        x++;
                    }
                    n++;
                }
            }
            console.log(this.drawLines(this.sections.length));
            arr.forEach(d => {
                console.log(d);
            });
            console.log(this.drawLines(this.sections.length));
        }
    }
    setRowColor(index, color) {
        for (let s of this.sections) {
            s.data[index - 1] = this.returnChalk(color, s.data[index - 1]);
        }
    }
    drawLines(b) {
        let newLine = "+";
        for (let i = 0; i < this.tWidth - 2; i++) {
            newLine += "-";
        }
        newLine += "+";
        return newLine;
    }
    returnChalk(color, text) {
        let aux = text.substring(1, text.length - 1);
        let coloredText = "";
        switch (color) {
            case TableThing_1.Colors.white:
                coloredText = chalk_1.default.white(aux);
                break;
            case TableThing_1.Colors.blueBright:
                coloredText = chalk_1.default.blueBright(aux);
                break;
            case TableThing_1.Colors.bgRed:
                coloredText = chalk_1.default.bgRed(aux);
                break;
            case TableThing_1.Colors.bgWhite:
                coloredText = chalk_1.default.bgWhite(aux);
                break;
            case TableThing_1.Colors.yellow:
                coloredText = chalk_1.default.yellow(aux);
                break;
            default:
                coloredText = chalk_1.default.white(aux);
                break;
        }
        return `${chalk_1.default.white("|")}${coloredText}${chalk_1.default.white("|")}`;
    }
}
exports.Block = Block;
