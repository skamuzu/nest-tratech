import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EnrollmentsModule } from './domains/enrollments/enrollments.module';
import { ModulesModule } from './domains/modules/modules.module';
import { LessonsModule } from './domains/lessons/lessons.module';
import { CoursesModule } from './domains/courses/courses.module';
import { ProfilesModule } from './domains/profiles/profiles.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import settings from './config/settings';


@Module({
  imports: [
    AuthModule,
    ProfilesModule,
    CoursesModule,
    DatabaseModule,
    LessonsModule,
    ModulesModule,
    EnrollmentsModule,
    ConfigModule.forRoot({ isGlobal: true, load: [settings], cache: true }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
