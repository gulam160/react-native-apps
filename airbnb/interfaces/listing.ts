interface PictureUrl {
  thumbnail: boolean;
  filename: string;
  format: string;
  width: number;
  mimetype: string;
  etag: string;
  id: string;
  last_synchronized: string;
  color_summary: string[];
  height: number;
}

export interface ListingsInterface {
  id: string;
  listing_url: string;
  scrape_id: string;
  last_scraped: string;
  name: string;
  summary: string;
  space: any; // Replace 'any' with the appropriate type if available
  description: string;
  experiences_offered: string;
  neighborhood_overview: any; // Replace 'any' with the appropriate type if available
  notes: any; // Replace 'any' with the appropriate type if available
  transit: any; // Replace 'any' with the appropriate type if available
  access: any; // Replace 'any' with the appropriate type if available
  interaction: any; // Replace 'any' with the appropriate type if available
  house_rules: string;
  thumbnail_url: string;
  medium_url: string;
  picture_url: PictureUrl;
  xl_picture_url: string;
  host_id: string;
  host_url: string;
  host_name: string;
  host_since: string;
  host_location: string;
  host_about: any; // Replace 'any' with the appropriate type if available
  host_response_time: string;
  host_response_rate: number;
  host_acceptance_rate: any; // Replace 'any' with the appropriate type if available
  host_thumbnail_url: string;
  host_picture_url: string;
  host_neighbourhood: any; // Replace 'any' with the appropriate type if available
  host_listings_count: number;
  host_total_listings_count: number;
  host_verifications: string[];
  street: string;
  neighbourhood: any; // Replace 'any' with the appropriate type if available
  neighbourhood_cleansed: string;
  neighbourhood_group_cleansed: any; // Replace 'any' with the appropriate type if available
  city: string;
  state: string;
  zipcode: string;
  market: string;
  smart_location: string;
  country_code: string;
  country: string;
  latitude: string;
  longitude: string;
  property_type: string;
  room_type: string;
  accommodates: number;
  bathrooms: number;
  bedrooms: number;
  beds: number;
  bed_type: string;
  amenities: string[];
  square_feet: any; // Replace 'any' with the appropriate type if available
  price: number;
  weekly_price: any; // Replace 'any' with the appropriate type if available
  monthly_price: any; // Replace 'any' with the appropriate type if available
  security_deposit: number;
  cleaning_fee: any; // Replace 'any' with the appropriate type if available
  guests_included: number;
  extra_people: number;
  minimum_nights: number;
  maximum_nights: number;
  calendar_updated: string;
  has_availability: any; // Replace 'any' with the appropriate type if available
  availability_30: number;
  availability_60: number;
  availability_90: number;
  availability_365: number;
  calendar_last_scraped: string;
  number_of_reviews: number;
  first_review: string;
  last_review: string;
  review_scores_rating: number;
  review_scores_accuracy: number;
  review_scores_cleanliness: number;
  review_scores_checkin: number;
  review_scores_communication: number;
  review_scores_location: number;
  review_scores_value: number;
  license: any; // Replace 'any' with the appropriate type if available
  jurisdiction_names: any; // Replace 'any' with the appropriate type if available
  cancellation_policy: string;
  calculated_host_listings_count: number;
  reviews_per_month: number;
  geolocation: {
    lon: number;
    lat: number;
  };
  features: string[];
}
