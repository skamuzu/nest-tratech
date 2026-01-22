import { Injectable, Inject} from '@nestjs/common';
import { DATABASE } from '@/database/database.provider';
import {type DrizzleDB } from '@/database/types';
import { course } from './schemas/course.schema';

@Injectable()
export class CoursesService {
    constructor(@Inject(DATABASE) private db: DrizzleDB) {}

    async getAllCourses() {
        return await this.db.select().from(course)
    }
}
