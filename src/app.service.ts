import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class AppService {
  async sendEmail(email: string, status: string) {
    const body = {
      personalizations: [{ to: [{ email: email }], subject: 'Rivenn' }],
      from: { email: 'rivennsendgrid@gmail.com' },
      content: [
        {
          type: 'text/html',
          value:
            status === 'approved'
              ? '<div><img src="https://play-lh.googleusercontent.com/VIvVZzgEBzQl1RGTqu7cO2AfwvfsxAN7zqV9xdDG8T5iyofYMXCX7ybO8JWGpFroCFU=s180-rw" /><p>Your property was approved.</p><p>Now your property is visible for all Rivenn users.<br />Congratulations!</p></div>'
              : '<div><img src="https://play-lh.googleusercontent.com/VIvVZzgEBzQl1RGTqu7cO2AfwvfsxAN7zqV9xdDG8T5iyofYMXCX7ybO8JWGpFroCFU=s180-rw" /><p>Your property was rejected for a policy violation.</p><p>Rivenn team will contact with you for further details.</p></div>',
        },
      ],
    };

    fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization:
          'Bearer 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',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log('response', response);
      })
      .catch((err) => {
        console.log('err', err);
      });
  }
}
