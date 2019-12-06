import BrushPath from "./brush-path";
import NodeData from "./node-data";

class Line extends BrushPath {
  constructor(length){
    super()
    this.widthValue = 1;
    this.length = length;
    this.x0 = 0;
    this.y0 = 0;
    this.push('beginPath', new NodeData([true]));
  }

  moveTo(x, y) {
    const node = new NodeData([x,y]);
    this.x0 = x;
    this.y0 = y;
    this.push('moveTo', node);
    return this;
  }

  lineTo(x, y) {
    const node = new NodeData([x,y]);
    this.push('lineTo', node);
    return this;
  }

  lineWidth(width) {
    this.widthValue = parseInt(width);
    const node = new NodeData(this.widthValue);
    this.push('lineWidth', node);
    return this;
  }

  color(color) {
    this.colorValue = color
    const node = new NodeData(this.colorValue)
    this.push('strokeStyle', node)
    return this;
  }


}

export default Line;