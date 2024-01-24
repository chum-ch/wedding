import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'
import 'primeicons/primeicons.css'
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";
// import 'primevue/resources/themes/lara-light-green/theme.css'
// import "primevue/resources/themes/lara-light-blue/theme.css"
//core
import 'primevue/resources/primevue.min.css'

// Primevue library
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

// Custom library
import CustomButton from './components/customs/CustomButton.vue'
import CustomTable from './components/customs/CustomTable.vue'
import CustomInputText from './components/customs/CustomInputText.vue'
import CustomVoiceSearch from './components/customs/CustomVoiceSearch.vue'
import CustomDialog from './components/customs/CustomDialog.vue'
const app = createApp(App)

// Primevue component
app.component('PrimeVueButton', Button)
app.component('PrimeVueDialog', Dialog)
// Custom component
app.component('CustomButton', CustomButton)
app.component('CustomTable', CustomTable)
app.component('CustomInputText', CustomInputText)
app.component('CustomVoiceSearch', CustomVoiceSearch)
app.component('CustomDialog', CustomDialog)
app.use(router)
app.use(PrimeVue);
app.mount('#app')
