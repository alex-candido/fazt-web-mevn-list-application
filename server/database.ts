import { connect } from "mongoose";

export const startConnection = async (): Promise<void> => {
  try {
    const db = await connect(`mongodb+srv://mevn:${process.env.DB_PASS}@cluster0.k1xui7n.mongodb.net/Task?retryWrites=true&w=majority`);
    console.log(db.connection.name);
  } catch (error) {
    console.error(error);
  }
};
