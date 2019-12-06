import {createCanvas, style, displayInfo} from './html'
import Line from './brush/line';
import Brush from './brush';
import {rnd, rndColor, angleBySecond, rounding} from './math';
import Clock from './clock';
export default class CanvasTimer {

  constructor(){
    style();
    this.cvs = createCanvas();
    let dInfo = displayInfo();
    this.cvs.width=dInfo.width;
    this.cvs.height = dInfo.height;
    this.ctx = this.cvs.getContext('2d')
    this.brush = new Brush(this.cvs,this.ctx);
    this.max = 2000;
    this.clock = new Clock(this.cvs.width/2, this.cvs.height/2);
    this.startAnimation();
  }

  cleanAct(){
    this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
  }

  startAnimation() {
    this.drawFram();
  }
  
  drawFram(timestamp) {
    this.cleanAct();
    this.drawClock();
    if (window.stp === true) 
      return;
    requestAnimationFrame(this.drawFram.bind(this))
  }

  drawClock () {
    let els = this.clock.elements;
    let {cos, sin} = Math;
    let el = null;
    for (let k in els) {
      el = els[k];
      el.action.apply(el);
      let line = new Line(el.length);
      line.moveTo(el.x0, el.y0).lineTo(el.x, el.y).lineWidth(el.width).color(el.color);
      this.brush.draw(line);
    }
  }

  secondHand(){
    let pointer = new Line(500);
    pointer.sPoint.x = this.cvs.width/2;
    pointer.sPoint.y = this.cvs.height/2;
    let {cos, sin} = Math;
    let rcValue = '#333';
    // let rcValue = rndColor();
    let alpha = angleBySecond();
    let x = rounding(pointer.sPoint.x + pointer.length * sin(alpha), 10);
    let y = rounding(pointer.sPoint.y - pointer.length * cos(alpha), 10);
    pointer.moveTo(pointer.sPoint.x, pointer.sPoint.y)
    .lineTo(  x,y )
    .lineWidth(1).color(rcValue);
    this.brush.draw(pointer);
  }


}



const app = new CanvasTimer()
window.drawFram = app.drawFram.bind(app);
window.drawFram = app.drawFram.bind(app);
