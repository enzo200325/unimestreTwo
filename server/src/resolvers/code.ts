import { Code } from "../entities/Code";
import { Arg, Mutation, Resolver, Query } from "type-graphql";

// resolver regarding the unique code every student has
@Resolver()
export class CodeResolver {
  @Query(() => [Code])
  async codes(): Promise<Code[]> {
    return await Code.find({}); 
  }

  @Mutation(() => [Code])
  async addCodes(
    @Arg("codes", () => [String]) codes: [string]
  ): Promise<Code[]> {
    let codesCreated = []; 
    for (let i = 0; i < codes.length; i++) {
      const newCode = await Code.create({value: codes[i]}).save()
      codesCreated.push(newCode); 
    }
    return codesCreated; 
  }
}