const { z } = require('zod');

const registerSchema = z.object({
  firstName: z.string().min(1).max(50),
  lastName: z.string().min(1).max(50),
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(50),
});

const updateSchema = z.object({
  firstName: z.string().min(1).max(50).optional(),
  lastName: z.string().min(1).max(50).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).max(50).optional(),
});

module.exports = {
  registerSchema,
  loginSchema,
  updateSchema,
};

// export const userPasswordUpdateSchema = z.object({
//   currentPassword: z.string().min(6).max(50),
//   newPassword: z.string().min(6).max(50),
//   confirmNewPassword: z.string().min(6).max(50),
// }).refine((data) => data.newPassword === data.confirmNewPassword, {
//   message: "New passwords don't match",
// });