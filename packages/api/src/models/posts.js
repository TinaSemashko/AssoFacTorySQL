import { knex } from "../../db.js";

export const table = "posts";

export const getPostsAll = async () => {
  const results = await knex(table)
    .select("posts.*", "users.*")
    .leftJoin("users", "users.id", "posts.id_user");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getPostsBySalon = async (id_salon) => {
  const results = await knex(table).select("*").where({ id_salon });

  if (results && results.length) {
    return results;
  }

  return null;
};

export const createPost = async (data) => {
  const results = await knex(table)
    .insert({ ...data })
    .returning("id");

  return results[0];
};
