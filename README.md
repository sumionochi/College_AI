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
Thing that came from my personal experiences that homeschooling is on the rise around my area. My challenge was to overcome the lacks of personal tutoring, efficient and engaging learning with collaboration at core of the platforms principle.

## What It Does:

1. Notebook Creation and Editing:
Students can create rich-text notebooks with text editing features.
Notebooks are saved on a dashboard for ongoing learning.

2. AI Chatbot:
An AI chatbot is implemented to query questions from all notebooks.
The chatbot provides precise answers by analyzing and updating on vector database.

3. API Gateway:
An API gateway is established for sharing notes outside the platform.
Access to the API incurs a 10 rupee charge, forming the business model.

## How It's Built:

1. Rich Text Editing:
The platform supports rich text editing features for a dynamic learning experience.

2. AI Chatbot:
The chatbot reads context from notebooks in real-time, creating a vector database.
The blinking effect signifies the chatbot updating its understanding of the context.

3. API Gateway:
A subscription model is implemented for sharing notes externally, with a 10 rupee recurring charge.
Stripe handles the payment aspect, and Prisma Studio manages the databases.

## Technology Stack:
MongoDB is used as the main database.
Pine code powers the AI agent scoring metric.
Stripe is integrated for payment transactions.
Prisma Studio manages all three databases.

## Challenges Faced:
1. Lot of Debugging 
2. The API gateway was difficult to model how can one share their data of note. Solved it by creating a Assign feature to collaborate.
3. AI agent should not hallucinate and provide precise answer. Solved it by using a vector storage database.

## Innovative
AI Integration: Implemented a pioneering AI chatbot for real-time, context-aware learning from user-generated notebooks, enhancing the platform's educational impact.

Monetization Strategy: Established a successful subscription-based API gateway, introducing a 10 rupee recurring charge for external access, ensuring a sustainable business model.

User-Centric Design: Delivered a responsive, user-friendly interface with rich-text editing features, fostering seamless notebook creation and management for an optimal user experience.

Technological Harmony: Integrated diverse technologies, including Stripe for payments and Prisma Studio for efficient database management, showcasing technical versatility and reliability.ents:

## What's Next for Humane.AI:
Feature Enrichment: Expand platform capabilities with new features, potentially incorporating collaborative learning tools and advanced AI enhancements.

Global Outreach: Plan for international expansion, reaching a broader audience and diversifying the platform's user base.

Enhanced User Interactivity: Implement interactive elements for improved user engagement, such as forums, live sessions, or community-driven content.

Feedback Integration: Introduce a feedback mechanism to gather user insights, ensuring continuous improvement and responsiveness to user needs.
