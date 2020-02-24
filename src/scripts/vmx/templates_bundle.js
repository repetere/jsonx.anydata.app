var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
define("templates/index", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.index = {
        jsonx: {
            div: {
                props: {
                    key: 0
                },
                children: [
                    {
                        component: 'Spectre.Layout.Section',
                        children: 'this is in a section'
                    }
                ]
            }
        }
    };
});
define("vmx/templates", ["require", "exports", "templates/index"], function (require, exports, home) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    home = __importStar(home);
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
            '/': home.index,
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
});
