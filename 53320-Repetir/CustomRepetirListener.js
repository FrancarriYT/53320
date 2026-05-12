import RepetirListener from "./generated/RepetirListener.js";

export class CustomRepetirListener extends RepetirListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}