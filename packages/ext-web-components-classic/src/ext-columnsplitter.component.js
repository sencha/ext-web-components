import Ext_layout_container_ColumnSplitter from './Ext/layout/container/ColumnSplitter.js';
import ElementParser from './ElementParser.js';

export default class EWCColumnsplitter extends Ext_layout_container_ColumnSplitter {
  constructor() {
    super ([], []);
    this.xtype = 'columnsplitter';
  }
}
window.customElements.define('ext-columnsplitter', ElementParser.withParsedCallback(EWCColumnsplitter));
