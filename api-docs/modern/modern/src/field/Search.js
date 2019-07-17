/**
 * @class Ext.field.Search
 * @extend Ext.field.Text
 * @xtype searchfield
 *
 * The Search field creates an HTML5 search input and is usually created inside a form. Because it creates an HTML
 * search input type, the visual styling of this input is slightly different to normal text input controls (the corners
 * are rounded), though the virtual keyboard displayed by the operating system is the standard keyboard control.
 *
 * As with all other form fields, the search field gains a "clear" button that appears whenever there
 * is text entered into the form, and which removes that text when tapped.
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel shadow="true">
 *        <ext-searchfield
 *             width="300"
 *             placeholder="Search..."
 *             onChange="searchfield.search"
 *             onready="searchfield.searchFieldReady()"
 *        >
 *        <ext-searchfield>
 *        <ext-container
 *            onready="searchfield.searchMessageReady()"
 *        >
 *        </ext-container>
 *    <ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-searchfield.component';
 * 
 *export default class SearchFieldComponent {
 * 
 *    search = (field, value) => {
 *       this.searchFieldView.setValue(value);
 *       this.searchMessage.setHTML(`<div>You searched for ${value} </div>`);
 *    }
 * 
 *    searchFieldReady = (event) => {
 *        this.searchFieldView = event.detail.cmp;
 *    }
 * 
 *    searchMessageRead = (event) => {
 *        this.searchMessage = event.detail.cmp;
 *    }
 *}
 *```
 *
 */
/**
 * Because search field inherits from {@link Ext.field.Text textfield} it gains all of the functionality that text
 * fields provide, including getting and setting the value at runtime, validations and various events that are fired
 * as the user interacts with the component. Check out the {@link Ext.field.Text} docs to see the additional
 * functionality available.
 */
