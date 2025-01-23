import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const res = await req.json();

  if (res.secret !== process.env.REVALIDATE_SECRET) {
    return new Response(JSON.stringify({ message: "Invalid secret" }), {
      status: 401,
    });
  }

  try {
    if (res._type == "viewport" && res.dimensionValue) {
      console.log(`Revalidating viewport ...  /${res.dimensionValue.current}/*`);
      await revalidatePath(`/${res.dimensionValue.current}/[customer]`, "page");
      console.log(`Revalidated viewport ... /${res.dimensionValue.current}/*`);
    }

    if (res.type == "campaign" && res._id) {
      console.log(`Revalidating campaign ...  /${res._id}/*`);
      await revalidateTag(res._id);
      console.log(`Revalidated campaign ... /${res._id}/*`);
    }

    if (res.type == "banner" && res._id) {
      console.log(`Revalidating banner ...  /${res._id}/*`);
      await revalidateTag(res._id);
      console.log(`Revalidated banner ... /${res._id}/*`);
    }

    return new Response(JSON.stringify({ message: `` }), { status: 200 });
  } catch (error) {
    console.error("Error revalidating path:", error);
    return new Response(
      JSON.stringify({ message: "Error revalidating path" }),
      { status: 500 }
    );
  }
}
