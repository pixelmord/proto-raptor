const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const pem = require('pem');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

pem.createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
  if (err) {
    throw err;
  }

  app.prepare().then(() => {
    createServer(
      {
        key: keys.serviceKey,
        cert: keys.certificate,
      },
      (req, res) => {
        const parsedUrl = parse(req.url, true);
        handle(req, res, parsedUrl);
      }
    ).listen(process.env.PORT || 4000, (error) => {
      if (error) throw error;
      // eslint-disable-next-line no-console
      console.log(`Server ready on https://localhost:${process.env.PORT || 4000}`);
    });
  });
});
