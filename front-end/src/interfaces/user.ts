export default interface IUser {
  _id: string;
  username: string;
  avatarUrl: string;
  name: string;
  topics: string[];
  media: string[];
  saved: string[];
}
