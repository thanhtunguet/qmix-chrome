import {AbstractDictionary} from 'src/core/AbstractDictionary';
// @ts-ignore
import WebTour from 'webtour';

export class CambridgeDictionary extends AbstractDictionary {
  public findIpaUrl(audioElement: HTMLAudioElement) {
    audioElement.childNodes.forEach((node: ChildNode) => {
      if (node.nodeName === 'SOURCE') {
        const sourceNode = node as HTMLSourceElement;
        if (sourceNode.src.endsWith('.mp3')) {
          return sourceNode.src;
        }
      }
    });
    return null;
  }

  public createCopyButton(): HTMLButtonElement {
    const button: HTMLButtonElement = document.createElement('button');

    button.type = 'button';
    button.className = 'ant-btn ant-btn-sm ant-btn-primary ml-2';
    button.innerText = 'Copy';

    return button;
  }

  public createTour(): WebTour {
    const wt = new WebTour();
    const steps = [
      {
        element: '.hw.dhw', //target element (if not defined then the popover will act like a modal at the center of the screen)
        title: 'Sao chép từ', //this is option if you don't want to add title
        content: 'Bấm vào để sao chép từ', //can be string or html string
        placement: 'right-start', //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
      },
      {
        element: 'span.pron.dpron',
        title: 'Sao chép phiên âm',
        content: 'Bấm vào phần phiên âm để sao chép vào bài giảng',
        placement: 'right-start',
      },
      {
        element: 'a.link-download-ipa:first-of-type',
        title: 'Tải về',
        content: 'Bấm vào để tải về file phát âm',
        placement: 'right-start',
      },
      {
        element: 'button.btn-copy:first-of-type',
        title: 'Sao chép',
        content: 'Bấm vào để sao chép giải nghĩa hoặc ví dụ',
        placement: 'right-start',
      },
    ];
    wt.setSteps(steps);
    return wt;
  }

  public shouldOpenTour(): boolean {
    return window.location.pathname.startsWith('/dictionary/english');
  }
}
