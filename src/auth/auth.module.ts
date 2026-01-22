import { Module } from "@nestjs/common";
import { AuthModule as BetterAuthModule } from "@thallesp/nestjs-better-auth";
import { ConfigService } from "@nestjs/config";
import { DATABASE } from "@/database/database.provider";
import { createAuthInstance } from "./auth.config";

@Module({
    imports: [
        BetterAuthModule.forRootAsync({
            inject: [DATABASE, ConfigService],
            useFactory: (db, config: ConfigService) => 
            ({auth: createAuthInstance(db,config),
                
            })
        })
    ],
    exports: [BetterAuthModule]
})

export class AuthModule {}