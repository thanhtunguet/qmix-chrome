import FingerprintJS, {Agent, GetResult} from '@fingerprintjs/fingerprintjs';

export class BrowserService {
  public async getFingerprint(): Promise<string> {
    const agent: Agent = await FingerprintJS.load();
    const result: GetResult = await agent.get();
    return result.visitorId;
  }
}

export const browserService: BrowserService = new BrowserService();
