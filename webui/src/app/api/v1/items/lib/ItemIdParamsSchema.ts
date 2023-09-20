import { z } from "zod";

export const ItemIdParamsSchema = z.object({
  itemId: z.preprocess((itemId) => parseInt(String(itemId), 10), z.number().int()),
});

export type ItemIdParams = z.infer<typeof ItemIdParamsSchema>;

export default ItemIdParamsSchema;
