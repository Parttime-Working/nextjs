import { z } from "zod";

export const ItemSchema = z.object({
  id: z.number().int(),
  itemno: z.string(),
  item_spec: z.string(),
  qty: z.number().multipleOf(0.01),
  formid: z.number().int(),
});

export type Item = z.infer<typeof ItemSchema>;

// to ensure response don't change, when connect to external api, we want to know the api changes as soon as possible
export const FormSchema = z.object({
  id: z.number(),
  empno: z.string(),
  name: z.string(),
  cost_dept: z.string().optional().nullable(),
  rcv_dept: z.string().optional().nullable(),
  remark: z.string().optional().nullable(),
  created_at: z.string(),
  process: z.number().int(),
  items: z.array(ItemSchema),
});

export type Form = z.infer<typeof FormSchema>;

export const PaginationResponseSchema = z.object({
  page: z.number().int().min(1),
  pageSize: z.number().int().min(1),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(1),
});

export type PaginationResponse = z.infer<typeof PaginationResponseSchema>;

export const FormSearchResponseSchema = z
  .object({
    items: z.array(FormSchema),
  })
  .merge(PaginationResponseSchema);

export type FormSearchResponse = z.infer<typeof FormSearchResponseSchema>;
