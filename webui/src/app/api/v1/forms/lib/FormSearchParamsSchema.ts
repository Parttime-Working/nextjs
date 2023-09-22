import { z } from "zod";

export const PaginationSchema = z.object({
  page: z
    .preprocess((process) => parseInt(String(process)), z.number().min(1))
    .default(1),
  pageSize: z
    .preprocess((process) => parseInt(String(process)), z.number().min(1))
    .default(25),
});

export type Pagination = z.infer<typeof PaginationSchema>;

export const FormSearchParamsSchema = z
  .object({
    empno: z.string().optional(),
    name: z.string().optional(),
    process: z
      .preprocess((process) => parseInt(String(process)), z.number())
      .optional(),
  })
  .merge(PaginationSchema);

export type FormSearchParams = z.infer<typeof FormSearchParamsSchema>;
