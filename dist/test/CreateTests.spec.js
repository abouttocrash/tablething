"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mocha_1 = require("mocha");
const TableThing_1 = require("../utils/TableThing");
(0, mocha_1.describe)("Create tests suite", () => {
    it("should display all test cases from local", async () => {
        let losingMyReligion = "Oh life is bigger It's bigger than you And you are not me The lengths that I will go to The distance in your eyes Oh no I've said too much I set it up";
        let justLikeHeaven = `"Show me, show me, show me how you do that trick\n The one that makes me scream", she said\n "The one that makes me laugh", she said\n And threw her arms around my neck`;
        let squareHammer = `Living in the night
        'Neath heavens torn asunder
        You call on me to solve a crooked rhyme
        As I'm closing in
        Imposing on your slumber`;
        let table = new TableThing_1.TableThing("Songs");
        let tableBlock = table.drawCells([losingMyReligion, justLikeHeaven, squareHammer]);
        table.printBlocks();
    });
});
