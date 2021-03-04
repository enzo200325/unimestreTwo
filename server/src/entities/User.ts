import { Field, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, BaseEntity, OneToOne, JoinColumn } from "typeorm";
import { Note } from "./Note";
import { Code } from "./Code";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number;  

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date = new Date(); 

  @Field(() => Date)
  @CreateDateColumn()
  updatedAt: Date = new Date(); 

  @Field(() => String)
  @Column({type: "text", unique: true})
  username!: string; 

  @Field(() => String)
  @Column({type: "text"})
  password!: string; 

  @Field(() => String)
  @Column({type: "text", unique: true})
  name: string; 

  @OneToOne(() => Code)
  @JoinColumn()
  code!: Code; 

  @OneToMany(() => Note, note => note.user)
  notes: Note[]; 
}