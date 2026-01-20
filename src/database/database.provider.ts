import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import { Provider } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

export const DATABASE = Symbol("DATABASE")

export const DatabaseProvider: Provider = {
    provide: DATABASE,
    useFactory: (config: ConfigService) => {
        const sql = neon(config.get<string>("DATABASE_URL", {infer: true})! );
        return drizzle(sql)
    },
    inject: [ConfigService]
}