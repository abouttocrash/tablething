export declare class Section {
    lineWidth: number;
    rows: number;
    text: string;
    data: Array<string>;
    private depth;
    constructor(text: string, lineWidth: number, current: number);
    calculateSpace(cc: number): void;
    getDepth(): number;
    draw(): void;
    endLine(newLine: string): string;
}
