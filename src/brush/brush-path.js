import NodeData from "./node-data";

class BrushPath {
  constructor(){
    this.pathProps = [];
  }


  /**
   * 
   *
   * @param {NodeData} node
   * @memberof BrushPath
   */
  push(prop, node){
    this.pathProps.push({
      prop,node
    });
  }

  eachPathMethods(callback){
      //console.log('len', this.pathProps.length);
    for (let i = 0; i<this.pathProps.length; i++) {
      let {prop, node} = this.pathProps[i];
      let data = null;
      if (Array.isArray(node.data)) {
        data = [];
        for (let i = 0; i < node.data.length; i++) {
          data.push(
            typeof node.data[i] === 'function'
              ? node.data[i]()
              : node.data[i]
          );
        }
      } else {
        data = node.data;
      }
      callback(prop, data);
    }
  }
}

export default BrushPath;
