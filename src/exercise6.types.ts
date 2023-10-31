const USAGE = { twitter: 0, instagram: 0, facebook: 0 };
const SCREEN_USER = {
  username: "",
  name: "",
  screenTime: [
    {
      date: "",
      usage: USAGE
    }
  ]
};
export type screenUser = typeof SCREEN_USER;
