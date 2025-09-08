export interface DessertResponse {
  image:    Image;
  name:     string;
  category: string;
  price:    number;
}

export interface Image {
  thumbnail: string;
  mobile:    string;
  tablet:    string;
  desktop:   string;
}
