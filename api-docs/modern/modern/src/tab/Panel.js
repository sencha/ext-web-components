/**
 * @class Ext.tab.Panel
 * @extend Ext.Container
 * @xtype tabpanel
 *
 * Tab Panels are a great way to allow the user to switch between several pages that are all full screen. Each
 * Component in the Tab Panel gets its own Tab, which shows the Component when tapped on. Tabs can be positioned at
 * the top or the bottom of the Tab Panel, and can optionally accept title and icon
 * configurations (see {@link Ext.Button#iconCls iconCls} for additional information).
 * 
 *```HTML
*@example({tab: 1})
*<ext-tabpanel
* flex="1"
* shadow="true"
* height="100%"
* defaults='{"cls": "card","layout": "center"}'
*>
*<ext-panel title="Tab 1" layout="center">
*<ext-container flex="1" html="By default, tabs are aligned to the top of a view."></ext-container>
*</ext-panel>
* <ext-panel flex="1" title="Tab 2" layout="center">
*<ext-container flex="1" html="A TabPanel can use different animations by setting <code>layout.animation.</code>"></ext-container>
*</ext-panel>
*<ext-panel title="Tab 3" layout="center">
* <ext-container cls="action" html="User tapped Tab 3"></ext-container>
*</ext-panel>
*</ext-tabpanel>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-tabpanel.component';
 * 
 *export default class PanelComponent {}
 *```
 * 
 * One tab was created for each of the {@link Ext.Container containers} defined in the within the tabpanel.
 * Each tab automatically uses the title and icon defined on the item configuration, and
 * switches to that item when tapped.
 */
