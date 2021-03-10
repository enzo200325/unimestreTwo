import "../styles/globals.css"; 
import { createClient, dedupExchange, fetchExchange, Provider } from "urql"
import { cacheExchange, Cache, QueryInput } from "@urql/exchange-graphcache";
import { MeDocument, LoginMutation, MeQuery, RegisterMutation, LogoutMutation } from "../generated/graphql";

function betterUpdateQuery<Result, Query>(
  cache: Cache, 
  qi: QueryInput, 
  result: any, 
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, data => fn(result, data as any) as any); 
}

const client = createClient({
  url: "http://localhost:5000/graphql", 
  fetchOptions: {
    credentials: "include"
  },
  exchanges: [
    dedupExchange, 
    cacheExchange({
    updates: {
      Mutation: {
        login: (result, args, cache, ingo) => {
          betterUpdateQuery<LoginMutation, MeQuery>(cache,
             {query: MeDocument},
             result, 
             (result, query) => {
              if (result.login.errors) {
                return query; 
              } else {
                return {
                  me: result.login.user
                }
              }
             }
          )
        }, 
        registerUser: (result, args, cache, ingo) => {
          betterUpdateQuery<RegisterMutation, MeQuery>(cache,
             {query: MeDocument},
             result, 
             (result, query) => {
              if (result.registerUser.errors) {
                return query; 
              } else {
                return {
                  me: result.registerUser.user
                }
              }
             }
             )
        }, 
        logout: (result, args, cache, ingo) => {
          betterUpdateQuery<LogoutMutation, MeQuery>(cache,
             {query: MeDocument},
             result, 
             (result, query) => {
               return {
                me: null
               }
             }
             )
        }, 
      },
    },
  }),
  fetchExchange,
  ], 
})

function MyApp({ Component, pageProps }) {
  return (
   <Provider value={client}>
     <Component {...pageProps} />
   </Provider>
  ); 
}

export default MyApp
