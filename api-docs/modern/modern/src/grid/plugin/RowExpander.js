/**
 * @class Ext.grid.plugin.RowExpander
 * @extend Ext.Component
 * @alias plugin.rowexpander
 *
 * The Row Expander plugin provides an "expander" column to give the user the ability to show
 * or hide the {@link Ext.grid.Row#cfg!body body} of each row.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container width="100%" height="100%">
 *    <ext-grid
 *      shadow="true"
 *      height="275"
 *      plugins='["rowexpander"]'
 *      onready="rowExpanderGrid.onGridReady"
 *      fullscreen="true"
 *      variableHeights="true"
 *    >
 *        <ext-column text="First Name" dataIndex="fname" flex="1"></ext-column>
 *        <ext-column text="Last Name" dataIndex="lname" flex="1"></ext-column>
 *        <ext-column text="Talent" dataIndex="talent" flex="1"></ext-column>
 *    </ext-grid>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-grid.component';
 *import '@sencha/ext-web-components/dist/ext-column.component';
 *
 *Ext.require('Ext.grid.plugin.RowExpander');
 *
 *export default class RowExpanderGridComponent {
 *    constructor() {
 *       this.store = new Ext.data.Store({
 *          sorters: [
 *            { property: 'lname' }
 *          ],
 *          data: [
 *              { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster'},
 *              { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery'},
 *              { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All'},
 *              { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert'},
 *              { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower'  }
 *          ]
 *       });
 *    }
 *
 *    onGridReady(event) {
 *        this.rowExpanderGridCmp = event.detail.cmp;
 *        this.rowExpanderGridCmp.setItemConfig({ body: `
 *            <div>
 *                <img height="100" src="http://www.sencha.com/assets/images/sencha-avatar-64x64.png"/>
 *                <div style="font-size: 16px; margin-bottom: 5px">{fname} {lname}</div>
 *                <div style="font-weight: bold; font-size: 14px">{title}</div>
 *                <div style="font-weight: bold">{department}</div>
 *            </div>`
 *        });
 *        this.rowExpanderGridCmp.setStore(this.store);
 *    }
 *}
 * window.rowExpanderGrid = new RowExpanderGridComponent();
 *```
 */
