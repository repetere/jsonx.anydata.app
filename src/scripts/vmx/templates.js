var footer = {
    jsonx: {
        component: 'section',
        props: {
            className: 'hero hero-sm container grid-xl',
        },
        children: [
            {
                component: 'p',
                children: 'Designed with love, built with JSONX & VIEWX. Copyright Repetere, Inc. Licensed under the MIT License.'
            }
        ]
    }
};
var UMD_Example = {
    title: 'Render to page with UMD',
    link: 'https://codesandbox.io/s/jsonx-static-html-o6owl',
    frame: "<!DOCTYPE html>\n  <head>\n    <script src=\"https://unpkg.com/jsonx/dist/jsonx.umd.min.js\" type=\"text/javascript\"></script>\n    <script src=\"https://unpkg.com/react@16.12.0/umd/react.production.min.js\" type=\"text/javascript\"></script>\n    <script src=\"https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js\" type=\"text/javascript\"></script>\n    <title>Static JSONX Example</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"application/javascript\">\n      const JXM = {\n        component: \"div\",\n        props: { className: \"App\" },\n        children: [\n          {\n            component: \"h1\",\n            children: \"Hello JSONX CodeSandbox\"\n          },\n          {\n            component: \"h2\",\n            children: \"Start editing to see the magic happen!\"\n          }\n        ]\n      };\n      jsonx.jsonxRender({ jsonx: JXM, querySelector: \"#root\" });\n    </script>\n  </body>\n</html>",
    language: 'html',
    output: "<html><head>\n  <script type=\"text/javascript\" src=\"https://codesandbox.io/public/sse-hooks/sse-hooks.js\"></script>\n  <script src=\"https://unpkg.com/jsonx/dist/jsonx.umd.min.js\" type=\"text/javascript\"></script>\n  <script src=\"https://unpkg.com/react@16.12.0/umd/react.production.min.js\" type=\"text/javascript\"></script>\n  <script src=\"https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js\" type=\"text/javascript\"></script>\n  <title>Static JSONX Example</title>\n</head>\n<body>\n  <div id=\"root\"><div class=\"App\"><h1>Hello JSONX CodeSandbox</h1><h2>Start editing to see the magic happen!</h2></div></div>\n  <script type=\"application/javascript\">\n    const JXM = {\n      component: \"div\",\n      props: { className: \"App\" },\n      children: [\n        {\n          component: \"h1\",\n          children: \"Hello JSONX CodeSandbox\"\n        },\n        {\n          component: \"h2\",\n          children: \"Start editing to see the magic happen!\"\n        }\n      ]\n    };\n    jsonx.jsonxRender({ jsonx: JXM, querySelector: \"#root\" });\n  </script>\n</body></html>"
};
var CRA_Example = {
    title: 'Embedded in Create React App',
    link: 'https://codesandbox.io/s/jsonx-simple-create-react-app-l5q54',
    frame: "import * as React from \"react\";\nimport { render } from \"react-dom\";\nimport * as JSONX from \"jsonx\";\n\nconst JXM = {\n  component: \"div\",\n  props: { className: \"App\", key: 0 },\n  children: [\n    {\n      component: \"h1\",\n      children: \"Hello JSONX CodeSandbox\"\n    },\n    {\n      component: \"h2\",\n      children: \"Start editing to see the magic happen!\"\n    }\n  ]\n};\n\nconst App = () => {\n  return <section>{JSONX.getReactElementFromJSONX(JXM)}</section>;\n};\n\nconst rootElement = document.getElementById(\"root\");\nrender(<App />, rootElement);\n",
    language: 'javascript',
    output: "<html lang=\"en\"><head>\n<title>React App</title></head>\n<body>\n<noscript>\n  You need to enable JavaScript to run this app.\n</noscript>\n<div id=\"root\"><section><div class=\"App\"><h1>Hello JSONX CodeSandbox</h1><h2>Start editing to see the magic happen!</h2></div></section></div>\n</body></html>"
};
var OUTPUT_Example = {
    title: 'Output to HTML, JSX and JSON',
    link: 'https://codesandbox.io/s/jsonx-output-qf9pg',
    frame: [
        {
            title: 'To HTML',
            code: "//JXM JSON to HTML\nJSONX.outputHTML({ jsonx: JXM });\n\n/*\n<div class=\"App\" data-reactroot=\"\">\n  <h1>Hello JSONX CodeSandbox</h1>\n  <h2>Start editing to see the magic happen!</h2>\n</div>\n*/",
        },
        {
            title: 'To JSX',
            code: "//JXM JSON to JSX\nJSONX.outputJSX(JXM);\n\n/*\n<div className=\"App\">\n  <h1>Hello JSONX CodeSandbox</h1>\n  <h2>Start editing to see the magic happen!</h2>\n</div>\n*/",
        },
        {
            title: 'To JSON',
            code: "//JXM JSON to JSON\nJSONX.outputJSON(JXM);\n\n/*\n{\n  \"type\": \"div\",\n  \"props\": { \"className\": \"App\" },\n  \"children\": [\n    {\n      \"type\": \"h1\", \n      \"props\": {}, \n      \"children\": \"Hello JSONX CodeSandbox\"\n    },\n    {\n      \"type\": \"h2\", \n      \"props\": {}, \n      \"children\": \"Start editing to see the magic happen!\"\n    }\n  ]\n}\n*/",
        },
    ],
    language: 'typescript'
};
window.__VMXTemplates = {
    header: {
        '/': {
            jsonx: {
                component: 'Fragment',
            }
        },
        '/:catchall*': {
            jsonx: {
                component: 'div',
                props: {
                    key: 0
                },
                children: [
                    {
                        div: {
                            children: 'this is the header',
                            props: {
                                key: 'a'
                            }
                        }
                    },
                    {
                        ul: {
                            props: {
                                key: 'b'
                            },
                            children: [['/', 'Home'], ['/manual', 'Manual']]
                                .map(function (li, i) { return ({
                                li: {
                                    props: {
                                        key: "link" + i,
                                    },
                                    children: [
                                        {
                                            Link: {
                                                props: {
                                                    to: li[0],
                                                    key: "c" + i
                                                },
                                                children: li[1]
                                            }
                                        }
                                    ]
                                }
                            }); })
                        }
                    }
                ],
            }
        }
    },
    root: {
        '/': {
            jsonx: {
                component: 'div',
                props: {
                    key: 0,
                    style: {
                        clear: 'both'
                    }
                },
                children: [
                    {
                        component: 'div',
                        props: {
                            className: 'container grid-xl',
                            style: {
                                position: 'absolute',
                                padding: '.2rem 0',
                            },
                        },
                        children: [
                            {
                                component: 'Spectre.Navbar.Navbar',
                                children: [
                                    {
                                        component: 'Spectre.Navbar.Section',
                                        props: {
                                            style: {
                                                justifyContent: 'flex-end'
                                            },
                                        },
                                        children: [
                                            {
                                                href: 'https://repetere.github.io/jsonx/manual/getting-started/index.html',
                                                text: 'Manual',
                                            },
                                            {
                                                href: 'https://repetere.github.io/jsonx/',
                                                text: 'Docs',
                                            },
                                            {
                                                href: 'https://repetere.github.io/jsonx/manual/samples/index.html',
                                                text: 'Samples',
                                            },
                                            {
                                                href: 'https://github.com/repetere/jsonx',
                                                text: 'GitHub',
                                                btnClass: 'bg-dark text-light'
                                            }
                                        ].map(function (link, l) { return ({
                                            component: 'a',
                                            props: {
                                                className: "btn " + link.btnClass,
                                                style: {
                                                    marginLeft: '.2rem',
                                                    display: 'inline-flex'
                                                },
                                                href: link.href,
                                            },
                                            children: link.text,
                                        }); })
                                    },
                                ]
                            }
                        ],
                    },
                    {
                        component: 'section',
                        props: {
                            className: 'hero hero-md bg-primary',
                            key: 0
                        },
                        children: [
                            {
                                component: 'div',
                                props: {
                                    className: 'container grid-xl'
                                },
                                children: [
                                    {
                                        component: 'h1',
                                        children: 'JSONX'
                                    },
                                    {
                                        component: 'p',
                                        children: 'Create React Elements, JSX and HTML with JSON'
                                    }
                                ]
                            }
                        ]
                        // component: 'Spectre.Layout.Grid',
                    },
                    {
                        component: 'section',
                        props: {
                            className: 'hero hero-md bg-gray',
                            key: 'srg'
                        },
                        children: [
                            {
                                component: 'Spectre.Layout.Grid',
                                props: {
                                    className: ' container grid-xl'
                                },
                                children: [
                                    {
                                        component: 'Spectre.Layout.Row',
                                        children: [
                                            {
                                                title: 'Zero Setup',
                                                desc: "The JSONX UMD comes with batteries included so you can use JSONX in browser without transpilers or any additional setup/configuration.\n                        Ideal for JAMstack Applications.",
                                                link: 'https://codesandbox.io/s/jsonx-static-html-o6owl',
                                                link_label: 'Try it now »',
                                            },
                                            {
                                                title: 'Embeddable',
                                                desc: 'JSONX can also be used in existing react applications if you want to dynamically create elements with JSON. This works great for many scenarios when you want to manage your application views and components in a view management system.',
                                                link: 'https://codesandbox.io/s/jsonx-simple-create-react-app-l5q54',
                                                link_label: 'Try it now »',
                                            },
                                            {
                                                title: 'Fully Featured',
                                                desc: 'JSONX supports all of Reacts features including, Hooks, Functional, Class-based, Suspense and Lazy components. JSONX supports JSON objects that implement the JXM (JSONX Markup) Spec.',
                                                link: 'https://repetere.github.io/jsonx/manual/spec.html',
                                                link_label: 'JXM Spec »',
                                            }
                                        ].map(function (col, i) { return ({
                                            component: 'Spectre.Layout.Col',
                                            props: {
                                                key: "prodspec-" + i,
                                            },
                                            children: [
                                                {
                                                    component: 'Spectre.Card.Card',
                                                    props: {
                                                        style: {
                                                            height: '100%'
                                                        }
                                                    },
                                                    children: [
                                                        {
                                                            component: 'Spectre.Card.Header',
                                                            children: [
                                                                {
                                                                    component: 'Spectre.Card.Title',
                                                                    props: {
                                                                        h3: true,
                                                                    },
                                                                    children: col.title,
                                                                },
                                                            ]
                                                        },
                                                        {
                                                            component: 'Spectre.Card.Body',
                                                            children: col.desc,
                                                        },
                                                        {
                                                            component: 'Spectre.Card.Footer',
                                                            children: [
                                                                {
                                                                    component: 'a',
                                                                    props: {
                                                                        className: 'btn btn-primary',
                                                                        target: '_blank',
                                                                        href: col.link,
                                                                    },
                                                                    children: col.link_label
                                                                }
                                                            ],
                                                        }
                                                    ]
                                                }
                                            ]
                                        }); }),
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        component: 'section',
                        props: {
                            className: 'container hero grid-xl',
                            style: {
                                paddingBottom: 0
                            }
                        },
                        children: [
                            {
                                component: 'Spectre.Layout.Grid',
                                children: [
                                    {
                                        component: 'Spectre.Layout.Row',
                                        children: [
                                            {
                                                component: 'h3',
                                                children: 'Basic Examples',
                                            }
                                        ]
                                    },
                                    {
                                        component: 'div',
                                        children: [UMD_Example, CRA_Example, OUTPUT_Example]
                                            .map(function (row, r) { return ({
                                            component: 'Spectre.Layout.Row',
                                            props: {
                                                key: "r-" + r
                                            },
                                            children: [
                                                {
                                                    component: 'Spectre.Layout.Col',
                                                    props: {
                                                        style: {
                                                            width: '100%'
                                                        },
                                                        className: 'hero hero-sm'
                                                    },
                                                    children: [
                                                        {
                                                            component: 'h5',
                                                            children: [
                                                                {
                                                                    component: 'span',
                                                                    children: row.title,
                                                                },
                                                                {
                                                                    component: 'small',
                                                                    children: [
                                                                        {
                                                                            component: 'a',
                                                                            props: {
                                                                                href: row.link,
                                                                                target: '_blank',
                                                                                style: {
                                                                                    marginLeft: '0.5rem'
                                                                                },
                                                                            },
                                                                            children: '(try now!)'
                                                                        }
                                                                    ]
                                                                }
                                                            ],
                                                        },
                                                        Array.isArray(row.frame)
                                                            ? {
                                                                component: 'Spectre.Layout.Row',
                                                                children: row.frame.map(function (innerframe, f) { return ({
                                                                    component: 'Spectre.Layout.Col',
                                                                    children: [
                                                                        {
                                                                            component: 'div',
                                                                            children: [
                                                                                {
                                                                                    component: 'div',
                                                                                    children: [
                                                                                        {
                                                                                            component: 'ReactHighlight.default',
                                                                                            props: {
                                                                                                className: row.language
                                                                                            },
                                                                                            children: innerframe.code
                                                                                        }
                                                                                    ]
                                                                                },
                                                                            ]
                                                                        }
                                                                    ]
                                                                }); })
                                                            }
                                                            : {
                                                                component: 'Spectre.Layout.Row',
                                                                children: [
                                                                    {
                                                                        component: 'Spectre.Layout.Col',
                                                                        props: {
                                                                            'col-6': true,
                                                                            className: 'col-6'
                                                                        },
                                                                        children: [
                                                                            {
                                                                                component: 'ReactHighlight.default',
                                                                                props: {
                                                                                    className: row.language
                                                                                },
                                                                                children: row.frame
                                                                            },
                                                                        ]
                                                                    },
                                                                    {
                                                                        component: 'Spectre.Layout.Col',
                                                                        props: {
                                                                            'col-6': true,
                                                                        },
                                                                        children: [
                                                                            {
                                                                                component: 'div',
                                                                                props: {
                                                                                    dangerouslySetInnerHTML: {
                                                                                        __html: row.output
                                                                                    }
                                                                                },
                                                                            }
                                                                        ]
                                                                    },
                                                                ]
                                                            },
                                                        {
                                                            component: 'div',
                                                            props: {
                                                                className: 'divider'
                                                            }
                                                        },
                                                    ]
                                                },
                                            ]
                                        }); }),
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        component: 'section',
                        props: {
                            className: 'container grid-xl',
                        },
                        children: [
                            {
                                component: 'div',
                                children: [
                                    {
                                        component: 'h3',
                                        children: 'That\'s All!'
                                    },
                                    {
                                        component: 'h6',
                                        children: 'Go make something great.'
                                    },
                                ],
                            },
                            {
                                component: 'div',
                                props: {
                                    className: 'divider'
                                }
                            }
                        ]
                    },
                    footer.jsonx,
                ]
            }
        },
        '/manual': {
            jsonx: {
                div: {
                    props: {
                        key: 0
                    },
                    children: 'this is the manual'
                }
            }
        }
    },
    footer: {
        '/:catchall*': {
            jsonx: {
                component: 'div',
                props: {
                    key: 0,
                    style: {
                        float: 'right',
                        bottom: 0,
                    }
                },
                children: 'this is the footer',
            }
        }
    }
};
