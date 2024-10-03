import { addRxPlugin, createRxDatabase, type RxDatabase } from "rxdb";
import { RxDBDevModePlugin } from "rxdb/plugins/dev-mode";
import { getRxStorageDexie } from "rxdb/plugins/storage-dexie";
import { RxDBMigrationSchemaPlugin } from "rxdb/plugins/migration-schema";
import { goalSchema, userSchema } from "./schemas";

addRxPlugin(RxDBMigrationSchemaPlugin);

const DEV_MODE = import.meta.env.NODE_ENV !== "production";

if (DEV_MODE) {
  addRxPlugin(RxDBDevModePlugin);
}

const initializeDB = async () => {
  const db: RxDatabase = await createRxDatabase({
    name: "goalifydb",
    storage: getRxStorageDexie(),
    ignoreDuplicate: DEV_MODE,
  });

  await db.addCollections({
    users: {
      schema: userSchema,
    },
    goals: {
      schema: goalSchema,
    },
  });

  return db;
};

export { initializeDB };
