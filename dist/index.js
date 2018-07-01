'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var litElement = require('@polymer/lit-element');
require('@vaadin/vaadin-text-field');

class WhcgLitTextField extends litElement.LitElement {
  static get properties() {
    return {
      label: String,
      value: String,
      placeholder: String,
      suffix: String,
      kind: String,
      period: String
    };
  }
  onBlur(e) {
    let event = new CustomEvent("blur-changed", {
      detail: { value: e.path[4].value, input: e.data }
    });
    this.dispatchEvent(event);
  }
  onClick(e) {
    let event = new CustomEvent("click-changed", {
      detail: { value: e.path[4].value }
    });
    this.dispatchEvent(event);
  }
  onInput(e) {
    let event = new CustomEvent("input-changed", {
      detail: { value: e.path[4].value, input: e.data }
    });
    this.dispatchEvent(event);
  }

  onChange(e) {
    let event = new CustomEvent("change-changed", {
      detail: { value: e.path[0].value }
    });
    this.dispatchEvent(event);
  }

  _render({ label, placeholder, value, suffix }) {
    return litElement.html`
      <style>
        button, input {
          border: 1px solid black;
        }
      </style>

      <vaadin-text-field label="${label}" value="${value}" placeholder="${placeholder}" theme="align-right" on-blur="${this.onBlur.bind(
      this
    )}" on-click="${this.onClick.bind(this)}" on-input="${this.onInput.bind(
      this
    )}" on-change="${this.onChange.bind(this)}">
    <div slot="suffix">${suffix}</div>
    </vaadin-text-field>
    `;
  }
}

customElements.define("whcg-lit-text-field", WhcgLitTextField);

exports.WhcgLitTextField = WhcgLitTextField;
