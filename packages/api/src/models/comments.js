import { knex } from "../../db.js";

export const table = "comments";

export const getComments = async () => {
  const results = await knex(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};
