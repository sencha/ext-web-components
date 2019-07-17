/**
 * A simple color swatch that can be clicked to bring up the color selector.
 *
 * The selected color is configurable via {@link #value} and
 * The Format is configurable via {@link #format}.
 *```HTML
 *@example({tab: 1})
 *<ext-colorbutton
 *    onchange="button.showMessage"
 *    format="hex6"
 *    value="00f"
 *>
 *</ext-colorbutton>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-colorbutton.component';
 * 
 *export default class ButtonComponent {
 * showMessage = (event) => {
 *     const color = event.detail.color;
 *     Ext.Msg.alert('Color', color);
 *  }
 *}
 *```
 */

/**
 * @cfg {Object} popup
 * This object configures the popup window and colorselector component displayed
 * when this button is clicked. Applications should not need to configure this.
 * @private
 */

/**
 * @event change
 * Fires when a color is selected.
 * @param {Ext.ux.colorpick.Selector} this
 * @param {String} color The value of the selected color as per specified {@link #format}.
 * @param {String} previousColor The previous color value.
 */
