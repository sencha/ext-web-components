import Ext_ux_rating_Picker from './Ext/ux/rating/Picker.js';
import ElementParser from './ElementParser.js';

export default class EWCRating extends Ext_ux_rating_Picker {
  constructor() {
    super ([], []);
    this.xtype = 'rating';
  }
}
window.customElements.define('ext-rating', ElementParser.withParsedCallback(EWCRating));
