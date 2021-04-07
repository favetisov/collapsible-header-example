import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'collapsible-header-content',
  shadow: false,
})
export class CollapsibleHeaderContentComponent {
  @Element() el: HTMLElement;
  toolbarEl: HTMLIonTitleElement;
  headerEl: HTMLCollapsibleHeaderElement;

  componentDidLoad() {
    const maxHeightPx = 200;
    const minHeightPx = 56;
    const MAX_FONT_SIZE = 22;
    const MIN_FONT_SIZE = 14;

    this.headerEl = this.el.closest('collapsible-header');
    const observer = new ResizeObserver(el => {
      const height = el[0].contentRect.height;
      const heightDiffPercent = (maxHeightPx - height) / (maxHeightPx - minHeightPx);
      const fontSize = Math.min(MAX_FONT_SIZE, MAX_FONT_SIZE - heightDiffPercent * (MAX_FONT_SIZE - MIN_FONT_SIZE));
      this.toolbarEl.style.setProperty('font-size', fontSize + 'px');
    });
    observer.observe(this.headerEl);
  }

  render() {
    return (
      <ion-toolbar>
        <ion-title ref={el => (this.toolbarEl = el)}>HEADER TITLE</ion-title>
      </ion-toolbar>
    );
  }
}
