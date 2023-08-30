import mongoose from "mongoose";
import { ExplainVerbosity } from "mongodb/src/explain";

const UserSchema = new mongoose.Schema({
  username: { type: "string", required: true },
  email: { type: "string", required: true },
  authentication: {
    password: { type: "string", required: true, select: false },
    salt: { type: "string", required: true, select: false },
    sessionToken: { type: "string", required: true, select: false },
  },
});

export const UserModel = mongoose.model("User", UserSchema);

// actions

export const getUsers = () => UserModel.find();

export const getUserByEmail = (email: String) =>
  UserModel.findOne({ email: email });

export const getUserBySessionToken = (sessionToken: string) =>
  UserModel.findOne({ "authentication.sessionToken": sessionToken });

export const getUserById = (id: String) =>
  UserModel.findOne({
    id: id,
  });

export const createUser = (values: Record<string, any>) =>
  new UserModel(values).save().then((user) => user.toObject());

export const deleteUserById = (id: string) =>
  UserModel.findOneAndDelete({ id });
export const updateUserById = (id: string, values: Record<string, any>) =>
  UserModel.findByIdAndUpdate({ id, values });
