import { Component, h, Element, State, Prop } from '@stencil/core';

@Component({
  tag: 'collapsible-header',
  styleUrl: 'collapsible-header.component.css',
  shadow: false,
})
export class CollapsibleHeaderComponent {
  @Prop() maxHeightPx = 200;
  @Prop() minHeightPx = 56;

  @State() scrollElements: HTMLElement[] = [];

  headerEl: HTMLElement;
  @Element() el: HTMLElement;

  async componentDidLoad() {
    const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
    const contentNodes = pageEl ? pageEl.querySelectorAll('ion-content') : null;
    const scrollEls = [];
    for (const node of Array.from(contentNodes)) {
      const el = await node.getScrollElement();
      scrollEls.push(el);
      el.addEventListener('scroll', e => {
        const target = e['path'][0];
        const scrollTop = target.scrollTop;
        if (scrollTop < this.maxHeightPx - this.minHeightPx) {
          this.headerEl.style.setProperty('min-height', this.maxHeightPx - scrollTop + 'px');
          this.scrollElements.forEach(el => {
            el.scroll(0, scrollTop);
          });
        }
      });
    }
    this.scrollElements = scrollEls;
  }

  render() {
    return (
      <ion-header style={{ 'min-height': this.maxHeightPx + 'px' }} ref={el => (this.headerEl = el)}>
        <slot></slot>
      </ion-header>
    );
  }
}
