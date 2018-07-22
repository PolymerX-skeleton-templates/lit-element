import {html} from '@polymer/lit-element';

export default self => html`
<section class="Welcome">
  <img class="SKLogo" draggable="false" src="assets/AnimatedSkeleton.svg" alt="">
  <h1 class="Title">Web Components — Now.</h1>
  <p>
    Take the future and start building your progressive web apps with Polymer Skeleton, the most advanced Polymer starter kit.
  </p>

  <sk-button on-click="${self.startTour}">Take a tour</sk-button>
</section>

${
  self.updateReady ?
    html`<sk-button on-click="reload" class="UpdateReadyAlert">Update ready, reload!</sk-button>` : ''
}

<aside class="Meta">
  v${self.appVersion} - ENV: ${self.ENV}
</aside>
`;
