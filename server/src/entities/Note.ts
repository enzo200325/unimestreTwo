import { Field, ObjectType } from "type-graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Lecture } from "./Lecture";
import { User } from "./User";


// @ObjectType()
// @Entity()
// export class Note {
//   @Field() 
//   @PrimaryKey()
//   id!: number;

//   @Field(() => String)  
//   @Property({type: "date"})
//   createdAt: Date = new Date();

//   @Field(() => String)  
//   @Property({type: "date", onUpdate: () => new Date() })
//   updatedAt: Date = new Date();

//   @Field(() => String)
//   @Property({type: "text"})
//   date: string; 

//   @Field(() => String)
//   @Property({type: "text"})
//   content: string; 

//   @ManyToOne(() => Lecture)
//   lecture!: Lecture; 

//   @ManyToOne(() => User)
//   user!: User; 
// } 

@ObjectType()
@Entity()
export class Note {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id!: number; 

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date; 

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date; 

  @Field(() => String)
  @Column({type: "text"}) 
  content: string; 

  @ManyToOne(() => Lecture, lecture => lecture.notes)
  lecture: Lecture; 

  @Field()
  @Column()
  lectureId: number; 

  @ManyToOne(() => User, user => user.notes)
  user: User; 

  @Field()
  @Column()
  userId: number; 

}