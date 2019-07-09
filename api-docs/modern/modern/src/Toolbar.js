/**
 * @class Ext.Toolbar
 * @extend Ext.Container
 * @xtype toolbar
 *
 * {@link Ext.Toolbar}s are most commonly used as docked items as within a
 * {@link Ext.Container}. They can be docked either `top` or `bottom` using the
 * {@link #docked} prop.
 *
 * They allow you to insert items (normally {@link Ext.Button buttons}) and also add a {@link #title}.
 *
 * The {@link #defaultType} of {@link Ext.Toolbar Toolbar} is {@link Ext.Button}.
 *
 * You can alternatively use {@link Ext.TitleBar TitleBar} if you want the title to automatically
 * adjust the size of its items.
 *
 * ## Example
 *
 *     ```HTML
 *      @example({tab: 1})
 *      <ext-panel shadow bodyPadding=0>
 *          <ext-toolbar docked="top">
 *              <ext-button text="Default" badgeText="2">
 *              </ext-button>
 *              <ext-spacer>
 *                  <ext-segmentedbutton>
 *                      <ext-button text="Option 1" pressed></ext-button>
 *                       <ext-button text="Option 2"></ext-button>
 *                  </ext-segmentedbutton>
 *              </ext-spacer>
 *              <ext-button ui="action" text="Action">
 *              </ext-button>
 *          </ext-toolbar>
 *          Some Text!
 *      </ext-panel>
 *     ```
 *     ```javascript
 *     @example({tab: 2, packages: ['ext-web-components']})
 *
 *     import '@sencha/ext-web-components/dist/ext-toolbar.component';
 *     import '@sencha/ext-web-components/dist/ext-button.component';
 *     import '@sencha/ext-web-components/dist/ext-spacer.component';
 *     import '@sencha/ext-web-components/dist/ext-segmentedbutton.component';
 *     import '@sencha/ext-web-components/dist/ext-panel.component';
 * 
 *     export default class ToolbarComponent {}
 *     ```
 */
/**
 * @cfg {String/Ext.Title} [title=null]
 * The title of the toolbar.
 * @accessor
 */

/**
 * @cfg {String} [defaultType='button']
 * The default xtype to create.
 * @accessor
 */

/**
 * @cfg {String} [defaultButtonUI=null]
 * A default {@link Ext.Component#ui ui} to use for {@link Ext.Button Button} items.
 */

/**
 * @cfg {String} docked
 * The docked position for this {@link Ext.Toolbar}.
 * If you specify `left` or `right`, the {@link #layout} prop will automatically
 * change to a `vbox`. It's also recommended to adjust the {@link #width} of the
 * toolbar if you do this.
 * @accessor
 */

/**
 * @cfg {Number/String} [minHeight=null]
 * The minimum height height of the Toolbar.
 * @accessor
 */

/**
 * @cfg {Object/String} layout
 *
 * layout prop for this Container's layout.
 *
 * __Note:__ If you set the {@link #docked} prop to `left` or `right`, the default
 * layout will change from the `hbox` to a `vbox`.
 *
 * @accessor
 */
