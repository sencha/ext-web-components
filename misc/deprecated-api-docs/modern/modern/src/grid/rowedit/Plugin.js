/**
 * The `Ext.grid.rowedit.Plugin` provides inline row editing for a `grid` or `lockedgrid`.
 * When editing begins, a small floating dialog will be shown for the appropriate row. Each
 * editable column will show a field for editing. There are configurable buttons to save
 * or cancel the edit.
 *
 * The {@link Ext.grid.column.Column#editor editors} specified for each column are used to
 * edit the record. The editor can be a field instance or a field configuration. See also
 * the {@link Ext.grid.column.Column#cfg!editable editable} config.
 *
 * The cell content will be displayed for non-editable columns.
 *
 * An appropriate field type should be chosen to match the data structure that it will be
 * editing. For example, to edit a date, a {@link Ext.field.Date datefield} would be the
 * appropriate editor. The `dataIndex` of the column and the corresponding `Ext.data.Model`
 * definition for the grid's store are consulted for the appropriate default editor type,
 * therefore in most cases, only `editable: true` is required for a column.
 *
 * @since 7.0
 */
/**
 * @member Ext.grid.Grid
 * @event beforeedit
 * Fires before row editing is triggered. Return `false` from event handler to prevent
 * the editing.
 *
 * This event is only fired if the {@link Ext.grid.rowedit.Plugin rowedit} plugin is
 * configured on the grid.
 *
 * @param {Ext.grid.Grid} sender
 * @param {Ext.grid.Location} location The editing location.
 * @param {Ext.grid.rowedit.RowEditor} location.editor The editor component.
 */

/**
 * @member Ext.grid.Grid
 * @event edit
 * Fires after editing.
 *
 * This event is only fired if the {@link Ext.grid.rowedit.Plugin rowedit} plugin is
 * configured on the grid.
 *
 * Usage example:
 *
 *      {
 *          xtype: 'grid',
 *          plugins: 'rowedit',
 *
 *          listeners: {
 *              edit: function(grid, location) {
 *                  // commit the changes right after editing finished
 *                  location.record.commit();
 *              }
 *          }
 *      }
 *
 * @param {Ext.grid.Grid} sender
 * @param {Ext.grid.Location} location The editing location.
 * @param {Ext.grid.rowedit.RowEditor} location.editor The editor component.
 */

/**
 * @member Ext.grid.Grid
 * @event validateedit
 * Fires after editing, but before the value is set in the record. Return `false`
 * from the event handler to prevent the change.
 *
 * This event is only fired if the {@link Ext.grid.rowedit.Plugin rowedit} plugin is
 * configured on the grid.
 *
 *      {
 *          xtype: 'grid',
 *          plugins: 'rowedit',
 *
 *          listeners: {
 *              edit: function(grid, location) {
 *                  var changes = location.editor.getChanges();
 *
 *                  // validate the fields affected in changes...
 *              }
 *          }
 *      }
 *
 * @param {Ext.grid.Grid} sender
 * @param {Ext.grid.Location} location The editing location.
 * @param {Ext.grid.rowedit.RowEditor} location.editor The editor component.
 */

/**
 * @member Ext.grid.Grid
 * @event canceledit
 * Fires when the user started editing but then cancelled the edit.
 *
 * This event is only fired if the {@link Ext.grid.rowedit.Plugin rowedit} plugin is
 * configured on the grid.
 *
 * @param {Ext.grid.Grid} sender
 * @param {Ext.grid.Location} location The editing location.
 * @param {Ext.grid.rowedit.RowEditor} location.editor The editor component.
 */

/**
 * @cfg {String} dirtyText
 * The message to display when dirty data prevents closing the row editor.
 * @locale
 */

/**
 * @cfg {Object/Ext.grid.plugin.RowEditor} editor
 * The config object for the row editor component.
 */

/**
 * @cfg {String} invalidToastMessage
 * A message displayed using `Ext.toast` if the user attempts to save invalid
 * data.
 *
 * Set to `null` to disable this message.
 */

/**
 * @cfg {String} triggerEvent
 * The pointer event to trigger editing.
 */

/**
 * @cfg {Ext.grid.Grid/Ext.grid.locked.Grid} grid
 * @private
 */

/**
 * @cfg {Boolean/Object/"discard"} autoConfirm
 * By default, this config is set to `'discard'` which will automatically cancel
 * pending edits when the row editor {@link #cfg!repositionEvent repositions} to a
 * different row. If the record was newly added, it will be removed as the editor
 * moves to the new row.
 *
 * Set this config to `true` to automatically update the current record before
 * editing a different record.
 *
 * Set to `false` to force the user to select Discard or Update in order to leave
 * a new or modified row.
 *
 * Since newly added rows are by definition modified as soon as the row editor
 * appears, there are additional possibilities that can be controlled by using
 * an object.
 *
 *      {
 *          xtype: 'grid',
 *          plugins: {
 *              rowedit: {
 *                  autoConfirm: {
 *                      // Discard new records w/no data entered:
 *                      new: 'discard',
 *
 *                      // Require Save/Cancel for new records w/data
 *                      // entered:
 *                      populated: false,
 *
 *                      // Auto confirm updates to existing records.
 *                      updated: true
 *                  }
 *              }
 *          }
 *      }
 *
 * @cfg {Boolean/"discard"} autoConfirm.new This key determines what is done for
 * new records that have had no data entered into them.
 *
 * @cfg {Boolean/"discard"} autoConfirm.populated This key determines what is done
 * for new records that have data entered into them. If this key is not defined,
 * new records will use the value of the `new` property.
 *
 * @cfg {Boolean/"discard"} autoConfirm.updated This key determines what is done
 * with existing records that have been edited.
 */

/**
 * @cfg {Object/Ext.Button[]} buttons
 * The buttons to be displayed below the row editor as a keyed object (or array)
 * of button configuration objects.
 *
 *      Ext.create({
 *          xtype: 'grid',
 *          ...
 *
 *          plugins: {
 *              rowedit: {
 *                  buttons: {
 *                      ok: { text: 'OK', handler: 'onOK' }
 *                  }
 *              }
 *          }
 *      });
 *
 * The {@link #minButtonWidth} is used as the default
 * {@link Ext.Button#minWidth minWidth} for the buttons in the buttons toolbar.
 */

/**
 * @property {Boolean} editing
 * This property is `true` when the row editor is currently editing a row.
 * @readonly
 */


/**
 * Starts editing the specified record, using the specified Column definition to define
 * which field is being edited.
 * @param {Ext.data.Model/Ext.grid.Location} record The Store data record which backs
 * the row to be edited.
 * @param {Ext.grid.column.Column/Number} [column] The column to be focused, or index
 * of the column. If not specified, it will default to the first visible column.
 * @return {Boolean} `true` if editing was started, `false` otherwise.
*/
