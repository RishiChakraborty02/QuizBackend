import pg from "pg";

const pool = new pg.Pool({
  // host: 'localhost',
  // database:"quiz",
  connectionString:
    "postgres://postgres.xscbdawydtmromqwbkgk:quizquest@123@aws-0-ap-southeast-1.pooler.supabase.com:5432/postgres",
});

export default pool;
