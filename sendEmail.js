import fetch from 'node-fetch';
import 'dotenv/config'

  const username = "api"
  const password = process.env.MAILGUN_API

  async function run() {
    const form = new FormData();
    form.append('from','icaro@mail.qi.plus');
    form.append('to','icaro.ssantos96@gmail.com');
    form.append('subject','Teste');
    form.append('html','Será que vai funfar?');
  
    const domainName = 'mail.qi.plus';
    const resp = await fetch(
      `https://api.mailgun.net/v3/${domainName}/messages`,
      {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
        },
        body: form
      }
    );
  
    const data = await resp.text();
    console.log(data);
  }

run();