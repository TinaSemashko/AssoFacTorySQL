import { knex } from "../../db.js";

export const table = "posts";

export const getPostsBySalon = async (id_salon) => {
  const results = (await knex) < Posts > table.select("*").where({ id_salon });

  if (results && results.length) {
    return results;
  }

  return null;
};

// export const putUserAbonnement = async (email) => {
//   const results =
//     (await knex) < User > table.update({ abonnement: true }).where({ email });

//   if (results) return results;

//   return null;
// };

export const createPost = async (data) => {
  const results =
    (await knex) < User > table.insert({ ...data }).returning("id");

  return results[0];
};
