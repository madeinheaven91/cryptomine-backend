// @ts-ignore
import { app, port } from "./server";
import { connect } from "./database/database";

(async function startApp() {
  try {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    connect();
  } catch (error) {
    console.log(error);
  }
})();
