/**
 * @class Ext.field.Radio
 * @extend Ext.field.Checkbox
 * @xtype radiofield
 * @xtype radio
 *
 * The radio field is an enhanced version of the native browser radio controls and is a
 * good way of allowing your user to choose one option out of a selection of several
 * (for example, choosing a favorite color):
 *      HTML
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container layout="center">
 *          <ext-formpanel
 *               shadow="true"
 *               layout='{"type": "vbox", "align": "left"}'
 *          >
 *              <ext-radiofield
 *                 name="radios"
 *                 boxLabel="Checked"
 *                 value="checked"
 *                 checked="true"
 *              >
 *              </ext-radiofield>
 *              <ext-radiofield
 *                  name="radios"
 *                  boxLabel="Unchecked"
 *                  value="unchecked"
 *              >
 *              </ext-radiofield>
 *              <ext-radiofield
 *                  name="radios"
 *                  boxLabel="Disabled"
 *                  value="disabled"
 *                  disabled="true"
 *              >
 *              </ext-radiofield>
 *          </ext-formpanel>
 *      </ext-container>
 *      ```
 *      JS
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *      import '@sencha/ext-web-components/dist/ext-radiofield.component';
 * 
 *      export default class RadioFieldComponent {}
 *      ```
 *
 */

/**
 * @method getGroupValue
 * Returns the selected value if this radio is part of a group (other radio fields with
 * the same name, in the same FormPanel),
 * @return {String}
 */

/**
 * @method setGroupValue
 * Set the matched radio field's status (that has the same value as the given string)
 * to checked.
 * @param {String} value The value of the radio field to check.
 * @return {Ext.field.Radio} The field that is checked.
 */
