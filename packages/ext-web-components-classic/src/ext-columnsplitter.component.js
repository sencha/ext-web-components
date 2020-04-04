import Ext_layout_container_ColumnSplitter from './Ext/layout/container/ColumnSplitter.js';
import ElementParser from './common/ElementParser.js';

export default class EWCColumnsplitter extends Ext_layout_container_ColumnSplitter {
  constructor() {
    super ([], []);
    this.xtype = 'columnsplitter';
  }
}
try {
  if (window.customElements.get('ext-columnsplitter') == undefined) {
    window.customElements.define('ext-columnsplitter', ElementParser.withParsedCallback(EWCColumnsplitter));
  }
}
catch(e) {
  if (window.customElements.get('ext-columnsplitter') == undefined) {
    window.customElements.define('ext-columnsplitter', EWCColumnsplitter);
  }
}
