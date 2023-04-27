import {AbstractDictionary} from 'src/core/AbstractDictionary';
import WebTour from 'webtour';

export class OxfordDictionary extends AbstractDictionary {
  public createTour() {
    const wt = new WebTour();
    const steps = [
      {
        element: 'h1.headword', //target element (if not defined then the popover will act like a modal at the center of the screen)
        title: 'Sao chép từ', //this is option if you don't want to add title
        content: 'Bấm vào để sao chép từ', //can be string or html string
        placement: 'right-start', //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
      },
      {
        element: '.phon',
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
        element: '.x',
        title: 'Sao chép',
        content: 'Bấm vào để sao chép giải nghĩa hoặc ví dụ',
        placement: 'right-start',
      },
    ];
    wt.setSteps(steps);
    return wt;
  }

  public findIpaUrl(ipaButton: HTMLSpanElement) {
    return ipaButton.getAttribute('data-src-mp3');
  }

  public shouldOpenTour(): boolean {
    return window.location.pathname.startsWith('/definition/english');
  }
}
