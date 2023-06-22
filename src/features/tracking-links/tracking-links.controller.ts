import { NextResponse } from 'next/server';
import TrackingLinksService from './tracking-links.service';

export default abstract class TrackingLinksController {
  static getAll(request: Request) {
    const trackingLinks = TrackingLinksService.getAll();
    return NextResponse.json(trackingLinks);
  }

  static create(request: Request) {
    const trackingLink = TrackingLinksService.create({ name: 'Asd' });
    return NextResponse.json(trackingLink);
  }
}
