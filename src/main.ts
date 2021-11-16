import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import { createI18n } from 'vue-i18n/index'


const app = createApp(App);

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: {
        ar: {},
        en: {
            labels: {
                firstName: "First name",
                firstNameHint: "First name hint"
            },
            errors: {
                required: "required"
            }
        }
    }

});

app.use(Quasar, quasarUserOptions)
    .use(router)
    .use(i18n)
    .mount('#app');
