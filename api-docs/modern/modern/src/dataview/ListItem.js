/**
 * @class Ext.dataview.ListItem

 * @extend Ext.dataview.DataItem
 * @xtype listitem
 * @alternateClassName Ext.dataview.component.ListItem

 * A ListItem is a container for {@link Ext.dataview.List}.
 *
 * ListItem configures and updates the {@link Ext.data.Model records} for
 * the sub-component items in a list.
 *
 * *Note*: Use of ListItem increases overhead since it generates more markup than
 * using the `SimpleListItem`. This overhead is more noticeable in Internet Explorer. If
 * possible, use the default {@link Ext.dataview.SimpleListItem}. To use the additional
 * features of this class, use the {@link Ext.dataview.List#itemConfig itemConfig} config:
 *
 * features of this class, use the {@link Ext.dataview.List#itemConfig itemConfig} config.
 */

 /**
  * @event updatedata
  * Fires whenever the data of the DataItem is updated.
  * @param {Ext.dataview.component.DataItem} this The DataItem instance.
  * @param {Object} newData The new data.
  */
