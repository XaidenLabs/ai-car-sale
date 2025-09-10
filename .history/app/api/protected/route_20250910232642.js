import aj from "@/lib/arcjet-middleware";

export const dynamic = "force-dynamic"; // 👈 ensures runtime execution

export const GET = aj.protect(async (req) => {
  return Response.json({ message: "Arcjet protected API" });
});
