import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';
import VueMobileDetection from 'vue-mobile-detection';
const app = createApp(App).use(VueMobileDetection);

components.forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
