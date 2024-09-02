import '@/assets/prime/styles.scss';
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Button from 'primevue/datatable';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Chart from 'primevue/chart';


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue, { ripple: true });
app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column)
app.component('Chart', Chart)


app.mount('#app')
