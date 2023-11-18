import { pool } from "../configs/db.config.js";

const findAll = () => {
  const query = "SELECT * FROM appointments";
  return pool.query(query);
};

const findOne = (id) => {
  const query = "SELECT * FROM appointments WHERE id = $1";
  return pool.query(query, [id]);
};

const create = ({ tutor_id, student_id, time_block }) => {
  const query = `
    INSERT INTO appointments (tutor_id, student_id, time_block)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  return pool.query(query, [tutor_id, student_id, time_block]);
};

export default {
  findAll,
  findOne,
  create
};
