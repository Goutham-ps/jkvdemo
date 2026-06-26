import https from 'https';

const urls = [
  "https://images.unsplash.com/photo-1594912953285-8022d2ee7f1a",
  "https://images.unsplash.com/photo-1602810318383-e386cc2a3ce3",
  "https://images.unsplash.com/photo-1519689680058-324335c77eba",
  "https://images.unsplash.com/photo-1605007493699-af65834f8a00",
  "https://images.unsplash.com/photo-1583391733959-b00693a1d3f9"
];

async function check() {
  for (const u of urls) {
    await new Promise(resolve => {
      https.get(u, (res) => {
        console.log(u, res.statusCode);
        resolve(null);
      });
    });
  }
}
check();
