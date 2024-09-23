import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type,
    required: true,
    unique: true,
  },
  email: {
    type,
    required: true,
    unique: true,
  },
  username: {
    type,
    required: true,
    unique: true,
  },
  photo: {
    type,
    required: true,
    unique: true,
  },
  firstName: {
    type,
  },
  lastName: {
    type,
  },
});

const User = models?.User || model("User", UserSchema);
export default User;
