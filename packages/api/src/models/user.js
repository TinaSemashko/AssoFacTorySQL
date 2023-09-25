import { knex } from "../../db.js";

export const table = "users";

export const getUsers = async () => {
  const results = await knex(table).select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getUser = async (email, password) => {
  const results = await knex(table)
    .select(
      knex.raw("ENCODE(photo, 'base64') as photo"),
      "prenom",
      "email",
      "id"
    )
    .where({ email, password });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const getUserById = async (id) => {
  const results = await knex(table)
    .select(
      knex.raw("ENCODE(photo, 'base64') as photo"),
      "prenom",
      "email",
      "id"
    )
    .where({ id });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

// export const putUserAbonnement = async (email) => {
//   const results =
//     (await knex) < User > table.update({ abonnement: true }).where({ email });

//   if (results) return results;

//   return null;
// };

export const createUser = async (data) => {
  const photoBuffer = Buffer.from(data.photo, "base64");
  const results = await knex(table)
    .insert({ ...data, photo: photoBuffer })
    .returning("id");

  return results[0];
};
