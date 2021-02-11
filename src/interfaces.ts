interface CVPicture {
  src: string;
  srcHd: string;
  width: number;
  height: number;
}

interface CVCategory {
  title: string;
  items: CVItem[];
}

interface CVItem {
  title: string;
  description: string;
  timeRange: string;
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  timeZone: string;
  timeZoneOffset: string;
  birthYear: number;
  lastUpdate: string;
  picture: CVPicture;
  categories: CVCategory[];
}
