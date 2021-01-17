//----------------------------------------------------------------------------------------------------------------------
// Saber Browser Config
//----------------------------------------------------------------------------------------------------------------------

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

// Assets
import logoAssetURL from './assets/images/logo.png';

// Styles
import './styles/theme.scss';

//-----------------------------------------------------------------------------------------------------------------------
// Vue Bootstrap
//-----------------------------------------------------------------------------------------------------------------------

import './styles/theme.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

//----------------------------------------------------------------------------------------------------------------------
// Default Head Block
//----------------------------------------------------------------------------------------------------------------------

export default ({ setHead }) =>
{
    setHead({
        link: [
            {
                rel: 'icon',
                type: 'image/png',
                href: logoAssetURL
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Nanum+Pen+Script&display=swap'
            },
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap'
            }
        ]
    });
}

//----------------------------------------------------------------------------------------------------------------------
