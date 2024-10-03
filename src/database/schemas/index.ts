import type { RxJsonSchema } from "rxdb";

export const userSchema: RxJsonSchema<Record<string, unknown>> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    first_name: {
      type: "string",
    },
    last_name: {
      type: "string",
    },
    email: {
      type: "string",
    },
    password: {
      type: "string",
    },
    created_at: {
      type: "string",
      format: "date-time",
    },
    updated_at: {
      type: "string",
      format: "date-time",
    },
  },
  required: ["first_name", "last_name", "email", "password"],
};

export const goalSchema: RxJsonSchema<Record<string, unknown>> = {
  primaryKey: "id",
  type: "object",
  version: 0,
  properties: {
    id: {
      type: "string",
      maxLength: 100,
    },
    name: {
      type: "string",
    },
    description: {
      type: "string",
      maxLength: 255,
    },
    dueDate: {
      type: "string",
      format: "date-time",
    },
    time: {
      type: "string",
    },
    duration: {
      type: "string",
    },
    reminder: {
      type: "string",
    },
    completed: {
      type: "boolean",
      default: false,
    },
    createad_at: {
      type: "string",
      format: "date-time",
    },
    updated_at: {
      type: "string",
      format: "date-time",
    },
  },
  required: ["name", "description", "dueDate", "time", "reminder", "completed"],
};
