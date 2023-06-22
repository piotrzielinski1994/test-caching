import { TrackingLink } from './tracking-links.types';

export default abstract class TrackingLinksService {
  private static data: TrackingLink[] = [];

  static getAll() {
    return this.data;
  }

  static getOne(id: TrackingLink['id']) {
    return this.data.find((it) => it.id === id);
  }

  static create(body: Omit<TrackingLink, 'id'>) {
    const trackingLink: TrackingLink = {
      ...body,
      id: this.data.length,
    };

    this.data = [...this.data, trackingLink];

    this.scheduleGeneratingUrl(trackingLink);

    return trackingLink;
  }

  private static scheduleGeneratingUrl(trackingLink: TrackingLink) {
    setTimeout(() => {
      trackingLink.url = `http://example.com/${trackingLink.id}`;
    }, 5000);
  }
}
