export interface RideOptions {
  id: string;
  title: string;
  multiplier: number;
  image: string;
}

export const rideOptions: RideOptions[] = [
  {
    id: "Uber-X-123",
    title: "Uber X",
    multiplier: 1,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_825,h_549/v1568070387/assets/b5/0a5191-836e-42bf-ad5d-6cb3100ec425/original/UberX.png",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.6,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_825,h_549/v1568134115/assets/6d/354919-18b0-45d0-a151-501ab4c4b114/original/XL.png",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 2.7,
    image:
      "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_825,h_549/v1569012915/assets/4f/599c47-7f5c-4544-a5d2-926babc8e113/original/Lux.png",
  },
];
