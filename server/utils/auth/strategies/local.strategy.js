import {
  Strategy
} from "passport-local";
import bcrypt from "bcrypt";
import boom from "@hapi/boom";

import {
  getOneUserWithEmail
} from "../../../controller/user.controller.js";

export const LocalStrategy = new Strategy({
    usernameField: 'email',
    passwordField: 'password',
  },

  async (email, password, done) => {
    try {
      const user = await getOneUserWithEmail(email);

      if (!user) {
        done(boom.unauthorized(), false);
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        done(boom.unauthorized(), false);
      }

      delete user.password

      done(false, user);
    } catch (error) {
      done(error, false);
    }
  }
)