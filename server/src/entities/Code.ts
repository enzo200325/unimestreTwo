import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity, CreateDateColumn } from "typeorm";
import { Note } from "./Note";
import { Teacher } from "./Teacher";

@ObjectType()
@Entity()
export class Code extends BaseEntity {
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
  @Column({unique: true})
  value: string
} 