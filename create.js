import FormData from 'form-data';
import fetch from 'node-fetch';
import 'dotenv/config'

async function run() {
  const form = new FormData();
  form.append('name','mail.qi.plus');

  const username = "api"
  const password = process.env.MAILGUN_API

  const resp = await fetch(
    `https://api.mailgun.net/v4/domains`,
    {
      method: 'POST',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
      },
      body: form
    }
  );

  console.log("form", form)

  const data = await resp.text();
  console.log("data", data);
}

run();

