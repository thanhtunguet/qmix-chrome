import {CloudDownloadOutlined} from '@ant-design/icons';
import React from 'react';
import ReactDOM from 'react-dom';

export abstract class Dictionary {
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
    a.href = url;
    a.download = name;

    if (rootElement) {
      rootElement.append(a);
    }

    ReactDOM.render(<CloudDownloadOutlined />, a);

    return a;
  }

  public abstract findIpaUrl(element: HTMLElement);
}
