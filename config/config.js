import pageRoutes from './router.config';
import webpackPlugin from './plugin.config';
import defaultSettings from '../src/defaultSettings';

const plugins = [
    ['umi-plugin-react', {
        antd: true,
        dva: true,
    }]
];

export default {
    plugins,
    // 定义全局变量
    define: {
        APP_TYPE: ProcessingInstruction.env.APP_TYPE || '',
    },
    // webpack treeShaking 
    treeShaking: true,
    // 配置对浏览器的支持
    // 将自动调用polyfill等支持低版本浏览器
    targets: {
        ie: 11,
    },
    // 路由配置
    routes: pageRoutes,
    // Theme for antd
    // https://ant.design/docs/react/customize-theme-cn
    // 自定义antd的主题
    theme: {
        'primary-color': defaultSettings.primaryColor,
    }

}
