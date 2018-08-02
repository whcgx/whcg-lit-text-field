import '@vaadin/vaadin-text-field';
import '@whcg/whcg-lit-text-field/theme/whcg-lit-text-field-styles.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

class WhcgLitTextField extends PolymerElement {
    static get template() {
        return html `
        <style>
             vaadin-text-field {
                --text-field-input-field-bg-color: var(--parmaco-text-field-label-text-color);
             }
            

        </style>


        <h2>THIS IS H2</h2>
        <vaadin-text-field value="thevalue" label="thelabel"></vaadin-text-field>
    `
    };   
}

window.customElements.define('whcg-lit-text-field', WhcgLitTextField);

export { WhcgLitTextField };
