import { Component, h, Host, Element, State, Prop } from '@stencil/core';
import { readTask, writeTask } from '@stencil/core';

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
  currentHeight: number;

  async componentDidLoad() {
    const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
    const contentNodes = pageEl ? pageEl.querySelectorAll('ion-content') : null;
    const scrollEls = [];

    for (const node of Array.from(contentNodes)) {
      const el = await (node as HTMLIonContentElement).getScrollElement();
      scrollEls.push(el);
      writeTask(() => {
        el.style.setProperty('--padding-top', this.maxHeightPx + 'px');
      });
      el.addEventListener('scroll', e => {
        readTask(() => {
          const target = e['path'][0];
          const scrollTop = target.scrollTop;
          const height = Math.min(Math.max(this.maxHeightPx - scrollTop, this.minHeightPx), this.maxHeightPx);
          if (height != this.currentHeight) {
            this.headerEl.style.setProperty('min-height', height + 'px');
            this.scrollElements
              .filter(e => e != target)
              .forEach(el => {
                el.scroll(0, scrollTop);
              });
            this.currentHeight = height;
          }
        });
      });
    }
    this.scrollElements = scrollEls;
  }

  render() {
    return (
      <Host>
        <ion-header style={{ 'min-height': this.maxHeightPx + 'px' }} ref={el => (this.headerEl = el)}>
          <slot />
        </ion-header>
      </Host>
    );
  }
}
