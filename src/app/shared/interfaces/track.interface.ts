export class Track {
  constructor(
    public trackName: string,
    public atristName: string,
    public imgUrl?: {
      '#text': string,
      size: string
    }[],
    public atristUrl?: string
  ) {}
}
