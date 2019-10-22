import Ext_draw_Surface from './Ext/draw/Surface.js';
import HTMLParsedElement from './HTMLParsedElement.js';

export default class ExtSurface extends Ext_draw_Surface {
    constructor() {
        super ([],[])
        this.xtype = 'surface';
    }
}
window.customElements.define('ext-surface', HTMLParsedElement.withParsedCallback(ExtSurface))
