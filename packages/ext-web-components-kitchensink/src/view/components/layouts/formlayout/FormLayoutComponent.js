import './FormLayoutComponent.html';

export default class FormLayoutComponent {

  constructor () {}

  containerready1(event) {
    this.containerCmp1 = event.detail.cmp;
    this.containerCmp1.setHtml(`labelTextAlign="left" (default)`);
    this.containerCmp1.setStyle({ fontSize: "14px", fontFamily: "Menlo, Courier" });
  }

  containerready2(event) {
    this.containerCmp2 = event.detail.cmp;
    this.containerCmp2.setHtml(`labelTextAlign="right"`);
    this.containerCmp2.setStyle({ fontSize: "14px", fontFamily: "Menlo, Courier" });
  }
}
