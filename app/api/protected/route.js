import aj from "@/lib/arcjet-middleware";

export const GET = aj(async (req) => {
  return new Response(JSON.stringify({ message: "Arcjet protected API" }), {
    headers: { "Content-Type": "application/json" },
  });
});
