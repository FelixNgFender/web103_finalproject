import { pool } from "../configs/db.config.js";

const findAll = () => {
    const query = "SELECT * FROM availabilities ORDER BY name";
    return pool.query(query);
};
  
const findOne = (id) => {
    const query = "SELECT * FROM availabilities WHERE id = $1";
    return pool.query(query, [id]);
};
  
const findTime = (tutorId) => {
    const query = `
    SELECT a.time_block
    FROM availabilities a
    JOIN users u ON a.tutor_id = u.id
    WHERE a.tutor_id = $1;
`;
    return pool.query(query, [tutorId])
}
const create = ({ tutor_id, time_block }) => {
    const query = `
      INSERT INTO availabilities (tutor_id, time_block)
      VALUES ($1, $2)
      RETURNING *
    `;
    return pool.query(query, [tutor_id, time_block]);
  };

export default {
    findAll,
    findOne,
    findTime,
    create
};
