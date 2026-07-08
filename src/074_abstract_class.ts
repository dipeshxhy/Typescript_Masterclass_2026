type Holidays = {
  date: Date;
  reason: string;
}[];
type Holiday = Holidays[number];
abstract class Department {
  protected abstract holidays: Holidays;
  protected constructor(protected name: string) {}
  public addHoliday(holiday: Holiday): void {
    this.holidays.push(holiday);
  }
  public getHolidays(): Holidays {
    return this.holidays;
  }
}
class ItDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('IT');
  }
}

class AdminDepartment extends Department {
  protected holidays: Holidays = [];
  constructor() {
    super('Admin');
  }
}

const itDepartment = new ItDepartment();
itDepartment.addHoliday({ date: new Date('2024-12-25'), reason: 'Christmas' });
itDepartment.addHoliday({ date: new Date('2024-01-01'), reason: "New Year's Day" });
