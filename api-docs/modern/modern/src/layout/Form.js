/**
 * @class Ext.layout.Form
 * @extend Ext.layout.Auto
 * @alias layout.form
 * Form layout renders a single column of form fields, all with the same
 * {@link #labelWidth label width}.  The default behavior is to size all labels to the
 * width of the label with the longest text, but the width of the labels can also be
 * configured.
 *
 * The following example uses label-auto-widthing to size all labels to the width of the
 * largest label.
 * 
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-formpanel title="Form Panel">
 *          <ext-textfield label="First Name"/>
 *          <ext-textfield label="Last Name"/>
 *          <ext-textfield label="Account Number"/>
 *          <ext-button text="Submit">
 *      </ext-formpanel>
 *      ```
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-button.component';
 *      import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *      import '@sencha/ext-web-components/dist/ext-textfield.component';
 * 
 *      export default class FormComponent {}
 *      ```
 */

/**
 * @cfg {Number} [itemSpacing=null]
 * The amount of space, in pixels, around each form field. Defaults to the value
 * inherited from the theme's stylesheet as configured by
 * {@link Ext.layout.Form#$layout-form-item-spacing $layout-form-item-spacing}.
 * @accessor
 */

/**
 * @cfg {Number/String} [labelWidth='null']
 * The width of the labels. This can be either a number in pixels, or a valid CSS
 * "width" style, e.g. `'100px'`, or `'30%'`.  When configured, all labels will assume
 * this width, and any {@link Ext.form.Labelable#labelWidth labelWidth} specified
 * on the items will be ignored.
 *
 * The default behavior of this layout when no no labelWidth is specified is to size
 * the labels to the text-width of the label with the longest text.
 * @accessor
 */
