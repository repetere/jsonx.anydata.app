import * as home from '../templates/index';
import { Component } from 'react';
declare global {
  interface Window {
    __VMXTemplates: any;
  }
}

const footer = {
  jsonx: {
    component: 'section',
    props: {
      className:'hero hero-sm container grid-xl',
    },
    children: [
      {
        component: 'p',
        children:'Designed with love, built with JSONX & VIEWX. Copyright Repetere, Inc. Licensed under the MIT License.'
      }
    ]
  }
}

const UMD_Example = {
  title: 'Render to page with UMD',
  link: 'https://codesandbox.io/s/jsonx-static-html-o6owl',
  frame:`<!DOCTYPE html>
  <head>
    <script src="https://unpkg.com/jsonx/dist/jsonx.umd.min.js" type="text/javascript"></script>
    <script src="https://unpkg.com/react@16.12.0/umd/react.production.min.js" type="text/javascript"></script>
    <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js" type="text/javascript"></script>
    <title>Static JSONX Example</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="application/javascript">
      const JXM = {
        component: "div",
        props: { className: "App" },
        children: [
          {
            component: "h1",
            children: "Hello JSONX CodeSandbox"
          },
          {
            component: "h2",
            children: "Start editing to see the magic happen!"
          }
        ]
      };
      jsonx.jsonxRender({ jsonx: JXM, querySelector: "#root" });
    </script>
  </body>
</html>`,
  language: 'html',
  output:`<html><head>
  <script type="text/javascript" src="https://codesandbox.io/public/sse-hooks/sse-hooks.js"></script>
  <script src="https://unpkg.com/jsonx/dist/jsonx.umd.min.js" type="text/javascript"></script>
  <script src="https://unpkg.com/react@16.12.0/umd/react.production.min.js" type="text/javascript"></script>
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js" type="text/javascript"></script>
  <title>Static JSONX Example</title>
</head>
<body>
  <div id="root"><div class="App"><h1>Hello JSONX CodeSandbox</h1><h2>Start editing to see the magic happen!</h2></div></div>
  <script type="application/javascript">
    const JXM = {
      component: "div",
      props: { className: "App" },
      children: [
        {
          component: "h1",
          children: "Hello JSONX CodeSandbox"
        },
        {
          component: "h2",
          children: "Start editing to see the magic happen!"
        }
      ]
    };
    jsonx.jsonxRender({ jsonx: JXM, querySelector: "#root" });
  </script>
</body></html>`
}
const CRA_Example = {
  title: 'Embedded in Create React App',
  link: 'https://codesandbox.io/s/jsonx-simple-create-react-app-l5q54',
  frame: `import * as React from "react";
import { render } from "react-dom";
import * as JSONX from "jsonx";

const JXM = {
  component: "div",
  props: { className: "App", key: 0 },
  children: [
    {
      component: "h1",
      children: "Hello JSONX CodeSandbox"
    },
    {
      component: "h2",
      children: "Start editing to see the magic happen!"
    }
  ]
};

const App = () => {
  return <section>{JSONX.getReactElementFromJSONX(JXM)}</section>;
};

const rootElement = document.getElementById("root");
render(<App />, rootElement);
`,
  language: 'javascript',
  output:`<html lang="en"><head>
<title>React App</title></head>
<body>
<noscript>
  You need to enable JavaScript to run this app.
</noscript>
<div id="root"><section><div class="App"><h1>Hello JSONX CodeSandbox</h1><h2>Start editing to see the magic happen!</h2></div></section></div>
</body></html>`
};
const OUTPUT_Example = {
  title: 'Output to HTML, JSX and JSON',
  link: 'https://codesandbox.io/s/jsonx-output-qf9pg',
  frame: [
    {
      title: 'To HTML',
      code: `//JXM JSON to HTML
JSONX.outputHTML({ jsonx: JXM });

/*
<div class="App" data-reactroot="">
  <h1>Hello JSONX CodeSandbox</h1>
  <h2>Start editing to see the magic happen!</h2>
</div>
*/`,
    },
    {
      title: 'To JSX',
      code: `//JXM JSON to JSX
JSONX.outputJSX(JXM);

/*
<div className="App">
  <h1>Hello JSONX CodeSandbox</h1>
  <h2>Start editing to see the magic happen!</h2>
</div>
*/`,
    },
    {
      title: 'To JSON',
      code: `//JXM JSON to JSON
JSONX.outputJSON(JXM);

/*
{
  "type": "div",
  "props": { "className": "App" },
  "children": [
    {
      "type": "h1", 
      "props": {}, 
      "children": "Hello JSONX CodeSandbox"
    },
    {
      "type": "h2", 
      "props": {}, 
      "children": "Start editing to see the magic happen!"
    }
  ]
}
*/`,
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
                .map((li, i) => ({
                  li: {
                    props: {
                      key: `link${i}`,
                    },
                    children: [
                      {
                        Link: {
                          props: {
                            to: li[0],
                            key: `c${i}`
                          },
                          children: li[1]
                        }
                      }
                    ]
                  }
                }))
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
                padding:'.2rem 0',
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
                        justifyContent:'flex-end'
                      },
                    },
                    children: [
                      {
                        href: 'https://repetere.github.io/jsonx/manual/getting-started/index.html',
                        text:'Manual',
                        // btnClass:''
                      },
                      {
                        href: 'https://repetere.github.io/jsonx/',
                        text:'Docs',
                        // btnClass:''
                      },
                      {
                        href: 'https://repetere.github.io/jsonx/manual/samples/index.html',
                        text:'Samples',
                        // btnClass:''
                      },
                      {
                        href: 'https://github.com/repetere/jsonx',
                        text: 'GitHub',
                        btnClass:'bg-dark text-light'
                      }
                    ].map((link, l) => ({
                      component: 'a',
                      props: {
                        className: `btn ${link.btnClass}`,
                        style: {
                          marginLeft: '.2rem',
                          display:'inline-flex'
                        },
                        href:link.href,
                      },
                      children:link.text,
                    }))
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
                  className:'container grid-xl'
                },
                children: [
                  {
                    component: 'h1',
                    children:'JSONX'
                  },
                  {
                    component: 'p',
                    children:'Create React Elements, JSX and HTML with JSON'
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
                  className:' container grid-xl'
                },
                children: [
                  {
                    component: 'Spectre.Layout.Row',
                    children: [
                      {
                        title: 'Zero Setup',
                        desc: `The JSONX UMD comes with batteries included so you can use JSONX in browser without transpilers or any additional setup/configuration.
                        Ideal for JAMstack Applications.`,
                        link: 'https://codesandbox.io/s/jsonx-static-html-o6owl',
                        link_label:'Try it now »',
                      },
                      {
                        title: 'Embeddable',
                        desc: 'JSONX can also be used in existing react applications if you want to dynamically create elements with JSON. This works great for many scenarios when you want to manage your application views and components in a view management system.',
                        link: 'https://codesandbox.io/s/jsonx-simple-create-react-app-l5q54',
                        link_label:'Try it now »',
                      },
                      {
                        title: 'Fully Featured',
                        desc:'JSONX supports all of Reacts features including, Hooks, Functional, Class-based, Suspense and Lazy components. JSONX supports JSON objects that implement the JXM (JSONX Markup) Spec.',
                        link: 'https://repetere.github.io/jsonx/manual/spec.html',
                        link_label:'JXM Spec »',
                      }
                    ].map((col, i) => ({
                      component: 'Spectre.Layout.Col',
                      props: {
                        key:`prodspec-${i}`,
                      },
                      children: [
                        {
                          component: 'Spectre.Card.Card',
                          props: {
                            style: {
                              height:'100%'
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
                                    href:col.link,
                                  },
                                  children:col.link_label
                                }
                              ],
                            }
                          ]
                        }
                      ]
                    })),
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
                paddingBottom:0
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
                        children:'Basic Examples',
                      }
                    ]
                  },
                  {
                    component: 'div',
                    children: [UMD_Example, CRA_Example, OUTPUT_Example]
                    .map((row:any, r:number) => ({ 
                      component: 'Spectre.Layout.Row',
                      props: {
                        key:`r-${r}`
                      },
                      children: [
                        {
                          component: 'Spectre.Layout.Col',
                          props: {
                            style: {
                              width:'100%'
                            },
                            className:'hero hero-sm'
                          },
                          children: [
                            {
                              component:'h5',
                              children: [
                                {
                                  component: 'span',
                                  children:row.title,
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
                                          marginLeft:'0.5rem'
                                        },
                                      },
                                      children:'(try now!)'
                                    }
                                  ]
                                }
                              ],
                            },
                            Array.isArray(row.frame)
                            ? {
                              component: 'Spectre.Layout.Row',
                              children: row.frame.map((innerframe:any, f:number) => ({
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
                                                className:row.language
                                              },
                                              children:innerframe.code
                                            }
                                          ]
                                        },
                                      ]
                                    }
                                  ]
                                }))
                              }
                            : {
                                component: 'Spectre.Layout.Row',
                                children: [
                                  {
                                    component: 'Spectre.Layout.Col',
                                    props: {
                                      'col-6': true,
                                      className:'col-6'
                                    },
                                    children: [
                                      {
                                        component: 'ReactHighlight.default',
                                        props: {
                                          className:row.language
                                        },
                                        children:row.frame
                                      },
                                    ]
                                  },
                                  {
                                    component: 'Spectre.Layout.Col',
                                    props: {
                                      'col-6':true,
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
                                className:'divider'
                              }
                            },
                          ]
                        },
                      ]
                    }))
                  ,
                  }
                ]
              }
            ]
          },
          {
            component: 'section',
            props: {
              className:'container grid-xl',
            },
            children: [
              {
                component: 'div',
                children: [
                  {
                    component: 'h3',
                    children:'That\'s All!'
                  },
                  {
                    component: 'h6',
                    children:'Go make something great.'
                  },
                ],
              },
              {
                component: 'div',
                props: {
                  className:'divider'
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

export { };