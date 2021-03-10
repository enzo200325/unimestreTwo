import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity } from "typeorm";
import { Teacher } from "./Teacher";

@ObjectType()
@Entity()
export class Subject extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;  

  @Field(() => Date)
  @Column("date")
  createdAt: Date = new Date(); 

  @Field(() => Date)
  @Column({type: "date"})
  updatedAt: Date = new Date(); 

  @Field()
  @Column({unique: true})
  name: string; 

  @Field(() => [Teacher])
  @OneToMany(() => Teacher, teacher => teacher.subject)
  teachers: Teacher[]; 
}