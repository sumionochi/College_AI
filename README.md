This is a [Next.js](https://nextjs.org/) 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Why Build this :
The inspiration behind Humane AI is to create a platform that empowers victims of abuse, fraud, and danger. The goal is to provide a space where individuals can connect with local and global authorities using artificial intelligence to gather valuable insights. By facilitating communication between victims and authorities, the platform aims to address conflicts and ensure that the voices of those affected are heard.

## What It Does:

Humane AI serves as a reporting and insights platform. Users, especially victims, can log in to file reports either openly or anonymously. The platform offers two user interface modes: morning and night mode for user convenience. Once a report is filed, the platform provides a dashboard accessible only to authorized authorities. This dashboard categorizes reports into open, in-progress, and closed status, allowing authorities to efficiently manage and address each case.

The system also incorporates AI to assist authorities in handling the overwhelming volume of reports. The AI analyzes the content of reports using vector analysis and Pinecone indexing. It intelligently generates answers to specific questions posed by authorities, aiding in the efficient processing of information.

Additionally, there is a feature for authorities to access data stored in the platform's databases for nobel usecases like generating insights through an API gateway. This allows authorized external parties to retrieve relevant information, with a nominal charge per endpoint hit to sustain the platform.

## How It's Built:

MongoDB is used as the main database.
Pine code powers the AI agent scoring metric.
Stripe is integrated for payment transactions.
Prisma Studio manages all three databases.

## Challenges Faced:
1. Lot of Debugging 
2. The API gateway was difficult to model how can one share their data as a authorised personal. Solved it by creating a Assign feature to collaborate.
3. AI agent should not hallucinate and provide precise answer. Solved it by using a vector storage database.

## Accomplishments that we're proud of

Imm proud to have created a platform that not only facilitates reporting but also leverages AI responsibly to assist authorities in processing and understanding the reported information. The incorporation of an API gateway with a transparent charging system adds a layer of sustainability to the platform.

## What's Next for Humane.AI:
The future for Humane AI involves continuous improvement and expansion. A chat feature with multilingual feature for authorities to interact with victims of different language is on the way!
