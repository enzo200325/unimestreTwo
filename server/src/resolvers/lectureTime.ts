import { LectureTime } from "../entities/LectureTime";
import { Teacher } from "../entities/Teacher";
import { Arg, Mutation, Resolver, Query} from "type-graphql";
import { AfterRemove, getConnection } from "typeorm";
import { FileWatcherEventKind, getTsBuildInfoEmitOutputFilePath } from "typescript";


@Resolver()
export class LectureTimeResolver {
  @Query(() => [LectureTime])
  async lectureTimes(): Promise<LectureTime[]> {
    const qb = getConnection()
      .getRepository(LectureTime)
      .createQueryBuilder("lt")
      .innerJoinAndSelect(
        "lt.teacher", 
        "t",
        't.id = lt."teacherId"'
      )
    
    return await qb.getMany(); 
  }

  @Mutation(() => LectureTime)
  async addLectureTime(
    @Arg("month") month: string,
    @Arg("day") day: string, 
    @Arg("weekDay") weekDay: string, 
    @Arg("time") time: string, 
    @Arg("about") about: string, 
    @Arg("teacherName") teacherName: string, 
  ): Promise<LectureTime> {
    const teacher = await Teacher.findOne({name: teacherName}); 
    return await LectureTime.create({month: month, day: day, weekDay: weekDay, time: time, about: about, teacherId: teacher?.id}).save(); 
  } 
}