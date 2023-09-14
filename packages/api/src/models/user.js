import { knex } from "../../db.js";

export const table = "users";

export const getUsers = async () => {
  const results = (await knex) < User > table.select("*");

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getUser = async (email, password) => {
  const results =
    (await knex) < User > table.select("*").where({ email, password });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const getUserById = async (id) => {
  const results = (await knex) < User > table.select("*").where({ id });

  if (results && results.length) {
    return results[0];
  }

  return null;
};

export const getPostsBySalon = async (id_salon) => {
  const results = (await knex) < Posts > table.select("*").where({ id_salon });

  if (results && results.length) {
    return results;
  }

  return null;
};

export const getComments = async () => {
  const results = (await knex) < Comments > table.select("*");

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

export const createUser = async (data) => {
  const results =
    (await knex) < User > table.insert({ ...data }).returning("id");

  return results[0];
};
