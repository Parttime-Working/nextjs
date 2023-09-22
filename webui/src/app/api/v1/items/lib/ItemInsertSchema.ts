import { z } from "zod";

export const ItemInsertSchema = z.object({
  itemId: z.preprocess((itemId) => parseInt(String(itemId), 10), z.number().int()),
});

export type ItemInsert = z.infer<typeof ItemInsertSchema>;

export default ItemInsertSchema;
