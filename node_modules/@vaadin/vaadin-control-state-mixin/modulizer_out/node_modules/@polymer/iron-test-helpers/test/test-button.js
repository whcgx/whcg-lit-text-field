import '../../polymer/polymer.js';
import { Polymer } from '../../polymer/lib/legacy/polymer-fn.js';
import { html } from '../../polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <button id="inner">[[text]]</button>
`,

  is: 'test-button',

  properties: {
    text: {
      type: String
    }
  },

  listeners: {
    'tap': '_onTap'
  },

  _onTap: function() {
    console.log('tapped');
  }
});
