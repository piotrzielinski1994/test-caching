import { NextRequest, NextResponse } from 'next/server';
import TrackingLinksService from './tracking-links.service';

export default abstract class TrackingLinksController {
  static getAll(request: NextRequest) {
    const trackingLinks = TrackingLinksService.getAll();
    return NextResponse.json(trackingLinks);
  }

  static getOne(request: NextRequest, context: any) {
    const id = Number(context.params.id);
    const trackingLink = TrackingLinksService.getOne(id);
    return NextResponse.json(trackingLink);
  }

  static async create(request: NextRequest) {
    const body = await request.json();
    const trackingLink = TrackingLinksService.create(body);
    return NextResponse.json(trackingLink);
  }
}
