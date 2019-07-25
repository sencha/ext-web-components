/**
 * Panels are {@link Ext.Container containers} with an optional
 * {@link Ext.panel.Header header} that can be positioned using the
 * {@link #cfg-headerPosition headerPosition} config option.
 *
 * Panels add extra functionality by providing various options for configuring a header
 * that is docked inside the panel.  Setting any of the following panel config options
 * will automatically create a header:
 * - {@link #cfg-title title}
 * - {@link #cfg-iconCls iconCls}
 * - {@link #cfg-icon icon}
 * - {@link #cfg-tools tools}
 * - {@link #cfg-closable closable}
 *
 * It is also possible to configure the header directly using the {@link #header}
 * configuration. See {@link Ext.panel.Header} for more information.
 *
 * ### Simple Panel Example (with body text / html)
 *
 * Usually, Panels are used as constituents within an
 * {@link Ext.app.Application application}, in which case, they
 * would be used as child items of {@link Ext.Container Containers}, and would themselves
 * use {@link Ext.Component Ext.Components} as child {@link #cfg-items items}. However,
 * to illustrate simply rendering a Panel into the document, here's how to do it:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container>
 *    <ext-panel
 *        shadow="true"
 *        title="Panel"
 *        height="300"
 *        width="500"
 *        onready="mainPanel.onMainPanelReady"
 *    >
 *        <p>Panel Body</p>
 *    </ext-panel>
 *    <ext-button ui="action" ontap="mainPanel.modalClick" margin="20 0 0 0" text="Show Modal"></ext-button>
 *    <ext-panel
 *        title="Floated Panel"
 *        modal="true"
 *        floated="true"
 *        centered="true"
 *        hideOnMaskTap="true"
 *        width="400"
 *        maxHeight="400"
 *        onready="mainPanel.onModalPanelReady"
 *        showAnimation='{
 *             "type": "popIn",
 *             "duration": 250,
 *             "easing": "ease-out"
 *        }'
 *        hideAnimation='{
 *             "type": "popOut",
 *             "duration": 250,
 *             "easing": "ease-out"
 *        }'
 *    >
 *        <p>This is a modal, centered and floated panel. hideOnMaskTap is true by default so we can tap anywhere outside the overlay to hide it.</p>
 *    </ext-panel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-button.component';
 *import '@sencha/ext-web-components/dist/ext-panel.component';
 *
 *Ext.require('Ext.Toast');
 *
 *export default class MainPanelComponent {
 *   toolHandler = (owner, tool) => {
 *      Ext.toast(`You clicked ${tool.config.type}`);
 *   }
 *
 *   onMainPanelReady = (event) => {
 *       this.mainPanel = event.detail.cmp;
 *       this.mainPanel.setTools([
 *          { type: "minimize", handler: this.toolHandler.bind(this) },
 *          { type: "refresh", handler: this.toolHandler.bind(this) },
 *          { type: "save", handler: this.toolHandler.bind(this) },
 *          { type: "search", handler: this.toolHandler.bind(this) },
 *          { type: "close", handler: this.toolHandler.bind(this) }
 *       ]);
 *   }
 *
 *   onModalPanelReady = (event) => {
 *      this.modalPanelCmp = event.detail.cmp;
 *   }
 *
 *   modalClick = (owner, tool) => {
 *      this.modalPanelCmp.show();
 *   }
 *}
 *window.mainPanel = new MainPanelComponent();
 *```

 *
 * **Note:** By default, the `{@link #cfg-closable close}` header tool _destroys_ the
 * Panel resulting in removal of the Panel and the destruction of any descendant
 * Components. This makes the Panel object, and all its descendants **unusable**. To
 * enable the close tool to simply _hide_ a Panel for later re-use, configure the Panel
 * with `{@link #closeAction closeAction}: 'hide'`.
 */

/**
 * @property defaultBindProperty
 * @inheritdoc
 */

/**
 * @cfg {'top'/'right'/'bottom'/'left'} headerPosition
 * The position of the header. Ignored if no {@link #cfg-header} is created.
 *
 * @since 6.5.0
 */

/**
 * @cfg {Boolean/Object} header
 * Pass as `false` to prevent a header from being created.
 *
 * You may also assign a header with a config object (optionally containing an
 * `xtype`) to custom-configure your panel's header.
 *
 * See {@link Ext.panel.Header} for all the options that may be specified here.
 */
/**
 * @cfg icon
 * @inheritdoc Ext.panel.Header#cfg-icon
 */

/**
 * @cfg iconCls
 * @inheritdoc Ext.panel.Header#cfg-iconCls
 */

/**
 * @cfg [iconAlign='left']
 * @inheritdoc Ext.panel.Header#cfg-iconAlign
 */

/**
 * @cfg title
 * @inheritdoc Ext.panel.Header#cfg-title
 */

/**
 * @cfg [titleAlign='left']
 * @inheritdoc Ext.panel.Header#cfg-titleAlign
 */

/**
 * @cfg {Boolean} [anchor=false]
 * Configure `true` to show an anchor element pointing to the target component
 * when this Panel is floating and {@link #showBy shown by} another component.
 */

/**
 * @cfg {String} anchorPosition
 * Set the anchor position.
 *
 * @private
 */

/**
 * @cfg {Boolean} closable
 * True to display the 'close' tool button and allow the user to close the panel
 * or false to hide the button and disallow closing the window.
 *
 * By default, when close is requested by clicking the close button in the
 * header, the {@link #method-close} method will be called. This will
 * _{@link Ext.Component#method-destroy destroy}_ the Panel and its content
 * meaning that it may not be reused.
 *
 * To make closing a Panel _hide_ the Panel so that it may be reused, set
 * {@link #closeAction} to 'hide'.
 */
/**
 * @cfg {Object/Object[]} bbar
 * Convenience config. Short for 'Bottom Bar'.
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         bbar: [{
 *             xtype: 'button',
 *             text : 'Button 1'
 *         }]
 *     });
 *
 * is equivalent to
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         items: [{
 *             xtype: 'toolbar',
 *             docked: 'bottom',
 *             items: [{
 *                 xtype: 'button',
 *                 text: 'Button 1'
 *             }]
 *         }]
 *     });
 *
 * @since 6.5.0
 */
/**
 * @cfg {Object/Object[]} lbar
 * Convenience config. Short for 'Left Bar' (left-docked, vertical toolbar).
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         lbar: [{
 *             xtype: 'button',
 *             text : 'Button 1'
 *         }]
 *     });
 *
 * is equivalent to
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         items: [{
 *             xtype: 'toolbar',
 *             docked: 'left',
 *             items: [{
 *                 xtype: 'button',
 *                 text: 'Button 1'
 *             }]
 *         }]
 *     });
 *
 * @since 6.5.0
 */
/**
 * @cfg {Object/Object[]} rbar
 * Convenience config. Short for 'Right Bar' (right-docked, vertical toolbar).
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         rbar: [{
 *             xtype: 'button',
 *             text : 'Button 1'
 *         }]
 *     });
 *
 * is equivalent to
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         items: [{
 *             xtype: 'toolbar',
 *             docked: 'right',
 *             items: [{
 *                 xtype: 'button',
 *                 text: 'Button 1'
 *             }]
 *         }]
 *     });
 *
 * @since 6.5.0
 */
/**
 * @cfg {Object/Object[]} tbar
 * Convenience config. Short for 'Top Bar'.
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         tbar: [{
 *             xtype: 'button',
 *             text : 'Button 1'
 *         }]
 *     });
 *
 * is equivalent to
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         fullscreen: true,
 *         html: 'hello world',
 *         padding: 20,
 *         items: [{
 *             xtype: 'toolbar',
 *             docked: 'top',
 *             items: [{
 *                 xtype: 'button',
 *                 text: 'Button 1'
 *             }]
 *         }]
 *     });
 *
 * @since 6.5.0
 */

/**
 * @cfg border
 * @inheritdoc
 */

/**
 * @cfg {Boolean} bodyBorder
 * Controls the border style of the panel body using the following values:
 *
 * - `true` to enable the border around the panel body (as defined by the theme)
 * Note that even when enabled, the bodyBorder is only visible when there are
 * docked items around the edges of the panel.  Where the bodyBorder touches the
 * panel's outer border it is automatically collapsed into a single border.
 *
 * - `false` to disable the body border
 *
 * - `null` - use the value of {@link #cfg-border border} as the value for
 * `bodyBorder`
 */

/**
 * @cfg {Number/Boolean/String} bodyPadding
 * A shortcut for setting a padding style on the body element. The value can
 * either be a number to be applied to all sides, or a normal CSS string
 * describing padding.
 *
 *     bodyPadding: 5 // 5px padding on all sides
 *
 *     bodyPadding: '10 20' // 10px top and bottom padding - 20px side padding
 *
 * *See the {@link Ext.dom.Element#static-method-unitizeBox unitizeBox} method
 * for more information on what string values are valid*
 */

/**
 * @cfg {String/Object} bodyStyle
 * Custom CSS styles to be applied to the panel's body element, which can be
 * supplied as a valid CSS style string or an object containing style property
 * name/value pairs.
 *
 * For example, these two formats are interpreted to be equivalent:
 *
 *     bodyStyle: 'background:#ffc; padding:10px;'
 *
 *     bodyStyle: {
 *         background: '#ffc',
 *         padding: '10px'
 *     }
 *
 * @accessor set
 * @since 6.5.0
 */

/**
 * @cfg {Object/Ext.Button[]} buttons
 * The buttons for this panel to be displayed in the `buttonToolbar` as a keyed
 * object (or array) of button configuration objects.
 *
 *     @example
 *     Ext.create({
 *         xtype: 'panel',
 *         html: 'hello world',
 *         padding: 20,
 *         buttons: {
 *            ok: {text: 'OK', handler: 'onOK'}
 *         }
 *     });
 *
 * For buttons that are defined in `standardButtons` (such as `'ok'`), there is a
 * more convenient short-hand for this config:
 *
 *     @example
 *     Ext.create({
 *         fullscreen: true,
 *         xtype: 'panel',
 *         html: 'hello world',
 *         padding: 20,
 *         buttons: {
 *            ok: 'onOK',
 *            cancel: 'onCancel'
 *         }
 *     });
 *
 * The {@link #minButtonWidth} is used as the default
 * {@link Ext.Button#minWidth minWidth} for the buttons in the buttons toolbar.
 * @since 6.5.0
 */

/**
 * @cfg {Object/Ext.Toolbar} buttonToolbar
 * Configure the toolbar that holds the `buttons` inside.
 * @since 6.5.0
 */


/**
 * @cfg {String} closeAction
 * The action to take when the close header tool is clicked:
 *
 * - **`'{@link #method-destroy}'`** :
 *
 *   {@link #method-remove remove} the window from the DOM and
 *   {@link Ext.Component#method-destroy destroy} it and all descendant Components.
 *   The window will **not** be available to be redisplayed via the
 *   {@link #method-show} method.
 *
 * - **`'{@link #method-hide}'`** :
 *
 *   {@link #method-hide} the window by setting visibility to hidden and applying
 *   negative offsets. The window will be available to be redisplayed via the
 *   {@link #method-show} method.
 *
 * **Note:** This behavior has changed! setting *does* affect the {@link #method-close}
 * method which will invoke the appropriate closeAction.
 */

/**
 * @cfg {String} closeToolText
 * Text to be announced by screen readers when the **close**
 * {@link Ext.Tool tool} is focused.  Will also be set as the close tool's
 * {@link Ext.Tool#cfg-tooltip tooltip} text.
 *
 * **Note:** Applicable when the panel is {@link #closable}: true
 * @locale
 */

/**
 * @property classCls
 * @inheritdoc
 */

/**
 * @cfg manageBorders
 * @inheritdoc
 */

/**
 * @property template
 * @inheritdoc
 */

/**
 * Adds a CSS class to the body element. If not rendered, the class will be added
 * when the panel is rendered.
 * @param {String} cls The class to add
 * @return {Ext.Panel} this
 */

/**
 * Removes a CSS class from the body element
 * @param {String} cls The class to remove
 * @return {Ext.Panel} this
 */

/**
 * Add tools to this panel {@link Ext.panel.Header header}
 *
 *     panel.addTool({
 *         type: 'gear',
 *         handler: function () {
 *             // ....
 *         }
 *     });
 *
 *     panel.addTool([{
 *         type: 'gear',
 *         handler: 'viewControllerGearMethod'
 *     }, {
 *         type: 'save',
 *         handler: 'viewControllerSaveMethod'
 *     }]);
 *
 * By default the tools will be accessible via keyboard, with the exception of
 * automatically added collapse/expand and close tools.
 *
 * If you implement keyboard equivalents of your tools' actions elsewhere and do not
 * want the tools to participate in keyboard navigation, you can make them
 * presentational instead:
 *
 *     panel.addTool({
 *         type: 'mytool',
 *         focusable: false,
 *         ariaRole: 'presentation'
 *         // ...
 *     });
 *
 * @param {Object/Object[]/Ext.Tool/Ext.Tool[]} tool The tool or tools to add.
 */
