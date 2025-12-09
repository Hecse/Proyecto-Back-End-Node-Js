import { generateToken } from "../data/tokentest.js";
const default_user = {
  id: 123,
  email: "test@gmail.com",
  password: "123456",
};

export async function login(req, res) {
  const { email, password } = req.body;
  if (email === default_user.email && password === default_user.password) {
      const user = { id: 123, email: email };
      const token = await generateToken(user);
    res.json({ token });
  } else {
    res.sendStatus(401);
  }
}
