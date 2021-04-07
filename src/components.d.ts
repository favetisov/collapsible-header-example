/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface AppHome {}
  interface AppRoot {}
  interface CollapsibleHeader {
    maxHeightPx: number;
    minHeightPx: number;
  }
  interface CollapsibleHeaderContent {}
}
declare global {
  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLCollapsibleHeaderElement extends Components.CollapsibleHeader, HTMLStencilElement {}
  var HTMLCollapsibleHeaderElement: {
    prototype: HTMLCollapsibleHeaderElement;
    new (): HTMLCollapsibleHeaderElement;
  };
  interface HTMLCollapsibleHeaderContentElement extends Components.CollapsibleHeaderContent, HTMLStencilElement {}
  var HTMLCollapsibleHeaderContentElement: {
    prototype: HTMLCollapsibleHeaderContentElement;
    new (): HTMLCollapsibleHeaderContentElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'collapsible-header': HTMLCollapsibleHeaderElement;
    'collapsible-header-content': HTMLCollapsibleHeaderContentElement;
  }
}
declare namespace LocalJSX {
  interface AppHome {}
  interface AppRoot {}
  interface CollapsibleHeader {
    maxHeightPx?: number;
    minHeightPx?: number;
  }
  interface CollapsibleHeaderContent {}
  interface IntrinsicElements {
    'app-home': AppHome;
    'app-root': AppRoot;
    'collapsible-header': CollapsibleHeader;
    'collapsible-header-content': CollapsibleHeaderContent;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'app-home': LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
      'app-root': LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
      'collapsible-header': LocalJSX.CollapsibleHeader & JSXBase.HTMLAttributes<HTMLCollapsibleHeaderElement>;
      'collapsible-header-content': LocalJSX.CollapsibleHeaderContent & JSXBase.HTMLAttributes<HTMLCollapsibleHeaderContentElement>;
    }
  }
}
