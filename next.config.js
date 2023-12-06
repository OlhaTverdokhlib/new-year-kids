// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
//   trailingSlash: true,
//   output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
// };

module.exports = {
  // Інші налаштування...
  // Додайте або оновіть наступне поле для налаштування експорту
  output: {
    // Налаштування для експорту
    // Встановіть export на true, щоб ввімкнути експорт статичного контенту
    export: true,
  },
};

