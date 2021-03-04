import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, ManyToOne, BaseEntity } from "typeorm";
import { Lecture } from "./Lecture";
import { LectureTime } from "./LectureTime";
import { Subject } from "./Subject";

@ObjectType()
@Entity()
export class Teacher extends BaseEntity {
  @Field(() => Number)
  @PrimaryGeneratedColumn()
  id!: number;  

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date = new Date(); 

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date = new Date(); 

  @Field({nullable: true})
  @Column({type: "text", nullable: true})
  name: String; 

  @OneToMany(() => Lecture, lecture => lecture.teacher)
  lectures: Lecture[]; 

  @OneToMany(() => LectureTime, lectureTime => lectureTime.teacher)
  lectureTimes: LectureTime[]; 

  @ManyToOne(() => Subject, subject => subject.teachers)
  subject: Subject; 

  @Field()
  @Column()
  subjectId: number; 
}