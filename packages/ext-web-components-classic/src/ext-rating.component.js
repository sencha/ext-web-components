import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import ElementParser from './runtime/ElementParser.js';

export default class EWCRating extends Ext_ux_rating_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'rating';
  }
}
try {
  window.customElements.define('ext-rating', ElementParser.withParsedCallback(EWCRating));
}
catch(e) {
  window.customElements.define('ext-rating', EWCRating);
}
