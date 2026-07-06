type Reservation = {
  departure: Date;
  returnDate?: Date;
  departingFrom: string;
  destination: string;
};
type Reserve = {
  (
    departure: Date,
    returnDate: Date,
    departingFrom: string,
    destination: string,
  ): Reservation | never;
  (departure: Date, departingFrom: string, destination: string): Reservation | never;
};

const reserve: Reserve = (
  departure: Date,
  returnDateOrDepartingFrom: Date | string,
  departingFromOrDestination: string,
  destination?: string,
): Reservation | never => {
  if (returnDateOrDepartingFrom instanceof Date && destination) {
    return {
      departure,
      returnDate: returnDateOrDepartingFrom,
      departingFrom: departingFromOrDestination,
      destination,
    };
  } else if (typeof returnDateOrDepartingFrom === 'string') {
    return {
      departure,

      departingFrom: returnDateOrDepartingFrom,
      destination: departingFromOrDestination,
    };
  }
  throw new Error('Invalid arguments provided to reserve function');
};

console.log(reserve(new Date('2023-01-01'), new Date('2023-01-10'), 'New York', 'Los Angeles'));
console.log(reserve(new Date('2023-01-01'), 'New York', 'Los Angeles'));
