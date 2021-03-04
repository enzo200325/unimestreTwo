import { LectureTime } from "../entities/LectureTime";
import { Teacher } from "../entities/Teacher";
import { Arg, Mutation, Resolver, Query, ObjectType, Field } from "type-graphql";
import { Lecture } from "src/entities/Lecture";
import { getConnection } from "typeorm";

@ObjectType()
class LectureTimeResponse {
  @Field()
  day: string; 
  @Field()
  time: string;  
  @Field(() => Teacher)
  teacher: Teacher | undefined; 
}

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
    @Arg("day") day: string, 
    @Arg("time") time: string, 
    @Arg("teacherName") teacherName: string, 
  ): Promise<LectureTime> {
    const teacher = await Teacher.findOne({name: teacherName}); 
    return LectureTime.create({day: day, time: time, teacherId: teacher?.id}).save(); 
  } 
}