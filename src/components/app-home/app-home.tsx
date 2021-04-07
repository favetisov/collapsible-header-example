import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  render() {
    return [
      <collapsible-header>
        <collapsible-header-content />
      </collapsible-header>,
      <main>
        <ion-slides>
          <ion-slide>{this.renderContent(1)}</ion-slide>
          <ion-slide>{this.renderContent(2)}</ion-slide>
        </ion-slides>
      </main>,
    ];
  }

  renderContent(pageNum: number) {
    return (
      <ion-content fullscreen>
        <ion-list>
          {new Array(100).fill(0).map((_, idx) => (
            <ion-item>
              PAGE #{pageNum} ITEM #{idx}
            </ion-item>
          ))}
        </ion-list>
      </ion-content>
    );
  }
}
