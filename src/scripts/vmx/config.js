//test output
window.__VMXConfig = {
    templates: window.__VMXTemplates,
    settings: {
        //templatePath: 'https://my-json-server.typicode.com/repetere/mock-my-json-server/templates', //TODO: should be remote location of your templates
        router: "hash",
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
            name: "ReactAutocomplete",
            format: "umd",
            type: "component",
            umdFilePath: "https://unpkg.com/react-autocomplete@1.8.1/dist/react-autocomplete.js"
            // jsonx,
            // stylesheets:[url,],
        },
        {
            name: "ReactHighlight",
            format: "umd",
            type: "library",
            umdFilePath: "https://unpkg.com/@repetere/react-highlight@0.12.1/dist/index.umd.js"
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
    ]
};
