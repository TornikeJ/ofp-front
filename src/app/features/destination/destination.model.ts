export interface Destination {
  title: string;
  cover: string;
  date: string;
}

export interface Destinations {
  [key: string]: Destination[];
}
