import { LectureTime } from "../entities/LectureTime";
import { Note } from "../entities/Note";
import { User } from "../entities/User";
import { Arg, Ctx, Mutation, ObjectType, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";

@Resolver()
export class NoteResolver {
  @Query(() => [Note])
  async notes (): Promise<Note[]> {
    return await Note.find({}); 
  }

  @Query(() => [Note])
  async noteComplete(): Promise<Note[]> {
    const qb = getConnection()
      .getRepository(Note)
      .createQueryBuilder("n")
      .innerJoinAndSelect(
        "n.lecture", 
        "l",
        'l.id = n."lectureId"'
      )
      .innerJoinAndSelect(
        "n.user", 
        "u", 
        'u.id = n."userId"'
      )
    
    return await qb.getMany(); 
  }

  @Query(() => [Note])
  async getNotesFromLecture(
    @Arg("lectureId") lectureId: number
  ): Promise<Note[]> {
    const qb = getConnection()
      .createQueryBuilder()
      .select("note")
      .from(Note, "note")
      .where(`note.lectureId = ${lectureId}`); 
    return await qb.getMany(); 
  }

  @Mutation(() => Note)
  async addNote(
    @Arg("isImage") isImage: boolean, 
    @Arg("link") link: string, 
    @Arg("user") user: string, 
    @Arg("lectureId") lectureId: number
  ): Promise<Note> {
    const noteUser = await User.findOne({username: user})
    const noteLecture = await LectureTime.findOne({id: lectureId})
    const noteCreated = await Note.create({isImage: isImage, link: link, userId: noteUser?.id, lectureId: noteLecture?.id}).save(); 
    return noteCreated; 
  }
}