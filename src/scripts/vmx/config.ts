import { VXAOptions } from "@viewx/vxa/types";

declare global {
  interface Window {
    __VMXConfig: VXAOptions;
    __VMXTemplates: any;
  }
}

window.__VMXConfig = {
  templates: window.__VMXTemplates,
  settings: {
    //templatePath: 'https://my-json-server.typicode.com/repetere/mock-my-json-server/templates', //TODO: should be remote location of your templates
    router: "hash", //TODO: this should be 'browser' on server
    hasPreloadedTemplates: true //TODO:remove
  },
  application: {
    state: {
      name: "JSONX",
      version: "0.0.1",
      cartItems: []
    }
  },
  initialScripts: [
    // "https://unpkg.com/deepmerge@4.2.2/dist/umd.js",
    // "https://unpkg.com/tiny-warning@1.0.3/dist/tiny-warning.js",
    // "temp/formik_dependencies.js"
  ],
  customComponents: [
    // {
    //   name: "ReactModal",
    //   format: "umd",
    //   type: "component",
    //   umdFilePath:
    //     "https://unpkg.com/react-modal@3.10.1/dist/react-modal.js"
    //   // jsonx,
    //   // stylesheets:[url,],
    // },
    {
      name: "ReactHighlight",
      format: "umd",
      type: "library",
      umdFilePath:
        "https://unpkg.com/@repetere/react-highlight@0.12.1/dist/index.umd.js"
      // jsonx,
      // stylesheets:[url,],
    },
    // {
    //   name: "formik",
    //   format: "umd",
    //   type: "library",
    //   umdFilePath:
    //     "https://unpkg.com/formik@2.0.6/dist/formik.umd.development.js"
    //   // umdFilePath: 'https://unpkg.com/formik/dist/formik.umd.production.js',
    //   // jsonx,
    //   // stylesheets: [ ],
    // },
    {
      name: "Spectre",
      format: "umd",
      type: "library",
      umdFilePath: "https://unpkg.com/jsonx@1.1.0/design/spectre.umd.js"
    },
    // {
    //   name: "sayHello",
    //   format: "jsonx",
    //   type: "component",
    //   jsonx: {
    //     render: {
    //       body: {
    //         component: "div",
    //         children: "HELLO!"
    //       }
    //     }
    //   }
    // }
  ],
  customScripts: [
  /*url,*/
    // 'https://unpkg.com/browse/prismjs@1.19.0/components/prism-core.min.js',
    // 'https://unpkg.com/prismjs@1.19.0/plugins/autoloader/prism-autoloader.min.js',
    // "https://unpkg.com/scheduler@0.18.0/umd/scheduler.production.min.js"
  ],
  customStyles: [
    // 'https://unpkg.com/prismjs@1.19.0/themes/prism-okaidia.css',
    // 'https://unpkg.com/prismjs@1.19.0/themes/prism.css'
    'https://unpkg.com/highlight.js@9.18.1/styles/darkula.css',
    // 'https://unpkg.com/highlight.js@9.18.1/styles/agate.css',
    /*url,*/
    // "node_modules/spectre.css/dist/spectre.min.css"
  ],
  customFunctions: {
    /*Function, */
  },
  layers: [
    // loading,
    // modal,
    // overlay,
    // header,
    {
      order: 300,
      name: 'header',
      type: 'view'
    },
    // root,
    {
      order: 100,
      name: "root",
      type: "applicationRoot"
    },
    // header,
    // {
    //   order: 400,
    //   name: 'footer',
    //   type: 'view'
    // },
    // nav,
    // error,
    
  ]
};

export { };