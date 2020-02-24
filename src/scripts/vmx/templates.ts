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
            component: 'section',
            props: {
              className: 'hero hero-lg bg-primary',
              key: 0
            },
            
            // component: 'Spectre.Layout.Grid',
            children: 'this is in a section'
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
                        desc: `The JSONX UMD comes with batteries included so you can use JSONX in browser without transpilers or any additional setup/configure.
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
                        link: '#(JXM Spec)',
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
            props: {className:'container hero grid-xl'},
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
                  }
                ].concat(
                  [
                    {
                      title: 'Render To Page with UMD',
                      frame:`<iframe
                      src="https://codesandbox.io/embed/jsonx-static-html-o6owl?fontsize=14&hidenavigation=1&theme=light"
                      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                      title="jsonx-static-html"
                      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    ></iframe>`
                    },
                    {
                      title: 'Embedded in Create React App',
                      frame:`<iframe
                      src="https://codesandbox.io/embed/jsonx-simple-create-react-app-l5q54?fontsize=14&hidenavigation=1&theme=light"
                      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                      title="jsonx-simple-create-react-app"
                      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    ></iframe>`
                    },
                    {
                      title: 'Output to HTML, JSON, JSX',
                      frame:`<iframe
                      src="https://codesandbox.io/embed/jsonx-output-qf9pg?fontsize=14&hidenavigation=1&theme=light"
                      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
                      title="jsonx-output"
                      allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
                      sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
                    ></iframe>`
                    },
                  ].map((row, r) => ({ 
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
                          className:'hero'
                        },
                        children: [
                          {
                            component:'h5',
                            children:row.title,
                          },
                          {
                            component: 'div',
                            props: {
                              dangerouslySetInnerHTML: {
                                __html:row.frame
                              }
                            }
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
                ),
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