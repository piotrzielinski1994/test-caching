import { TrackingLink } from './tracking-links.types';

const trackingLinks = (): TrackingLink[] => {
  if (process.data) return process.data;

  process.data = [
    {
      id: 0,
      name: 'Tracking Link 0',
      url: 'http://example.com/0',
    },
    {
      id: 1,
      name: 'Tracking Link 1',
      url: 'http://example.com/1',
    },
  ];

  return process.data;
};

export default abstract class TrackingLinksService {
  static getAll() {
    return trackingLinks();
  }

  static getOne(id: TrackingLink['id']) {
    return trackingLinks().find((trackingLink) => trackingLink.id === id);
  }

  static create(body: Omit<TrackingLink, 'id'>) {
    const trackingLink: TrackingLink = { ...body, id: trackingLinks().length };

    trackingLinks().push(trackingLink);

    this.scheduleGeneratingUrl(trackingLink);

    return trackingLink;
  }

  private static scheduleGeneratingUrl(trackingLink: TrackingLink) {
    setTimeout(() => {
      trackingLink.url = `http://example.com/${trackingLink.id}`;
    }, 5000);
  }
}
