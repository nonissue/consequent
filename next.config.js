// eslint-disable-next-line no-undef
module.exports = {
  async rewrites() {
    return [
      {
        source: "/game",
        destination: "/game.html",
      },
    ];
  },
};
