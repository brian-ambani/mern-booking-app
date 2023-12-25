import mongoose from "mongoose";
import bcrypt from "bcryptjs";

export type Usertype = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  firstName: { type: String, Required: true },
  lastName: { type: String, Required: true },
});

userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 9);
  }
  next();
});

const User = mongoose.model<Usertype>("User", userSchema);

export default User;
