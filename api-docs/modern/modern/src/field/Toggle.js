/**
 * @class Ext.field.Toggle
 * @extend Ext.field.SingleSlider
 * @xtype togglefield
 *
 * Specialized {@link Ext.field.Slider} with a single thumb which only supports two
 * {@link #value values}.
 *      HTML
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container layout="center">
 *          <ext-formpanel shadow="true">
 *              <ext-togglefield boxLabel="On" value="true"></ext-togglefield>
 *              <ext-togglefield boxLabel="Off" value="false"></ext-togglefield>
 *              <ext-togglefield boxLabel="Disabled" disabled="true"></ext-togglefield>
 *              <ext-togglefield boxLabel="Disabled (On)" disabled="true" value="true"></ext-togglefield>
 *          </ext-formpanel>
 *      </ext-container>
 *      ```
 *      JS
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *      import '@sencha/ext-web-components/dist/ext-togglefield.component';
 *
 *      export default class ToggleFieldComponent {}
 *      ```
 */

/**
 * @cfg {String} [activeLabel=null]
 * The label to add to the toggle field when it is toggled on.
 * Only available in the Blackberry theme.
 * @accessor
 */

/**
 * @cfg {String} [inactiveLabel=null]
 * The label to add to the toggle field when it is toggled off.
 * Only available in the Blackberry theme.
 * @accessor
 */

/**
 * @cfg [value=false]
 * @inheritdoc Ext.slider.Slider#cfg-value
 * @accessor
 */

/**
 * @event change
 * Fires when an option selection has changed.
 *
 * @param {Ext.field.Toggle} this
 * @param {Number} newValue the new value of this thumb
 * @param {Number} oldValue the old value of this thumb
 */

/**
 * @method toggle
 * Toggles the value of this toggle field.
 * @return {Object} this
 */
