const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    email: "rjsdnql123@gmail.com",
    password: "$2a$08$XTzPesLlHnfJHlE8IZv0yOR./rNog3J/c659YjLyvcaTnLqKEDrq2"
  }
];

app.get("/", (req, res) => {
  console.log(users, " users");
  res.status(200).send({ message: "server 정상 실행." });
});

app.post("/login", (req, res) => {
  console.log(req.body, "req.body");
  const user = users.find((user) => user.email === req.body.email);
  if (!user) return res.status(404).send({ message: "이메일을 확인 해주세요" });

  const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
  if (!passwordIsValid)
    return res.status(401).send({ message: "비밀번호를 확인 해주세요" });

  const token = jwt.sign({ id: user.id }, "secret", { expiresIn: "1h" });
  res.status(200).send({ auth: true, token: token });
});

app.listen(3000, () => {
  console.log("3000 포트 서버 실행 중...");
});
