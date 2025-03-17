export interface Destination {
  title: string;
  image: string;
  date: string;
  blog: string[];
}

export interface Destinations {
  [key: string]: Destination[];
}
