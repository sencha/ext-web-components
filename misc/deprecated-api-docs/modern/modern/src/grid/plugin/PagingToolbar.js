/**
 * @class Ext.grid.plugin.PagingToolbar
 * @extend Ext.plugin.Abstract
 * @alias plugin.pagingtoolbar
 * @alias plugin.gridpagingtoolbar
 *
 * The Paging Toolbar is a specialized toolbar that is
 * bound to a `Ext.data.Store` and provides automatic paging control.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container width="100%" height="100%">
 *    <ext-grid shadow="true" height="275" plugins='["pagingtoolbar"]' onready="paginggrid.onGridReady">
 *        <ext-column text="First Name" dataIndex="fname" flex="1" editable="true"></ext-column>
 *        <ext-column text="Last Name" dataIndex="lname" flex="1" editable="true"></ext-column>
 *        <ext-column text="Talent" dataIndex="talent" flex="1" editable="true"></ext-column>
 *    </ext-grid>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-grid.component';
 *import '@sencha/ext-web-components/dist/ext-column.component';
 *
 *Ext.require('Ext.grid.plugin.PagingToolbar');
 *
 *export default class PagingGridComponent {
 *    constructor() {
 *       this.store = new Ext.data.Store({
 *          pageSize: 3,
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
 *        this.pagingGridCmp = event.detail.cmp;
 *        this.pagingGridCmp.setStore(this.store);
 *    }
 *}
 * window.paginggrid = new PagingGridComponent();
 *```
 */
