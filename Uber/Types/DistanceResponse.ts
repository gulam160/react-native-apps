export interface Elements {
  distance: {
    text: string;
    value: number;
  };
  duration: {
    text: string;
    value: number;
  };
  origin: string;
  destination: string;
  status: string;
}

export interface Row {
  elements: Elements[];
}

export interface DirectionsApiResponse {
  destination_addresses: string[];
  origin_addresses: string[];
  rows: Row[];
  status: string;
}
