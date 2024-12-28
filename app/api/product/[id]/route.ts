import { products } from "@/lib/data";
import { NextResponse, } from "next/server";
import { headers } from "next/headers";

export async function GET(req: Request) {
  const data = products;
  const slug = req.url.split("/").pop();
  
  try {
    const product = data.find((p) => p.slug === slug);
    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }
    return NextResponse.json({ product });
  } catch(e: any) {
    console.error(e);
    console.log(e.message);
    return NextResponse.json( { error: e.message }, { status: 500})
  }
}