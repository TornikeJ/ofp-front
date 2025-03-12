interface Destination {
  title: string;
  image: string;
  date: string;
}

export interface Destinations {
  [key: string]: Destination[];
}
