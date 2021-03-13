import {DATE_FORMAT} from 'src/config/consts';
import moment from 'moment';

export function formatDate(value: Date | null | undefined): string {
  if (value) {
    return moment(value).format(DATE_FORMAT);
  }
  return null;
}
