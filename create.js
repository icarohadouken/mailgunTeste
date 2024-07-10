import FormData from 'form-data';
import fetch from 'node-fetch';

async function run() {
  const form = new FormData();
  form.append('name','rbgsolucoes.shop');

  const username = "api"
  const password = "bb4e209f52de73340c3c53b11f2acb91-8a084751-b2daffa4"

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

