import { knex } from "../../db.js";

export const table = "comments";

export const getComments = async () => {
  const results = await knex(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createComment = async (data) => {
  const results = await knex(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};
