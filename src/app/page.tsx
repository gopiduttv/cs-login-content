import { client } from "@/sanity/lib/client";

export default async function Home({}) {
  const posts = await client.fetch('*[_type == "post"]')
  return (
    <div className="h-full w-full text-black">
    </div>
  );
}
