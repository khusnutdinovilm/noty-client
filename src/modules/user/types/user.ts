export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "admin" | "user";
  image: string;
}
