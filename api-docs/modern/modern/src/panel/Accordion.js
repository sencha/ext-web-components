/**
 * This container manages child panels in an expandable accordion style. By default, only
 * one child panel can be expanded at a time. Set {@link #openable} to a different value
 * to allow multiple panels to be expanded.
 *
 * Note: Only `Ext.Panel` and its subclasses will be explicitly managed. All other items
 * will be treated normally.
 *
 *      @example
 *      Ext.create({
 *          xtype: 'accordion',
 *          title: 'Accordion',
 *          fullscreen: true,
 *
 *          defaults: {
 *              // applied to each contained panel
 *              xtype: 'panel',
 *              bodyPadding: 10
 *          },
 *
 *          openable: 2,
 *
 *          items: [{
 *              title: 'Panel 1',
 *              html: 'Panel content!'
 *          }, {
 *              title: 'Panel 2',
 *              html: 'Panel content!'
 *          }, {
 *              title: 'Panel 3',
 *              html: 'Panel content!'
 *          }]
 *      });
 *
 * @since 7.0
 */

 /**
  * @cfg {String} defaultPanelUI
  * The default {@link Ext.Widget#cfg!ui ui} to assign to collapsible panels.
  */

 /**
  * @cfg {Boolean} expandedFirst
  * Set to `true` to move a panel to the first position in the container when it
  * is expanded.
  */

 /**
  * @cfg {Number} openable
  * Limits the number simultaneously expanded (open) child panels.
  */
