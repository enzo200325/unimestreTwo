import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, BaseEntity, OneToMany } from "typeorm";
import { Note } from "./Note";
import { Teacher } from "./Teacher";

@ObjectType()
@Entity()
export class LectureTime extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;  

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date = new Date(); 

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date = new Date(); 

  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  month?: string; 

  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  day?: string; 

  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  weekDay?: string; 

  @Field(() => String)
  @Column()
  time: string; 
  
  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  about?: string; 


  @Field(() => String, {nullable: true})
  @Column({nullable: true})
  link?: string; 

  @Field(() => Number)
  @Column()
  teacherId: number; 

  @Field(() => Teacher)
  @ManyToOne(() => Teacher, teacher => teacher.lectureTimes)
  teacher: Teacher; 

  @Field(() => [Note], {nullable: true})
  @OneToMany(() => Note, note => note.lecture)
  notes?: Note[];
} 