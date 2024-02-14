import { z } from "zod";

export const BasicInfoFormSchema = z.object({
    fullName: z.string().min(5).max(130),
    description: z.string().min(100),
    yearOfExpirence: z.string(),
    noOfProjects: z.string(),
    noOfClients: z.string(),
});