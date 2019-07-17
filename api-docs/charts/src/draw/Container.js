/**
 * @class Ext.draw.Container
 * @extend Ext.draw.ContainerBase
 * @xtype draw
 * The container that holds and manages instances of the {@link Ext.draw.Surface}
 * in which {@link Ext.draw.sprite.Sprite sprites} are rendered.  Draw containers are
 * used as the foundation for all of the chart classes but may also be created directly
 * in order to create custom drawings.
 *
 *@example({tab: 1})
 *```HTML
 *<ext-container padding="10" layout="fit" fitToParent="true" height="100%">
 *    <ext-panel shadow="true" layout="fit">
 *        <ext-toolbar docked="top">
 *            <ext-container>
 *                <span>Use your finger or mouse to paint on the surface below.</span>
 *            </ext-container>
 *            <ext-spacer ></ext-spacer>
 *            <ext-button ontap="draw.clear" text="Clear"></ext-button>
 *        </ext-toolbar>
 *        <ext-draw onready="draw.onReady"></ext-draw>
 *    </ext-panel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-panel.component';
 *import '@sencha/ext-web-components/dist/ext-draw.component';
 *import '@sencha/ext-web-components/dist/ext-toolbar.component';
 *import '@sencha/ext-web-components/dist/ext-spacer.component';
 *import '@sencha/ext-web-components/dist/ext-button.component';
 *
 *export default class DrawComponent {
 *    constructor () {}
 *    onReady = (ele) => {
 *         this.drawRef = ele.detail.cmp;
 *         this.drawRef.on({
 *         element: 'element',
 *         mousedown: this.onMouseDown.bind(this),
 *         mousemove: this.onMouseMove.bind(this),
 *         mouseup: this.onMouseUp.bind(this),
 *         mouseleave: this.onMouseUp.bind(this)
 *         });
 *     }
 *
 *     clear = () => {
 *         this.drawRef.getSurface().destroy();
 *         this.drawRef.getSurface('overlay').destroy();
 *         this.drawRef.renderFrame();
 *     }
 *
 *     onMouseDown = (e) => {
 *         let surface = this.drawRef.getSurface(), xy, x, y;
 *
 *         if (!this.drawRef.sprite) {
 *             xy = surface.getEventXY(e);
 *             x = xy[0];
 *             y = xy[1];
 *
 *             this.drawRef.list = [x, y, x, y];
 *             this.drawRef.lastEventX = x;
 *             this.drawRef.lastEventY = y;
 *
 *             this.drawRef.sprite = surface.add({
 *                 type: 'path',
 *                 path: [
 *                     'M', this.drawRef.list[0], this.drawRef.list[1], 'L', this.drawRef.list[0] + 1e-1, this.drawRef.list[1] + 1e-1
 *                 ],
 *                 lineWidth: 30 * Math.random() + 10,
 *                 lineCap: 'round',
 *                 lineJoin: 'round',
 *                 strokeStyle: new Ext.util.Color(
 *                     Math.random() * 127 + 128, Math.random() * 127 + 128, Math.random() * 127 + 128
 *                 )
 *             });
 *             surface.renderFrame();
 *         }
 *     }
 *
 *     onMouseMove = (e) => {
 *         let surface = this.drawRef.getSurface(), path, xy, x, y, dx, dy, D;
 *         if (this.drawRef.sprite) {
 *           xy = surface.getEventXY(e);
 *           x = xy[0];
 *           y = xy[1];
 *           dx = this.drawRef.lastEventX - x;
 *           dy = this.drawRef.lastEventY - y;
 *           D = 10;
 *
 *           if (dx * dx + dy * dy < D * D) {
 *             this.drawRef.list.length -= 2;
 *             this.drawRef.list.push(x, y);
 *           } else {
 *             this.drawRef.list.length -= 2;
 *             this.drawRef.list.push(this.drawRef.lastEventX = x, this.drawRef.lastEventY = y);
 *             this.drawRef.list.push(this.drawRef.lastEventX + 1, this.drawRef.lastEventY + 1);
 *           }
 *
 *           path = this.smoothList(this.drawRef.list);
 *
 *           this.drawRef.sprite.setAttributes({
 *               path: path
 *           });
 *
 *           if (Ext.os.is.Android) {
 *             Ext.this.drawRef.Animator.schedule(() => surface.renderFrame(), this.drawRef);
 *           } else {
 *             surface.renderFrame();
 *           }
 *         }
 *     }
 *
 *     onMouseUp = (e) => {
 *        this.drawRef.sprite = null;
 *     }
 *
 *     onResize = () => {
 *         const size = this.drawRef.element.getSize();
 *         this.drawRef.getSurface().setRect([0, 0, size.width, size.height]);
 *         this.drawRef.renderFrame();
 *     }
 *
 *     smoothList = (points) => {
 *         if (points.length < 3) {
 *           return ['M', points[0], points[1]];
 *         }
 *
 *         var dx = [], dy = [], result = ['M'], i, ln = points.length;
 *
 *         for (i = 0; i < ln; i += 2) {
 *           dx.push(points[i]);
 *           dy.push(points[i + 1]);
 *         }
 *
 *         dx = Ext.draw.Draw.spline(dx);
 *         dy = Ext.draw.Draw.spline(dy);
 *         result.push(dx[0], dy[0], 'C');
 *
 *         for (i = 1, ln = dx.length; i < ln; i++) {
 *            result.push(dx[i], dy[i]);
 *         }
 *
 *         return result;
 *    }
 *}
 *```
 */

/**
 * @cfg {String} [engine="Ext.draw.engine.Canvas"]
 * Defines the engine (type of surface) used to render draw container contents.
 *
 * The render engine is selected automatically depending on the platform used. Priority
 * is given to the {@link Ext.draw.engine.Canvas} engine due to its performance advantage.
 *
 * You may also set the engine config to be `Ext.draw.engine.Svg` if so desired.
 */

/**
 * @event spritemousemove
 * Fires when the mouse is moved on a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spritemouseup
 * Fires when a mouseup event occurs on a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spritemousedown
 * Fires when a mousedown event occurs on a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spritemouseover
 * Fires when the mouse enters a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spritemouseout
 * Fires when the mouse exits a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spriteclick
 * Fires when a click event occurs on a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spritedblclick
 * Fires when a double click event occurs on a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event spritetap
 * Fires when a tap event occurs on a sprite.
 * @param {Object} sprite
 * @param {Event} event
 */

/**
 * @event bodyresize
 * Fires when the size of the draw container body changes.
 * @param {Object} size The object containing 'width' and 'height' of the draw container's body.
 */

/**
 * @cfg {Function} [resizeHandler=null]
 * The resize function that can be configured to have a behavior,
 * e.g. resize draw surfaces based on new draw container dimensions.
 * The `resizeHandler` function takes a single parameter -
 * the size object with `width` and `height` properties.
 *
 * __Note:__ since resize events trigger {@link #renderFrame} calls automatically,
 * return `false` from the resize function, if it also calls `renderFrame`,
 * to prevent double rendering.
 * @accessor
 */

/**
 * @cfg {Object[]} [sprites=null]
 * Defines a set of sprites to be added to the drawContainer surface.
 *
 * For example:
 *
 *      sprites: [{
 *           type: 'circle',
 *           fillStyle: '#79BB3F',
 *           r: 100,
 *           x: 100,
 *           y: 100
 *      }]
 *
 * @accessor
 */

/**
 * @cfg {Object[]} [gradients=[]]
 * Defines a set of gradients that can be used as color properties
 * (fillStyle and strokeStyle, but not shadowColor) in sprites.
 * The gradients array is an array of objects with the following properties:
 * - **id** - string - The unique name of the gradient.
 * - **type** - string, optional - The type of the gradient. Available types are: 'linear', 'radial'. Defaults to 'linear'.
 * - **angle** - number, optional - The angle of the gradient in degrees.
 * - **stops** - array - An array of objects with 'color' and 'offset' properties, where 'offset' is a real number from 0 to 1.
 *
 * For example:
 *
 *     gradients: [{
 *         id: 'gradientId1',
 *         type: 'linear',
 *         angle: 45,
 *         stops: [{
 *             offset: 0,
 *             color: 'red'
 *         }, {
 *            offset: 1,
 *            color: 'yellow'
 *         }]
 *     }, {
 *        id: 'gradientId2',
 *        type: 'radial',
 *        stops: [{
 *            offset: 0,
 *            color: '#555',
 *        }, {
 *            offset: 1,
 *            color: '#ddd',
 *        }]
 *     }]
 *
 * Then the sprites can use 'gradientId1' and 'gradientId2' by setting the color attributes to those ids, for example:
 *
 *     sprite.setAttributes({
 *         fillStyle: 'url(#gradientId1)',
 *         strokeStyle: 'url(#gradientId2)'
 *     });
 *
 * @accessor
 */

/**
 * @cfg {String} downloadServerUrl
 * The default URL used by the {@link #download} method.
 * @accessor
 */
