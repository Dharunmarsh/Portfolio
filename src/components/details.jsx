import React from 'react';

export const projectDetails = [
  {
    id: 1,
    title: "CodeBrawl",
    description: "A PvP coding battle arena like chess.com, where devs challenge each other to flex their skills.",
    techstack: ["NextJS", "ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "TailwindCSS"],
    purpose: "To make competitive programming actually competitive. Real time duels, instant bragging rights, and a leaderboard to settle who's the real boss.",
    features: [
      "Real-time coding duels with live scoring over WebSockets",
      "Custom matchmaking & private battle rooms",
      "Firebase authentication for quick and secure logins",
      "Dynamic leaderboard with player stats and streak tracking",
      "Admin dashboard to add or tweak coding challenges"
    ],
    contributions: [
      "Built the frontend from scratch with NextJS + TailwindCSS",
      "Hooked up Firebase Auth for smooth sign-up/login flow",
      "Wrote the battle engine using Socket.IO for instant feedback",
      "Designed the MongoDB schema for storing stats and challenges",
      "Created a clean admin panel for managing problems"
    ]
  },
  {
    id: 2,
    title: "Profanity Filter (ML Powered)",
    description: "An AI powered language bouncer that catches and filters offensive text before it ruins the party. Smart enough to know when someone’s just being cheeky.",
    techstack: ["Python", "Regression", "Scikit-learn", "ReactJS", "Flask", "ExpressJS"],
    purpose: "To keep online chats and platforms clean without being overly strict think of it as a smarter, less annoying autocorrect.",
    features: [
      "Custom-trained ML model to detect and classify profanity",
      "Flask API serving predictions in real-time",
      "Confidence scores so you can decide when to censor",
      "Frontend integration for instant filtering as you type",
      "Admin tools for improving the dataset and retraining the model"
    ],
    contributions: [
      "Hand picked and cleaned a dataset of offensive phrases",
      "Trained a text classification model with TensorFlow + Scikit-learn",
      "Built a Flask REST API to handle predictions",
      "Connected the API to the frontend for live censorship",
      "Logged flagged content in MongoDB for future analysis"
    ]
  },
  {
    id: 3,
    title: "E-commerce SQL Database",
    description: "A fully-fleshed relational database for an online store. Handles orders, stock, and customers all without a single line of front-end fluff.",
    techstack: ["MySQL", "SQL", "ER Modeling", "Stored Procedures", "Triggers",],
    purpose: "To design a database that can actually take the beating of real world ecommerce efficient, reliable, and ready for scale.",
    features: [
      "3NF-normalized schema with real-world constraints",
      "Stored procedures for order handling and stock updates",
      "Triggers to catch fraud attempts and control stock levels",
      "Advanced queries to generate sales and behavior reports",
      "Role-based access for admins vs customers"
    ],
    contributions: [
      "Designed the ER model and implemented it in MySQL",
      "Wrote complex queries for analytics and admin tools",
      "Added triggers for automated fraud checks",
      "Optimized indexes to make queries lightning-fast",
      "Documented the entire schema for future developers"
    ]
  }
];

export const tagStyles = [
  "bg-purple-200 text-purple-700 hover:bg-purple-700 hover:text-purple-200",
  "bg-pink-200 text-pink-700 hover:bg-pink-700 hover:text-pink-200",
  "bg-green-200 text-green-700 hover:bg-green-700 hover:text-green-200",
  "bg-yellow-200 text-yellow-800 hover:bg-yellow-700 hover:text-yellow-200",
  "bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-blue-200",
  "bg-red-200 text-red-700 hover:bg-red-700 hover:text-red-200",
  "bg-indigo-200 text-indigo-700 hover:bg-indigo-700 hover:text-indigo-200",
  "bg-orange-200 text-orange-700 hover:bg-orange-700 hover:text-orange-200",
];
