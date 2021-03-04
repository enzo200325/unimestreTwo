import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, CreateDateColumn } from "typeorm";
import { Note } from "./Note";
import { Teacher } from "./Teacher";

@ObjectType()
@Entity()
export class Lecture {
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
  @Column(() => String)
  date: string; 

  @Field(() => String)
  @Column(() => String)
  content: string; 

  @OneToMany(() => Note, note => note.lecture)
  notes: Note[]; 

  @ManyToOne(() => Teacher, teacher => teacher.lectures)
  teacher: Teacher; 

  @Field()
  @Column()
  teacherId: number; 
}