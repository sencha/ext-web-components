/**
 * @class Ext.menu.RadioItem
 * @extend Ext.menu.CheckItem
 * @alias widget.menuradioitem
 *
 * A menu item that contains a radio button item which can participate in a group of
 * mutually exclusive radio items.
 * 
 *      HTML
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container>
 *          <ext-button text="Menu">
 *              <ext-menu rel="menu" >
 *                  <ext-menuradioitem text="Mobile" name="ui-type" />
 *                  <ext-menuradioitem text="Desktop" name="ui-type"/>
 *              </ext-menu>
 *          </ext-button>
 *      </ext-container>
 *      ```
 *      JS
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-button.component';
 *      import '@sencha/ext-web-components/dist/ext-menu.component';
 *      import '@sencha/ext-web-components/dist/ext-menuradioitem.component';
 * 
 *      export default class RadioItemComponent {}
 *      ```
 */

/**
 * @cfg {String} [group=null]
 * Name of a radio group that the item belongs.
 *
 * Specifying this option will turn check item into a radio item.
 *
 * Note that the group name is local to the owning Menu.
 * @accessor
 */

/**
 * @cfg {Boolean} [allowUncheck=null]
 * By default, as in native RadioGroups, a checked radio item cannot be unchecked
 * by the UI. Set this to `true` to allow unchecking of checked RadioItems.
 * @accessor
 */
