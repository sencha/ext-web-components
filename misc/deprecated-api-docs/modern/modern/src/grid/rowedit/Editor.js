/**
 * The component used by the {@link Ext.grid.rowedit.Plugin rowedit} plugin.
 * @since 7.0
 */

/**
 * Cancels any pending changes and dismisses the editor.
 */


/**
 * Returns an object containing the current set of field modifications. These can be
 * applied to a record like so:
 *
 *  record.set(editor.getChanges());
 *
 * @return {Object}
 */

/**
 * Returns the component assigned to the given column. This will be either its `editor`
 * or a component used to display the cell value. This will be `null` if the column
 * is not currently visible.
 *
 * @param {Ext.grid.column.Column} column
 * @return {Ext.Component}
 */


/**
 * Returns an object containing the current state of editor fields. When `all` is
 * passed as `false`, only the modified fields are returned (see `getChanges`).
 *
 * @param {Boolean} [all=true] Pass `false` to only return changes.
 * @return {Object}
 */


/**
 * Returns `true` if there are changes pending for the record.
 * @return {Boolean}
 */


/**
 * Returns `true` if the pending record changes are valid.
 * @return {Boolean}
 */


/**
 * Resets the state of editors using {@link Ext.field.Field#method!reset}. This will
 * be the state of the record when editing started. If the record was already modified,
 * that state will be preserved.
 *
 * After calling this method, `isDirty` will return `false`.
 */


/**
 * Set all editors to the record's clean state. If the record was clean when editing
 * started, this will be the same as `resetChanges`. If the record was modified when
 * editing began, calling this method will cause `isDirty` to report `true`. Only if
 * the user saves the changes will the record be restored to its clean state.
 */

/**
 * Saves any changes (if they pass `isValid`) and dismisses the editor.
 */

/**
 * Changes the values in the editors.
 * @param {Object} values The values to place in the respective editors.
 */
