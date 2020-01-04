//Sat Jan 04 2020 08:21:35 GMT-0500 (Eastern Standard Time)

import {
  doProp,
  filterProp,
  isMenu,
  isRenderercell,
  isParentGridAndChildColumn,
  isTooltip,
  isPlugin
} from './util.js';

export default class EleBaseComponent extends HTMLElement {

  constructor(properties, events) {
    super ();

    this.extJSClass = Ext.ClassManager.getByAlias(`widget.$