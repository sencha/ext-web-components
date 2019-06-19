/**
 * @class Ext.SplitButton
 * @extend Ext.Button
 * @xtype splitbutton
 *
 * A split button that provides a built-in dropdown arrow that can fire an event separately from the default click event
 * of the button. Typically this would be used to display a dropdown menu that provides additional options to the
 * primary button action, but any custom handler can provide the arrowclick implementation.
 *
 * ## Example usage:
 * HTML
 *     ```HTML
 *      @example({tab: 1})
 *      <ext-container padding="10" layout="vbox">
 *          <ext-splitbutton 
 *              text="SplitButton" 
 *              ontap="splitbutton.sayHello" 
 *              ui="action alt" 
 *              iconCls="x-fa fa-heart" 
 *              margin="10"
 *              menu='[{
 *              "text": "Menu Item 1",
 *              "handler": "function(){ alert("Item 1 clicked"); }"  
 *              },{
 *               "text": "Menu Item 2",
 *               "handler": "function(){alert("Item 2 clicked");}"
 *               }]'
 *           />
 *      </ext-container>
 *      
 *     ```
 *       JS
 *     ```javascript
 *     @example({tab: 2, packages: ['ext-web-components']})
 *
 *     import '@sencha/ext-web-components/dist/ext-container.component';
 *     import '@sencha/ext-web-components/dist/ext-splitbutton.component';
 * 
 *     export default class SplitButtonComponent {
 * 
 *          sayHello = () => {
 *              alert("Hello! The button was clicked");
 *          }
 *     }
 *     ```
 */

/**
* @cfg {Function} [arrowHandler=null]
* The arrow handler function to run when the Button is tapped on.
* @controllable
*/
