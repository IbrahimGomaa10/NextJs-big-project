/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jxfzammexbbcnnqmonip.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/cabins_images/**",
      },
    ],
  },
};

export default nextConfig;

//https://jxfzammexbbcnnqmonip.supabase.co/
//https://jxfzammexbbcnnqmonip.supabase.co/storage/v1/s3
