import { z } from "zod";

export const ItemInsertSchema = z.object({
  empno: z.string(),
  username: z.string(),
  cost_dept: z.string().optional(),
  rcv_dept: z.string().optional(),
  items: z.array(
    z.object({
      itemno: z.string(),
      qty: z.number().multipleOf(0.01),
    })
  ),
  remark: z.string().optional(),
});

export type ItemInsert = z.infer<typeof ItemInsertSchema>;
