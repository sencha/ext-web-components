import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import ElementParser from './common/ElementParser.js';

export default class EWCRating extends Ext_ux_rating_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'rating';
  }
}
try {
  if (window.customElements.get('ext-rating') == undefined) {
    window.customElements.define('ext-rating', ElementParser.withParsedCallback(EWCRating));
  }
}
catch(e) {
  if (window.customElements.get('ext-rating') == undefined) {
    window.customElements.define('ext-rating', EWCRating);
  }
}
