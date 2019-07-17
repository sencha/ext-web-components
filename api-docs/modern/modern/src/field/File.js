/**
 * @class Ext.field.File
 * @extend Ext.field.Field
 * @xtype filefield
 *
 * Creates an HTML file input field on the page. This is usually used to upload files to remote server. File fields are usually
 * created inside a form like this:
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel shadow="true">
 *        <ext-filefield
 *             label="Select a File"
 *             name="photo"
 *             accept="image"
 *         >
 *         </ext-filefield>
 *    <ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-filefield.component';
 * 
 *export default class FileFieldComponent {}
 *```
 *
 */

/**
 * @cfg {Boolean} [multiple=false]
 * Allow selection of multiple files
 *
 * @accessor
 */

/**
 * @cfg {String} [accept=null]
 * File input accept attribute documented here
 * (http://www.w3schools.com/tags/att_input_accept.asp)
 * Also can be simple strings -- e.g. audio, video, image
 *
 * @accessor
 */

/**
 * @cfg {String} [capture=null]
 * File input capture attribute. Accepts values such as
 * "camera", "camcorder", "microphone"
 *
 * @accessor
 */

/**
 * @event change
 * Fires when a file has been selected
 * @param {Ext.field.File} this This field
 * @param {Mixed} newValue The new value
 * @param {Mixed} oldValue The original value
 */
