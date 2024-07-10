import fetch from 'node-fetch';
import 'dotenv/config'

  const username = "api"
  const password = process.env.MAILGUN_API

async function run() {
  const name = 'mail.qi.plus';
  const resp = await fetch(
    `https://api.mailgun.net/v4/domains/${name}/verify`,
    {
      method: 'PUT',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
      }
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();