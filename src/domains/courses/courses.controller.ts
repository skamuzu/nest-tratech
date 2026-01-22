import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { AllowAnonymous } from '@thallesp/nestjs-better-auth';

@Controller('courses')
export class CoursesController {
    constructor (private readonly courseService: CoursesService) {}

    @AllowAnonymous()
    @Get()
    getAll() {
        return this.courseService.getAllCourses()
    }

}
