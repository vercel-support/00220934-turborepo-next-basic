/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  rewrites: async () => {
    return [
      {
        source: "/blog/:path*",
        destination: "https://00220934-turborepo-next-basic-docs.vercel.app/blog/:path*",
      },
    ];
  }
};
