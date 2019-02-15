class WordCount extends HTMLParagraphElement {
  constructor() {
    super();
    var shadow = this.attachShadow({mode: 'open'});
    var wrapper = document.createElement('span');
    wrapper.textContent = 'the text';
    shadow.appendChild(wrapper);
  }
}
