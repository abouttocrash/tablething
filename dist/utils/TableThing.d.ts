import { Block } from './Block';
export declare enum Colors {
    bgRed = "bgRed",
    bgWhite = "bgWhite",
    white = "white",
    blueBright = "blueBright",
    yellow = "yellow"
}
export type TOptions = {
    textColor: Colors;
    drawTopLine: boolean;
    drawBottomLine: boolean;
};
export declare class TableThing {
    tableName: string;
    tWidth: number;
    result: string;
    blocks: Array<Block>;
    constructor(tableName: string);
    drawBlock(fill: Array<string>): Block;
    drawCells(cells: Array<string>): Block;
    printBlocks(): void;
    drawLines(): this;
    returnTable(): string;
}
