import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { LectureTime } from "./LectureTime";
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
export class Note extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id!: number; 

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date; 

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date; 

  @Field(() => String, {nullable: true})
  @Column({type: "text", nullable: true}) 
  description?: string; 

  @Field(() => String)
  @Column({type: "text"})
  link: string; 

  @Field(() => User)
  @ManyToOne(() => User, user => user.notes)
  user: User; 

  @Field()
  @Column()
  userId: number; 

  @Field(() => LectureTime) 
  @ManyToOne(() => LectureTime, lecture => lecture.notes)
  lecture: LectureTime; 

  @Field(() => Number)
  @Column()
  lectureId: number; 
}