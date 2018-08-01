import '.../theme/whcg-lit-text-field-styles.js';
import '@vaadin/vaadin-text-field/src/vaadin-text-field.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class WhcgLitTextField extends PolymerElement {
    static get template() {
        return html `
        <style include="whcg-lit-text-field-style-default-theme">
            vaadin-text-field {
                padding: 100px;
                --material-secondary-text-color: orange;
            }
        </style>
        <vaadin-text-field value="thevalue" label="thelabel"></vaadin-text-field>
    `
    };   
}

window.customElements.define('whcg-lit-text-field', WhcgLitTextField);

export { WhcgLitTextField };
