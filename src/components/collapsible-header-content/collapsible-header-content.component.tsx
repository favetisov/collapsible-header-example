import { Component, h, Element } from '@stencil/core';

@Component({
  tag: 'collapsible-header-content',
  shadow: false,
})
export class CollapsibleHeaderContentComponent {
  @Element() el: HTMLElement;
  titleEl: HTMLIonTitleElement;
  headerEl: HTMLCollapsibleHeaderElement;

  componentDidLoad() {
    const MAX_HEIGHT_PX = 200;
    const MIN_HEIGHT_PX = 56;

    this.headerEl = this.el.closest('collapsible-header');
    this.headerEl.addEventListener('heightChange', e => {
      const height = e['detail'];
      const heightDiffPercent = (MAX_HEIGHT_PX - height) / (MAX_HEIGHT_PX - MIN_HEIGHT_PX);
      this.titleEl.style.setProperty('transform', `scale(${1 / (1 + heightDiffPercent)})`);
    });
  }

  render() {
    return (
      <ion-toolbar>
        <ion-title ref={el => (this.titleEl = el)}>HEADER TITLE</ion-title>
      </ion-toolbar>
    );
  }
}
