/**
 * Wraps Froala Editor. [Froala Editor](https://www.froala.com/wysiwyg-editor).
 *
 * When the component is created, the Froala editor instance gets initialized, which
 * takes several milliseconds. Use the {@link #event-ready} event to know when it's
 * ready.
 *
 * To run native Froala methods, access the Froala editor instance via
 * {@link #method-getEditor}. For example,
 * `myFroalaComponent.getEditor().popups.show('froala.hello', 30, 60, 200);`
 *
 * Native Froala events are available by prefixing the event name with "froala.".
 * For example, you can listen to the Froala click event via
 * `myFroalaComponent.on('froala.click', function(){console.log('click');});`
 *
 * ## Example
 *
 *     @example
 *     Example.main.Main({
    *         xtype: 'froalaeditor',
    *         value: 'Hello world!',
    *         listeners: {
    *             change: function(froalaComponent) {
    *                 Ext.toast({ message: "Change!" });
    *             },
    *             // Native Froala events are prefixed with 'froala.'
    *             "froala.click": function(froalaComponent) {
    *                 Ext.toast({ message: "Click!" });
    *             }
    *         }
    *     });
    *
    *     Ext.application{
    *         name: 'Example',
    *         mainView: 'Example.main.Main'
    *     }
    *
    * If you have a Froala activation key, configure it in your application's `app.json`
    *
    *       {
    *          "name": "MyApp",
    *          "namespace": "MyApp",
    *          "framework": "ext",
    *          "requires": ["font-awesome", "froala-editor"],
    *          "froala" {
    *              "activation-key": "my-activation-key"
    *           }
    *          ...
    *       }
    *
    * For more information about activation keys, please visit [What is an Activation Key?](https://wysiwyg-editor.froala.help/hc/en-us/articles/115000394945-What-is-an-Activation-Key-).
    */
   
/**
 * @event change
 * Fired when the html content changes
 * @param {Ext.view.FroalaEditor} this This component.
 * @param {string} the html content.
 */

/**
 * @event ready
 * Fired after the FroalaEditor instance is initialized.
 * @param {Ext.view.FroalaEditor} this This component.
 * @param {Object} the FroalaEditor instance.
 */
   