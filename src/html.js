import {styleText} from './static/default-css';
export const  createCanvas = function() {
  let cvs = document.createElement('CANVAS');
  document.body.innerHTML = '';
  document.body.appendChild(cvs);
  return cvs;
}
/**
 * 配置 canvas 的基本样式
*/
export const style = function () {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.rel = 'stylesheet';
  style.appendChild(document.createTextNode(styleText));
  //style.styleSheet.cssText = code;
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}

export const displayInfo = function () {
  try {
    let tmp = wx.getSystemInfoSync();
    return {
      width: tmp.windowWidth,
      height: tmp.windowHeight
    }
  } catch (err) {
    return {
      width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }
}
