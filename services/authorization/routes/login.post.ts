import { z } from "zod";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
});

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

export default eventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse);
  const User = model("Users", userSchema);
  const user = new User({ email, password });
  const result = await user.collection.findOne({ email: email });
  if (result === null) {
    return event.respondWith(
      new Response("Wront password or email!", { status: 403 })
    );
  }
  return { email, password };
});
