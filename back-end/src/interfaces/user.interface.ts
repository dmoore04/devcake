interface IUser {
  name: string;
  email: string;
  username: string;
  password: string;
  topics?: string[];
  media?: string[];
  saved?: string[];
  avatarUrl?: string;
}

export default IUser;
