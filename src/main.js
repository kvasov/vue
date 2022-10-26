import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import VueMobileDetection from 'vue-mobile-detection';
const app = createApp(App).use(VueMobileDetection);
import directives from '@/directives';
import router from '@/router/router';
import store from '@/store';

import VueEasyLightbox from 'vue-easy-lightbox';

components.forEach((component) => {
  app.component(component.name, component);
});

directives.forEach((directive) => {
  app.directive(directive.name, directive);
});

app.use(router, store, VueEasyLightbox).mount('#app');
