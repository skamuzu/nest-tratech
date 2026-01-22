import { ConfigService } from '@nestjs/config';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { DrizzleDB } from '@/database/types';
import { profile } from '@/domains/profiles/schemas/profiles.schema';

export const createAuthInstance = (db: DrizzleDB, config: ConfigService) => {
  return betterAuth({
    database: drizzleAdapter(db, {
      provider: 'pg',
    }),  
    emailAndPassword: {
      enabled: true,
    },
    socialProviders: {
      google: {
        clientId: config.get<string>('GOOGLE_CLIENT_ID', { infer: true })!,
        clientSecret: config.get<string>('GOOGLE_CLIENT_SECRET', { infer: true })!,
      },
    },
     
    secret: config.get<string>('BETTER_AUTH_SECRET', { infer: true })!,
    databaseHooks: {
      user: {
        create: {
          after: async (user) => {
            await db.insert(profile).values({ id: user.id });
          },
        },
      },
    },
  });
};