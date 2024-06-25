import { IRequest } from "../interfaces/IRequest";
import { IResponse } from "../interfaces/IResponse";
import { db } from "../database/database";

class UserController {
  static frontendURL: string = "localhost:5173/";
  async createUser(req: IRequest, res: IResponse) {
    try {
      const { username, link, count, perClick, perSecond } = req.body;
      db.query(
        "INSERT INTO users (username, link, count, perClick, perSecond) VALUES ($1, $2, $3, $4, $5)",
        [username, link, count, perClick, perSecond],
      );
      res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getUser(req: IRequest, res: IResponse) {
    try {
      const id = req.params.id;
      const user = await db.query("SELECT * FROM users WHERE id=$1", [id]);
      res.json(user.rows[0]).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async getUsers(req: IRequest, res: IResponse) {
    try {
      const users = await db.query("SELECT * FROM users");
      res.json(users.rows).status(200);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  }

  async updateUser(req: IRequest, res: IResponse) {
    try {
      const id = req.params.id;
      const { username, link, count, perClick, perSecond } = req.body;
      const user = await db.query(
        "UPDATE users set username=$1, link=$2, count=$3, perClick=$4, perSecond=$5 WHERE id=$6 RETURNING *",
        [username, link, count, perClick, perSecond, id],
      );
      res.json(user.rows[0]).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }

  async deleteUser(req: IRequest, res: IResponse) {
    try {
      const id = req.params.id;
      const user = await db.query("DELETE FROM users WHERE id=$1", [id]);
      res.json(user.rows[0]).status(200);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}

export { UserController };
