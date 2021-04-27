import nameof from 'ts-nameof.macro';

export class LocalRepository {
  public get isValid(): Promise<boolean> {
    return (
      this.getItem<boolean>(nameof(this.isValid)) ?? Promise.resolve(false)
    );
  }

  public async getItem<T = any>(key: string) {
    return new Promise<T>((resolve) => {
      chrome.storage.local.get(key, (items) => {
        resolve(items[key]);
      });
    });
  }

  public async setItem(key: string, value: any) {
    return new Promise<void>((resolve) => {
      chrome.storage.local.set(
        {
          [key]: value,
        },
        () => {
          resolve();
        },
      );
    });
  }
}

export const localRepository = new LocalRepository();
