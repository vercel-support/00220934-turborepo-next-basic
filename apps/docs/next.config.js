/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  basePath: "/blog",
  redirects: async () => {
    return [
      {
        source: "/((?!blog).*)",
        destination: "https://00220934.nicolas-vigier.com",
        basePath: false,
        permanent: true,
      },
    ];
  }
};
