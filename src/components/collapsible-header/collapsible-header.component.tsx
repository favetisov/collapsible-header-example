import { Component, h, Host, Element, Prop, Event, EventEmitter } from '@stencil/core';
import { readTask, writeTask } from '@stencil/core';

@Component({
  tag: 'collapsible-header',
  styleUrl: 'collapsible-header.component.css',
  shadow: false,
})
export class CollapsibleHeaderComponent {
  @Prop() maxHeightPx = 200;
  @Prop() minHeightPx = 56;
  @Event() heightChange: EventEmitter;

  @Element() el: HTMLElement;
  currentScroll: number;

  async componentDidLoad() {
    const pageEl = this.el.closest('ion-app,ion-page,.ion-page,page-inner');
    const headerEl = this.el.children[0] as HTMLIonHeaderElement;
    const contentNodes = pageEl ? pageEl.querySelectorAll('ion-content') : null;
    const scrollEls = [];

    for (const node of Array.from(contentNodes)) {
      const el = await (node as HTMLIonContentElement).getScrollElement();
      scrollEls.push(el);
      writeTask(() => {
        el.style.setProperty('--padding-top', this.maxHeightPx + 'px');
      });
      el.addEventListener('scroll', () => {
        readTask(() => {
          const scrollTop = el.scrollTop;
          const headerScroll = Math.max(0, Math.min(this.maxHeightPx - this.minHeightPx, scrollTop));
          if (headerScroll != this.currentScroll) {
            headerEl.style.setProperty('transform', `translateY(-${headerScroll}px)`);
            (headerEl.children[0] as HTMLElement)?.style.setProperty('transform', `translateY(${headerScroll}px)`);
            scrollEls
              .filter(e => e != el)
              .forEach(el => {
                el.scroll(0, scrollTop);
              });
            this.currentScroll = headerScroll;
            this.heightChange.emit(this.maxHeightPx - headerScroll);
          }
        });
      });
    }
  }

  render() {
    return (
      <Host>
        <ion-header style={{ height: this.maxHeightPx + 'px' }}>
          <slot />
        </ion-header>
      </Host>
    );
  }
}
