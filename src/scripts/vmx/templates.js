window.__VMXTemplates = {
    header: {
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
                    className: 'hero hero-lg bg-primary',
                    key: 0
                },
                children: [
                    {
                        props: {
                            key: 0
                        },
                        component: 'Spectre.Layout.Grid',
                        children: 'this is in a section'
                    }
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
                        position: 'absolute',
                        bottom: 0,
                    }
                },
                children: 'this is the footer',
            }
        }
    }
};
