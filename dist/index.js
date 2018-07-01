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

  _render({ label, placeholder, value, suffix }) {
    return litElement.html`
      <vaadin-text-field label="${label}" value="${value}" placeholder="${placeholder}" theme="align-right" on-blur="${this._onBlur.bind(
      this
    )}" on-click="${this._onClick.bind(this)}" on-input="${this._onInput.bind(
      this
    )}" on-change="${this._onChange.bind(this)}">
    <div slot="suffix">${suffix}</div>
    </vaadin-text-field>
    `;
  }

  _onBlur(e) {
    let event = new CustomEvent("blur-changed", {
      detail: { value: e.path[4].value, input: e.data }
    });
    this.dispatchEvent(event);
  }

  _onChange(e) {
    let event = new CustomEvent("change-changed", {
      detail: { value: e.path[0].value }
    });
    this.dispatchEvent(event);
  }

  _onClick(e) {
    let event = new CustomEvent("click-changed", {
      detail: { value: e.path[4].value }
    });
    this.dispatchEvent(event);
  }

  _onInput(e) {
    let event = new CustomEvent("input-changed", {
      detail: { value: e.path[4].value, input: e.data }
    });
    this.dispatchEvent(event);
  }
}

customElements.define("whcg-lit-text-field", WhcgLitTextField);

exports.WhcgLitTextField = WhcgLitTextField;
