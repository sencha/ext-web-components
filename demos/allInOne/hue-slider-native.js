//https://www.voorhoede.nl/en/blog/javascript-frameworks-meet-web-components/
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
function hslToRgb(h, s, l) {
    var r, g, b
  
    if (s == 0) {
      r = g = b = l // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }
  
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s
      var p = 2 * l - q
  
      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }
  
  function componentToHex(c) {
    var hex = c.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }
  
  class HueSlider extends HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
      shadowRoot.innerHTML = `
        <style>
          .hue-slider {
            display: flex;
          }
          .hue-slider output {
            --hue-value: 0;
            display: inline-block;
            width: 50px;
            height: 50px;
            margin-left: 10px;
            background-color: hsl(var(--hue-value), 100%, 50%);
          }
        </style>
        <label class="hue-slider">
          <input type="range" min="0" max="360" data-hue-input>
          <output data-hue-output>
            <slot></slot>
          </output>
        </label>
      `
  
      this.setValue = this.setValue.bind(this)
      this.handleInput = this.handleInput.bind(this)
    }
  
    static get observedAttributes() {
      return ['hue']
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name) {
        case 'hue':
          this.setValue(newValue)
          return
        default:
          return
      }
    }
  
    get hue() {
      return this.inputElement.value
    }
  
    set hue(val) {
      this.setValue(val)
      if (this.hasAttribute('hue')) {
        this.setAttribute('hue', val)
      }
    }
  
    setValue(val) {
      if (this.inputElement) {
        this.inputElement.value = Number(val)
        const [r, g, b] = hslToRgb(Number(val) / 360 , 1, 0.5)
        this.value = `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
        this.outputElement.style.setProperty('--hue-value', this.inputElement.value)
        const computedStyles = window.getComputedStyle(this.outputElement)
      }
    }
  
    handleInput(e) {
      e.stopPropagation()
      this.hue =this.inputElement.value
      this.dispatchEvent(new CustomEvent(e.type))
    }
  
    connectedCallback() {
      const slot = this.shadowRoot.querySelector('slot')
      this.outputElement = this.shadowRoot.querySelector('[data-hue-output]')
      this.inputElement = this.shadowRoot.querySelector('[data-hue-input]')
  
      slot.addEventListener('slotchange', e => {
        const input = slot.assignedNodes().find(item => item.nodeName === 'INPUT')
        if (input) {
          const oldValue = this.inputElement.value
          this.inputElement.removeEventListener('input', this.handleInput)
          this.inputElement.removeEventListener('change', this.handleInput)
          this.inputElement = input
          this.inputElement.addEventListener('input', this.handleInput)
          this.inputElement.addEventListener('change', this.handleInput)
          this.inputElement.value = oldValue
        }
      })
  
      this.hue = this.hasAttribute('hue')
        ? this.getAttribute('hue')
        : this.inputElement.value
  
      this.inputElement.addEventListener('input', this.handleInput)
      this.inputElement.addEventListener('change', this.handleInput)
    }
  
    disconnectedCallback() {
      this.inputElement.removeEventListener('input', this.handleInput)
      this.inputElement.removeEventListener('change', this.handleInput)
    }
  }
  
  window.customElements.define('hue-slider-native', HueSlider)