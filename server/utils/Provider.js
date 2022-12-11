import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import passport from "passport";
import { User } from "../models/User.js";

export const connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRETS,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async function (accessToken, refreshToken, profile, next) {
        //database connect
        const user = await user.findOne({
          googleId: profile.id,
        });
        if (!user) {
          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value,
          });
          return done(null, user);
        } else {
          return done(null, user);
        }
      }
    )
  );
  passport.serializeUser((user, next) => {
    next(null, user.id);
  });
  passport.deserializeUser(async (id, next) => {
    const user = await user.findById(id);
    next(null, user.id);
  });
};
