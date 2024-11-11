# Wild Oasis

Next.js 14 application with App Router and Server Actions allowing users to book cabins at the Wild Oasis hotel.  
Users can navigate different cabins, sign up with Google and create an account.  
Logged-in users can securely book cabins using Stripe for payment.  
Users can also get a refund if the conditions are met.  
design by Tailwind.css.  
Optimistic UI.

# Prerequisites
- using Next js version 14.
- Google Cloud Account: Required to set up Next-auth Google Provider.
- Supabase Account: Required for database functionalities.

# Installation
Installation
1. Clone the repository: https://github.com/IbrahimGomaa10/nextjs-big-project.git
2. cd nextjs-big-project
3. install dependencies: npm i
4. Set up environment variables:
## supabase
SUPABASE_URL = 
SUPABASE_KEY = 
## authentication
NEXETAUTH_URL = 
NEXTAUTH_SECRET = 
## google data
AUTH_GOOGLE_ID = 
AUTH_GOOGLE_SECRET = 

# Technologies Used

## Frontend:
- **Framework**: React, Next.js 14 (App Router)
- for client-side validation
- **React Select** (for forms customization)
- **Styling**: Tailwind CSS

## Backend:
- **DB**: SupaBase
- **Authentication**: NextAuth.js with Google Provider

# Live Demo
Visit the live demo of [The Wild Oasis](https://nextjs-big-project-chi.vercel.app/) deployed on Vercel.
