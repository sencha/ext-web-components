/**
 * @class Ext.dataview.List
 * @extend Ext.dataview.Component
 * @xtype list
 * List is a vertical `DataView` which additionally supports {@link #grouped grouping},
 * {@link #indexBar indexing} and {@link #onItemDisclosure disclosures}.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-list
 *    onready="basiclist.readylistView"
 *>
 *</ext-list>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-list.component';
 * 
 *export default class BasicListComponent {
 *    constructor() {
 *        this.store = new Ext.data.Store({
 *           data: [
 *               {title: 'Item 1'},
 *               {title: 'Item 2'},
 *               {title: 'Item 3'},
 *               {title: 'Item 4'}
 *           ] 
 *       });
 *    }
 *    readylistView(event) {
 *        this.listView = event.detail.cmp;
 *        this.listView.setStore(this.store);
 *        this.listView.setItemTpl(`{title}`);
 *    }
 *}
 *
 * window.basiclist = new BasicListComponent();
 *```
 *
 * A more advanced example showing a list of people grouped by last name:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-list
 *    grouped="true"
 *    onready="groupedlist.readyGroupedListView"
 *>
 *</ext-list>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-list.component';
 * 
 *export default class GroupedListComponent {
 *    constructor() {
 *        this.store = new Ext.data.Store({
 *            data: [{
 *               firstName: 'Peter',
 *               lastName: 'Venkman'
 *            }, {
 *               firstName: 'Raymond',
 *                lastName: 'Stantz'
 *            }, {
 *               firstName: 'Egon',
 *               lastName: 'Spengler'
 *            }, {
 *               firstName: 'Winston',
 *               lastName: 'Zeddemore'
 *           }],
 *
 *           sorters: 'lastName',
 *
 *           grouper: {
 *               groupFn: function(record) {
 *                   return record.get('lastName')[0];
 *               }
 *           }
 *       });
 *   }
 * 
 *   readyGroupedListView(event) {
 *       this.groupedlistView = event.detail.cmp;
 *       this.groupedlistView.setStore(this.store);
 *       this.groupedlistView.setItemTpl(`{firstName} {lastName}`);
 *   }
 *}
 *
 * window.groupedlist = new GroupedListComponent();
 *```
 *
 * ## Components
 *
 * To use {@link Ext.Component components} to render records instead of `itemTpl`, use
 * `itemConfig` and `itemDataMap` (or `bind`).
 *
 * See the documentation for the {@link Ext.dataview.Component base class} for more
 * details.
 *
 * ## Scroll Docking
 *
 * If you want to dock items to the bottom or top of a List, you can use the `scrollDock`
 * configuration on child items in this List. The following example adds a button to the
 * bottom of the List.
 *
 *```HTML
 *@example({tab: 1})
 *<ext-list
 *    onready="positionlistitem.readyPositionedListView"
 *>
 *    <ext-button
 *       scrollDock="bottom"
 *       docked="bottom"
 *       text="load more..."
 *    >
 *    </ext-button>
 *</ext-list>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-list.component';
 *import '@sencha/ext-web-components/dist/ext-button.component';
 * 
 *export default class PositionedListItemComponent {
 * 
 *    constructor() {
 *        this.store = new Ext.data.store({
 *            data: [{
 *                firstName: 'Peter',
 *                lastName: 'Venkman'
 *             },    
 *             {
 *                firstName: 'Raymond',
 *                lastName: 'Stantz'
 *             },
 *             {
 *                firstName: 'Egon',
 *                lastName: 'Spengler'
 *             },
 *             {
 *                firstName: 'Winston',
 *                lastName: 'Zeddemore'
 *           }]
 *       })
 * 
 *   }
 * 
 *   readyPositionedListView(event) {
 *        this.positionedListView = event.detail.cmp;
 *        this.positionedListView.setStore(this.store);
 *        this.positionedListView.setItemTpl(`{firstName} {lastName}`);
 *   }
 *}
 *
 * window.positionlistitem = new PositionedListItemComponent();
 *
 *```
 */

/**
 * @cfg {Number} bufferSize
 * The number of items an `infinite` list will render beyond those immediately
 * visible.
 *
 * To prevent the rendering of items while scrolling, these extra items are
 * rendered out of view. When the scroller approaches within `minimumBufferSize`
 * of the end of the rendered range, the extra items trailing the scroll will be
 * repositioned (and reconfigured) ahead of the scroll.
 */

/**
 * @cfg {Ext.dataview.ListCollapser/Object} collapseDefaults
 * This config object supplies default for the `collapsible` config. When that
 * config is simply `true`, this is the complete config object for the group
 * collapser.
 *
 * NOTE: This config cannot be changed after instantiation. Instead, change the
 * `collapsible` config.
 * @since 7.0
 */

/**
 * @cfg {Ext.dataview.ListCollapser/Object/Boolean} collapsible
 * This object configures group collapse. It is only applicable when `grouped`.
 * Set to `false` to disable group collapsibility. The default value of `true`
 * uses the `collapseDefaults` config for the final collapser configuration
 * object. If this config is an object, it is merged with `collapseDefaults`
 * giving this object's properties priority over the defaults.
 * @since 7.0
 */

/**
 * @cfg {String} disclosureProperty
 * A property to check on each record to display the disclosure on a per record
 * basis. This property must be false to prevent the disclosure from being
 * displayed on the item.
 */

/**
 * @cfg {Boolean} [grouped=true]
 * Set to `false` turn off all grouping.
 * This setting is only meaningful if the underlying `store` has a `grouper`.
 */

/**
 * @cfg {Object/Ext.dataview.ItemHeader} groupFooter
 * The counterpart to `groupHeader`, this config controls the footer that is
 * displayed below each group in a {@link #grouped grouped} list.
 *
 * Footers are typically hidden when a group is `collapsed` but this can be
 * changed using the `footer` option:
 *
 *      {
 *          xtype: 'list',
 *          collapsible: {
 *              footer: true  // show footers when collapsed
 *          }
 *      }
 *
 * @since 6.5.0
 */

/**
 * @cfg {Object/Ext.dataview.ItemHeader} groupHeader
 * This config is used to configure a header to display above each group in a
 * {@link #grouped grouped} list. One of the more common uses of this config
 * is to set the {@link Ext.dataview.ItemHeader#cfg!tpl tpl}.
 *
 *      groupHeader: {
 *          tpl: 'Group: {name}'
 *      }
 *
 * @since 6.5.0
 */

/**
 * @cfg {Object/Ext.dataview.ListItemPlaceholder} groupPlaceholder
 * This config provides defaults for the placeholder items rendered for collapsed
 * groups.
 * @since 7.0
 * @private
 */

/**
 * @cfg {Boolean/Object/Ext.dataview.IndexBar} indexBar
 * Set to `true` to render an alphabet IndexBar docked on the right. This can also
 * be a config object for the {@link Ext.dataview.IndexBar IndexBar} component.
 */

/**
 * @cfg {Boolean} [infinite=false]
 * Set to `true` to if this list should anticipate too many rows to render to the
 * DOM at one time. When set to `true`, only a fixed number of rows is rendered at
 * once, depending on the `height` or `maxHeight` of the list.
 *
 * When using this mode in an auto-height situation (where the `list` should be
 * the height of its items), a `maxHeight` setting is required. This is due to
 * the fact that the rendered items are absolutely positioned. As such they do not
 * directly contribute to the list's height.
 *
 * When `maxHeight` is set, however, an infinite list uses that setting to decide
 * how many items to render **and** will set an appropriate height on its innermost
 * element, thereby allowing the list to achieve the proper height.
 *
 * Note that this configuration can not be dynamically changed after the list has
 * instantiated.
 */

/**
 * @cfg {Number} minimumBufferDistance
 * The minimum number of items beyond the visible area of an `infinite` list to
 * allow before repositioning items on the opposite side to balance the visible
 * area inside the rendered range.
 */

/**
 * @cfg {Boolean/Function/String/Object} onItemDisclosure
 * Set to `true` to display a disclosure icon on each list item. The list will
 * then fire the `disclose` event, and the event can be stopped before `childtap`.
 * By setting this config to a function, the function passed will be called when
 * the disclosure is tapped. This can be either a function object or the name of
 * a {@link Ext.app.ViewController controller} method.
 *
 * Finally you can specify an object with a `scope` and `handler` property defined.
 * This will also be bound to the tap event listener and is useful when you want
 * to change the scope of the handler.
 * @controllable
 */

/**
 * @cfg {Boolean} pinFooters
 * Whether or not to pin {@link #pinnedFooter footers} on bottom of item groups
 * while scrolling.
 * @since 6.5.0
 */

/**
 * @cfg {Boolean} pinHeaders
 * Whether or not to pin {@link #pinnedHeader headers} on top of item groups
 * while scrolling. Only applicable for `infinite` lists.
 */

/**
 * @cfg {Object} pinnedFooter
 * A config object for the pinned footer. Only applicable when {@link #pinFooters}
 * and {@link #grouped} are `true`.
 * @since 6.5.0
 */

/**
 * @cfg {Object} pinnedHeader
 * A config object for the pinned header. Only applicable when {@link #pinHeaders}
 * and {@link #grouped} are `true`.
 */

/**
 * @cfg {Boolean} preventSelectionOnDisclose
 * When `true` item selection is prevented when the user taps a disclose icon.
 */

/**
 * @cfg {Boolean} preventSelectionOnTool
 * When `true` item selection is prevented when the user taps on a `tool`. This
 * can be overridden on specific tools by placing the `preventSelection` property
 * on the tool:
 *
 *      tools: [{
 *          type: 'gear',
 *          preventSelection: false
 *      }]
 *
 * @since 6.5.0
 */

/**
 * @cfg {Boolean} [rowLines=true]
 * Set this to `false` to suppress the borders in between the items in this list.
 * By default the presence of borders between items is determined by the stylesheet.
 */

/**
 * @cfg {Boolean} [useSimpleItems=true]
 * Setting this to `false` changes the `xtype` of the `itemConfig` to the more
 * flexible {@link Ext.dataview.ListItem listitem} instead of the more efficient
 * setting of {@link Ext.dataview.SimpleListItem simplelistitem}.
 *
 * @deprecated 6.5.0 Set the `xtype` of `itemConfig` instead.
 */

/**
 * @cfg {Boolean} [variableHeights=false]
 * Set to `true` if the items in this list do not all have the same height. This
 * is `false` by default to avoid measure each row to determine its height.
 * @since 6.5.0
 */

/**
 * @cfg {Object} grouping
 * @private
 * @since 7.0
 */

/**
 * @cfg {Object} horizontalOverflow
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Object} innerCtHeight
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Object} innerWidth
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Object} pinnedFooterHeight
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Object} pinnedHeaderHeight
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Object} topRenderedIndex
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Boolean} verticalOverflow
 * This config is set to `true` when an `infinite` list has vertical overflow.
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Number} visibleHeight
 * The height of the container in pixels. This is a config to simplify processing
 * changes in container height.
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Number} visibleLeft
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Number} visibleTop
 * The top-most visible pixel coordinate. This is the same as the `y` value of
 * the `Scroller` but is a config to simplify processing scrolling changes.
 * @private
 * @since 6.5.0
 */

/**
 * @cfg {Number} visibleWidth
 * @private
 * @since 6.5.0
 */

/**
 * @event beforegroupcollapse
 * Fires before a group collapse starts. Return `false` to cancel the collapse.
 * @param {Ext.dataview.List} this
 * @param {Ext.dataview.ListGroup} group
 *
 * @since 7.0
 */

/**
 * @event beforegroupexpand
 * Fires before a group expand starts. Return `false` to cancel the expand.
 * @param {Ext.dataview.List} this
 * @param {Ext.dataview.ListGroup} group
 *
 * @since 7.0
 */

/**
 * @event groupcollapse
 * Fires when a group collapse starts.
 * @param {Ext.dataview.List} this
 * @param {Ext.dataview.ListGroup} group
 *
 * @since 7.0
 */

/**
 * @event groupexpand
 * Fires when a group expand starts.
 * @param {Ext.dataview.List} this
 * @param {Ext.dataview.ListGroup} group
 *
 * @since 7.0
 */

/**
 * @event childtouchstart
 * Fires when a child is first touched.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childtouchmove
 * Fires when a touch move occurs on a child.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childtouchend
 * Fires when a touch ends on a child.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childtouchcancel
 * Fires when a touch is cancelled.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childtap
 * Fires when a child is tapped.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childlongpress
 * Fires when a child is long-pressed.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childtaphold
 * Fires when a child is tap-held.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childsingletap
 * Fires when a child is single tapped.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childdoubletap
 * Fires when a child is double tapped.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childmouseenter
 * Fires when the mouse pointer enters a child.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event childmouseleave
 * Fires when the mouse pointer leaves a child.
 * @param {Ext.dataview.List} this This list.
 * @param {Ext.list.Location} location The location for the event.
 *
 * @since 6.5.0
 */

/**
 * @event disclose
 * @preventable
 * Fires whenever a disclosure is handled
 * @param {Ext.dataview.List} list The List instance
 * @param {Ext.data.Model} record The record associated to the item
 * @param {HTMLElement} target The element disclosed
 * @param {Number} index The index of the item disclosed
 * @param {Ext.event.Event} event The event object
 */

/**
 * @property classCls
 * @inheritdoc
 */

/**
 * @cfg itemConfig
 * @inheritdoc
 */

/**
 * @cfg {Boolean} maintainChildNodes
 * Set to `true` to maintain the order of rendered items in the DOM `childNodes`. In
 * an `infinite` list this is not normally done for performance reasons but this can
 * create accessibility issues.
 * @since 6.5.0
 * @private
 */

/**
 * @property {Number} rowHeight
 * The height of rows in the list. If `variableHeights` is `true` this is the minimum
 * row height.
 * @private
 */

/**
 * @cfg scrollable
 * @inheritdoc
 */

/**
 * @property template
 * @inheritdoc
 */

/**
 * Returns the `ListGroup` instance for the given `key`.
 * @param {String/Number/Ext.data.Model/Ext.data.Group} key The group string, index,
 * `Group` instance or a record in the group.
 * @return {Ext.dataview.ListGroup}
 */

/**
 * For infinite lists, not all records are represented in the DOM.
 *
 * This method will return `true` if the passed record index or
 * {@link Ext.data.Model record} is represented in the DOM.
 *
 * @param {Number/Ext.data.Model} recordOrIndex The {@link Ext.data.Model record} or
 * record index to test.
 * @return {Boolean} `true` if the record is rendered.
 */

/**
 * Scrolls the list so that the specified record is at the top.
 *
 * @param {Ext.data.Model} record Record in the store to scroll to.
 * @param {Boolean} [animation=false] Determines if scrolling is animated.
 */


/**
 * @property {Object} renderInfo
 * This object tracks coordinate and index information for the rendered
 * range of records for an `infinite` list.
 *
 * @property {Number} renderInfo.atBegin Set to `true` if the rendered range
 * is at the beginning of the store (`indexTop` is 0).
 *
 * @property {Number} renderInfo.atEnd Set to `true` if the rendered range
 * is at the end of the store (`indexBottom === store.getCount()`).
 *
 * @property {Number} renderInfo.top The `y` coordinate of the top-most
 * row in the rendered range.
 *
 * @property {Number} renderInfo.bottom The `y` coordinate just beyond
 * the bottom of the rendered range.
 *
 * @property {Number} renderInfo.height The height of the rendered range.
 *
 * @property {Number} renderInfo.indexTop The store index of the top-most
 * record in the rendered range.
 *
 * @property {Number} renderInfo.indexBottom The store index one beyond
 * the last record in the rendered range. This ensures that subtracting
 * `indexBottom - indexTop` is the number of records in the rendered range.
 * @private
 */



/**
 * Moves the given `item` to be before the `ref` item or index. For `infinite`
 * lists this does not impact the DOM childNodes unless `maintainChildNodes` is
 * specified. In this case the reordering only impacts this container's `items`
 * and `innerItems` collections.
 *
 * Maintaining the order of `dataItems` is a separate concern.
 *
 * @param {Ext.Component} item The item to reorder.
 * @param {Number/Ext.Component} ref The item before which `item` will be placed
 * or the index in `innerItems` where `item` will be inserted.
 * @param {Number} [offset=0] An optional adjustment to add to `ref`. Pass `1` to
 * insert `item` after `ref`.
 * @private
 */