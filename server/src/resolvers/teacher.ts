import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Subject } from "../entities/Subject";
import { Teacher } from "../entities/Teacher";


// gotta do types (TeacherResponse)
@Resolver()
export class TeacherResolver {
  @Query(() => [Teacher], {nullable: true})
  teachers(): Promise<Teacher[]>  {
    return Teacher.find({}); 
  }

  @Mutation(() => Teacher)
  async addTeacher(
    @Arg("name") name: string, 
    @Arg("subjectName") subjectName: string, 
  ): Promise<Teacher | null> {
    const subject = await Subject.findOne({name: subjectName}); 
    return Teacher.create({name: name, subjectId: subject?.id}).save();
  }

  @Mutation(() => String) 
  async removeTeacher(
    @Arg("name") name: string
  ): Promise<String | undefined> {
    const userToDelete = await Teacher.find({name: name}); 
    if (!!userToDelete) {
      await Teacher.delete({name: name}); 
      return `user ${name} deleted with success`; 
    }
    return undefined; 
  }
}