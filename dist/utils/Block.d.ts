import { Section } from "./Section";
import { Colors } from "./TableThing";
export declare class Block {
    protected sections: Array<Section>;
    private tWidth;
    constructor(sections: number, tWitdh: number);
    calculateSections(length: number): number[];
    addSection(section: Section): void;
    getBlockDepth(): number;
    print(): void;
    setRowColor(index: number, color: Colors): void;
    private drawLines;
    private returnChalk;
}
