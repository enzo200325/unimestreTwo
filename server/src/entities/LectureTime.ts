import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, BaseEntity } from "typeorm";
import { Teacher } from "./Teacher";

@ObjectType()
@Entity()
export class LectureTime extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;  

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date = new Date(); 

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date = new Date(); 

  @Field(() => String)
  @Column()
  day: string; 

  @Field(() => String)
  @Column()
  time: string; 

  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  link?: string; 

  @Field(() => Number)
  @Column()
  teacherId: number; 

  @Field(() => Teacher)
  @ManyToOne(() => Teacher, teacher => teacher.lectureTimes)
  teacher: Teacher; 
} 