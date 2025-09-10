import aj from "@/lib/arcjet-middleware";

export const GET = aj.protect(async (req) => {
  return Response.json({ message: "Arcjet protected API" });
});
