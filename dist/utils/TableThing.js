"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableThing = exports.Colors = void 0;
const Block_1 = require("./Block");
const Section_1 = require("./Section");
var Colors;
(function (Colors) {
    Colors["bgRed"] = "bgRed";
    Colors["bgWhite"] = "bgWhite";
    Colors["white"] = "white";
    Colors["blueBright"] = "blueBright";
    Colors["yellow"] = "yellow";
})(Colors = exports.Colors || (exports.Colors = {}));
class TableThing {
    constructor(tableName) {
        this.result = ``;
        this.blocks = [];
        this.tableName = tableName;
        this.tWidth = (process.stdout.columns - 2);
    }
    drawBlock(fill) {
        let block = new Block_1.Block(1, this.tWidth);
        let section = new Section_1.Section(fill.join("\n"), this.tWidth, 0);
        block.addSection(section);
        this.blocks.push(block);
        return block;
    }
    drawCells(cells) {
        let block = new Block_1.Block(cells.length, this.tWidth);
        let sections = block.calculateSections(cells.length);
        cells.forEach((c, i) => {
            let section = new Section_1.Section(c, sections[i], i);
            block.addSection(section);
        });
        this.blocks.push(block);
        return block;
    }
    printBlocks() {
        this.blocks.forEach(b => {
            b.print();
        });
    }
    drawLines() {
        this.result += "+";
        for (let i = 0; i < this.tWidth - 1; i++) {
            this.result += "-";
        }
        this.result += "+\n";
        return this;
    }
    returnTable() {
        return this.result;
    }
}
exports.TableThing = TableThing;
