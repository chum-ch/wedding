import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import API from './api/api'
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
import TieredMenu from 'primevue/tieredmenu';
import ProgressBar from 'primevue/progressbar';
import FileUpload from 'primevue/fileupload';
import ProgressSpinner from 'primevue/progressspinner';
// Custom library
import CustomButton from './components/customs/CustomButton.vue'
import CustomTable from './components/customs/CustomTable.vue'
import CustomInputText from './components/customs/CustomInputText.vue'
import CustomVoiceSearch from './components/customs/CustomVoiceSearch.vue'
import CustomDialog from './components/customs/CustomDialog.vue'
import CustomTieredMenu from './components/customs/CustomTieredMenu.vue';
import CustomProgressBar from './components/customs/CustomProgressBar.vue';
import CustomUploadFile from './components/customs/CustomUploadFile.vue';
import CustomCard from './components/customs/CustomCard.vue';
const app = createApp(App)
// Config Axios
const $api = API(axios)
// axios.defaults.baseURL = 'https://svc-sms.onrender.com'
if (import.meta.env.PROD) {
  axios.defaults.baseURL = 'https://svc-sms.onrender.com'
} else {
  axios.defaults.baseURL = 'http://localhost:3003'
}
// Primevue component
app.component('PrimeVueButton', Button)
app.component('PrimeVueDialog', Dialog)
app.component('PrimeVueTieredMenu', TieredMenu);
app.component('PrimeVueProgressBar', ProgressBar);
app.component('PrimeVueFileUpload', FileUpload);
app.component('PrimeVueProgressSpinner', ProgressSpinner);
// Custom component
app.component('CustomButton', CustomButton)
app.component('CustomTable', CustomTable)
app.component('CustomInputText', CustomInputText)
app.component('CustomVoiceSearch', CustomVoiceSearch)
app.component('CustomDialog', CustomDialog)
app.component('CustomTieredMenu', CustomTieredMenu);
app.component('CustomProgressBar', CustomProgressBar);
app.component('CustomUploadFile', CustomUploadFile);
app.component('CustomCard', CustomCard);
app.use(router)
app.use(PrimeVue);
app.provide('$api', $api)
app.mount('#app')
