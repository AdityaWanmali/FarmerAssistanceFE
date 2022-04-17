import { Farmer } from 'src/app/Farmer/Class/farmer';

export class Grievances {
  constructor(
    public complaintId: number,
    public complaintMessage: string,
    public farmer: Farmer
  ) {}
}
