export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  'strapi::cors',
  {
    name: 'strapi::cors',
    config: {
      origin: [process.env.FRONT_END_URL, 'http://localhost:3000' ],
      methods: ['GET', 'POST', 'PUT','OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
];
