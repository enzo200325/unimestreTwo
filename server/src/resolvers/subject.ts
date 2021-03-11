import { Subject } from "../entities/Subject";
import { Arg, Field, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { AfterRemove, getConnection, getConnectionManager } from "typeorm";
import { Teacher } from "../entities/Teacher";
import { LectureTime } from "../entities/LectureTime";
import { Note } from "../entities/Note";

@ObjectType()
class response {
  @Field(() => String)
  teacher: String

  @Field(() => [LectureTime])
  lectures: LectureTime[]
}

@Resolver()
export class SubjectResolver {
  @Query(() => [Subject])
  subjects(): Promise<Subject[]> {
    return Subject.find({}); 
  }

  @Query(() => [response])
  async getTeacherFromSubjectName(
    @Arg("subjectName") subjectName: string, 
  ): Promise<response[] | undefined> {
    const subject = await Subject.findOne({name: subjectName}); 
    const subjectId = subject?.id; 
    let responseArray: response[] = []; 

    const qb = await getConnection()
      .createQueryBuilder()
      .select("teacher")
      .from(Teacher, "teacher")
      .where(`teacher.subjectId = ${subjectId}`)
      .getMany()

    const promises = qb.map(async (teacher) => {
      const qb = await getConnection()
        .createQueryBuilder()
        .select("lectureTime")
        .from(LectureTime, "lectureTime")
        .where(`lectureTime.teacherId = ${teacher.id}`)
        .getMany()

      const promises = qb.map(async lecture => {
        const notes = await getConnection()
          .createQueryBuilder()
          .select("note")
          .from(Note, "note")
          .where(`note.lectureId = ${lecture.id}`)
          .getMany()

        lecture.notes = notes; 
      })
      await Promise.all(promises); 
      responseArray.push({
        teacher: teacher?.name, 
        lectures: qb, 
      })
    })
    await Promise.all(promises); 
    return responseArray; 
  }



  @Mutation(() => Subject)
  async addSubject(
    @Arg("name") name: string
  ): Promise<Subject> {
    return await Subject.create({name: name}).save(); 
  }
}