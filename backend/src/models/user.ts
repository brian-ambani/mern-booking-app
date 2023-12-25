import mongoose from "mongoose";

export type Usertype = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, Required: true },
  firstName: { type: String, Required: true },
  lastName: { type: String, Required: true },
});

const User = mongoose.model<Usertype>("User", userSchema);

export default User;
