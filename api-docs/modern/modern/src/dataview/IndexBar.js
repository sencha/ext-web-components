/**
 * @class Ext.dataview.IndexBar
 * @extend Ext.Component
 * @xtype indexbar
 *
 * IndexBar is a component used to display a list of data (primarily an alphabet) which can then be used to quickly
 * navigate through a list (see {@link Ext.List}) of data. When a user taps on an item in the {@link Ext.IndexBar},
 * it will fire the {@link #index} event.
 *
 * Here is an example of the usage in a {@link Ext.List}:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-list
 *    onready="indexbar.readyIndexBarView"
 *    indexBar="true"
 *>
 *</ext-list>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-spinnerfield.component';
 * 
 *export default class IndexBarComponent {
 *    constructor() {
 *        this.store = new Ext.data.Store({
 *            data: [{
 *                firstName: 'Screech',
 *                lastName: 'Powers'
 *            },
 *            {
 *                firstName: 'Kelly',
 *                lastName: 'Kapowski'
 *            },
 *            {
 *                firstName: 'Zach',
 *                lastName: 'Morris'
 *            },
 *            {
 *                firstName: 'Jessie',
 *                lastName: 'Spano'
 *            },
 *            {
 *                firstName: 'Lisa',
 *                lastName: 'Turtle'
 *            },
 *            {
 *                firstName: 'A.C.',
 *                lastName: 'Slater'
 *            },
 *            {
 *                firstName: 'Richard',
 *                lastName: 'Belding'
 *            }]
 *        })
 *    }
 *          
 *    readyIndexBarView(event) {
 *        this.indexBarView = event.detail.cmp;
 *        this.indexBarView.setStore(this.store);
 *        this.indexBarView.setItemTpl(`<div class='contact'>{firstName} <strong>{lastName}</strong></div>`);
 *    }
 *}
 *
 * window.indexbar = new IndexBarComponent();
 */

/**
 * @cfg {vertical/horizontal} [direction='vertical]
 * Layout direction, can be either 'vertical' or 'horizontal'
 * @accessor
 */

/**
 * @event index
 * Fires when an item in the index bar display has been tapped.
 * @param {Ext.dataview.IndexBar} this The IndexBar instance
 * @param {String} html The HTML inside the tapped node.
 * @param {Ext.dom.Element} target The node on the indexbar that has been tapped.
 */

/**
 * @cfg {Array} [letters=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']]
 * The letters to show on the index bar.
 * @accessor
 */

/**
 * @cfg {String} [listPrefix=null]
 * The prefix string to be used at the beginning of the list.
 * E.g: useful to add a "#" prefix before numbers.
 * @accessor
 */
