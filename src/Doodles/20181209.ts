import Doodle from "./Doodle";

import { Colors, RandomColor } from "./Colors";

import { Point } from "./Point";

/* Port PICO-8 Butterfly
pico-8 cartridge // http://www.pico-8.com
version 4
__lua__
--transdimensional butterfly
--by zep

cls()
music(0)

t = 0
dx = -40
function _update()
 t += 1
 dx = min(dx + 0.1, 64)
end

function _draw()
if (dx>63) then
 cls()
end

srand(0)
if (t%8)==0 then cls() end
 x={} y={}
 for i=1,3 do
  x[i]=64+cos(i/3+t*0.002)*60
  y[i]=64+sin(i/3+t*0.002)*60
 end
 
 n=0
 local x0=x[1] 
 local y0=y[1]
 for i=1,512 do
  n=flr(rnd(3))+1
  x0=(x[n]+x0)/2
  y0=(y[n]+y0)/2
  local col=8+(t/40 + rnd(1))%8
  pset(x0-16,y0,col)
  pset(128-x0+16,y0,col)
 end
 
 x0=0 x=1
 
 while(x < dx) do
  for y=0,127 do
   col=pget(x,y)
   if (col > 0) then
    col = 8 + ((col-8)+x/5)%8
   end
   line(x0,y,x,y,col)
   line(128-x0,y,128-x,y,col)
   
  end
  x0 = x
  x = x+4+sin(x/40)*2
 end
end
*/
const screenSize = 128;
const planetCount = 6;
const frameCount = 100000;
const starRadius = 20;
const planetRadius = 3;
const degToRad = 0.01745329;
export class DailyDoodle implements Doodle {
  private frame = 0;
  private planets: Point[] = [];
  private colors: string[] = [];
  private angles: number[] = [];
  public init() {
    for (let i = 0; i < planetCount; i++) {
      this.colors.push(RandomColor());
      this.angles.push(Math.random() * 360);
      const radius = starRadius + (i + 1) * 7;
      const p = new Point(
        64 + Math.cos(this.angles[i] * degToRad) * radius,
        64 + Math.sin(this.angles[i] * degToRad) * radius
      );
      this.planets.push(p);
    }
  }

  public update() {
    this.frame++;
    if (this.frame >= frameCount) {
      this.frame = 0;
    }

    for (let i = 0; i < planetCount; i++) {
      const radius = starRadius + (i + 1) * 7;
      if (this.frame % i === 0 || i === 0) {
        this.angles[i] += 2;
        const p = new Point(
          64 + Math.cos(this.angles[i] * degToRad) * radius,
          64 + Math.sin(this.angles[i] * degToRad) * radius
        );
        this.planets[i] = p;
      }
    }
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.darkBlue;
    ctx.fillRect(0, 0, screenSize, screenSize);
    ctx.fillStyle = Colors.orange;
    ctx.beginPath();
    ctx.arc(64, 64, starRadius, 0, 2 * Math.PI);
    ctx.fill();

    for (let i = 0; i < planetCount; i++) {
      ctx.beginPath();
      ctx.strokeStyle = Colors.darkGrey;
      // const radius = starRadius + (i + 1) * 10;
      const p = this.planets[i];
      // ctx.arc(64, 64, radius, 0, 2 * Math.PI);
      // ctx.stroke();
      ctx.beginPath();
      ctx.fillStyle = this.colors[i];
      ctx.arc(p.x, p.y, planetRadius + i / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  }
}
