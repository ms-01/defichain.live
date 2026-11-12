module.exports = {
  siteUrl: process.env.SITE_URL || "https://defichain.live",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
