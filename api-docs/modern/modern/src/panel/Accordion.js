/**
 * @class Ext.panel.Accordion
 * @extend Ext.Panel
 * @xtype accordion
 * @mixin Ext.mixin.Bufferable
 * This container manages child panels in an expandable accordion style. By default, only
 * one child panel can be expanded at a time. Set {@link #openable} to a different value
 * to allow multiple panels to be expanded.
 *
 * Note: Only `Ext.Panel` and its subclasses will be explicitly managed. All other items
 * will be treated normally.
 *
 * ```HTML
 * @example({tab: 1})
 *  <ext-accordion 
 *      title="Accordion"
 *      fullscreen="true"
 *      openable="2"
 *  >
 *      <ext-panel
 *          bodyPadding="10"
 *          title="Panel 1"
 *          html="Panel Content!"
 *      >
 *      </ext-panel>
 *      <ext-panel
 *          bodyPadding="10"
 *          title="Panel 2"
 *          html="Panel Content!"
 *      >
 *      </ext-panel>
 *      <ext-panel
 *          bodyPadding="10"
 *          title="Panel 3"
 *          html="Panel Content!"
 *      >
 *      </ext-panel>
 *  </ext-accordion>
 *```
 * ```javascript
 * @example({tab: 2, packages: ['ext-web-components']})
 * import '@sencha/ext-web-components/dist/ext-accordion.component';
 * import '@sencha/ext-web-components/dist/ext-panel.component';
 *
 * export default class AccordionComponent {
 * }
 *
 * ```
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
