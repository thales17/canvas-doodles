import Doodle from "./Doodle";

import { Colors } from "./Colors";

const screenSize = 128;
const frameCount = 10;
const grassMax = 20;

export class DailyDoodle implements Doodle {
    private frame = 0;
    private grassBend = 0;
    private grassDir = 1;
    public init() {
        // nop
    }

    public update() {
        this.frame++;
        if(this.frame >= frameCount) {
            this.grassBend += this.grassDir;
            if (Math.abs(this.grassBend) >= grassMax) {
                this.grassDir *= -1;
            }
        }
    }

    public draw(ctx: CanvasRenderingContext2D) {
        ctx.clearRect(0, 0, screenSize, screenSize);
        ctx.strokeStyle = Colors.green;
        for (let i = 0; i < screenSize; i += 5) {
            ctx.beginPath();
            ctx.moveTo(i,32);
            ctx.quadraticCurveTo(i+this.grassBend,96,64,128);
            ctx.stroke();
        }

    }
}
