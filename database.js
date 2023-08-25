import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();
//   we want to use async await

const getNotes = async () => {
  const result = await pool.query("select * from notes");
  const [rows] = result;
  return rows;
};

// const notes = await getNotes();
// console.log(notes);

const getSingleNote = async (id) => {
  //   const result = await pool.query(`select * from notes where id=${id}`);
  // for security issues we use this syntax
  const result = await pool.query(`SELECT * FROM notes WHERE id= ? `, [id]);
  const [rows] = result;
  return rows[0];
};

// const note = await getSingleNote(233);
// console.log(note);

const createNote = async (title, content) => {
  const [result] = await pool.query(
    `INSERT INTO notes (title,contents) VALUES(?,?) `,
    [title, content]
  );
  return {
    id: result.insertId,
    title,
    content,
  };
};

// I can return getSingleNote from the createNote function
//if I need all the information in the note object

// const createNote = async (title, content) => {
//   const [result] = await pool.query(
//     `INSERT INTO notes (title,contents) VALUES(?,?) `,
//     [title, content]
//   );

//   const id = result.insertId;
//   return getSingleNote(id);
// };

// const result = await createNote("testTitle2", "testContent2");
// console.log(result);

export { getNotes, getSingleNote, createNote };
