/**
 * @class Ext.layout.HBox
 * @extend Ext.layout.Box
 * @alias layout.hbox
 *
 * The HBox (short for horizontal box) layout makes it easy to position items horizontally in a
 * {@link Ext.Container Container}. It can size items based on a fixed width or a fraction of the total width
 * available.
 *
 * For example, an email client might have a list of messages pinned to the left, taking say one third of the available
 * width, and a message viewing panel in the rest of the screen. We can achieve this with hbox layout's *flex* config:
 * 
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container layout="hbox">
 *          <ext-panel title="Inner Panel 1" flex="1">
 *              This is the inner panel content
 *          </ext-panel>
 *          <ext-panel title="Inner Panel 2" flex="1">
 *              This is the inner panel content
 *          </ext-panel>
 *      </ext-container>
 *      ```
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-panel.component';
 * 
 *      export default class HBoxComponent {}
 *      ```
 *
 * This will give us two boxes - one that's one third of the available width, the other being two thirds of the
 * available width.
 *
 * We can also specify fixed widths for child items, or mix fixed widths and flexes. For example, here we have 3 items
 * - one on each side with flex: 1, and one in the center with a fixed width of 100px:
 * 
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container layout="hbox">
 *          <ext-panel title="Inner Panel 1" flex="1">
 *              This is the inner panel content
 *          </ext-panel>
 *          <ext-panel title="Inner Panel 2" width="100">
 *              This is the inner panel content
 *          </ext-panel>
 *          <ext-panel title="Inner Panel 3" flex="1">
 *              This is the inner panel content
 *          </ext-panel>
 *      </ext-container>
 *      ```
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-panel.component';
 * 
 *      export default class myExample extends Component {}
 *      ```
 */
