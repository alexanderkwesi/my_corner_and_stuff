import {createConfiguration} from 'snowpack';
const config = createConfiguration('/my-website-alex-o-kwesi/snowpack.config.mjs');
import {loadConfiguration} from 'snowpack';
const configs = await loadConfiguration('/my-website-alex-o-kwesi/snowpack.config.mjs');

// snowpack.config.mjs
export default {
    plugins: ['@snowpack/plugin-dotenv'],

    string: '/my-website-alex-o-kwesi'
    
  };