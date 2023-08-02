import mysql from "mysql2";
const pool = mysql
    .createPool({
        host: "127.0.0.1",
        user: "sougata",
        password: "12345678",
        database: "portfolio",
    })
    .promise();

const createTable = async () => {
    const sql =
        "CREATE TABLE messages (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), email VARCHAR(255),subject VARCHAR(225), message VARCHAR(510), date VARCHAR(10))";
    try {
        const promise = await pool.query(sql);
        return true;
    } catch (error) {
        return false;
    }
};
const checkTableExist = async () => {
    try {
        const response = await pool.query(`SHOW TABLES LIKE "messages"`);
        if (response[0].length == 0) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        return false;
    }
};
const pad = (number) => {
    if (number < 10) return "0" + number;
    else return number;
};
const dataCheck = async (email, day) => {
    try {
        const response = await pool.query(
            `SELECT * FROM messages WHERE email='${email}' AND date='${day}'`
        );
        if (response[0].length >= 3) return true;
        else return false;
    } catch (error) {
        return false;
    }
};
const addData = async (data) => {
    const { name, email, subject, message } = data;
    if (
        name == "" ||
        name == undefined ||
        email == "" ||
        email == undefined ||
        subject == "" ||
        subject == undefined ||
        message == "" ||
        message == undefined
    ) {
        return {
            success: false,
            message: "please fill all the details",
        };
    }
    const date = new Date();
    const day = `${pad(date.getDate())}-${pad(
        date.getMonth() + 1
    )}-${date.getFullYear()}`;
    try {
        const exist = await dataCheck(email, day);
        if (!exist) {
            const response = await pool.query(
                `INSERT INTO messages (name, email, subject, message, date) VALUES ('${name}', '${email}', '${subject}', '${message}', '${day}')`
            );
            if (response[0]);
            return { success: true };
        } else return { success: false, message: "limit reached" };
    } catch (error) {
        return { success: false, message: error.message };
    }
};

export default async function handler(req, res) {
    if (req.method === "POST") {
        const tableCheck = await checkTableExist();
        if (tableCheck) {
            const dataAdded = await addData(req.body);
            if (dataAdded.success) {
                return res.status(200).json({
                    success: true,
                    message: "message sent successfully",
                });
            } else {
                return res.status(400).json({
                    success: false,
                    message: dataAdded.message,
                });
            }
        } else {
            const cTable = await createTable();
            if (cTable) {
                const dataAdded = await addData(req.body);
                if (dataAdded) {
                    return res.status(200).json({
                        success: true,
                        message: "message sent successfully",
                    });
                } else {
                    return res.status(400).json({
                        success: false,
                        message: "something went wrong",
                    });
                }
            } else {
                return res.status(400).json({
                    success: false,
                    message: "something went wrong",
                });
            }
        }
    } else {
        res.json({ success: false, message: "you are in the wrong place" });
    }
}
