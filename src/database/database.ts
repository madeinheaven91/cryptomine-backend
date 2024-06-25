import pg from "pg";

const pool = new pg.Pool({
  host: "172.17.0.2",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "cryptomine"
});


function connect() {
  try {
    console.log(`Connected to database`);
  } catch (error) {
    console.log(error);
  }
}

export { pool as db, connect };
