/**
 * @class Ext.grid.plugin.ViewOptions
 * @extend Ext.Component
 * @alias plugin.gridviewoptions
 *
 * The ViewOptions plugin produces a menu that slides in from the right
 * (by default) when you longpress on the grid headers. The menu displays the column
 * header names which represents the order of the grid's columns. This allows users to
 * easily reorder the grid's columns by reordering the rows. Items may be dragged by
 * grabbing the handle on the left side of the row and moving the item vertically.
 *
 * Once the columns are ordered to your liking, you may then close the menu by tapping the
 * "Done" button.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container width="100%" height="100%">
 *    <ext-grid shadow="true" height="100%" onready="basicgrid.onGridReady" plugins='["gridviewoptions"]'>
 *        <ext-column text="Name" dataIndex="name" flex="1" sortable="false"></ext-column>
 *        <ext-column text="Email" dataIndex="email" flex="1"></ext-column>
 *        <ext-column text="Phone" dataIndex="phone" flex="1"></ext-column>
 *    </ext-grid>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-grid.component';
 *import '@sencha/ext-web-components/dist/ext-column.component';
 *
 *Ext.require('Ext.grid.plugin.ViewOptions');
 *
 *export default class BasicGridComponent {
 *    constructor() {
 *       this.store = new Ext.data.Store({
 *          data: [
 *              { "name": "Lisa", "email": "lisa@simpsons.com", "phone": "555-111-1224" },
 *              { "name": "Bart", "email": "bart@simpsons.com", "phone": "555-222-1234" },
 *              { "name": "Homer", "email": "home@simpsons.com", "phone": "555-222-1244" },
 *              { "name": "Marge", "email": "marge@simpsons.com", "phone": "555-222-1254" }
 *          ]
 *       });
 *    }
 *
 *    onGridReady(event) {
 *        this.basicGridCmp = event.detail.cmp;
 *        this.basicGridCmp.setStore(this.store);
 *    }
 *}
 *
 *  window.basicgrid = new BasicGridComponent();
 *```
 *
 * Developers may modify the menu and its contents by overriding {@link #sheet} and
 * {@link #columnList} respectively.
 */

/**
 * @cfg {Number} [sheetWidth=250]
 * The width of the menu
 * @accessor
 */

/**
 * @cfg {Object} sheet
 * The configuration of the menu
 * @accessor
 */

/**
 * @cfg {Object} columnList
 * The column's configuration
 * @accessor
 */

/**
 * @cfg visibleIndicatorSelector
 * The CSS class responsible for displaying the visibility indicator.
 * @accessor
 */

/**
 * @cfg groupIndicatorSelector
 * The CSS class responsible for displaying the grouping indicator.
 * @accessor
 */
