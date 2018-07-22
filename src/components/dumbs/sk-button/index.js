
import {LitElement, html} from '@polymer/lit-element';

import css from './style.pcss';
import template from './template';

export default class SkButton extends LitElement {
  _render(props) {
    return html`<style>${css}</style> ${template(props)}`;
  }
}

window.customElements.define('sk-button', SkButton);
