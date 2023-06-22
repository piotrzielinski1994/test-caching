import { TrackingLink } from './tracking-links.types';

export default abstract class TrackingLinksService {
  private static trackingLinks: TrackingLink[] = [];

  static getAll() {
    return this.trackingLinks;
  }

  static getOne(id: TrackingLink['id']) {
    return this.trackingLinks.find((trackingLink) => trackingLink.id === id);
  }

  static create(body: Omit<TrackingLink, 'id'>) {
    const trackingLink: TrackingLink = { ...body, id: this.trackingLinks.length };

    this.trackingLinks = [...this.trackingLinks, trackingLink];

    this.scheduleGeneratingUrl(trackingLink);

    return trackingLink;
  }

  private static scheduleGeneratingUrl(trackingLink: TrackingLink) {
    setTimeout(() => {
      trackingLink.url = `http://example.com/${trackingLink.id}`;
    }, 30000);
  }
}
