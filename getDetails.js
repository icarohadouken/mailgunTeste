import fetch from 'node-fetch';

  const username = "api"
  const password = "bb4e209f52de73340c3c53b11f2acb91-8a084751-b2daffa4"

async function run() {
  const name = 'rbgsolucoes.shop';
  const resp = await fetch(
    `https://api.mailgun.net/v4/domains/${name}`,
    {
      method: 'GET',
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
      }
    }
  );

  const data = await resp.text();
  console.log(data);
}

run();