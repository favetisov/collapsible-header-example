import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <collapsible-header>
          <collapsible-header-content />
        </collapsible-header>
        <main class="wrapper-content">
          <ion-slides>
            <ion-slide>{this.renderContent(1)}</ion-slide>
            <ion-slide>{this.renderContent(2)}</ion-slide>
          </ion-slides>
        </main>
      </ion-app>
    );
  }

  renderContent(pageNum: number) {
    return (
      <ion-content fullscreen>
        <ion-list>
          {new Array(100).fill(0).map((_, idx) => (
            <ion-item onClick={() => console.log('clicked')}>
              PAGE #{pageNum} ITEM #{idx}
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    );
  }
}
