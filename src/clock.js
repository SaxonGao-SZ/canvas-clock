import { angleBySecond, angleByHour12,angleByHour24, angleByMinute, rounding } from "./math/index"
/**
 * 各种指针的抽像类
 *
 * @class Hand
 */
class Hand {
  constructor(x0, y0, length = 500) {
    this.x0 = x0;
    this.y0 = y0;
    this.x = this.x0;
    this.y = this.y0 - length;
    this.width = 1;
    this.length = length;
    this.color = '#666';
  }

  action() {
    let {cos, sin} = Math;
    let alpha = angleBySecond();
    this.x = rounding(this.x0 + this.length * sin(alpha), 10);
    this.y = rounding(this.y0 - this.length * cos(alpha), 10);
  }
}
class Clock {
  constructor(x0, y0) {
    this.x0 = x0;
    this.y0 = y0;
    //this.dail = new Dial(this.x0, this.y0);
    this.elements = Object.create(null);
    this.elements.hourhand = new HourHand(this.x0, this.y0, 200);
    this.elements.minutHand = new MinutHand(this.x0, this.y0, 300);
    this.elements.secondHand = new SecondHand(this.x0, this.y0, 500);

  }
}

/**
 * 表盘
 *
 * @class Dial
 */
class Dial {
  constructor(x0, y0) {
    this.x0 = x0;
    this.y0 = y0;
  }
}

class SecondHand extends Hand {
  constructor(x0, y0, length = 500) {
    super(x0, y0, length);
    this.width=3;
  }
  action() {
    let {cos, sin} = Math;
    let alpha = angleBySecond();
    this.x = rounding(this.x0 + this.length * sin(alpha), 10);
    this.y = rounding(this.y0 - this.length * cos(alpha), 10);
  }
}

class MinutHand extends Hand {
  constructor(x0, y0, length = 500) {
    super(x0, y0, length);
    this.width = 5;
  }
  action() {
    let {cos, sin} = Math;
    let alpha = angleByMinute();
    this.x = rounding(this.x0 + this.length * sin(alpha), 10);
    this.y = rounding(this.y0 - this.length * cos(alpha), 10);
  }
}

class HourHand extends Hand {
  constructor(x0, y0, length = 500) {
    super(x0, y0, length);
    this.width = 10;
  }
  action() {
    let {cos, sin} = Math;
   // let alpha = angleByHour24();
    let alpha = angleByHour12();
    this.x = rounding(this.x0 + this.length * sin(alpha), 10);
    this.y = rounding(this.y0 - this.length * cos(alpha), 10);
  }
}


export default Clock;