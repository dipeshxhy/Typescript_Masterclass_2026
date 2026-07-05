let a = [1, 2, 3];
let b: Array<string> = ['a', 'b', 'c'];
let c: Array<string | number | boolean> = ['a', 1];
type Caterer = {
  name: string;
  address: string;
  phone: number;
};

type Seats = {
  [seatNumber: string]: string;
};

type Airplane = {
  model: string;
  flightNumber: string;
  timeOfDeparture: Date;
  timeOfArrival: Date;
  caterer: Caterer;
  seats: Seats;
};

type Airplanes = Array<Airplane>;
