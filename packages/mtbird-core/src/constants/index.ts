export const GLOBAL_DEFAULT_TITLE =
  "星搭精卫 - 极速落地页搭建，业务组件灵活接入，自定义插件动态拓展";

export const COMPONENT_NAME = {
  CONTAINER_ROOT: "ContainerRoot",
  CONTAINER_BLOCK: "ContainerBlock",
  CONTAINER: "Container",
  FORM: "Form",
  FORM_ITEM: "FormItem",
  UPLOAD: "Upload",
  MODAL: "Modal",
  VIDEO: "Video",
  IMAGE: "Image",
  SHAPE: "Shape",
  ICON: "Icon",
  BUTTON: "Button",
  TEXT: "Text",
  DATA_LIST: "DataList",
  DATA_DETAIL: "DataDetail",
};

export const COMPONENT_TYPE = {
  CONTAINER: "container",
  COMPONENT: "component",
  FORM: "form",
};

export const LAYOUT_TYPE = {
  FLEX: "flex",
  GRID: "grid",
  ABSOLUTE: "absolute",
};

// @TODO This constant is hardcoded in /packages/mtbird-cli/src/builder/rollup.config.js
export const GLOBAL_EXTENSION_KEY = "MTBIRD_EXTENSION";
export const GLOBAL_EXTENSION_COMPONENTS_KEY = "MTBIRD_EXTENSION_COMPONENTS";

export const EXTENSION_CONTRIBUTE_TYPE = {
  HEADER: {
    TOOLS: "headerTools",
    RIGHT: "headerRight",
  },
  TOOL: {
    BARS: "toolbars",
    BOTTOM: "toolbarsBottom",
  },
  CANVAS: {
    TOOLS: "canvasTools",
  },
  SCHEMA: {
    TABS: "schemaTabs",
  },
  BOTTOM: {
    TABS: "bottomTabs",
  },
};

export const PreviewMobileType = {
  "iPhone SE": {
    width: 375,
    height: 667,
  },
  "iPhone XR": {
    width: 414,
    height: 896,
  },
  "iPhone 12 Pro": {
    width: 390,
    height: 844,
  },
  "Pixel 5": {
    width: 393,
    height: 851,
  },
  "Samsung Galaxy S8+": {
    width: 360,
    height: 740,
  },
  "iPad Mini": {
    width: 768,
    height: 1024,
  },
  "iPad Air": {
    width: 820,
    height: 1180,
  },
};
