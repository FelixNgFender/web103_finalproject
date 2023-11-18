import { pool } from "../configs/db.config.js";

const create = ({ tutor_id, student_id, time_block }) => {
  const query = `
    INSERT INTO appointments (tutor_id, student_id, time_block)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  return pool.query(query, [tutor_id, student_id, time_block]);
};

export default {
  create
};