import { Subject } from "../entities/Subject";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class SubjectResolver {
  @Query(() => [Subject])
  subjects(): Promise<Subject[]> {
    return Subject.find({}); 
  }

  @Query(() => Subject)
  subject(
    @Arg("name") name: string
  ): Promise<Subject | undefined> {
    return Subject.findOne({name: name})
  }

  @Mutation(() => Subject)
  async addSubject(
    @Arg("name") name: string
  ): Promise<Subject> {
    return await Subject.create({name: name}).save(); 
  }
}