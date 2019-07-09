/**
 * @class Ext.grid.plugin.CellEditing
 * @extend Ext.plugin.Abstract
 * @alias plugin.gridcellediting
 * @alias plugin.cellediting
 *
 * The Cell Editing plugin utilizes an `Ext.Editor` to provide inline cell editing for
 * grid cells.  Each `Column` with an `editable` prop value of true will become editable when the user
 * double-clicks on a cell in the column.  By default a `TextField` is used as the editor.  You
 * can substitute a different editor by adding a subclass of `Ext.field.Field` as a child of the `Column`.
 *
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container width="100%" height="100%">
 *          <ext-grid shadow="true" height="275" plugins='["cellediting"]' onready="editablegrid.onGridReady">
 *              <ext-column text="First Name" dataIndex="fname" flex="1" editable="true"></ext-column>
 *              <ext-column text="Last Name" dataIndex="lname" flex="1" editable="true"></ext-column>
 *              <ext-column text="Talent" dataIndex="talent" flex="1" editable="true"></ext-column>
 *          </ext-grid>
 *      </ext-container>
 *      ```
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-grid.component';
 *      import '@sencha/ext-web-components/dist/ext-column.component';
 *
 *      Ext.require('Ext.grid.plugin.Editable');
 *
 *      export default class EditableGridComponent {
 *          constructor() {
 *             this.store = new Ext.data.Store({
 *                data: [
 *                    { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster'},
 *                    { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery'},
 *                    { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All'},
 *                    { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert'},
 *                    { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower'  }
 *                ]
 *             });
 *          }
 *
 *          onGridReady(event) {
 *              this.editableGridCmp = event.detail.cmp;
 *              this.editableGridCmp.setStore(this.store);
 *          }
 *      }
 *      ```
 */

/**
 * @cfg {String} [triggerEvent='doubletap']
 * The event used to trigger the editor
 * @accessor
 */
