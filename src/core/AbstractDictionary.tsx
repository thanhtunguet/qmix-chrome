import CloudDownloadOutlined from '@ant-design/icons/CloudDownloadOutlined';
import React from 'react';
import type WebTour from 'webtour';
import {render} from 'react-dom';

export abstract class AbstractDictionary {
  public abstract findIpaUrl(element: HTMLElement);

  public createIpaDownloadLink(
    url: string,
    filename?: string,
    rootElement?: HTMLElement,
  ): HTMLAnchorElement {
    const a: HTMLAnchorElement = document.createElement('a');

    const name: string = filename ?? url.split('/').splice(-1)[0];

    a.title = `Download as ${name}`;

    a.setAttribute('role', 'button');
    a.className = 'mx-2';
    a.classList.add('link-download-ipa');
    a.href = url;
    a.download = name;

    if (rootElement) {
      rootElement.append(a);
    }

    render(<CloudDownloadOutlined />, a);

    return a;
  }

  public abstract createTour(): WebTour;

  public abstract shouldOpenTour(): boolean;

  public initializeTour() {
    const tour = this.createTour();
    const hasInitialized = !!localStorage.getItem('tour');
    if (this.shouldOpenTour()) {
      if (!hasInitialized || process.env.NODE_ENV === 'development') {
        tour.start();
        localStorage.setItem('tour', 'initialized');
      }
    }
  }
}
