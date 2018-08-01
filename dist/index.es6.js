import '@whcg/whcg-lit-text-field/theme/whcg-lit-text-field-styles.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class WhcgLitTextField extends PolymerElement {
    static get template() {
        return html `
        <style include="whcg-lit-text-field-style-default-theme">
            vaadin-text-field {
                --material-body-text-color: var(--lit-text-field-color);
            }
        </style>
        <vaadin-text-field value="thevalue" label="thelabel"></vaadin-text-field>
    `
    };   
}

window.customElements.define('whcg-lit-text-field', WhcgLitTextField);

export { WhcgLitTextField };
