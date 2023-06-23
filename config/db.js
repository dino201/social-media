import mysql from "mysql";


export const db = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_user-social',
    password: '&3P3&JHh2$$x$Em',
    database: 'freedb_social-media',
});