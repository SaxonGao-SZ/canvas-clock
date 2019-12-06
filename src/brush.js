class Brush {
  constructor(cvs, ctx) {
    this.cvs = cvs;
    this.ctx = ctx;
    window.pctx = this.ctx;
  }
  /**
   * 绘制图形
   * @param {BrushPath} - 绘制路径对象
   * @memberof Brush
   */
  draw(brushPath) {
    brushPath.eachPathMethods((prop, data)=>{
      if (typeof this.ctx[prop] === 'function') {
        this.ctx[prop].apply(this.ctx, data);
      } else {
        this.ctx[prop] = data;
      }
    })
    //this.ctx.closePath();
    this.ctx.stroke();
  }

  clear () {
    this.ctx.clearRect(0,0,this.cvs.width, this.cvs.height);
  }
}
export default Brush;