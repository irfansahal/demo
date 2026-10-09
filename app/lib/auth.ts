import { betterAuth  } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI as string) 

const db = client.db("BanglaNews24")

export const auth = betterAuth ({
  database : mongodbAdapter(db, {
    client,
  }),
   emailAndPassword: { 
    enabled: true, 
  },
   socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_BETTER_AUTH_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_BETTER_CLIENT_SECRET as string, 
        },
        github: { 
            clientId: process.env.GITHUB_BETTER_AUTH_CLEINT_ID as string, 
            clientSecret: process.env.GITHUB_BETTER_AUTH_CLIENT_SECRET as string, 
        }, 
    },
  //   user: {
  //   fields: {
  //     image: "image", // only needed if you remapped it
  //   },
  // },
});

