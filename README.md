# Developer Portfolio built with Next.js and Cosmic

To build this app, we’re going to use the following technologies:

- [Next.js](https://nextjs.org/docs) - A React framework for production that makes it easy to spin up a full-stack application.
- [Cosmic](https://www.cosmicjs.com/) - A Headless CMS enables the independence of the data (content) layer and gives us the ability to quickly manage template content.
- [Tailwind CSS](https://tailwindcss.com/) - A performant utility-first CSS framework that can be composed directly in your markup.

### Links


## Getting started

### Environment Variables

You'll need to create an .env file in the root of the project. Log in to Cosmic and from Bucket Settings > API Access take the following values:

```
//.env
COSMIC_BUCKET_SLUG=your_cosmic_slug
COSMIC_READ_KEY=your_cosmic_read_key
COSMIC_PREVIEW_SECRET=your_preview_secret


Install the dependencies with

```
pnpm install
# or
yarn install
# or
npm install
```

Then run the development server:

```
pnpm run dev
# or
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000/) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.


Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

