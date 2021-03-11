import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  me?: Maybe<User>;
  teachers?: Maybe<Array<Teacher>>;
  subjects: Array<Subject>;
  getTeacherFromSubjectName: Array<Response>;
  lectureTimes: Array<LectureTime>;
  codes: Array<Code>;
  notes: Array<Note>;
  noteComplete: Array<Note>;
  getNotesFromLecture: Array<Note>;
};


export type QueryGetTeacherFromSubjectNameArgs = {
  subjectName: Scalars['String'];
};


export type QueryGetNotesFromLectureArgs = {
  lectureId: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
};


export type Teacher = {
  __typename?: 'Teacher';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  lectureTimes: Array<LectureTime>;
  subject: Subject;
  subjectId: Scalars['Float'];
};

export type LectureTime = {
  __typename?: 'LectureTime';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  month?: Maybe<Scalars['String']>;
  day?: Maybe<Scalars['String']>;
  weekDay?: Maybe<Scalars['String']>;
  time: Scalars['String'];
  about?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  teacherId: Scalars['Float'];
  teacher: Teacher;
  notes?: Maybe<Array<Note>>;
};

export type Note = {
  __typename?: 'Note';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  isImage: Scalars['Boolean'];
  link?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Float'];
  lecture: LectureTime;
  lectureId: Scalars['Float'];
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  name: Scalars['String'];
  teachers: Array<Teacher>;
};

export type Response = {
  __typename?: 'response';
  teacher: Scalars['String'];
  lectures: Array<LectureTime>;
};

export type Code = {
  __typename?: 'Code';
  id: Scalars['Float'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  value: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  registerUser: UserResponse;
  login: UserResponse;
  logout: Scalars['Boolean'];
  addTeacher: Teacher;
  removeTeacher: Scalars['String'];
  addSubject: Subject;
  addLectureTime: LectureTime;
  addCodes: Array<Code>;
  addNote: Note;
};


export type MutationRegisterUserArgs = {
  code: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationAddTeacherArgs = {
  subjectName: Scalars['String'];
  name: Scalars['String'];
};


export type MutationRemoveTeacherArgs = {
  name: Scalars['String'];
};


export type MutationAddSubjectArgs = {
  name: Scalars['String'];
};


export type MutationAddLectureTimeArgs = {
  teacherName: Scalars['String'];
  about: Scalars['String'];
  time: Scalars['String'];
  weekDay: Scalars['String'];
  day: Scalars['String'];
  month: Scalars['String'];
};


export type MutationAddCodesArgs = {
  codes: Array<Scalars['String']>;
};


export type MutationAddNoteArgs = {
  lectureId: Scalars['Float'];
  user: Scalars['String'];
  link: Scalars['String'];
  isImage: Scalars['Boolean'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type AddLectureMutationVariables = Exact<{
  teacherName: Scalars['String'];
  month: Scalars['String'];
  day: Scalars['String'];
  weekDay: Scalars['String'];
  time: Scalars['String'];
  about: Scalars['String'];
}>;


export type AddLectureMutation = (
  { __typename?: 'Mutation' }
  & { addLectureTime: (
    { __typename?: 'LectureTime' }
    & Pick<LectureTime, 'month' | 'day' | 'weekDay' | 'time' | 'about'>
  ) }
);

export type CreateNoteMutationVariables = Exact<{
  lectureId: Scalars['Float'];
  user: Scalars['String'];
  isImage: Scalars['Boolean'];
  link: Scalars['String'];
}>;


export type CreateNoteMutation = (
  { __typename?: 'Mutation' }
  & { addNote: (
    { __typename?: 'Note' }
    & Pick<Note, 'link' | 'isImage'>
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    )> }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
  name: Scalars['String'];
  code: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { registerUser: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    )> }
  ) }
);

export type TeacherFromSubjectNameQueryVariables = Exact<{
  subjectName: Scalars['String'];
}>;


export type TeacherFromSubjectNameQuery = (
  { __typename?: 'Query' }
  & { getTeacherFromSubjectName: Array<(
    { __typename?: 'response' }
    & Pick<Response, 'teacher'>
    & { lectures: Array<(
      { __typename?: 'LectureTime' }
      & Pick<LectureTime, 'month' | 'day' | 'weekDay' | 'time' | 'about' | 'id'>
      & { notes?: Maybe<Array<(
        { __typename?: 'Note' }
        & Pick<Note, 'isImage' | 'link'>
      )>> }
    )> }
  )> }
);

export type GetLectureTimesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetLectureTimesQuery = (
  { __typename?: 'Query' }
  & { lectureTimes: Array<(
    { __typename?: 'LectureTime' }
    & Pick<LectureTime, 'id' | 'day' | 'weekDay' | 'time'>
    & { teacher: (
      { __typename?: 'Teacher' }
      & Pick<Teacher, 'name'>
    ) }
  )> }
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'username' | 'id'>
  )> }
);

export type GetNotesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetNotesQuery = (
  { __typename?: 'Query' }
  & { noteComplete: Array<(
    { __typename?: 'Note' }
    & Pick<Note, 'id' | 'userId'>
    & { lecture: (
      { __typename?: 'LectureTime' }
      & Pick<LectureTime, 'time' | 'day'>
      & { teacher: (
        { __typename?: 'Teacher' }
        & Pick<Teacher, 'name'>
      ) }
    ), user: (
      { __typename?: 'User' }
      & Pick<User, 'username'>
    ) }
  )> }
);

export type GetAllSubjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllSubjectsQuery = (
  { __typename?: 'Query' }
  & { subjects: Array<(
    { __typename?: 'Subject' }
    & Pick<Subject, 'name' | 'id'>
  )> }
);


export const AddLectureDocument = gql`
    mutation AddLecture($teacherName: String!, $month: String!, $day: String!, $weekDay: String!, $time: String!, $about: String!) {
  addLectureTime(
    teacherName: $teacherName
    month: $month
    day: $day
    weekDay: $weekDay
    time: $time
    about: $about
  ) {
    month
    day
    weekDay
    time
    about
  }
}
    `;

export function useAddLectureMutation() {
  return Urql.useMutation<AddLectureMutation, AddLectureMutationVariables>(AddLectureDocument);
};
export const CreateNoteDocument = gql`
    mutation CreateNote($lectureId: Float!, $user: String!, $isImage: Boolean!, $link: String!) {
  addNote(lectureId: $lectureId, user: $user, isImage: $isImage, link: $link) {
    link
    isImage
  }
}
    `;

export function useCreateNoteMutation() {
  return Urql.useMutation<CreateNoteMutation, CreateNoteMutationVariables>(CreateNoteDocument);
};
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    errors {
      field
      message
    }
    user {
      username
      id
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export function useLogoutMutation() {
  return Urql.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument);
};
export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!, $name: String!, $code: String!) {
  registerUser(code: $code, name: $name, username: $username, password: $password) {
    errors {
      field
      message
    }
    user {
      username
      id
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};
export const TeacherFromSubjectNameDocument = gql`
    query TeacherFromSubjectName($subjectName: String!) {
  getTeacherFromSubjectName(subjectName: $subjectName) {
    teacher
    lectures {
      month
      day
      weekDay
      time
      about
      id
      notes {
        isImage
        link
      }
    }
  }
}
    `;

export function useTeacherFromSubjectNameQuery(options: Omit<Urql.UseQueryArgs<TeacherFromSubjectNameQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TeacherFromSubjectNameQuery>({ query: TeacherFromSubjectNameDocument, ...options });
};
export const GetLectureTimesDocument = gql`
    query getLectureTimes {
  lectureTimes {
    id
    teacher {
      name
    }
    day
    weekDay
    time
  }
}
    `;

export function useGetLectureTimesQuery(options: Omit<Urql.UseQueryArgs<GetLectureTimesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetLectureTimesQuery>({ query: GetLectureTimesDocument, ...options });
};
export const MeDocument = gql`
    query Me {
  me {
    username
    id
  }
}
    `;

export function useMeQuery(options: Omit<Urql.UseQueryArgs<MeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<MeQuery>({ query: MeDocument, ...options });
};
export const GetNotesDocument = gql`
    query getNotes {
  noteComplete {
    id
    userId
    lecture {
      time
      day
      teacher {
        name
      }
    }
    user {
      username
    }
  }
}
    `;

export function useGetNotesQuery(options: Omit<Urql.UseQueryArgs<GetNotesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetNotesQuery>({ query: GetNotesDocument, ...options });
};
export const GetAllSubjectsDocument = gql`
    query GetAllSubjects {
  subjects {
    name
    id
  }
}
    `;

export function useGetAllSubjectsQuery(options: Omit<Urql.UseQueryArgs<GetAllSubjectsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllSubjectsQuery>({ query: GetAllSubjectsDocument, ...options });
};