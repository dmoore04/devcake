export default interface IUser {
  _id: string;
  username: string;
  avatarURL: string;
  name: string;
  topics: string[];
  media: string[];
  saved: string[];
}
