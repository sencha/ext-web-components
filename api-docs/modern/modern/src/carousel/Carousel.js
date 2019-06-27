/**
 * @class Ext.carousel.Carousel
 * @extend Ext.Container
 * @xtype carousel
 *
 * Carousels, like tabs, are a great way to allow the user to swipe through multiple full-screen pages.
 * A Carousel shows only one of its pages at a time but allows you to swipe through with your finger.
 *
 * Carousels can be oriented either horizontally or vertically and are easy to configure - they just work like any other
 * Container.
 *
 *      HTML
 *      ```HTML
 *      @example({tab: 1})
 *      <ext-container layout="fit">
 *          <ext-carousel>
 *              <ext-container html="<div>Slide 1!</div>">
 *              </ext-container>
 *              <ext-container html="<div>Slide 2!</div>">
 *              </ext-container>
 *              <ext-container html="<div>Slide 3!</div>">
 *              </ext-container>
 *          <ext-carousel>
 *      </ext-container>
 *      ```
 *      JS
 *      ```javascript
 *      @example({tab: 2, packages: ['ext-web-components']})
 *      import '@sencha/ext-web-components/dist/ext-container.component';
 *      import '@sencha/ext-web-components/dist/ext-carousel.component';
 *      import '@sencha/ext-web-components/dist/ext-spinnerfield.component';
 *
 *      export default class CarouselComponent {}
 *      ```
 *
 * ### Common Props
 * * {@link #ui} defines the style of the carousel
 * * {@link #direction} defines the direction of the carousel
 * * {@link #indicator} defines if the indicator show be shown
 *
 * ### Useful Methods
 * * {@link #next} moves to the next card
 * * {@link #previous} moves to the previous card
 * * {@link #setActiveItem} moves to the passed card
 */

/**
 * @cfg {String} [direction='horizontal']
 * The direction of the Carousel, either 'horizontal' or 'vertical'.
 * @accessor
 */

/**
 * @cfg draggable
 * @hide
 */

/**
 * @cfg {Boolean} [indicator=true]
 * Provides an indicator while toggling between child items to let the user
 * know where they are in the card stack.
 * @accessor
 */

/**
 * @cfg {String} [ui='dark']
 * Style options for Carousel. Default is 'dark'. 'light' is also available.
 * @accessor
 */

/**
 * @method getActiveIndex
 * Returns the index of the currently active card.
 * @return {Number} The index of the currently active card.
 */

/**
 * @method next
 * Switches to the next card.
 * @return {Ext.carousel.Carousel} this
 * @chainable
 */

/**
 * @method previous
 * Switches to the previous card.
 * @return {Ext.carousel.Carousel} this
 * @chainable
 */
