/*
Copyright © 2025 [Chellu Naga Praveen]. All rights reserved.
This JavaScript code is proprietary and confidential.
Unauthorized copying, distribution, or use is strictly prohibited.
Contact: [traillixz@gmil.com]
*/

// Your existing JavaScript code goes here
import React, { useState, useEffect, useRef } from 'react';
import { Search, Briefcase, GraduationCap, PenSquare, Users, Menu, X, Mail, Phone, User, MessageSquare, ChevronDown, ChevronUp, BrainCircuit, Code, Cloud, Palette, ShieldCheck, Link, Tag, Clock, Calendar, ArrowRight, GitBranch, Database, Wind, CheckCircle, Target, HardHat, BookOpen, Video, Zap, Feather, DollarSign, Lightbulb, BarChart3, Youtube, Gamepad2, Linkedin, Github, Twitter, CloudLightning, Bot, CodeXml, Server, Figma, Smartphone, Smile, TestTube2, PenTool, Milestone, Package, Building, ClipboardCheck, Eye, Mic, FlaskConical, Dumbbell, HeartPulse, Home, Wrench } from 'lucide-react';

// --- MOCK DATABASE V46.0 ---
// Added Monetization Skills roadmap
const CAREER_PATHS_DATA = {
    "robotics-engineer-roadmap": {
        title: "Robotics Engineer",
        description: "Learn to design, build, and program intelligent machines that can perceive and interact with the physical world.",
        totalDuration: "9-12+ Months",
        icon: Bot,
        category: "AI & Robotics",
        featured: true,
        phases: [
            {
                title: "Phase 1: Engineering & CS Foundations (Weeks 1-12)",
                icon: GraduationCap,
                weeks: [
                    { id: "re-1-1", week: "1-6", goal: "Master Foundational Math & Physics.", learnings: ["Linear Algebra", "Calculus for Robotics", "Physics (Mechanics & Statics)"], resources: [{ name: "Khan Academy Math & Physics", url: "https://www.khanacademy.org/" }], proofOfWork: "Solve a set of physics problems involving forces, torque, and motion for a simple robotic arm." },
                    { id: "re-1-2", week: "7-12", goal: "Learn Python & C++ for Robotics.", learnings: ["Object-Oriented Programming", "Data Structures", "Algorithms", "Memory Management (C++)"], resources: [{ name: "C++ Tutorial for Beginners by freeCodeCamp", url: "https://www.youtube.com/watch?v=vLnPwxZdW4Y" }], proofOfWork: "Implement a simple physics simulation (e.g., a bouncing ball or pendulum) in both Python and C++." }
                ]
            },
            {
                title: "Phase 2: Core Robotics Principles (Weeks 13-24)",
                icon: Wrench,
                weeks: [
                    { id: "re-2-1", week: "13-18", goal: "Master the Robot Operating System (ROS).", learnings: ["ROS Nodes & Topics", "Services & Actions", "Gazebo Simulation", "URDF for Robot Modeling"], resources: [{ name: "Official ROS Tutorials", url: "http://wiki.ros.org/ROS/Tutorials" }], proofOfWork: "Build a simulated mobile robot in Gazebo that can be controlled with keyboard commands." },
                    { id: "re-2-2", week: "19-24", goal: "Understand Robot Kinematics & Dynamics.", learnings: ["Forward & Inverse Kinematics", "Jacobians", "Robot Dynamics", "Control Theory Basics"], resources: [{ name: "Robotics 101: Introduction to Robotics | Kinematics & Modeling | Full course for beginners", url: "https://www.youtube.com/watch?v=K_xIJBlbjg4" }], proofOfWork: "Write code to calculate and visualize the forward and inverse kinematics of a 3-link robotic arm." }
                ]
            },
            {
                title: "Phase 3: Perception & Intelligence (Weeks 25-36)",
                icon: BrainCircuit,
                weeks: [
                    { id: "re-3-1", week: "25-30", goal: "Learn Computer Vision & Sensors.", learnings: ["Image Processing with OpenCV", "Feature Detection", "Working with LiDAR and IMU data", "Sensor Fusion"], resources: [{ name: "OpenCV Course - Full Tutorial with Python", url: "https://www.youtube.com/watch?v=oXlwWbU8l2o" }], proofOfWork: "Use a webcam and OpenCV to detect, track, and estimate the distance to a specific colored object." },
                    { id: "re-3-2", week: "31-36", goal: "Implement Navigation & SLAM.", learnings: ["Path Planning Algorithms (A*, Dijkstra)", "Localization (Kalman Filters)", "Simultaneous Localization and Mapping (SLAM)"], resources: [{ name: "SLAM Course by Cyrill Stachniss", url: "https://www.youtube.com/playlist?list=PLgnQpQtFTOGQrZ4O5QzbIHgl3b1JHimN_" }], proofOfWork: "Implement a basic SLAM algorithm on a pre-recorded dataset to build a map of an unknown environment." }
                ]
            },
            {
                title: "Phase 4: Build & Specialize (Weeks 37+)",
                icon: Target,
                weeks: [
                    { id: "re-4-1", week: "37+", goal: "Build a Capstone Project.", learnings: ["System Integration", "Project Management", "Hardware Prototyping (Arduino/Raspberry Pi)", "Advanced Simulation"], resources: [{ name: "Raspberry pi robot project | How to build your first robot with Raspberry Pi?", url: "https://www.youtube.com/watch?v=XTGr29kIkEU" }], proofOfWork: "Design, build, and document a complete robotics project. Examples: a self-driving RC car, a pick-and-place robotic arm, or an autonomous drone in simulation." }
                ]
            }
        ]
    },
    "full-stack-roadmap": {
        title: "Full Stack Developer",
        description: "Your comprehensive, week-by-week guide to becoming a job-ready Full Stack Developer.",
        totalDuration: "4-6 Months",
        icon: Code,
        category: "Web Development",
        featured: true,
        phases: [
            {
                title: "Phase 1: Web Foundations (Weeks 1-4)",
                icon: Wind,
                weeks: [
                    { id: "fs-1-1", week: "1-2", goal: "Master HTML & CSS basics.", learnings: ["HTML Structure", "CSS Selectors", "Flexbox & Grid", "Responsive Design"], resources: [{ name: "HTML & CSS Full Course by Bro Code", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" }], proofOfWork: "Build a multi-page personal portfolio website from scratch. It must be fully responsive on mobile." },
                    { id: "fs-1-2", week: "3-4", goal: "Learn Core JavaScript.", learnings: ["Variables & Data Types", "Functions & Scope", "DOM Manipulation", "Async/Await"], resources: [{ name: "JavaScript Full Course by Bro Code", url: "https://www.youtube.com/watch?v=VlPiVmYuoqw" }], proofOfWork: "Add interactivity to your portfolio. Create a functional contact form and a dynamic project gallery." }
                ]
            },
            {
                title: "Phase 2: Frontend Mastery (Weeks 5-10)",
                icon: Palette,
                weeks: [
                    { id: "fs-2-1", week: "5-7", goal: "Deep dive into React.js.", learnings: ["Components & Props", "State & Hooks (useState, useEffect)", "Component Lifecycle", "Conditional Rendering"], resources: [{ name: "React Full Course 2024 by Bro Code", url: "https://www.youtube.com/watch?v=CgkZ7MvWUAA" }], proofOfWork: "Rebuild your portfolio website as a single-page application (SPA) using React." },
                    { id: "fs-2-2", week: "8-9", goal: "Learn a React framework like Next.js.", learnings: ["File-based Routing", "Data Fetching (SSR, SSG)", "API Routes", "Layouts"], resources: [{ name: "NextJS 15 Full Course 2025 | Become a NextJS Pro in 1.5 Hours", url: "https://www.youtube.com/watch?v=6jQdZcYY8OY" }], proofOfWork: "Build a complete blog application with Next.js. It should have dynamic routes for each post." },
                    { id: "fs-2-3", week: "10", goal: "Master a CSS framework like Tailwind CSS.", learnings: ["Utility-First CSS", "Responsive Modifiers", "Dark Mode", "Customization"], resources: [{ name: "Tailwind CSS Full Course by Dave Gray", url: "https://www.youtube.com/watch?v=lCxcTsOHrjo" }], proofOfWork: "Style your Next.js blog using only Tailwind CSS. Ensure it has a dark mode toggle." }
                ]
            },
            {
                title: "Phase 3: Backend & Database (Weeks 11-16)",
                icon: Database,
                weeks: [
                    { id: "fs-3-1", week: "11-12", goal: "Learn Node.js and Express.js to build server-side APIs.", learnings: ["Creating a Server", "Routing", "Middleware", "Handling Requests"], resources: [{ name: "Node.js & Express.js Full Course by freeCodeCamp", url: "https://www.youtube.com/watch?v=f2EqECiTBL8" }], proofOfWork: "Create a REST API for your blog. It should handle GET, POST, PUT, and DELETE requests for posts." },
                    { id: "fs-3-2", week: "13-14", goal: "Learn MongoDB and Mongoose.", learnings: ["NoSQL Concepts", "Schemas & Models", "CRUD Operations", "Database Connection"], resources: [{ name: "Complete MongoDB Crash Course 2025 | MongoDB Tutorial for Beginners", url: "https://www.youtube.com/watch?v=Zndy6PfyLLM" }], proofOfWork: "Connect your Express API to a MongoDB database. All blog posts should be stored and retrieved from the database." },
                    { id: "fs-3-3", week: "15-16", goal: "Implement Authentication with JWT.", learnings: ["User Registration", "Password Hashing", "JWT Generation & Verification", "Protected Routes"], resources: [{ name: "Node.js Backend Security: Password Hashing & JWT From Scratch(DIY)", url: "https://www.youtube.com/watch?v=Xtcqz-58oMk" }], proofOfWork: "Add user registration and login to your blog. Only logged-in users should be able to create new posts." }
                ]
            },
            {
                title: "Phase 4: Deployment & Job Prep (Weeks 17-20)",
                icon: GitBranch,
                weeks: [
                    { id: "fs-4-1", week: "17-18", goal: "Learn Git & GitHub for version control.", learnings: ["Commits, Branches, Merges", "Pushing to Remote Repos", "Resolving Conflicts", "Collaboration Workflows"], resources: [{ name: "Git and GitHub for Beginners by freeCodeCamp", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" }], proofOfWork: "Push all your projects to GitHub with clean commit messages and detailed README.md files." },
                    { id: "fs-4-2", week: "19-20", goal: "Deploy your full-stack application.", learnings: ["Vercel for Frontend", "Render/Fly.io for Backend", "Environment Variables", "CI/CD Basics"], resources: [{ name:" How to Deploy Your MERN Chat App to Vercel and Render ", url: "https://www.youtube.com/watch?v=lRhIwDawCGY" }], proofOfWork: "Deploy your MERN stack blog application live on the internet. Add the link to your portfolio and resume." }
                ]
            }
        ]
    },
    "frontend-roadmap": {
        title: "Frontend Developer",
        description: "Master the art of creating beautiful, responsive, and interactive user interfaces.",
        totalDuration: "3-5 Months",
        icon: Palette,
        category: "Web Development",
        phases: [
            {
                title: "Phase 1: Core Skills (Weeks 1-4)",
                icon: Wind,
                weeks: [
                    { id: "fe-1-1", week: "1-2", goal: "Master HTML & CSS.", learnings: ["Semantic HTML", "Advanced CSS Selectors", "CSS Grid & Flexbox", "Responsive Design"], resources: [{ name: "HTML & CSS Full Course", url: "https://www.youtube.com/watch?v=G3e-cpL7ofc" }], proofOfWork: "Clone a complex website's homepage (e.g., Stripe) with pure HTML/CSS. Must be pixel-perfect and responsive." },
                    { id: "fe-1-2", week: "3-4", goal: "JavaScript Fundamentals.", learnings: ["DOM Manipulation", "Events", "ES6+ Features (Arrow Functions, Promises)", "Async/Await"], resources: [{ name: "JavaScript Full Course", url: "https://www.youtube.com/watch?v=VlPiVmYuoqw" }], proofOfWork: "Build an interactive quiz application with vanilla JavaScript." }
                ]
            },
            {
                title: "Phase 2: Frameworks & Tooling (Weeks 5-10)",
                icon: Code,
                weeks: [
                    { id: "fe-2-1", week: "5-7", goal: "Master React.js.", learnings: ["JSX & Components", "State & Props", "Hooks (useState, useEffect, useContext)", "React Router"], resources: [{ name: "React Full Course 2024", url: "https://www.youtube.com/watch?v=CgkZ7MvWUAA" }], proofOfWork: "Build a movie search application using React and a public API (e.g., TMDB)." },
                    { id: "fe-2-2", week: "8-9", goal: "Learn a CSS Framework.", learnings: ["Tailwind CSS Utility Classes", "Theming & Customization", "JIT Compilation"], resources: [{ name: "Tailwind CSS Full Course", url: "https://www.youtube.com/watch?v=lCxcTsOHrjo" }], proofOfWork: "Re-style your movie search app using Tailwind CSS." },
                    { id: "fe-2-3", week: "10", goal: "Understand Build Tools.", learnings: ["Vite/Webpack basics", "NPM/Yarn package management", "Linters & Formatters (ESLint, Prettier)"], resources: [{ name: "Set Up Custom Vite 6 React + ESLint & Prettier Template: Update 2/2025", url: "https://www.youtube.com/watch?v=p0akKP9UasQ" }], proofOfWork: "Set up a new React project from scratch using Vite and configure ESLint and Prettier." }
                ]
            },
        ]
    },
    "backend-roadmap": {
        title: "Backend Developer",
        description: "Become an expert in building robust, scalable, and secure server-side applications.",
        totalDuration: "4-6 Months",
        icon: Server,
        category: "Web Development",
        phases: [
            {
                title: "Phase 1: Language & Framework (Weeks 1-6)",
                icon: Code,
                weeks: [
                    { id: "be-1-1", week: "1-2", goal: "Choose and master a language.", learnings: ["Node.js (JavaScript)", "Python", "Go", "Java/Kotlin"], resources: [{ name: "Node.js Full Course", url: "https://www.youtube.com/watch?v=f2EqECiTBL8" }], proofOfWork: "Solve 50 intermediate problems on a platform like LeetCode or HackerRank using your chosen language." },
                    { id: "be-1-2", week: "3-6", goal: "Learn a web framework.", learnings: ["Express (Node.js)", "Django/FastAPI (Python)", "Gin (Go)", "Spring Boot (Java)"], resources: [{ name: "Express.js Crash Course", url: "https://www.youtube.com/watch?v=SccSCuHhOw0" }], proofOfWork: "Build a simple REST API for a to-do list application with CRUD functionality." }
                ]
            },
            {
                title: "Phase 2: Databases & Caching (Weeks 7-12)",
                icon: Database,
                weeks: [
                    { id: "be-2-1", week: "7-9", goal: "Master SQL & NoSQL Databases.", learnings: ["PostgreSQL/MySQL", "MongoDB/Redis", "Database Design & Normalization", "Query Optimization"], resources: [{ name: "SQL for Beginners Full Course", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" }], proofOfWork: "Integrate a PostgreSQL database into your to-do list API. Add user accounts and relationships." },
                    { id: "be-2-2", week: "10-12", goal: "Implement Authentication & Caching.", learnings: ["JWT/OAuth2", "Password Hashing (bcrypt)", "Redis for caching", "Rate Limiting"], resources: [{ name: "JWT Authentication Crash Course", url: "https://www.youtube.com/watch?v=mbsmsi7l3r4" }], proofOfWork: "Add JWT-based authentication to your API. Cache frequent database queries using Redis." }
                ]
            },
        ]
    },
    "data-scientist-roadmap": {
        title: "Data Scientist",
        description: "Learn to extract insights from data and build intelligent systems with machine learning.",
        totalDuration: "6-9 Months",
        icon: BrainCircuit,
        category: "Data & AI",
        featured: true,
        phases: [
            {
                title: "Phase 1: Foundations (Weeks 1-8)",
                icon: GraduationCap,
                weeks: [
                    { id: "ds-1-1", week: "1-4", goal: "Strengthen Math & Statistics.", learnings: ["Linear Algebra", "Calculus", "Probability", "Descriptive & Inferential Statistics"], resources: [{ name: "Mathematics for Machine Learning", url: "https://www.youtube.com/watch?v=C8hEa2qb46k" }], proofOfWork: "Complete the math foundations courses on Khan Academy." },
                    { id: "ds-1-2", week: "5-8", goal: "Master Python for Data Science.", learnings: ["NumPy", "Pandas", "Matplotlib", "Seaborn"], resources: [{ name: "Python for Data Science Full Course", url: "https://www.youtube.com/watch?v=LHBE6Q9XlzI" }], proofOfWork: "Perform a full exploratory data analysis (EDA) on a dataset from Kaggle and present your findings in a Jupyter Notebook." }
                ]
            },
            {
                title: "Phase 2: Machine Learning (Weeks 9-16)",
                icon: Bot,
                weeks: [
                    { id: "ds-2-1", week: "9-12", goal: "Learn Core ML Algorithms.", learnings: ["Linear/Logistic Regression", "Decision Trees & Random Forests", "Support Vector Machines", "K-Means Clustering"], resources: [{ name: "All Machine Learning Models Clearly Explained!", url: "https://youtu.be/0YdpwSYMY6I?si=a_9z_8u57vYimBd8" }], proofOfWork: "Build and evaluate at least 3 different models for a classification task on a Kaggle dataset." },
                    { id: "ds-2-2", week: "13-16", goal: "Deep Dive into Deep Learning.", learnings: ["Neural Networks", "TensorFlow/PyTorch", "Convolutional Neural Networks (CNNs)", "Recurrent Neural Networks (RNNs)"], resources: [{ name: "Deep Learning Specialization", url: "https://www.coursera.org/specializations/deep-learning" }], proofOfWork: "Build an image classifier for the CIFAR-10 dataset using PyTorch or TensorFlow." }
                ]
            },
        ]
    },
    "data-analyst-roadmap": {
        title: "Data Analyst",
        description: "Turn raw data into actionable insights using SQL, spreadsheets, and visualization tools.",
        totalDuration: "3-5 Months",
        icon: BarChart3,
        category: "Data & AI",
        phases: [
            {
                title: "Phase 1: Core Tools (Weeks 1-6)",
                icon: GraduationCap,
                weeks: [
                    { id: "da-1-1", week: "1-3", goal: "Master Advanced Excel.", learnings: ["Pivot Tables", "VLOOKUP/XLOOKUP", "Power Query", "Data Modeling"], resources: [{ name: "Data Models, PivotTables, and Power Query in Excel", url: "https://www.youtube.com/watch?v=X5iB4VUQ6eY" }], proofOfWork: "Analyze a sample sales dataset in Excel and create a dashboard with key metrics." },
                    { id: "da-1-2", week: "4-6", goal: "Learn SQL for Data Analysis.", learnings: ["SELECT statements", "JOINs", "Aggregations", "Window Functions"], resources: [{ name: "SQL for Data Analysis", url: "https://www.youtube.com/watch?v=7mz73uXD9DA" }], proofOfWork: "Use SQL to answer 10 business questions from a multi-table database." }
                ]
            },
            {
                title: "Phase 2: Visualization & Reporting (Weeks 7-12)",
                icon: Palette,
                weeks: [
                    { id: "da-2-1", week: "7-12", goal: "Master a BI Tool (Tableau/Power BI).", learnings: ["Connecting to Data Sources", "Creating Calculated Fields", "Building Interactive Dashboards", "Storytelling with Data"], resources: [{ name: "Tableau Tutorial | Tableau Complete Tutorial For Beginners | Edition 2025 | End to End |Zero to Hero", url: "https://www.youtube.com/watch?v=hXSLLttoxOA" }], proofOfWork: "Create a comprehensive, multi-page dashboard in Tableau or Power BI that tells a story from a dataset." }
                ]
            }
        ]
    },
    "ml-engineer-roadmap": {
        title: "Machine Learning Engineer",
        description: "Deploy and maintain machine learning models at scale in production environments.",
        totalDuration: "6-9 Months",
        icon: Bot,
        category: "Data & AI",
        featured: true,
        phases: [
            {
                title: "Phase 1: Software Engineering for ML (Weeks 1-8)",
                icon: Code,
                weeks: [
                    { id: "mle-1-1", week: "1-4", goal: "Strengthen Python & SWE Skills.", learnings: ["Object-Oriented Programming", "Data Structures & Algorithms", "Testing", "Code Packaging"], resources: [{ name: "Advanced Python", url: "https://www.youtube.com/watch?v=8DvywoWv6fI" }], proofOfWork: "Refactor a messy Jupyter Notebook into a structured, testable Python project." },
                    { id: "mle-1-2", week: "5-8", goal: "Learn ML Development Tools.", learnings: ["Scikit-learn Pipelines", "MLflow for Experiment Tracking", "DVC for Data Versioning"], resources: [{ name: "MLOps Tutorial", url: "https://www.youtube.com/watch?v=oYIBwbHM_PI" }], proofOfWork: "Train a model and track experiments, parameters, and metrics using MLflow." }
                ]
            },
            {
                title: "Phase 2: MLOps & Deployment (Weeks 9-16)",
                icon: CloudLightning,
                weeks: [
                    { id: "mle-2-1", week: "9-12", goal: "Master Docker & CI/CD.", learnings: ["Containerizing ML Models", "GitHub Actions for ML", "Building REST APIs (FastAPI)"], resources: [{ name: "How to Deploy ML Solutions with FastAPI, Docker, & AWS", url: "https://www.youtube.com/watch?v=pJ_nCklQ65w" }], proofOfWork: "Containerize a trained model and its API using Docker. Set up a CI/CD pipeline to auto-deploy it." },
                    { id: "mle-2-2", week: "13-16", goal: "Learn Cloud ML Platforms.", learnings: ["AWS SageMaker / GCP Vertex AI", "Model Deployment & Monitoring", "Serverless Functions for Inference"], resources: [{ name: "AWS SageMaker Tutorial", url: "https://www.youtube.com/watch?v=Ld2oTLY47sA" }], proofOfWork: "Deploy your model as a real-time endpoint on a cloud platform and set up basic monitoring." }
                ]
            }
        ]
    },
    "ai-research-scientist-roadmap": {
        title: "AI Research Scientist",
        description: "Push the boundaries of artificial intelligence by creating and publishing novel research.",
        totalDuration: "12+ Months",
        icon: FlaskConical,
        category: "Data & AI",
        phases: [
            {
                title: "Phase 1: Advanced Foundations (Weeks 1-12)",
                icon: GraduationCap,
                weeks: [
                    { id: "airs-1-1", week: "1-6", goal: "Master Advanced Mathematics.", learnings: ["Advanced Linear Algebra", "Probability Theory", "Optimization Theory", "Information Theory"], resources: [{ name: "MIT OCW: Matrix Methods in Data Analysis", url: "https://www.youtube.com/playlist?list=PLUl4u3cNGP63ctJIEC1UnZ0btsphnnoHR" }], proofOfWork: "Implement 3-5 core mathematical algorithms from scratch in Python/NumPy." },
                    { id: "airs-1-2", week: "7-12", goal: "Deep Dive into a Specialization.", learnings: ["Computer Vision", "Natural Language Processing", "Reinforcement Learning", "Generative Models"], resources: [{ name: "Stanford CS231n: CNNs for Visual Recognition", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" }], proofOfWork: "Replicate the results of a foundational research paper in your chosen specialization." }
                ]
            },
            {
                title: "Phase 2: Research & Publication (Weeks 13+)",
                icon: PenSquare,
                weeks: [
                    { id: "airs-2-1", week: "13+", goal: "Formulate a Research Problem & Publish.", learnings: ["Reading Research Papers", "Identifying Research Gaps", "Experiment Design", "Writing for Publication (LaTeX)"], resources: [{ name: "How to write papers in LaTeX: from beginner to pro in one video", url: "https://www.youtube.com/watch?v=CjuYkcA35dw" }], proofOfWork: "Submit a novel research paper to a top-tier AI conference (e.g., NeurIPS, ICML, CVPR)." }
                ]
            }
        ]
    },
    "nlp-engineer-roadmap": {
        title: "NLP Engineer",
        description: "Build systems that understand and generate human language, from chatbots to translation services.",
        totalDuration: "6-9 Months",
        icon: Mic,
        category: "Data & AI",
        phases: [
            {
                title: "Phase 1: NLP Fundamentals (Weeks 1-8)",
                icon: GraduationCap,
                weeks: [
                    { id: "nlpe-1-1", week: "1-4", goal: "Learn Classic NLP Techniques.", learnings: ["Text Preprocessing", "Bag-of-Words, TF-IDF", "Word Embeddings (Word2Vec, GloVe)", "Sentiment Analysis"], resources: [{ name: "Stanford CS224N: NLP with Deep Learning", url: "https://www.youtube.com/playlist?list=PLoROMvodv4rOhcuXMZkNm7j3fVwBBY42z" }], proofOfWork: "Build a sentiment analysis model for movie reviews from scratch." },
                    { id: "nlpe-1-2", week: "5-8", goal: "Master Transformer Architectures.", learnings: ["Attention Mechanism", "BERT", "GPT", "Hugging Face Transformers Library"], resources: [{ name: "Hugging Face Course", url: "https://huggingface.co/learn/nlp-course" }], proofOfWork: "Fine-tune a pre-trained BERT model for a text classification task." }
                ]
            },
            {
                title: "Phase 2: Advanced Applications (Weeks 9-16)",
                icon: Bot,
                weeks: [
                    { id: "nlpe-2-1", week: "9-16", goal: "Build Advanced NLP Systems.", learnings: ["LLM Fine-tuning & Prompt Engineering", "Retrieval-Augmented Generation (RAG)", "Vector Databases (Pinecone, Chroma)", "Deploying NLP Models"], resources: [{ name: "LangChain for LLM Application Development", url: "https://www.youtube.com/watch?v=aywZrzNaKjs" }], proofOfWork: "Build a question-answering chatbot over your own documents using a RAG architecture." }
                ]
            }
        ]
    },
    "computer-vision-engineer-roadmap": {
        title: "Computer Vision Engineer",
        description: "Teach computers to see and interpret the world through images and videos.",
        totalDuration: "6-9 Months",
        icon: Eye,
        category: "Data & AI",
        phases: [
             {
                title: "Phase 1: Image Processing & CV Fundamentals (Weeks 1-8)",
                icon: GraduationCap,
                weeks: [
                    { id: "cve-1-1", week: "1-4", goal: "Learn Image Processing.", learnings: ["OpenCV", "Image Filtering & Transformations", "Feature Detection (SIFT, ORB)", "Image Segmentation"], resources: [{ name: "OpenCV Course - Full Tutorial with Python", url: "https://www.youtube.com/watch?v=oXlwWbU8l2o" }], proofOfWork: "Build a panorama stitching application using OpenCV." },
                    { id: "cve-1-2", week: "5-8", goal: "Master Deep Learning for Vision.", learnings: ["Convolutional Neural Networks (CNNs)", "Transfer Learning", "Architectures (ResNet, VGG, EfficientNet)"], resources: [{ name: "Stanford CS231n: CNNs for Visual Recognition", url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv" }], proofOfWork: "Train an image classifier on a custom dataset of your choice." }
                ]
            },
            {
                title: "Phase 2: Advanced CV Tasks (Weeks 9-16)",
                icon: Target,
                weeks: [
                    { id: "cve-2-1", week: "9-16", goal: "Build Advanced CV Systems.", learnings: ["Object Detection (YOLO, Faster R-CNN)", "Semantic Segmentation (U-Net)", "Generative Models (GANs, Diffusion)", "3D Computer Vision"], resources: [{ name: "What's New in 2025 for Computer Vision?", url: "https://youtu.be/1LbKcnlzTUU?si=QbiPnYyjcOJLQxFX" }], proofOfWork: "Build a real-time object detection application using a webcam and a YOLO model." }
                ]
            }
        ]
    },
    "devops-roadmap": {
        title: "DevOps Engineer",
        description: "Bridge the gap between development and operations to automate and streamline software delivery.",
        totalDuration: "5-7 Months",
        icon: CloudLightning,
        category: "Cloud & DevOps",
        phases: [
            {
                title: "Phase 1: OS & Scripting (Weeks 1-4)",
                icon: CodeXml,
                weeks: [
                    { id: "do-1-1", week: "1-4", goal: "Master Linux & Bash Scripting.", learnings: ["Command Line Interface (CLI)", "File Systems", "User Management", "Shell Scripting"], resources: [{ name: "Learn Linux - The Full Course", url: "https://youtu.be/v392lEyM29A?si=MnDtW_Az1IqQVLBR" }], proofOfWork: "Write a bash script to automate daily backups of a specific directory." }
                ]
            },
            {
                title: "Phase 2: CI/CD & Cloud (Weeks 5-12)",
                icon: Cloud,
                weeks: [
                    { id: "do-2-1", week: "5-8", goal: "Learn CI/CD Tools.", learnings: ["Git & GitHub Actions", "Jenkins", "Docker Basics", "Containerization"], resources: [{ name: "Docker for Beginners", url: "https://www.youtube.com/watch?v=3c-iBn73dDE" }], proofOfWork: "Create a GitHub Actions workflow to automatically test and build a simple web application." },
                    { id: "do-2-2", week: "9-12", goal: "Understand a Cloud Provider.", learnings: ["AWS/GCP/Azure Core Services (EC2, S3, VPC)", "Infrastructure as Code (Terraform)", "Kubernetes Basics"], resources: [{ name: "Terraform Full Course", url: "https://www.youtube.com/watch?v=7xngnjfIlK4" }], proofOfWork: "Use Terraform to provision a simple web server and storage bucket on a cloud provider." }
                ]
            }
        ]
    },
    "cloud-architect-roadmap": {
        title: "Cloud Architect",
        description: "Design and implement scalable, secure, and robust cloud infrastructure on AWS, GCP, or Azure.",
        totalDuration: "7-10 Months",
        icon: Cloud,
        category: "Cloud & DevOps",
        phases: [
            {
                title: "Phase 1: Advanced Networking & Security (Weeks 1-8)",
                icon: ShieldCheck,
                weeks: [
                    { id: "ca-1-1", week: "1-8", goal: "Master Cloud Networking & Security.", learnings: ["VPCs, Subnets, Routing", "Network Security Groups", "IAM Roles & Policies", "Encryption"], resources: [{ name: "AWS Certified Solutions Architect", url: "https://www.youtube.com/watch?v=Ia-UEYYR44s" }], proofOfWork: "Design a secure, multi-tier network architecture for a web application on paper." }
                ]
            },
            {
                title: "Phase 2: Scalability & High Availability (Weeks 9-16)",
                icon: Zap,
                weeks: [
                    { id: "ca-2-1", week: "9-16", goal: "Learn Scalable Design Patterns.", learnings: ["Load Balancing", "Auto-Scaling Groups", "Serverless Architecture (Lambda)", "Database Scalability"], resources: [{ name: "Complete High Level Design Roadmap | Beginner Friendly 2025", url: "https://youtu.be/TlTi6zEIk-M?si=iELG0MA5BMwOz9LN" }], proofOfWork: "Architect a highly available and fault-tolerant system for an e-commerce website." }
                ]
            }
        ]
    },
    "ui-ux-roadmap": {
        title: "UI/UX Designer",
        description: "Design intuitive, accessible, and beautiful user interfaces that solve real user problems.",
        totalDuration: "4-6 Months",
        icon: Figma,
        category: "Design",
        phases: [
            {
                title: "Phase 1: Design Fundamentals (Weeks 1-6)",
                icon: GraduationCap,
                weeks: [
                    { id: "ux-1-1", week: "1-3", goal: "Learn UX Principles.", learnings: ["User Research", "Personas & User Journeys", "Wireframing", "Information Architecture"], resources: [{ name: "Google UX Design Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design" }], proofOfWork: "Create user personas and a user journey map for a new mobile app idea." },
                    { id: "ux-1-2", week: "4-6", goal: "Master UI Principles.", learnings: ["Color Theory", "Typography", "Grid Systems", "Visual Hierarchy"], resources: [{ name: "UI UX Design Course FREE | UI UX Design Full Course For Beginners (2025) | Intellipaat", url: "https://youtu.be/MBblN98-5lg?si=CX5btMaEnNetW91a" }], proofOfWork: "Create low-fidelity and high-fidelity wireframes for your mobile app idea." }
                ]
            },
            {
                title: "Phase 2: Tooling & Prototyping (Weeks 7-12)",
                icon: PenSquare,
                weeks: [
                    { id: "ux-2-1", week: "7-12", goal: "Master Figma.", learnings: ["Component-Based Design", "Auto Layout", "Prototyping & Animations", "Design Systems"], resources: [{ name: "Figma Full Course for Beginners", url: "https://www.youtube.com/watch?v=eZJOSK4gXl4" }], proofOfWork: "Build a complete, interactive prototype for your mobile app in Figma, including a basic design system." }
                ]
            }
        ]
    },
     "product-designer-roadmap": {
        title: "Product Designer",
        description: "Shape the entire user experience of a product, from initial research to final UI.",
        totalDuration: "6-9 Months",
        icon: Lightbulb,
        category: "Design",
        phases: [
             {
                title: "Phase 1: UX & Strategy (Weeks 1-8)",
                icon: BrainCircuit,
                weeks: [
                    { id: "pd-1-1", week: "1-8", goal: "Master User Research & Product Strategy.", learnings: ["User Interviews", "Competitive Analysis", "Problem Framing", "Defining Metrics (KPIs)"], resources: [{ name: "10 Years of UX Research Experience in 4.5 hours - Ultimate Crash Course", url: "https://youtu.be/R7urbI0iqb0?si=dPDfefI9LGAQu0qr" }], proofOfWork: "Conduct user interviews and create a product brief for a new feature for an existing app." }
                ]
            },
            {
                title: "Phase 2: UI & Prototyping (Weeks 9-16)",
                icon: Figma,
                weeks: [
                    { id: "pd-2-1", week: "9-16", goal: "Develop High-Fidelity Designs & Systems.", learnings: ["Advanced Figma", "Design Systems", "Interaction Design", "Usability Testing"], resources: [{ name: "Learn Figma Design Systems in 2025 (Full Tutorial—No Ads)", url: "https://youtu.be/uAq2Yi_m-xQ?si=Z4Rdx8xGYs4wefyg" }], proofOfWork: "Design a multi-screen, high-fidelity prototype and conduct usability tests with at least 3 users." }
                ]
            }
        ]
    },
    "mobile-app-roadmap": {
        title: "Mobile App Developer",
        description: "Build native applications for iOS and Android, reaching billions of users.",
        totalDuration: "5-8 Months",
        icon: Smartphone,
        category: "Mobile Development",
        phases: [
            {
                title: "Phase 1: Choose Your Path (Weeks 1-8)",
                icon: GitBranch,
                weeks: [
                    { id: "ma-1-1", week: "1-8", goal: "Learn Swift (iOS) or Kotlin (Android).", learnings: ["Core Language Syntax", "OOP Principles", "Data Structures", "Memory Management"], resources: [{ name: "Kotlin for Beginners", url: "https://www.youtube.com/watch?v=EExSSotojVI" }, { name: "Swift Full Course", url: "https://www.youtube.com/watch?v=comQ1-x2a1Q" }], proofOfWork: "Build a command-line to-do list application in your chosen language." }
                ]
            },
            {
                title: "Phase 2: Frameworks & UI (Weeks 9-16)",
                icon: Palette,
                weeks: [
                    { id: "ma-2-1", week: "9-16", goal: "Master SwiftUI or Jetpack Compose.", learnings: ["Declarative UI", "State Management", "Navigation", "API Integration"], resources: [{ name: "100 Days of SwiftUI", url: "https://www.hackingwithswift.com/100/swiftui" }], proofOfWork: "Build a weather application that fetches data from a public API and displays it in a clean, native UI." }
                ]
            }
        ]
    },
    "flutter-developer-roadmap": {
        title: "Flutter Developer",
        description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
        totalDuration: "4-6 Months",
        icon: Feather,
        category: "Mobile Development",
        phases: [
            {
                title: "Phase 1: Dart & Flutter Basics (Weeks 1-6)",
                icon: GraduationCap,
                weeks: [
                    { id: "flu-1-1", week: "1-6", goal: "Learn Dart and Flutter Fundamentals.", learnings: ["Dart Programming Language", "Flutter Widget Tree", "Stateful vs. Stateless Widgets", "Layouts"], resources: [{ name: "Flutter Course for Beginners", url: "https://www.youtube.com/watch?v=pTJJsmejUOQ" }], proofOfWork: "Build a simple multi-screen app with basic navigation, like a digital business card." }
                ]
            },
            {
                title: "Phase 2: Advanced Flutter (Weeks 7-12)",
                icon: Zap,
                weeks: [
                    { id: "flu-2-1", week: "7-12", goal: "Master State Management & APIs.", learnings: ["Provider/Riverpod", "Networking (http package)", "JSON Serialization", "Firebase Integration"], resources: [{ name: "Flutter State Management", url: "https://www.youtube.com/playlist?list=PL5jb9EteFAODBvJHpMw27GO8RiS8W31l4" }], proofOfWork: "Build a complete to-do list app that saves data to Firebase Firestore." }
                ]
            }
        ]
    },
    "cybersecurity-roadmap": {
        title: "Cybersecurity Analyst",
        description: "Protect digital assets from cyber threats by learning to identify and mitigate vulnerabilities.",
        totalDuration: "6-9 Months",
        icon: ShieldCheck,
        category: "Security",
        phases: [
            {
                title: "Phase 1: IT & Networking Foundations (Weeks 1-8)",
                icon: GraduationCap,
                weeks: [
                    { id: "cs-1-1", week: "1-8", goal: "Master Networking & Security Concepts.", learnings: ["OSI Model", "TCP/IP", "Firewalls & VPNs", "Security+ Concepts"], resources: [{ name: "TCP/IP Model vs OSI Model (FREE CCNA 200-301 Course 2025)", url: "https://youtu.be/a0UIbw1MsUM?si=MN3iWcPY58Rqb1S0" }], proofOfWork: "Pass the CompTIA Security+ certification exam." }
                ]
            },
            {
                title: "Phase 2: Ethical Hacking & Defense (Weeks 9-16)",
                icon: HardHat,
                weeks: [
                    { id: "cs-2-1", week: "9-16", goal: "Learn Ethical Hacking.", learnings: ["Penetration Testing", "Vulnerability Assessment", "Metasploit", "Wireshark"], resources: [{ name: "Ethical Hacking Full Course", url: "https://www.youtube.com/live/18hyoV15hys?si=4kwp9dP8g-4NkGz7" }], proofOfWork: "Complete 10 beginner-friendly machines on Hack The Box or TryHackMe." }
                ]
            }
        ]
    },
     "ethical-hacker-roadmap": {
        title: "Ethical Hacker",
        description: "Legally hack systems to find security vulnerabilities before malicious actors do.",
        totalDuration: "7-10 Months",
        icon: HardHat,
        category: "Security",
        phases: [
            {
                title: "Phase 1: Advanced Pentesting (Weeks 1-10)",
                icon: CodeXml,
                weeks: [
                    { id: "eh-1-1", week: "1-10", goal: "Master Web & Network Pentesting.", learnings: ["OWASP Top 10", "Burp Suite", "Nmap", "Active Directory Exploitation"], resources: [{ name: "Full Ethical Hacking Course/Tutorials - Network Penetration Testing for Beginners and Advance 2025", url: "https://youtu.be/hOgLtGPxArQ?si=9avdyVDmr5MfUJQy" }], proofOfWork: "Achieve a beginner-level certification like eJPT or PNPT." }
                ]
            },
            {
                title: "Phase 2: Exploit Dev & Reporting (Weeks 11-20)",
                icon: PenSquare,
                weeks: [
                    { id: "eh-2-1", week: "11-20", goal: "Learn Exploit Development.", learnings: ["Buffer Overflows", "Reverse Engineering", "Writing Custom Exploits", "Professional Report Writing"], resources: [{ name: "Buffer Overflow Exploit Tutorial", url: "https://www.youtube.com/watch?v=ncBblM920jw" }], proofOfWork: "Write a custom exploit for a known vulnerability and document it in a professional penetration test report." }
                ]
            }
        ]
    },
    "game-dev-roadmap": {
        title: "Game Developer",
        description: "Bring interactive worlds to life by learning game engines, programming, and design principles.",
        totalDuration: "6-12 Months",
        icon: Gamepad2,
        category: "Game Development",
        phases: [
            {
                title: "Phase 1: Engine & Language (Weeks 1-10)",
                icon: Code,
                weeks: [
                    { id: "gd-1-1", week: "1-10", goal: "Learn C# and Unity or C++ and Unreal Engine.", learnings: ["Core Programming", "Engine UI", "Game Objects & Components", "Physics"], resources: [{ name: "Unity for Beginners", url: "https://www.youtube.com/watch?v=gB1F9G0JXOo" }], proofOfWork: "Create a complete clone of a simple 2D game like Pong or Breakout." }
                ]
            },
            {
                title: "Phase 2: Core Game Mechanics (Weeks 11-20)",
                icon: Zap,
                weeks: [
                    { id: "gd-2-1", week: "11-20", goal: "Implement Core Game Systems.", learnings: ["Character Controllers", "AI Behavior", "UI/HUD Systems", "Sound Design"], resources: [{ name: "Create a 2D Platformer in Unity", url: "https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6" }], proofOfWork: "Develop a small but complete 2D platformer game with a start menu, multiple levels, and a final boss." }
                ]
            }
        ]
    },
     "game-designer-roadmap": {
        title: "Game Designer",
        description: "Conceptualize and design the rules, systems, and narrative of a video game.",
        totalDuration: "5-9 Months",
        icon: PenTool,
        category: "Game Development",
        phases: [
            {
                title: "Phase 1: Theory & Documentation (Weeks 1-8)",
                icon: BookOpen,
                weeks: [
                    { id: "gdes-1-1", week: "1-8", goal: "Learn Game Design Theory.", learnings: ["Game Loops", "Player Psychology", "Level Design Principles", "System Design"], resources: [{ name: "Game Maker's Toolkit", url: "https://www.youtube.com/c/MarkBrownGMT" }], proofOfWork: "Write a complete Game Design Document (GDD) for a simple mobile game concept." }
                ]
            },
            {
                title: "Phase 2: Prototyping & Balancing (Weeks 9-16)",
                icon: TestTube2,
                weeks: [
                    { id: "gdes-2-1", week: "9-16", goal: "Prototype and Balance.", learnings: ["Paper Prototyping", "Using a Game Engine for Prototyping", "Playtesting", "Balancing Game Economies"], resources: [{ name: "Prototyping for Game Designers", url: "https://www.coursera.org/specializations/game-design-and-development" }], proofOfWork: "Create a playable paper prototype of your game and conduct playtests to refine the core mechanics." }
                ]
            }
        ]
    },
    "blockchain-roadmap": {
        title: "Blockchain Developer",
        description: "Build the future of decentralized applications by mastering smart contracts and web3 technologies.",
        totalDuration: "5-8 Months",
        icon: Link,
        category: "Web3",
        phases: [
            {
                title: "Phase 1: Foundations (Weeks 1-6)",
                icon: GraduationCap,
                weeks: [
                    { id: "bc-1-1", week: "1-6", goal: "Understand Blockchain & Ethereum.", learnings: ["Cryptography Basics", "How Blockchains Work", "Smart Contracts", "Gas & Transactions"], resources: [{ name: "Blockchain Expert Explains in 5 Levels", url: "https://www.youtube.com/watch?v=hYip_Vuv8J0" }], proofOfWork: "Write a detailed article explaining how a blockchain transaction works from start to finish." }
                ]
            },
            {
                title: "Phase 2: Smart Contracts & dApps (Weeks 7-16)",
                icon: Code,
                weeks: [
                    { id: "bc-2-1", week: "7-12", goal: "Learn Solidity & Hardhat.", learnings: ["Solidity Syntax", "ERC20/ERC721 Tokens", "Writing & Testing Smart Contracts", "Hardhat for Development"], resources: [{ name: "Solidity, Blockchain, and Smart Contract Course", url: "https://www.youtube.com/watch?v=M576WGiDBdQ" }], proofOfWork: "Write, test, and deploy your own ERC20 token contract on a testnet." },
                    { id: "bc-2-2", week: "13-16", goal: "Build a dApp Frontend.", learnings: ["Ethers.js/Web3.js", "Connecting to Metamask", "Interacting with Smart Contracts"], resources: [{ name: "The Ultimate Web3 Portfolio Project (2025) | Build a Full Stack DApp", url: "https://youtu.be/oGOy4ZPS-hI?si=OXBMTn4EQ8KUI4gm" }], proofOfWork: "Create a simple web interface that allows users to connect their wallet and interact with your ERC20 token contract." }
                ]
            }
        ]
    },
    "qa-engineer-roadmap": {
        title: "QA Engineer",
        description: "Ensure software quality through automated and manual testing to deliver bug-free products.",
        totalDuration: "3-5 Months",
        icon: TestTube2,
        category: "Software Development",
        phases: [
            {
                title: "Phase 1: Testing Fundamentals (Weeks 1-6)",
                icon: GraduationCap,
                weeks: [
                    { id: "qa-1-1", week: "1-6", goal: "Learn Manual & Automated Testing Concepts.", learnings: ["Test Case Design", "Bug Reporting", "Testing Levels (Unit, Integration, System)", "Selenium/Cypress Basics"], resources: [{ name: "LambdaTest has lot of videos", url: "https://www.youtube.com/@LambdaTest" }], proofOfWork: "Write a complete test plan with test cases for a simple login page." }
                ]
            },
            {
                title: "Phase 2: Automation Frameworks (Weeks 7-12)",
                icon: Code,
                weeks: [
                    { id: "qa-2-1", week: "7-12", goal: "Master a Test Automation Framework.", learnings: ["Selenium WebDriver", "Cypress", "API Testing with Postman", "Page Object Model (POM)"], resources: [{ name: "Amod Mahajan has resourses", url: "https://www.youtube.com/@RetargetCommon/videos" }], proofOfWork: "Create an automated test suite for a simple e-commerce checkout flow." }
                ]
            }
        ]
    },
    "technical-writer-roadmap": {
        title: "Technical Writer",
        description: "Create clear and concise documentation, guides, and articles for complex technical products.",
        totalDuration: "3-6 Months",
        icon: BookOpen,
        category: "Content & Product",
        phases: [
            {
                title: "Phase 1: Writing & Tools (Weeks 1-6)",
                icon: PenSquare,
                weeks: [
                    { id: "tw-1-1", week: "1-6", goal: "Learn Technical Writing Principles.", learnings: ["Clarity & Conciseness", "Audience Analysis", "Docs-as-Code", "Markdown"], resources: [{ name: "Technical Writing Course by Google", url: "https://developers.google.com/tech-writing" }], proofOfWork: "Write a clear, step-by-step tutorial for a common task, like setting up a new software." }
                ]
            },
            {
                title: "Phase 2: API Documentation (Weeks 7-12)",
                icon: CodeXml,
                weeks: [
                    { id: "tw-2-1", week: "7-12", goal: "Master API Documentation.", learnings: ["Reading Code (Python/JS)", "Documenting REST APIs", "Swagger/OpenAPI Specification", "Using Postman"], resources: [{ name: "OpenAPI Specification Using Postman | Postman Swagger Tutorial | Postman OpenAPI Tutorial | REST API", url: "https://www.youtube.com/watch?v=rG8JGtuhREw" }], proofOfWork: "Create a complete API reference documentation for a simple REST API." }
                ]
            }
        ]
    },
    "product-manager-roadmap": {
        title: "Product Manager",
        description: "Define the 'why', 'what', and 'when' of a product, leading cross-functional teams from concept to launch.",
        totalDuration: "6-9 Months",
        icon: Milestone,
        category: "Content & Product",
        phases: [
            {
                title: "Phase 1: Core Competencies (Weeks 1-8)",
                icon: Users,
                weeks: [
                    { id: "pm-1-1", week: "1-8", goal: "Learn Product Management Fundamentals.", learnings: ["User Research", "Market Analysis", "Roadmapping", "Prioritization Frameworks (RICE, MoSCoW)"], resources: [{ name: "Product Management Fundamentals Tutorial I Product Management Tutorial for Beginners part 1/10", url: "https://www.youtube.com/watch?v=r1ep4ENLF4o" }], proofOfWork: "Create a Product Requirements Document (PRD) for a new feature for a popular app." }
                ]
            },
            {
                title: "Phase 2: Execution & Leadership (Weeks 9-16)",
                icon: Briefcase,
                weeks: [
                    { id: "pm-2-1", week: "9-16", goal: "Master Execution and Stakeholder Management.", learnings: ["Agile/Scrum Methodologies", "Writing User Stories", "A/B Testing", "Communicating with Engineers & Designers"], resources: [{ name: "Agile Full Course | Agile SCRUM Tutorial For Beginners | Agile Methodology Explained | Simplilearn", url: "https://www.youtube.com/watch?v=J-psYRsMZ1A" }], proofOfWork: "Run a mock sprint planning meeting, creating and prioritizing a backlog of user stories." }
                ]
            }
        ]
    },
     "ai-product-manager-roadmap": {
        title: "AI Product Manager",
        description: "Lead the development of AI-powered products, from data strategy to model deployment.",
        totalDuration: "7-10 Months",
        icon: Bot,
        category: "Content & Product",
        phases: [
            {
                title: "Phase 1: AI/ML Fundamentals for PMs (Weeks 1-8)",
                icon: GraduationCap,
                weeks: [
                    { id: "aipm-1-1", week: "1-8", goal: "Understand AI/ML Concepts.", learnings: ["Types of ML (Supervised, Unsupervised)", "Data Labeling & Annotation", "Model Evaluation Metrics (Precision, Recall)", "AI Ethics"], resources: [{ name: "AI for Everyone by Andrew Ng", url: "https://www.coursera.org/learn/ai-for-everyone" }], proofOfWork: "Write a product spec for an AI feature, including the data required and success metrics." }
                ]
            },
            {
                title: "Phase 2: AI Product Strategy (Weeks 9-16)",
                icon: Milestone,
                weeks: [
                    { id: "aipm-2-1", week: "9-16", goal: "Develop AI Product Strategy.", learnings: ["Build vs. Buy Decisions", "Data Acquisition Strategy", "Managing ML Lifecycles", "Communicating Model Uncertainty"], resources: [{ name: "Build, Buy or Blend? How to Bring Your Best AI Strategy—and Sandwich—to the Table", url: "https://www.youtube.com/watch?v=N0GgKof6b5o" }], proofOfWork: "Create a roadmap for an AI product, considering the iterative nature of model development and data collection." }
                ]
            }
        ]
    },
};

const PERSONALITY_DEV_DATA = {
    "personal-branding": {
        title: "Personal Branding",
        description: "Craft a powerful personal brand to stand out, attract opportunities, and build a network in your field.",
        totalDuration: "4-6 Weeks",
        icon: User,
        category: "Career Skills",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Foundation & Strategy (Weeks 1-2)",
                icon: Milestone,
                weeks: [
                    { id: "pb-1-1", week: "1", goal: "Define Your Brand Identity.", learnings: ["Identifying Your Niche", "Defining Your Mission & Values", "Understanding Your Target Audience"], resources: [{ name: "How To ACTUALLY Design a Brand Identity (Full Guide 2025)", url: "https://youtu.be/y_2P5o_msuo?si=QN1keszpB8PTqPrX" }], proofOfWork: "Write a one-page 'Brand You' document that clearly defines your niche, mission statement, and ideal audience." },
                    { id: "pb-1-2", week: "2", goal: "Optimize Your Online Presence.", learnings: ["Crafting a Professional LinkedIn Profile", "Creating a Consistent Bio Across Platforms", "Choosing the Right Social Media Channels"], resources: [{ name: "LinkedIn Secrets to Boost Your Online Presence in 2025", url: "https://youtu.be/qOPfWJpMI7Y?si=Ztdvdk4ZDl7Bjg6j" }], proofOfWork: "Completely overhaul your LinkedIn profile based on best practices. Ensure your bio is consistent on at least two other platforms." }
                ]
            },
            {
                title: "Phase 2: Content & Networking (Weeks 3-4)",
                icon: PenSquare,
                weeks: [
                    { id: "pb-2-1", week: "3", goal: "Create and Share Valuable Content.", learnings: ["Content Pillars", "Writing Engaging Posts/Threads", "Sharing Your Work & Learnings", "Basic Content Creation Tools (e.g., Canva)"], resources: [{ name: "This is HOW to FIND CONTENT IDEAS that ACTUALLY GROW your social media!", url: "https://youtu.be/Swg-mXq8smo?si=Hf9un__opSjroig2" }], proofOfWork: "Write and publish three pieces of content (e.g., LinkedIn posts, Twitter threads) related to your niche. Focus on providing value to your target audience." },
                    { id: "pb-2-2", week: "4", goal: "Engage and Build Your Network.", learnings: ["Providing Value in Comments", "Reaching Out for Informational Interviews", "Engaging with Industry Leaders", "The 'Give More Than You Take' Principle"], resources: [{ name: "How informational interviews can get you hired | Natalie Janine Gates | TEDxWilsonPark", url: "https://youtu.be/nmB8eJbR93c?si=gBPoQRgclX2pHbpI" }], proofOfWork: "For one week, spend 15 minutes a day leaving thoughtful comments on posts from people in your field. Send one personalized connection request with a clear purpose." }
                ]
            }
        ]
    },
    "digital-minimalism": {
        title: "Digital Minimalism",
        description: "Learn to use technology intentionally to improve focus, reduce distractions, and live a more present life.",
        totalDuration: "4 Weeks",
        icon: Smartphone,
        category: "Mind & Body",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: The Declutter (Weeks 1-2)",
                icon: X,
                weeks: [
                    { id: "dm-1-1", week: "1", goal: "Conduct a Digital Audit.", learnings: ["Tracking Screen Time", "Identifying High-Value vs. Low-Value Tech", "The 'What Problem Does This Solve?' Test"], resources: [{ name: "How I'm Using Tech Differently in 2025", url: "https://youtu.be/vck3QPCEp58?si=gwgBlVXAKDecL6wV" }], proofOfWork: "Track your screen time for one week. At the end, categorize each app into 'Essential', 'Useful', or 'Distraction'." },
                    { id: "dm-1-2", week: "2", goal: "Perform a Digital Declutter.", learnings: ["Removing Distracting Apps", "Turning Off Notifications", "Curating Social Media Feeds"], resources: [{ name: "How to Ditch Digital Distraction in 2025", url: "https://youtu.be/ucpqQbHHOGY?si=v-rBug5d5doopLkv" }], proofOfWork: "Delete all non-essential, distracting apps from your phone. Turn off all non-human notifications (i.e., keep messages from people, turn off the rest)." }
                ]
            },
            {
                title: "Phase 2: The Rebuild (Weeks 3-4)",
                icon: Building,
                weeks: [
                    { id: "dm-2-1", week: "3", goal: "Reintroduce Technology Intentionally.", learnings: ["Time-Blocking for Deep Work", "Using Social Media with Purpose", "Single-Tasking vs. Multi-Tasking"], resources: [{ name: "How to Become More Focused & Productive? – Deep Work by Cal Newport", url: "https://youtu.be/al3nHqnA20E?si=8FGZBlD-Gi3n0bq6" }], proofOfWork: "Schedule specific, short blocks of time for checking social media or email in your calendar for one week. Stick to them." },
                    { id: "dm-2-2", week: "4", goal: "Cultivate High-Quality Leisure.", learnings: ["Replacing Screen Time with Hobbies", "The Importance of Solitude", "Connecting with People in Person"], resources: [{ name: "LIFE-CHANGING HOBBIES TO GET INTO IN 2025 ", url: "https://youtu.be/Ye5cKDVnnK4?si=grf7dM7WjRkhySUX" }], proofOfWork: "Spend at least 3 hours this week on a non-digital hobby. Schedule one in-person hangout with a friend instead of just texting." }
                ]
            }
        ]
    },
    "monetization-skills": {
        title: "Monetization Skills",
        description: "Learn how to turn your knowledge, skills, or audience into an income stream by creating value people will pay for.",
        totalDuration: "4-6 Weeks",
        icon: DollarSign,
        category: "Career Skills",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Identify & Package Your Skills (Weeks 1-2)",
                icon: Package,
                weeks: [
                    { id: "ms-1-1", week: "1", goal: "Identify Your Monetizable Skill.", learnings: ["Skill Assessment", "Finding Your Niche", "Identifying Market Needs", "The Ikigai Model"], resources: [{ name: "How To Find Your Niche On YouTube (Ikigai) - Patrick Dang", url: "https://youtu.be/sEVhsxBcSGk?si=ABXs02Mgq65wgrBG" }], proofOfWork: "Create a document listing 3-5 of your top skills and research the market demand for each. Choose one skill to focus on." },
                    { id: "ms-1-2", week: "2", goal: "Package Your Skill as a Service.", learnings: ["Defining Your Service Offering", "Setting Your Price (Hourly vs. Project)", "Creating a Portfolio", "Crafting a Compelling Pitch"], resources: [{ name: "How to Become a Freelancer in 2025 – Skills, Strategy & Survival (Full Masterclass)", url: "https://youtu.be/9hXctjLGgjo?si=nYUvHNsirQMmsxle" }], proofOfWork: "Create a one-page service description for your chosen skill, including pricing and a clear value proposition." }
                ]
            },
            {
                title: "Phase 2: Find Clients & Build an Audience (Weeks 3-4)",
                icon: Users,
                weeks: [
                    { id: "ms-2-1", week: "3", goal: "Find Your First Clients.", learnings: ["Freelance Platforms (Upwork, Fiverr)", "Cold Outreach", "Leveraging Your Network", "Simple Contracts"], resources: [{ name: "How to Get UNLIMITED Freelance Clients: Cold Outreach Sales Explained!", url: "https://youtu.be/yPTdkVXuzHk?si=GoQvM_h2Fxg8JUyo" }], proofOfWork: "Send out 5 personalized pitches to potential clients or apply to 5 relevant freelance jobs." },
                    { id: "ms-2-2", week: "4", goal: "Start Building an Audience.", learnings: ["Choosing One Social Platform", "Creating Value-Driven Content", "Engaging with Your Community", "Intro to Lead Magnets"], resources: [{ name: "How to Master Social Media in 2025 ", url: "https://youtu.be/E6ZSIZ89Ekg?si=XusiaT_rDMzuB2bD" }], proofOfWork: "Post 3 pieces of content related to your skill on your chosen platform, aimed at helping your ideal client/customer." }
                ]
            }
        ]
    },
    "time-management-productivity": {
        title: "Time Management & Productivity",
        description: "Master techniques to stop procrastinating, prioritize effectively, and achieve your goals faster.",
        totalDuration: "2-3 Months",
        icon: Clock,
        category: "Soft Skills",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?q=80&w=2076&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Foundations of Productivity (Weeks 1-4)",
                icon: GraduationCap,
                weeks: [
                    { id: "pdt-1-1", week: "1-2", goal: "Understand and Prioritize Tasks.", learnings: ["Eisenhower Matrix (Urgent/Important)", "The Ivy Lee Method", "Goal Setting (SMART)"], resources: [{ name: "How To Prioritize An Ever Changing To do List ", url: "https://youtu.be/uIcELnc6_ao?si=esa38FE0UsptfN9I" }], proofOfWork: "Use the Eisenhower Matrix for one week to categorize all your tasks. At the end of the week, reflect on how it changed your focus." },
                    { id: "pdt-1-2", week: "3-4", goal: "Master a Time Management Technique.", learnings: ["The Pomodoro Technique", "Time Blocking", "The 2-Minute Rule"], resources: [{ name: "Beginner's Guide to The Pomodoro Technique", url: "https://youtu.be/z1BvrkPF2LE?si=lIvy4YWsR_HKrPaP" }], proofOfWork: "Apply the Pomodoro Technique to your study or work sessions for one week. Track your focused time and the number of Pomodoros completed each day." }
                ]
            },
            {
                title: "Phase 2: Building Systems & Habits (Weeks 5-8)",
                icon: Building,
                weeks: [
                    { id: "pdt-2-1", week: "5-6", goal: "Overcome Procrastination.", learnings: ["Identifying Procrastination Triggers", "Breaking Down Large Tasks", "Creating a 'Done' List"], resources: [{ name: "The Science of Procrastination by AsapSCIENCE", url: "https://www.youtube.com/watch?v=1nBwfZZvjKo" }], proofOfWork: "Identify your biggest procrastination trigger. Create a simple, actionable plan to overcome it the next time it appears." },
                    { id: "pdt-2-2", week: "7-8", goal: "Build a Digital Productivity System.", learnings: ["Using a Task Manager (e.g., Todoist, Notion)", "Calendar Management", "Digital Note-Taking"], resources: [{ name: "My Simple & Easy Productivity System (for lazy people)", url: "https://youtu.be/uVJyEZbePVc?si=2bNcjJXU2AN4Ch8W" }], proofOfWork: "Set up a digital task manager and calendar. Plan your entire next week using time blocking for all major tasks and appointments." }
                ]
            }
        ]
    },
    "mindfulness-stress-reduction": {
        title: "Mindfulness & Stress Reduction",
        description: "Learn meditation and mindfulness practices to reduce anxiety, improve focus, and manage stress in a high-pressure world.",
        totalDuration: "4 Weeks",
        icon: BrainCircuit,
        category: "Mind & Body",
        featured: false,
        coverImage: "https://th.bing.com/th/id/OIP.gz0rVZ9sHX5-2KE0QGhOkAHaDt?w=347&h=175&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        phases: [
            {
                title: "Phase 1: Introduction to Mindfulness (Weeks 1-2)",
                icon: Feather,
                weeks: [
                    { id: "pdm-1-1", week: "1", goal: "Practice Mindful Breathing.", learnings: ["Basic Breath Meditation", "Noticing Thoughts Without Judgment", "Setting a Routine"], resources: [{ name: "10-Minute Meditation For Beginners by Goodful", url: "https://www.youtube.com/watch?v=O-6f5wQXSu8" }], proofOfWork: "Complete a 5-10 minute guided breathing meditation every day for one week. Journal your experience after each session." },
                    { id: "pdm-1-2", week: "2", goal: "Learn the Body Scan Technique.", learnings: ["Connecting Mind and Body", "Releasing Physical Tension", "Developing Sensory Awareness"], resources: [{ name: "Body Scan - Mindfulness meditation", url: "https://youtu.be/KR29AU-fA7I?si=3RPnhNpgds26qYfF" }], proofOfWork: "Perform a guided body scan meditation at least 4 times this week, especially before sleep or during moments of stress." }
                ]
            },
            {
                title: "Phase 2: Applying Mindfulness (Weeks 3-4)",
                icon: Zap,
                weeks: [
                    { id: "pdm-2-1", week: "3", goal: "Practice Mindful Walking & Eating.", learnings: ["Engaging Senses in Daily Activities", "Slowing Down", "Finding Presence in the Mundane"], resources: [{ name: "Mindfulness of The Senses Meditation | Mindful Eating", url: "https://youtu.be/WFVswnfMWSg?si=YYVcpIP5k4NndDoS" }], proofOfWork: "Dedicate one meal this week to mindful eating, paying full attention to the taste, texture, and smell. Go for a 15-minute mindful walk without any distractions (phone, music)." },
                    { id: "pdm-2-2", week: "4", goal: "Use Mindfulness for Stress.", learnings: ["The S.T.O.P. Technique", "Responding vs. Reacting", "Cultivating a Calm Mindset"], resources: [{ name: "5 Minute Meditation - Mindfulness Exercise for Mental Health", url: "https://youtu.be/QBKhqDtlMdc?si=F8gN2MAdRWdYQDKX" }], proofOfWork: "The next time you feel stressed or overwhelmed, use the S.T.O.P. (Stop, Take a breath, Observe, Proceed) technique to pause and recenter yourself before reacting." }
                ]
            }
        ]
    },
    "critical-thinking-problem-solving": {
        title: "Critical Thinking & Problem Solving",
        description: "Develop the ability to analyze complex problems, identify logical fallacies, and make well-reasoned decisions.",
        totalDuration: "3-4 Months",
        icon: BrainCircuit,
        category: "Soft Skills",
        featured: false,
        coverImage: "https://th.bing.com/th/id/OIP.xOFt_yOzN20qxBv16wy47wHaEu?w=289&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        phases: [
            {
                title: "Phase 1: Foundations of Critical Thinking (Weeks 1-4)",
                icon: Search,
                weeks: [
                    { id: "pd-ct-1-1", week: "1-2", goal: "Understand Cognitive Biases.", learnings: ["Confirmation Bias", "Anchoring Bias", "Sunk Cost Fallacy", "Dunning-Kruger Effect"], resources: [{ name: "Cognitive Biases 101: How They Impact Users, Research, and Teams with STÉPHANIE WALTER April 2025", url: "https://youtu.be/n4wif954OWI?si=Ij5H7tzCb5BbO_cj" }], proofOfWork: "Identify and write down three cognitive biases you've observed in yourself or others this week. Explain how they affected decision-making." },
                    { id: "pd-ct-1-2", week: "3-4", goal: "Learn to Deconstruct Arguments.", learnings: ["Identifying Premises & Conclusions", "Evaluating Evidence", "Spotting Logical Fallacies"], resources: [{ name: "How to Argue - Philosophical Reasoning by CrashCourse", url: "https://www.youtube.com/watch?v=NKEhdsnKKHs" }], proofOfWork: "Analyze a news article or opinion piece. Identify the main argument, the evidence used, and at least one potential logical fallacy." }
                ]
            },
            {
                title: "Phase 2: Practical Problem-Solving (Weeks 5-8)",
                icon: Lightbulb,
                weeks: [
                    { id: "pd-ct-2-1", week: "5-6", goal: "Master Problem-Solving Frameworks.", learnings: ["The 5 Whys", "Root Cause Analysis", "First Principles Thinking"], resources: [{ name: "First Principles Explained by Elon Musk", url: "https://www.youtube.com/watch?v=NV3sBlRgzTI" }], proofOfWork: "Choose a common problem you face (e.g., procrastinating on studying). Apply the '5 Whys' technique to find its root cause." },
                    { id: "pd-ct-2-2", week: "7-8", goal: "Develop Creative Solutions.", learnings: ["Brainstorming Techniques", "Lateral Thinking", "Thinking Outside the Box"], resources: [{ name: "6 Steps to Improve Your Critical Thinking by TED-Ed", url: "https://www.youtube.com/watch?v=dItUGF8GdTw" }], proofOfWork: "Take the problem from the previous week and brainstorm five unconventional solutions using lateral thinking techniques." }
                ]
            }
        ]
    },
    "emotional-intelligence": {
        title: "Emotional Intelligence (EQ)",
        description: "Learn to understand and manage your own emotions, and recognize and influence the emotions of others.",
        totalDuration: "3-4 Months",
        icon: HeartPulse,
        category: "Soft Skills",
        featured: true,
        coverImage: "https://th.bing.com/th/id/OIP.P2ainskoe5elvrZ53mAGkAHaEK?w=327&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        phases: [
            {
                title: "Phase 1: Self-Awareness & Self-Management (Weeks 1-4)",
                icon: User,
                weeks: [
                    { id: "pd-eq-1-1", week: "1-2", goal: "Identify Your Emotions.", learnings: ["Building an Emotional Vocabulary", "Journaling for Self-Reflection", "Recognizing Physical Cues of Emotions"], resources: [{ name: "Claim Your Emotions: How to Identify and Name What You're Feeling", url: "https://youtu.be/UMumIJTxXTI?si=9yAmVbflwwNNHAib" }], proofOfWork: "For one week, use a mood tracker app or a journal to log your emotions three times a day. Note the situation that triggered the emotion." },
                    { id: "pd-eq-1-2", week: "3-4", goal: "Manage Your Emotional Responses.", learnings: ["The Pause: Responding vs. Reacting", "Stress Management Techniques", "Reframing Negative Thoughts"], resources: [{ name: "Manage Your Emotions and Stop Overthinking", url: "https://youtu.be/Yh_KUOSeLus?si=wlw29KLDLnhwIYyE" }], proofOfWork: "The next time you feel a strong negative emotion, consciously take a 10-second pause before responding. Note how this changes the outcome." }
                ]
            },
            {
                title: "Phase 2: Social Awareness & Relationship Management (Weeks 5-8)",
                icon: Users,
                weeks: [
                    { id: "pd-eq-2-1", week: "5-6", goal: "Develop Empathy.", learnings: ["Active Listening for Emotions", "Understanding Different Perspectives", "Reading Body Language"], resources: [{ name: "The Power of Empathy by Brené Brown", url: "https://www.youtube.com/watch?v=1Evwgu369Jw" }], proofOfWork: "In your next conversation with a friend, focus on understanding their feelings, not just their words. Try to paraphrase their emotional state back to them (e.g., 'It sounds like you felt really frustrated')." },
                    { id: "pd-eq-2-2", week: "7-8", goal: "Build Stronger Relationships.", learnings: ["Constructive Conflict Resolution", "Giving and Receiving Feedback", "Building Rapport"], resources: [{ name: "Mastering Conflict Resolution & Team Building: Strategies for a Harmonious Workplace", url: "https://www.youtube.com/live/r3Xa-laOQDs?si=QbpjcZtcxqkV9Fhp" }], proofOfWork: "Identify a minor conflict or disagreement and approach it with the goal of mutual understanding rather than winning the argument." }
                ]
            }
        ]
    },
    "habit-formation-discipline": {
        title: "Habit Formation & Discipline",
        description: "Dive into the science of building good habits and breaking bad ones to create lasting positive change.",
        totalDuration: "2-3 Months",
        icon: CheckCircle,
        category: "Productivity",
        featured: true,
        coverImage: "https://th.bing.com/th/id/OIP.Rc3VSbNqT28vcfXWgxubbwHaEK?w=293&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        phases: [
            {
                title: "Phase 1: The Science of Habits (Weeks 1-4)",
                icon: FlaskConical,
                weeks: [
                    { id: "pd-h-1-1", week: "1-2", goal: "Understand the Habit Loop.", learnings: ["Cue, Craving, Response, Reward", "How Habits are Formed in the Brain", "Identifying Your Own Habit Loops"], resources: [{ name: "The Habit Theory That Will Change Your Life in 2025 (1% Rule Explained)", url: "https://youtu.be/nzZ-kzKWvPw?si=rXxsA8qivRkkzHGD" }], proofOfWork: "Choose one bad habit you want to change. For one week, track and identify the Cue, Routine, and Reward for that habit." },
                    { id: "pd-h-1-2", week: "3-4", goal: "Learn the Four Laws of Behavior Change.", learnings: ["Make it Obvious (Cue)", "Make it Attractive (Craving)", "Make it Easy (Response)", "Make it Satisfying (Reward)"], resources: [{ name: "Atomic Habits by James Clear (Animated Summary)", url: "https://www.youtube.com/watch?v=PZ7lDrwYdZc" }], proofOfWork: "Choose one new good habit you want to build. Apply the Four Laws to design a system that makes it easier to perform." }
                ]
            },
            {
                title: "Phase 2: Building & Breaking Habits (Weeks 5-8)",
                icon: Zap,
                weeks: [
                    { id: "pd-h-2-1", week: "5-6", goal: "Design Your Environment for Success.", learnings: ["Environment Design", "The 'Two-Minute Rule'", "Habit Stacking", "Temptation Bundling"], resources: [{ name: "Temptation Bundling | The Key to Building Consistent Habits", url: "https://youtu.be/yecHRig8Esg?si=0uFSyQpOSxgeiIpz" }], proofOfWork: "Implement habit stacking by linking your new habit to an existing one (e.g., 'After I brush my teeth, I will meditate for one minute')." },
                    { id: "pd-h-2-2", week: "7-8", goal: "Overcoming Plateaus & Staying Consistent.", learnings: ["The 'Never Miss Twice' Rule", "Habit Tracking", "Identity-Based Habits", "Recovering from Failure"], resources: [{ name: "Atomic Habits: How to Get 1% Better Every Day - James Clear", url: "https://youtu.be/U_nzqnXWvSo?si=HzEiOzy1k08bVqKa" }], proofOfWork: "Set up a habit tracker for your new habit. Track your progress for two weeks and apply the 'never miss twice' rule if you slip up." }
                ]
            }
        ]
    },
    "negotiation-persuasion": {
        title: "Negotiation & Persuasion",
        description: "Build the skills to confidently negotiate salaries, deals, and advocate for your ideas effectively.",
        totalDuration: "3-4 Months",
        icon: Users,
        category: "Soft Skills",
        featured: true,
        coverImage: "https://th.bing.com/th/id/OIP.Y-6PxenWiZypd-mxs88sqgHaE8?w=255&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        phases: [
            {
                title: "Phase 1: Foundations of Persuasion (Weeks 1-4)",
                icon: Lightbulb,
                weeks: [
                    { id: "pd-np-1-1", week: "1-2", goal: "Learn the Principles of Influence.", learnings: ["Reciprocity", "Scarcity", "Authority", "Consistency", "Liking", "Social Proof"], resources: [{ name: "Science of Persuasion by Robert Cialdini", url: "https://www.youtube.com/watch?v=cFdCzN7RYbw" }], proofOfWork: "Analyze a TV commercial or online ad. Identify and explain which of the six principles of influence it uses to persuade the audience." },
                    { id: "pd-np-1-2", week: "3-4", goal: "Build a Persuasive Argument.", learnings: ["Structuring an Argument (Ethos, Pathos, Logos)", "Using Data & Logic", "Appealing to Emotions", "Establishing Credibility"], resources: [{ name: "The Art of Persuasive Speaking: Unlocking Ethos, Pathos, and Logos", url: "https://youtu.be/TGebTCIWYvo?si=O8ey5GNWPPnUGOFN" }], proofOfWork: "Write a one-page proposal to convince your college to adopt a new student program, using all three appeals (Ethos, Pathos, Logos)." }
                ]
            },
            {
                title: "Phase 2: Practical Negotiation (Weeks 5-8)",
                icon: Briefcase,
                weeks: [
                    { id: "pd-np-2-1", week: "5-6", goal: "Understand Negotiation Strategies.", learnings: ["BATNA (Best Alternative to a Negotiated Agreement)", "Win-Win vs. Win-Lose Outcomes", "Active Listening in Negotiation"], resources: [{ name: "Negotiation Tactics: Ace Your BATNA Strategy", url: "https://youtu.be/RsLPWeo32uk?si=JrRIwv7c_n1V0kDH" }], proofOfWork: "Before your next significant purchase, determine your BATNA. Write it down and stick to it during the negotiation." },
                    { id: "pd-np-2-2", week: "7-8", goal: "Handle Objections and Close.", learnings: ["Acknowledging Concerns", "Reframing Objections", "Finding Common Ground", "Knowing When to Walk Away"], resources: [{ name: "Sales Objection Masterclass: Overcome ANY objection", url: "https://youtu.be/kKKm7lEpEaE?si=lWll1uYxgPEJzb_-" }], proofOfWork: "Role-play a salary negotiation with a friend. Have them raise three objections, and practice responding to each one constructively." }
                ]
            }
        ]
    },
    "public-speaking-storytelling": {
        title: "Public Speaking & Storytelling",
        description: "Overcome stage fright and learn to deliver compelling presentations that captivate an audience.",
        totalDuration: "2-3 Months",
        icon: Mic,
        category: "Soft Skills",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Conquering Fear & Building Confidence (Weeks 1-4)",
                icon: ShieldCheck,
                weeks: [
                    { id: "pd-ps-1-1", week: "1-2", goal: "Manage Speaking Anxiety.", learnings: ["Understanding the Fear Response", "Breathing Techniques", "Practice & Preparation", "Positive Visualization"], resources: [{ name: "Public Speaking Anxiety Tips: 6 BEHAVIORAL Tips", url: "https://youtu.be/r47cctUxM?si=GSFZl_7qdBGc6T76" }], proofOfWork: "Record yourself giving a 1-minute talk on a topic you love. Do it three times, focusing on improving your confidence and reducing filler words each time." },
                    { id: "pd-ps-1-2", week: "3-4", goal: "Master Body Language & Voice.", learnings: ["Confident Posture", "Purposeful Gestures", "Vocal Variety (Pace, Pitch, Power)", "Making Eye Contact"], resources: [{ name: "The surprising secret to speaking with confidence by Caroline Goyder", url: "https://www.youtube.com/watch?v=a2MR5XbJtXU" }], proofOfWork: "Practice reading a short story aloud, experimenting with different vocal tones and paces to convey emotion. Record yourself to notice the difference." }
                ]
            },
            {
                title: "Phase 2: Crafting a Compelling Narrative (Weeks 5-8)",
                icon: PenSquare,
                weeks: [
                    { id: "pd-ps-2-1", week: "5-6", goal: "Learn the Art of Storytelling.", learnings: ["The Story Arc (Beginning, Middle, End)", "Creating a Relatable 'Character'", "Using Anecdotes and Metaphors"], resources: [{ name: "The magical science of storytelling by David JP Phillips", url: "https://www.youtube.com/watch?v=Nj-hdQMa3uA" }], proofOfWork: "Write a 3-minute personal story that has a clear message or lesson. Practice telling it to a friend." },
                    { id: "pd-ps-2-2", week: "7-8", goal: "Structure Your Presentation.", learnings: ["The Hook: Grabbing Attention", "Organizing Key Points", "Creating a Memorable Closing", "Designing Simple, Effective Slides"], resources: [{ name: "How to Start a Speech by Conor Neill", url: "https://www.youtube.com/watch?v=w82a1FT5o88" }], proofOfWork: "Create a 5-slide presentation for your 3-minute story, focusing on one key idea per slide. Practice delivering the full presentation." }
                ]
            }
        ]
    },
    "creative-thinking": {
        title: "Creative Thinking",
        description: "Learn techniques to brainstorm innovative ideas and approach problems from unconventional angles.",
        totalDuration: "4-6 Weeks",
        icon: Lightbulb,
        category: "Soft Skills",
        featured: false,
        coverImage: "https://th.bing.com/th/id/OIP.MVv5pTNxOIukduVGm6OvbAHaEJ?w=321&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        phases: [
            {
                title: "Phase 1: Breaking Mental Barriers (Weeks 1-2)",
                icon: Zap,
                weeks: [
                    { id: "pd-cr-1-1", week: "1", goal: "Challenge Your Assumptions.", learnings: ["Questioning the Status Quo", "The 'What If' Technique", "Avoiding Functional Fixedness"], resources: [{ name: "Creative thinking - how to get out of the box and generate ideas by Giovanni Corazza", url: "https://www.youtube.com/watch?v=bEusrD8g-dM" }], proofOfWork: "Take a common object (like a paperclip) and brainstorm 25 unconventional uses for it." },
                    { id: "pd-cr-1-2", week: "2", goal: "Practice Divergent Thinking.", learnings: ["Brainstorming & Mind Mapping", "SCAMPER Technique", "Generating Quantity Over Quality"], resources: [{ name: "Mastering Divergent Thinking Skills", url: "https://youtu.be/1meEhB6HLWc?si=Uad_f2kLj4eOXSX0" }], proofOfWork: "Choose a simple problem (e.g., 'how to make grocery shopping more efficient') and create a mind map with at least 20 different ideas." }
                ]
            },
            {
                title: "Phase 2: Structuring Creativity (Weeks 3-4)",
                icon: PenTool,
                weeks: [
                    { id: "pd-cr-2-1", week: "3", goal: "Learn to Connect Ideas.", learnings: ["Analogical Thinking", "Combining Unrelated Concepts", "Building an 'Idea Bank'"], resources: [{ name: "Where good ideas come from by Steven Johnson", url: "https://www.youtube.com/watch?v=NugRZGDbPFU" }], proofOfWork: "Open a dictionary to two random words. Spend 15 minutes trying to find a novel connection or create a new product/service that combines them." },
                    { id: "pd-cr-2-2", week: "4", goal: "Refine and Select Ideas.", learnings: ["Convergent Thinking", "Pro-Con-Interesting (PCI) Analysis", "Prototyping and Testing Ideas"], resources: [{ name: "The Design Thinking Process Broken Down Step-by-Step", url: "https://youtu.be/McTh-xzxfRE?si=63t3aFmItmBVSON2" }], proofOfWork: "Take your mind map from Week 2 and use a PCI analysis to select the top 3 most promising ideas." }
                ]
            }
        ]
    },
    "networking-relationship-building": {
        title: "Networking & Relationship Building",
        description: "Master the art of building and maintaining a strong professional network for long-term career success.",
        totalDuration: "4-6 Weeks",
        icon: Users,
        category: "Career Skills",
        featured: false,
        coverImage: "https://th.bing.com/th/id/OIP.rW7jHQnnE-f63tGRgzCk2QHaE8?w=240&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        phases: [
            {
                title: "Phase 1: Mindset & Preparation (Weeks 1-2)",
                icon: User,
                weeks: [
                    { id: "pd-n-1-1", week: "1", goal: "Develop a Networking Mindset.", learnings: ["Giving vs. Taking", "Building Genuine Connections", "Overcoming Shyness"], resources: [{ name: "How to Network by Simon Sinek", url: "https://www.youtube.com/watch?v=p1n2Q22-s-0" }], proofOfWork: "Identify 5 people in your field you admire. Research their work and find one genuine reason you'd want to connect with each of them." },
                    { id: "pd-n-1-2", week: "2", goal: "Craft Your Elevator Pitch.", learnings: ["Who You Are", "What You Do", "What You're Looking For", "Tailoring it to the Audience"], resources: [{ name: "How to Craft an Elevator Pitch by Indeed", url: "https://www.youtube.com/watch?v=3-a1g8D44A4" }], proofOfWork: "Write and practice a 30-second elevator pitch that you can confidently deliver." }
                ]
            },
            {
                title: "Phase 2: Action & Maintenance (Weeks 3-4)",
                icon: Link,
                weeks: [
                    { id: "pd-n-2-1", week: "3", goal: "Engage in Online & Offline Networking.", learnings: ["Optimizing Your LinkedIn Profile", "Informational Interviews", "Attending Meetups/Events"], resources: [{ name: "How to LinkedIn by Andrew LaCivita", url: "https://www.youtube.com/watch?v=mGga9g2-yF2w" }], proofOfWork: "Send personalized connection requests on LinkedIn to 5 people. Attend one virtual or in-person meetup related to your field." },
                    { id: "pd-n-2-2", week: "4", goal: "Follow Up and Maintain Relationships.", learnings: ["The Importance of Following Up", "Providing Value to Your Network", "Keeping in Touch Authentically"], resources: [{ name: "How to Follow Up After Networking by Valuetainment", url: "https://www.youtube.com/watch?v=T_2hH_g6-4U" }], proofOfWork: "Send a follow-up email or message to at least one person you connected with this week, referencing your conversation and offering something of value (e.g., an interesting article)." }
                ]
            }
        ]
    },
    "resilience-mental-toughness": {
        title: "Resilience & Mental Toughness",
        description: "Develop the psychological strength to bounce back from setbacks, handle pressure, and stay motivated through challenges.",
        totalDuration: "4-6 Weeks",
        icon: ShieldCheck,
        category: "Mind & Body",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Building a Resilient Mindset (Weeks 1-2)",
                icon: BrainCircuit,
                weeks: [
                    { id: "pd-r-1-1", week: "1", goal: "Understand the Growth Mindset.", learnings: ["Fixed vs. Growth Mindset", "Embracing Challenges", "Learning from Failure"], resources: [{ name: "The power of believing that you can improve | Carol Dweck | TED", url: "https://youtu.be/_X0mgOOSpLU?si=Wx7NC_MeFmfSYGo0" }], proofOfWork: "Identify one area where you have a fixed mindset. For one week, consciously reframe negative self-talk in that area into growth-oriented statements." },
                    { id: "pd-r-1-2", week: "2", goal: "Practice Self-Compassion.", learnings: ["The Three Components of Self-Compassion", "Mindfulness for Self-Kindness", "Common Humanity"], resources: [{ name: "The Space Between Self-Esteem and Self Compassion by Kristin Neff", url: "https://www.youtube.com/watch?v=IvtZBUSplr4" }], proofOfWork: "The next time you make a mistake, write down what you would say to a good friend in the same situation. Then, direct those same words of kindness to yourself." }
                ]
            },
            {
                title: "Phase 2: Developing Coping Mechanisms (Weeks 3-4)",
                icon: HeartPulse,
                weeks: [
                    { id: "pd-r-2-1", week: "3", goal: "Manage Stressful Situations.", learnings: ["Stoic Principles (Control vs. No Control)", "Cognitive Reframing", "Problem-Focused vs. Emotion-Focused Coping"], resources: [{ name: "Stoicism as a philosophy for an ordinary life by Massimo Pigliucci", url: "https://www.youtube.com/watch?v=R9OCA6UFE-0" }], proofOfWork: "Identify a current stressor. Write down which aspects you can control and which you cannot. Create one small, actionable step to address an aspect you can control." },
                    { id: "pd-r-2-2", week: "4", goal: "Build a Support System.", learnings: ["Identifying Supportive People", "Asking for Help", "Setting Boundaries"], resources: [{ name: "How To Set Healthy Boundaries In Relationships In 2025", url: "https://youtu.be/1i4dFHQcdr0?si=0FV_8mvNOYfj4sKD" }], proofOfWork: "Reach out to one person in your support system this week just to check in and strengthen the connection. No agenda needed." }
                ]
            }
        ]
    },
    "decision-making": {
        title: "Decision Making",
        description: "Learn frameworks and mental models to make clear, effective, and confident decisions in your personal and professional life.",
        totalDuration: "4-6 Weeks",
        icon: Milestone,
        category: "Soft Skills",
        featured: false,
        coverImage: "data:image/webp;base64,UklGRh4PAABXRUJQVlA4IBIPAAAQYQCdASqJARUBPp1MoEylpCarIfJ6GWATiWdu4EeZhXi4uebd9J9u3He/WP4y0PTui4nenA89ksshAB3rczX7rY0TzPfv1D+mcrzyTWcC+3i0nqdS3JWAxF6mrOR/+8YmYmpULSTMzgaioieqbbbDsUQDiUhVRBtvkv+7RD7EolxwzW354r+FROm/gevBOx9t0s9qjs8GP50djowc/SfLozf+O4fOe7DDOCgB6qfCZiYWQGec1CQ3UrlV3M1S2PWrVup7IkCtUiQLBle6lZEBvPX29a98QnBJvWXfrDDv41ZWY16U2+OMoqxOxTYzBy66pT6GRJFMde7T8+0xeeOK0HQ7izSnV/hpOHey0cf4J2TXC7IlSPbjE6RLVG/P+fcOkq54QqftbDwk+bRpcELJVFnPHQ/FuM69dpRuHSNAcsK8HO4ZythjWELJCE2Qymzy6qd48nmHmpFirCIfWYmp4WiFG3Mczw09QazSHDoDwIMTJLF+/fJPhMsA29VMhaxBEai4/L4JS8/npthnZ//nWl1nGBV4aXsh5YkddJgKKj9DZp1vXf2MR2iaQwtOXoewdbn3cX8lxb/BILs7Xzc825OteppUkSgTtvl9FNn25BEj/M+vIQzrZ9IJhPJG1hAYp9ntPESUf2DxVN35Hy0x4qBgJLmXOg+HwagI2JhOUy+j4ep282jPHpRVNXVKacL+rzqBI+Yo7ouoZPKzBoTfpdZmUD8BuSK9lEhLmdFvvO2RpOsjT9xXXui5i0QjkGNnEM7TXDs/QCpjbAnA+jOPitPkz//SlJNRvVrHG9Fne7KJPTyk9ip1WQvxMx9O6c6EvyB7AmHjGLnNNl/FG9CZLoJv252a3Y33JElhnolfDyxew5e3NS2Zs6ep804KNvW/nc0bPbcNZHxaTb1V50WpKzwRtec/7z3i0nrJX/nq/0+r7/rSvRJwacz6eoTkUeK+rOqq0xWZrlnQjuzecF1fmmC7fubF9RjA7jJPeLRJrA6dTyHsQP94pPqqWpR1WfDMZSjyqDBmS9hW+1kniarFAADkOuigHfK0VlL//X3lDsTH0WLdpD1zw8OP4cEBl0Svbz+2BVnQUm7g8j6EmSSPGyZPI8Lw/4HhcRYG0J2ohyhNCleXyzD329dWN35zK8neh6wD6IYosrBrb9A0Ef/3sQPLkdoo0xO0QTBBwFyuutnEoXEvBqXYMPfYMj9TavbQr6nzhRFLZm/SsfQnHAMBm3yJr3zbKjrle3YtRwwjdvKRQIUr07sZsfUchLiF1DKTk1eBNJrZP5LA+rjKzTlDCii79MBhS+apVM1We3VG/LYDee7Yldq3+1dSP5zjYA4C1mtWTDqVnhpHtlKlIhOynjFXPMP5sIlJs9gEUSLHynH3ljAy7Yy9mtTE/M1hxtwS/5McaEvj/QIOFQGAU2QLsY89X0DbDNDYp5HwBGKhwn3wPIkfey3j0dCjmxpwm56JuACrFow/UcSQL+obTEW6HqRnRqp9A26HlXeoptSsB8XK5HO5mzDbgLHnGWWWgAVIAfWbmp6eWsgDuMhH7fg6QY9EkZEZvwrKa1heoCyq7v0I/paj3E2IOmEOBOHj/oi7m5+uyU0dwEyHQyWB4vrKWGbZPZ0bzrQi5xAP0/ZhtBbi9Rtn/ZCkPBJs4OgFkNZky06DUQPFD8ngLQWEk65pi8cxyQbyAoev0jct6hzQij5sqA/ZDmtw2OBvXl40x2Bm2IdVzRzN0jY9Zqkav8VEVldf6W+huHBcon8Q2A3nc3eyzv8ikHdr6PHG/Caopm11/6I7nXsJQbLoxsDJ1Wn+0vmUe6RvEBhr5NItkbWs0MeNBhB1/oiMvA7jPOcWopZ0ljMBIlgnwKF0935fxRR9s5aAjQyLnaEZj7o20/n0nf/i6h7L64iMMTW1K9TAq/me58+paM9N8tRE/gVYr69SN4OMWXMIt20Oh6IrXxvD/OPRns+X2ZiDdnF/2oVHSqMnoYfZSenaKrM3lkrtS16kIDiJv1tnlbA2pfC1KhXoZXTXvTeLfyHJQvd/a+roDRvVVbn6E4TLU/+V0q5/qfc5iTzQoSkDCSFZA5dx+rAAFzjJQ1Xup9IVoVb40WLRUIB9CU7+0YxHeVKcp65BplnuZTgxgq6U/qh74q8bXrMqnz3AUq6Kf05+aC+iyQPVHy+P+XbfD66w4Mk1W5xcH0tHr5t7fiIp6Fvde2hw/W9dPTAXyVA5BxeCLD5WGI/3X7jG/bvYZOt9vqo3M9X0ueJFSXoiUCncauCEsSyRyYE+FCD/xePm+eYKgBA1/I/7+dRXzYH/ErZ6aZjZaHuJiyq4621M5iDjqOHnf5umbsKt/s8N/bFhwEQehQoSlZkThFsAtiPd7GG5VrKrHt+nPXAQwnPQwnY4RsNAfMN5BUJ/4lwQgNJwhCHXHsAUjuuA8udQvBH/FYvZt/alrV5n51MJWBGgAW8YTd5gGCVS2ooTw87ZoNH2tE5t8sWm/WkTvsWZqrEr5vkHZOLYZ9wRh7MrLixaVJXIFVgY0anl48et2kAxZKeGentzq/wIhU6BCXeF9AXQtrAnlWWOt0oJOdy19Rwi0/zlxAvN5eGGFirfe5/XaI01e/bdlkGMEjFfyw6a9iY5mYlt/Gx9H6908HPQSMwLnS9wHxCg0syWWS9PqTY3qa4SEjftVeEgQKxcHE33JcPlHgESi+UtzTRUEdVST+ZYclF+EPXDWWMj7F8tv/3VQHb9wZjA9cvuqTkiMipFwIESHpR+F7yNjdbzuBoAFNZRSoeFm3XgQApVxAZsgUEN4OJBDGLjNzytj/LfgRwlWTi3kCRq1rul1iz1ZGunh9Z1CC8V6JCbksnxvwTJiqey5houlMMjY76DU4fBflRGAKGusFHu+UI3IFU1g5YcjOwyqt1KGugdMnsZAovkMJIoGZ/KuYXpnSv/8Io5MPdACAdXRTrJNPBNYa2E93nBOFW65nHv1/rgMe5wtWY3JF6/oxwev+e3mu0fRbl64DV0OnYb1tFfpC6BzhLsB2rN/ezzDRANHvpq2s90ny7vYrzt2qSsHPUEqEcduhDMSVP3UcPNrQYKB7csdTMil3kTH4PblPocobfUpOD+n11X1LqpVGa3KBEE8j3ZRdaN7xE6hYqfHqQFlscQuKolOhrISQRa/z501Kd7uQBoKFJK2HvRoVRiwWAnjrzNnTkk8VkFYw7sJRn7QqBasqS0KF/br6ZHRNTUmPHt05FIkDrMz05pHeb0CVLX+NMp5bASfhXffLSGlDjmQRJW13zfmuHdO7TCfoxYyJRS0koQ3ctVNxddsZUXiIYtntPFToxLinZ5XUHuVtenUD6XLNAJK3cLIJLRJFNkaGpPsIwYgAXIMAk4fNWntz8xgWyNlxveQ8jQ2JG+8QXz+cL2Wl7bhgc9juxlyVDueyR3QeeAoPYQMsUTIo69GJ45d8Qa0K4MwfPamVY6zzuV+cX8SLGtld5b8THOPFNrvSWRlxYJ3s2+Rc+H6y3fR2syBlXn+7YkUHgWxE+5A//M+kQvjKXr9ZLebKsG3jyNzS1cZz+Nd20J1x5/S7Aiz6NN01eW5q3I3uzRgLBa3aaArms3LdEtlOHbUIaBi/UmS/Nd5qR2ay6NU8jG8Rk1CIhvhvFl9idMcBUtUqZc8dVR8OhPhx0oN1KR2lnjnnjYwQJrdr5mbXctMSnsrlrlWHPzh3fsCgWQBSBd2nq+yfPc1OX3gDCnXzHX3/FsTrEhhw9P1r33i0BI3ZCEg6uG0kjw4PE9heDm3RJ0ZkkFdW5G867Y6DSKqt+4PFsaatQHYtQbUEQy6MuVLHvAkuOeq6EcgRNSpN95Lm12XpYTpNKSh+baYjmggNF/AYq7p05eaS2rgE+iZ8gCgEtM2QtqwEZWphALtV8vI1u2vu1vmwws/CL/SiRmv+UK6HOJpXJ332ABUP1PrtQjrXxA2BTre5Dkb29Olo6Kv8JVtQelgCrLZKUuY0pqP6ElF4L+Y7qvtBqv9bBSs4exy9TpwAHUk0xbkV6BsOe2g3ypp966no8p/4AHtCG4O0uNZqwvkrrRWf2lR4hU/IqtdOrg6MiWzKzV9mVs2uRLptOk4QDQ82nlMX3XZzwZiXS5NIKAljAGQ7WkcSjfrtnYzE5yW5KiR/RZsYWstnMnXomUnXoEFDvWWwz4eHCQ5xza9jInsL2dA2n6TjHzgkRgbJUSBpcjP41MUEqrR3CFYSuCpzWvlzNDt+Nyx5qSuLA4u+62g1FdCP8IjBKJ2llPa1Y+nfXSLpgXxjJ3ney8dBgkBHTBEtYdmD1TLy+D+FcYP8jyhCzDiVKMs+QFLaehG2S0623wVuyQRiqAnYsgThaSOzQ7cHW2ZuagEg3i5UYRowjAqF70yRnFKS35DglWMFJcXkIn4VIFGUuCKqDEfvTRl7qQFkeLXAxcSU1DzKISla21cWN6Kx4XAkL/51jCKbfk9Ln+NfVIu11v6GBCRfeiX6vI4v4VGvEGc5uY4I19p6PME+WOnzBl53evmCdS/PTZPzTG8FcnTioKieCAfD1C+UgAnMOmQ4Kt4ehA4h+3XbhoFRAxVCh1EeNl1mjYRUIuoJlYiSeCb5XqOQ91khqN2FblUBDGFZ4AMNvtZVgQqlTfYM8ORRBgNdKIAVhAQFnmDjkhg75MQuUK6LPQZJC/0v58ke4v/rpWft+HXmO+iN97XXvTuR/BIcGUn+bMbHSgbllr0sHQU51yUFbS67Z+KdE4xR8rb0Gf061c6Tz1PIRkjLnZFqWo2S8RdMEiBfw1BAhZW7QytQiJLfXL85fgPWSCBfPhHHEpn+fndNXyzxiK5RtK9lsLAb4rrLvglxpfjaWPSwadQW2LeTJP1lCLo3LsONetExRH23VCbMO2oM8rEs+PJGDL01zmPxlu7v0I9JBIHOJAhUZjVQHo5Ahda7UNk5LtsjHXuPDXA56YZyyaExNawpjQwgRfQcG0RwOPq/das50FskaO2bKQ7/Zlf1QpjmQGjejBhOQEYhkTsnkKBW+Z5apXoJ0njqC9YhM4UT3PLivmiDC10YTiJqwOc8Qz0SDYUpgt8wr76ZaQrpbiyGgmKiJkbMg8K7dIbsypbcYEnaoYPMJCQSryI69QhHRVagdkFc3RnMIKPuEAAAA=",
        phases: [
            {
                title: "Phase 1: Frameworks for Clarity (Weeks 1-2)",
                icon: GitBranch,
                weeks: [
                    { id: "pd-dm-1-1", week: "1", goal: "Use Mental Models.", learnings: ["Second-Order Thinking", "Inversion", "Occam's Razor"], resources: [{ name: "Mental Models by Farnam Street", url: "https://fs.blog/mental-models/" }], proofOfWork: "For a decision you're currently facing, apply second-order thinking. Map out the potential immediate, secondary, and tertiary consequences of your choice." },
                    { id: "pd-dm-1-2", week: "2", goal: "Apply Decision Matrices.", learnings: ["Pros and Cons List 2.0", "Weighted Decision Matrix", "Cost-Benefit Analysis"], resources: [{ name: "The Weighted Decision Matrix | Hello! Seiiti Arata 349", url: "https://youtu.be/26szxURl4bU?si=jzXf71Wp6arnT49T" }], proofOfWork: "Create a weighted decision matrix for a real-life choice (e.g., which online course to take, what project to start next)." }
                ]
            },
            {
                title: "Phase 2: Overcoming Biases & Taking Action (Weeks 3-4)",
                icon: CheckCircle,
                weeks: [
                    { id: "pd-dm-2-1", week: "3", goal: "Recognize and Mitigate Bias.", learnings: ["Confirmation Bias", "Analysis Paralysis", "Avoiding 'Groupthink'"], resources: [{ name: "Are you biased? by TED-Ed", url: "https://www.youtube.com/watch?v=wEwGBIr_RIw" }], proofOfWork: "Reflect on a past decision that went poorly. Identify at least one cognitive bias that may have influenced your choice and how you could avoid it in the future." },
                    { id: "pd-dm-2-2", week: "4", goal: "Make Reversible Decisions Faster.", learnings: ["Jeff Bezos' 'Two-Way Doors'", "The 'Satisficing' Principle", "Setting a Decision Deadline"], resources: [{ name: "Jeff Bezos' Decision-Making Strategy: 2-Way Doors and the Speed Advantage", url: "https://youtu.be/vPBzJMP5q8Q?si=GzcgVIPchv6YV3sP" }], proofOfWork: "Identify a small, reversible decision you've been putting off. Give yourself a 10-minute time limit to make the choice and act on it." }
                ]
            }
        ]
    },
    "communication-skills": {
        title: "Communication Skills",
        description: "Master the art of effective communication for personal and professional success.",
        totalDuration: "2-3 Months",
        icon: MessageSquare,
        category: "Soft Skills",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Foundational Skills (Weeks 1-3)",
                icon: GraduationCap,
                weeks: [
                    { id: "pd-c-1-1", week: "1", goal: "Master Active Listening.", learnings: ["Hearing vs. Listening", "Paraphrasing", "Non-verbal Cues"], resources: [{ name: "MASTER Active Listening: Top Tips for Success | JOE NAVARRO", url: "https://youtu.be/xwKVYFImiEA?si=Wb31ikQTgezGb3Wl" }], proofOfWork: "Have a 15-minute conversation with the sole goal of understanding. Summarize their points back to them." },
                    { id: "pd-c-1-2", week: "2-3", goal: "Develop Clarity & Conciseness.", learnings: ["Avoiding Filler Words", "Structuring Thoughts", "Clear Emails"], resources: [{ name: "How to Communicate Clearly and Concisely", url: "https://youtu.be/YJXUOJKtn8o?si=UtF1p1mLqsaQiR3a" }], proofOfWork: "Explain a complex topic in under 3 minutes. Write a clear, professional email requesting information." }
                ]
            },
            {
                title: "Phase 2: Confidence & Body Language (Weeks 4-6)",
                icon: Smile,
                weeks: [
                    { id: "pd-c-2-1", week: "4-5", goal: "Build Public Speaking Confidence.", learnings: ["Managing Anxiety", "Vocal Variety", "Storytelling"], resources: [{ name: "The Magical Science of Storytelling", url: "https://www.youtube.com/watch?v=Nj-hdQMa3uA" }], proofOfWork: "Record a 5-minute presentation, then review it for strengths and weaknesses." },
                    { id: "pd-c-2-2", week: "6", goal: "Master Confident Body Language.", learnings: ["Posture & Eye Contact", "Effective Gestures", "Projecting Confidence"], resources: [{ name: "Your Body Language May Shape Who You Are", url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc" }], proofOfWork: "Practice 'power posing' before an important conversation and note how you feel." }
                ]
            }
        ]
    },
    "leadership-skills": {
        title: "Leadership Skills",
        description: "Learn to inspire, motivate, and guide teams towards a common goal.",
        totalDuration: "3-4 Months",
        icon: Users,
        category: "Soft Skills",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2132&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Self-Leadership & Influence (Weeks 1-4)",
                icon: User,
                weeks: [
                    { id: "pd-l-1-1", week: "1-2", goal: "Develop Self-Awareness.", learnings: ["Understanding Your Strengths (e.g., CliftonStrengths)", "Emotional Intelligence", "Seeking Feedback"], resources: [{ name: "Developing Your Self-Awareness and Emotional Intelligence", url: "https://youtu.be/zg-0Vt3vqOY?si=bJe3xnuEQpJrJrun" }], proofOfWork: "Keep a journal for two weeks, noting your emotional responses to daily events. Identify one strength and one area for improvement." },
                    { id: "pd-l-1-2", week: "3-4", goal: "Learn to Influence and Motivate.", learnings: ["Principles of Persuasion", "Finding Intrinsic Motivators", "Building Trust"], resources: [{ name: "How Great Leaders Inspire Action by Simon Sinek", url: "https://www.youtube.com/watch?v=qp0HIF3SfI4" }], proofOfWork: "Convince a friend to try a new activity with you by focusing on the 'why' and what's in it for them." }
                ]
            },
            {
                title: "Phase 2: Team Leadership & Delegation (Weeks 5-8)",
                icon: Briefcase,
                weeks: [
                    { id: "pd-l-2-1", week: "5-6", goal: "Master Delegation.", learnings: ["Trusting Your Team", "Providing Clear Instructions", "Avoiding Micromanagement"], resources: [{ name: "Stop Doing It All Yourself: Master the Art of Delegation", url: "https://youtu.be/NKnycttDk2k?si=mXeV9koE7vG69vJ-" }], proofOfWork: "Delegate a significant task in a group project or at home. Provide clear instructions and check in, but don't micromanage the process." },
                    { id: "pd-l-2-2", week: "7-8", goal: "Learn to Give Effective Feedback.", learnings: ["Constructive Criticism", "The SBI (Situation-Behavior-Impact) Model", "Praise and Recognition"], resources: [{ name: "SBI Feedback Model Examples", url: "https://youtu.be/Q27eQvLZCzk?si=sjaZ2MbZmDuNha6b" }], proofOfWork: "Use the SBI model to give a piece of constructive feedback to a peer on a project." }
                ]
            }
        ]
    },
    "financial-literacy": {
        title: "Financial Literacy",
        description: "Master the fundamentals of personal finance to build a secure and prosperous future.",
        totalDuration: "2-3 Months",
        icon: DollarSign,
        category: "Life Skills",
        featured: true,
        coverImage: "https://th.bing.com/th/id/OIP.ngnDsPax2Di4iF1vTVX71wHaE8?w=222&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        phases: [
            {
                title: "Phase 1: Budgeting & Saving (Weeks 1-4)",
                icon: ClipboardCheck,
                weeks: [
                    { id: "pd-f-1-1", week: "1-2", goal: "Create a Personal Budget.", learnings: ["Tracking Income & Expenses", "50/30/20 Rule", "Using Budgeting Apps"], resources: [{ name: "PAISA kaise BUDGET, SAVE aur EARN Karein? | Ankur Warikoo | Money Management Tips | 50-30-20 Rule", url: "https://youtu.be/5uaXq-xDp2g?si=Zt316bJaPK2ZUHDL" }], proofOfWork: "Track all your expenses for two weeks and create a personal monthly budget using the 50/30/20 rule." },
                    { id: "pd-f-1-2", week: "3-4", goal: "Build an Emergency Fund.", learnings: ["Why You Need an Emergency Fund", "How Much to Save", "High-Yield Savings Accounts"], resources: [{ name: "How to build an emergency fund | Why emergency fund is important", url: "https://youtu.be/Ha9lytIWeGo?si=Yg_ngwVc23xGjgRa" }], proofOfWork: "Open a separate savings account and set up an automatic transfer to start building your emergency fund of 3-6 months of living expenses." }
                ]
            },
            {
                title: "Phase 2: Investing & Debt Management (Weeks 5-8)",
                icon: BarChart3,
                weeks: [
                    { id: "pd-f-2-1", week: "5-6", goal: "Understand Investing Basics.", learnings: ["Stocks vs. Bonds", "Index Funds & ETFs", "Compound Interest", "Risk Tolerance"], resources: [{ name: "How to Invest in Stocks For Beginners in 2025", url: "https://youtu.be/KQ7H2X0gEw4?si=tg2Vl8y3i87nLNch" }], proofOfWork: "Write a one-page summary explaining the concept of compound interest with a real-world example of how it can grow your money over time." },
                    { id: "pd-f-2-2", week: "7-8", goal: "Learn About Debt.", learnings: ["Good Debt vs. Bad Debt", "Credit Scores", "Debt Payoff Strategies (Avalanche vs. Snowball)"], resources: [{ name: "The FOUR best ways to pay off debt in 2025 - debt snowball isn’t for everyone", url: "https://youtu.be/I2raC-G8QgU?si=h-DZB2A1STuFt7Is" }], proofOfWork: "Calculate your debt-to-income ratio and choose a payoff strategy (Avalanche or Snowball) for any existing debt." }
                ]
            }
        ]
    }
};

const BOOKS_DATA = {
    "rich-dad-poor-dad": {
        title: "Rich Dad Poor Dad",
        author: "Robert T. Kiyosaki",
        icon: DollarSign,
        category: "Financial Literacy",
        featured: true,
        description: "Advocates for financial literacy and building wealth through investing in assets, real estate, and businesses.",
        coverImage: "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/jFNdARDCrKA?si=Oeeu0_FanzsQXhpR" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/2ikmtEpRooA?si=G3uQIA0n0AL2UvJX" }
        }
    },
    "atomic-habits": {
        title: "Atomic Habits",
        author: "James Clear",
        icon: Zap,
        category: "Productivity",
        featured: true,
        description: "An easy & proven way to build good habits & break bad ones. It offers a framework for improving every day.",
        coverImage: "https://m.media-amazon.com/images/I/81YkqyaFVEL._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Summary", url: "https://www.youtube.com/watch?v=PZ7lDrwYdZc" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/SFh60YWVqY4?si=BEIdYwclHggYbVr0" }
        }
    },
    "the-lean-startup": {
        title: "The Lean Startup",
        author: "Eric Ries",
        icon: Lightbulb,
        category: "Business & Tech",
        featured: true,
        description: "How today's entrepreneurs use continuous innovation to create radically successful businesses.",
        coverImage: "https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/179ymUGeJGA?si=UACSfkOlXBYzKqhU" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/Pz37eArf2Dw?si=jy1gksBKzMPkdBnM" }
        }
    },
    "thinking-fast-and-slow": {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        icon: BrainCircuit,
        category: "Psychology",
        featured: false,
        description: "A fascinating dive into the two systems that drive the way we think: the fast, intuitive System 1, and the slow, deliberate System 2.",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/FrYx-nOar5k?si=qpwrJmWJvs8CvLpp" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/A9euKisbe88?si=PXhzfdJlNAUAOZOG" }
        }
    },
    "sapiens": {
        title: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        icon: Users,
        category: "History & Big Picture",
        featured: false,
        description: "Explores the history of humankind, from the Stone Age to the present, and how Homo sapiens came to dominate the planet.",
        coverImage: "https://m.media-amazon.com/images/I/81nQ+oGgI3L._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/8WhWLtiogp4?si=Wr2gUAp-QkXkvPa1" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/DbRdZTP5xXU?si=Y1SQvyMYPSc8Lwa_" }
        }
    },
    "deep-work": {
        title: "Deep Work",
        author: "Cal Newport",
        icon: BrainCircuit,
        category: "Productivity",
        featured: true,
        description: "Argues that the ability to focus without distraction on a cognitively demanding task is a superpower in our economy.",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/W5XdzQCISDs?si=tzbwgyRdlVgQscry" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/uHbMJUBabEA?si=K33BrHHB7vr7c9cR" }
        }
    },
    "psychology-of-money": {
        title: "The Psychology of Money",
        author: "Morgan Housel",
        icon: DollarSign,
        category: "Financial Literacy",
        featured: true,
        description: "Teaches how to think about money in a way that's less about what you know and more about how you behave.",
        coverImage: "https://m.media-amazon.com/images/I/71g2ednj0JL._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/TJDcGv9OH4Q?si=HjQNc9Se_Ckfeqgf" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/92qIFXyMI20?si=Hu_jAVQH93IiiQ41" }
        }
    },
    "how-to-win-friends": {
        title: "How to Win Friends and Influence People",
        author: "Dale Carnegie",
        icon: Smile,
        category: "Soft Skills",
        featured: false,
        description: "A classic guide to improving your social skills and learning how to handle people, understand them, and become a more effective leader.",
        coverImage: "https://m.media-amazon.com/images/I/611OWa8x+WL._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/8SUiLkl42FQ?si=W1m5udwFxoJ9k2oI" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/PeaSp9Do-tA?si=Q_z7keVNydp2Bw34" }
        }
    },
    "zero-to-one": {
        title: "Zero to One",
        author: "Peter Thiel",
        icon: Milestone,
        category: "Business & Tech",
        featured: false,
        description: "A look at how to build a successful future by creating new things, arguing that progress comes from monopoly, not competition.",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/fdufh8DZtbg?si=YC-fRbjVfpXz03ws" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/ltOx7cWv7lg?si=0KI4r6WLB79Y-E3q" }
        }
    },
    "mans-search-for-meaning": {
        title: "Man's Search for Meaning",
        author: "Viktor Frankl",
        icon: Lightbulb,
        category: "Psychology",
        featured: false,
        description: "A psychiatrist's memoir of his time in Nazi concentration camps and his exploration of the human will to find meaning in suffering.",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/e9ihHT8RKeE?si=Rat3eukntLkmMkX6" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/LUkU7zk9agE?si=wvS9cwkviuBK_FrG" }
        }
    },
    "seven-habits": {
        title: "The 7 Habits of Highly Effective People",
        author: "Stephen Covey",
        icon: CheckCircle,
        category: "Productivity",
        featured: false,
        description: "A holistic, integrated, principle-centered approach for solving personal and professional problems.",
        videos: {
            english: { name: "English Summary", url: "https://www.youtube.com/watch?v=ktlTxC4QG8g" },
            telugu: { name: "Telugu Summary", url: "https://www.youtube.com/watch?v=zYyTBFzY-jA" }
        }
    },
    "mindset": {
        title: "Mindset: The New Psychology of Success",
        author: "Carol S. Dweck",
        icon: BrainCircuit,
        category: "Psychology",
        featured: false,
        description: "Explores the power of our mindset, distinguishing between a fixed mindset and a growth mindset and how it impacts success.",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/ryBHX0Nm_-E?si=g7XrFEWNmPnRnEsg" },
            telugu: { name: "Telugu Summary", url: "https://youtu.be/xuueWmjB9u8?si=-V8OqO84R-y-zj9a" }
        }
    },
    "cracking-the-coding-interview": {
        title: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        icon: CodeXml,
        category: "Career & Tech",
        featured: false,
        description: "The ultimate guide for software engineers to prepare for programming interviews at top tech companies.",
        coverImage: "https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg",
        videos: {
            english: { name: "English Overview", url: "https://youtu.be/WctclUYubJQ?si=9W1SWGGjdaq1uC1l" },
            telugu: { name: "English Interview Prep", url: "https://youtu.be/gXOnHw05BXQ?si=eJzdKaav0UFCwBkD" }
        }
    },
    "show-your-work": {
        title: "Show Your Work!",
        author: "Austin Kleon",
        icon: Eye,
        category: "Creativity",
        featured: false,
        description: "A guide for creative people on how to get discovered by sharing their process and being open about their work.",
        videos: {
            english: { name: "English Summary", url: "https://youtu.be/m3tyYkoXgPo?si=6Kca2QEbkCncnnD2" },
            telugu: { name: "English Summary", url: "https://youtu.be/myAWX-oLfRk?si=syzAFT40mrPbbnSN" }
        }
    }
};

const WORKOUT_DATA = {
    "mens-gym-strength": {
        title: "Men's Gym Workout",
        description: "A 4-week program designed to build muscle and increase strength using fundamental gym exercises.",
        totalDuration: "4 Weeks",
        icon: Dumbbell,
        category: "Gym",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1974&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Push/Pull/Legs Split (Weeks 1-4)",
                icon: Zap,
                weeks: [
                    { id: "mgw-1-1", week: "Day 1: Push", goal: "Build chest, shoulders, and triceps.", learnings: ["Barbell Bench Press", "Overhead Press", "Incline Dumbbell Press", "Tricep Pushdowns"], resources: [{ name: "The Ultimate Push Workout For Muscle Growth", url: "https://youtu.be/c3pbe3qzatQ?si=JrAVNlt6YaFMiZzU" }], proofOfWork: "Complete 3-4 sets of 8-12 reps for each exercise." },
                    { id: "mgw-1-2", week: "Day 2: Pull", goal: "Develop back and biceps.", learnings: ["Pull-ups (or Lat Pulldowns)", "Barbell Rows", "Face Pulls", "Bicep Curls"], resources: [{ name: "Best Pull Workout For 2025 ", url: "https://youtu.be/KV4D8MQrdhw?si=hOaHSpBuYc4dVekK" }], proofOfWork: "Complete 3-4 sets of 8-12 reps for each exercise." },
                    { id: "mgw-1-3", week: "Day 3: Legs", goal: "Build a strong lower body foundation.", learnings: ["Barbell Squats", "Romanian Deadlifts", "Leg Press", "Calf Raises"], resources: [{ name: "How to Perform the Squat - Proper Squats Form & Technique", url: "https://youtu.be/Dy28eq2PjcM?si=dFOQiQHpfahKR4vF" }], proofOfWork: "Complete 3-4 sets of 8-12 reps for each exercise." }
                ]
            }
        ]
    },
    "womens-gym-toning": {
        title: "Women's Gym Workout",
        description: "A 4-week workout plan focused on toning muscles and building functional strength.",
        totalDuration: "4 Weeks",
        icon: Feather,
        category: "Gym",
        featured: true,
        coverImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Full Body & Lower/Upper Split (Weeks 1-4)",
                icon: HeartPulse,
                weeks: [
                    { id: "wgw-1-1", week: "Day 1 & 3: Full Body", goal: "Engage all major muscle groups.", learnings: ["Goblet Squats", "Dumbbell Bench Press", "Dumbbell Rows", "Plank"], resources: [{ name: "30 MIN ALL STANDING FULL BODY WORKOUT - With Dumbbells (Strength, No Jumping)", url: "https://youtu.be/7WzCds5u8GI?si=6U_mVKGpdGnl9B-P" }], proofOfWork: "Complete 3 sets of 12-15 reps to focus on muscular endurance." },
                ]
            }
        ]
    },
    "cardio-blast": {
        title: "Cardio Blast",
        description: "A 4-week plan to improve cardiovascular health and endurance. Can be done at home or in the gym.",
        totalDuration: "4 Weeks",
        icon: Wind,
        category: "Cardio",
        featured: false,
        coverImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        phases: [
            {
                title: "Phase 1: Building Endurance (Weeks 1-4)",
                icon: Zap,
                weeks: [
                    { id: "cb-1-1", week: "Weeks 1-2 (3 days/week)", goal: "Build a steady-state cardio base.", learnings: ["Jogging/Running", "Cycling", "Stair climbing"], resources: [{ name: "Beginner Cardio Workout by POPSUGAR Fitness", url: "https://www.youtube.com/watch?v=VHyGqsPOUHs" }], proofOfWork: "Complete 20-30 minutes of continuous cardio at a moderate pace." },
                    { id: "cb-1-2", week: "Weeks 3-4 (3 days/week)", goal: "Introduce High-Intensity Interval Training (HIIT).", learnings: ["Burpees", "High Knees", "Jumping Jacks"], resources: [{ name: "30-Minute Full Body HIIT Session | Burpees, squats, lunges and plank jacks (no equipment)", url: "https://youtu.be/0cz0k7nnISs?si=jcTgz_GwMoR-G2Ni" }], proofOfWork: "Perform 30 seconds of high intensity work followed by 30 seconds of rest, for 15-20 minutes." }
                ]
            }
        ]
    },
    "at-home-bodyweight": {
        title: "At-Home Bodyweight Burn",
        description: "No equipment? No problem. A 4-week plan to build strength and get fit using only your bodyweight.",
        totalDuration: "4 Weeks",
        icon: Home,
        category: "Home Workouts",
        featured: true,
        coverImage: "https://th.bing.com/th/id/OIP.oPPvRvJzZJ15DkuTGX9byQHaE7?w=243&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        quote: "The body achieves what the mind believes.",
        phases: [
            {
                title: "Phase 1: Mastering the Basics (Weeks 1-4)",
                icon: HardHat,
                weeks: [
                    { id: "ahb-1-1", week: "Weeks 1-2 (3 days/week)", goal: "Build a foundation with core bodyweight exercises.", learnings: ["Air Squats", "Push-ups", "Glute Bridges", "Planks"], resources: [{ name: "20 Min Full Body Workout by MadFit", url: "https://www.youtube.com/watch?v=L_A_HjHZxfI" }], proofOfWork: "Focus on achieving 3 sets of 10-15 reps with perfect form." },
                    { id: "ahb-1-2", week: "Weeks 3-4 (3 days/week)", goal: "Increase difficulty with advanced variations.", learnings: ["Jump Squats", "Diamond Push-ups", "Single-leg Glute Bridges", "Mountain Climbers"], resources: [{ name: "15 Minute Fat Burning HIIT Workout | No Equipment | The Body Coach", url: "https://youtu.be/4wVG5J7vL-I?si=094NoeVW2FCpCCLu" }], proofOfWork: "Challenge yourself by increasing reps or reducing rest time between sets." }
                ]
            }
        ]
    },
    "mind-body-reset": {
        title: "Mind & Body Reset",
        description: "A 2-week introduction to yoga, stretching, and meditation to improve flexibility and reduce stress.",
        totalDuration: "2 Weeks",
        icon: Smile,
        category: "Mind & Body",
        featured: false,
        coverImage: "https://static.vecteezy.com/system/resources/thumbnails/027/718/168/small_2x/a-man-meditates-against-the-background-of-green-calm-nature-the-concept-of-yoga-self-knowledge-generative-ai-photo.jpg",
        quote: "A calm mind is the ultimate weapon against your challenges.",
        phases: [
            {
                title: "Phase 1: Flexibility & Mindfulness (Weeks 1-2)",
                icon: BrainCircuit,
                weeks: [
                    { id: "mbr-1-1", week: "Week 1 (Daily)", goal: "Learn foundational yoga poses and basic stretching.", learnings: ["Downward Dog", "Cat-Cow", "Warrior II", "Full Body Stretches"], resources: [{ name: "Yoga For Beginners by Yoga With Adriene", url: "https://www.youtube.com/watch?v=v7AYKMP6rOE" }], proofOfWork: "Complete a 20-minute beginner yoga or stretching session each day." },
                    { id: "mbr-1-2", week: "Week 2 (Daily)", goal: "Introduce guided meditation.", learnings: ["Mindful Breathing", "Body Scan Meditation", "Focusing on the Present"], resources: [{ name: "10-Minute Meditation For Beginners by Goodful", url: "https://www.youtube.com/watch?v=O-6f5wQXSu8" }], proofOfWork: "Practice a 5-10 minute guided meditation session each day." }
                ]
            }
        ]
    },
    "30-day-bodyweight-challenge": {
        title: "30-Day Bodyweight Challenge",
        description: "Build a solid fitness foundation in one month with this progressive challenge. No equipment needed!",
        totalDuration: "30 Days",
        icon: Home,
        category: "Home Workouts",
        featured: true,
        coverImage: "https://th.bing.com/th/id/OIP.OnXnE6XUL1cMUkajCgpGXAHaEc?w=307&h=184&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        phases: [
            {
                title: "Week 1: Foundation",
                icon: HardHat,
                weeks: [
                    { id: "30d-w1", week: "Days 1-7", goal: "Master basic forms and build consistency.", learnings: ["Squats (15 reps)", "Push-ups (10 reps, on knees if needed)", "Plank (30 seconds)", "Jumping Jacks (30 seconds)"], resources: [{ name: "Beginner Bodyweight Workout", url: "https://www.youtube.com/watch?v=L_A_HjHZxfI" }], proofOfWork: "Complete the circuit 3 times, with 1 minute rest between circuits. Perform on Day 1, 3, 5. Rest on Day 2, 4, 6, 7." }
                ]
            },
            {
                title: "Week 2: Build Intensity",
                icon: Zap,
                weeks: [
                    { id: "30d-w2", week: "Days 8-14", goal: "Increase reps and reduce rest time.", learnings: ["Squats (20 reps)", "Push-ups (15 reps)", "Plank (45 seconds)", "High Knees (45 seconds)"], resources: [{ name: "30 MIN HIGH INTENSITY WORKOUT | Full Body Cardio | Jumping Jack - Burpee Smash | HIIT | No Repeat", url: "https://youtu.be/2IE8J-ATtJs?si=IDKmdK2eWbIQw0Mv" }], proofOfWork: "Complete the circuit 3 times, with 45 seconds rest. Perform on Day 8, 10, 12. Rest on other days." }
                ]
            },
            {
                title: "Week 3: Add Complexity",
                icon: BrainCircuit,
                weeks: [
                    { id: "30d-w3", week: "Days 15-21", goal: "Introduce more challenging movements.", learnings: ["Lunges (12 reps per leg)", "Decline Push-ups (10 reps)", "Side Plank (30s per side)", "Burpees (10 reps)"], resources: [{ name: "How to do a Burpee", url: "https://www.youtube.com/watch?v=dZgVxmf6jkA" }], proofOfWork: "Complete the circuit 4 times, with 1 minute rest. Perform on Day 15, 17, 19. Rest on other days." }
                ]
            },
            {
                title: "Week 4: Peak Performance",
                icon: Target,
                weeks: [
                    { id: "30d-w4", week: "Days 22-30", goal: "Push your limits and consolidate your gains.", learnings: ["Jump Squats (15 reps)", "Push-ups (to failure)", "Plank (to failure)", "Burpees (15 reps)"], resources: [{ name: "20 MIN FULL BODY WORKOUT // No Equipment | Pamela Reif", url: "https://youtu.be/UBMk30rjy0o?si=SdK9hVusk8AFFVHT" }], proofOfWork: "Complete the circuit 4 times, with 30 seconds rest. Perform on Day 22, 24, 26, 28. Rest on other days." }
                ]
            }
        ]
    }
};


// --- REUSABLE UI COMPONENTS ---

const Header = ({ setPage }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    const navLinks = [
        { name: "Home", page: "home" },
        { name: "Career Paths", page: "careerPaths" },
        { name: "Workouts", page: "workouts" },
        { name: "Personal Growth", page: "personalityDev" },
        { name: "Books", page: "books" },
        { name: "About", page: "about"},
        { name: "Contact", page: "contact" },
    ];

    return (
        <header className="bg-[#121212]/50 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#" onClick={() => setPage('home')} className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">
                            TRAILLIXZ
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-2">
                            {navLinks.map(link => (
                                <a key={link.page} href="#" onClick={() => setPage(link.page)} className="text-white/80 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-white/10">
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-[#F72D7A] hover:text-white hover:bg-[#F72D7A]/20 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map(link => (
                            <a key={link.page} href="#" onClick={() => { setPage(link.page); setIsOpen(false); }} className="text-white/80 hover:bg-white/10 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

const Footer = ({ setPage }) => (
    <footer className="bg-[#121212] border-t border-white/10 text-white/60">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                    <h3 className="text-2xl font-black mb-2 tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">TRAILLIXZ</h3>
                    <p className="text-white/50 text-sm">From Tier-3 to Top Tech – 100% Free.</p>
                    <p className="text-white/50 text-sm mt-4">Founder: Chellu Naga Praveen</p>
                    <div className="flex space-x-4 mt-6">
                       <a href="#" className="text-white/50 hover:text-[#F72D7A] transition-colors"><Linkedin /></a>
                       <a href="#" className="text-white/50 hover:text-[#F72D7A] transition-colors"><Github /></a>
                       <a href="#" className="text-white/50 hover:text-[#F72D7A] transition-colors"><Twitter /></a>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" onClick={() => setPage('careerPaths')} className="hover:text-[#F72D7A] text-sm">Career Roadmaps</a></li>
                        <li><a href="#" onClick={() => setPage('workouts')} className="hover:text-[#F72D7A] text-sm">Workouts</a></li>
                        <li><a href="#" onClick={() => setPage('personalityDev')} className="hover:text-[#F72D7A] text-sm">Personal Growth</a></li>
                        <li><a href="#" onClick={() => setPage('books')} className="hover:text-[#F72D7A] text-sm">Books</a></li>
                        <li><a href="#" onClick={() => setPage('about')} className="hover:text-[#F72D7A] text-sm">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-4">Contact</h3>
                    <p className="text-sm flex items-center mb-2"><Mail className="w-4 h-4 mr-2 text-[#F72D7A]" /> traillixz@gmail.com</p>
                </div>
                <div>
                    <h3 className="font-semibold text-white mb-4">Phase 2: Coming Soon</h3>
                    <ul className="text-white/50 text-sm space-y-2">
                        <li>OUR New Courses</li>
                        <li>AI Building And Using</li>
                        <li>Bringing new possibilities</li>
                    </ul>
                </div>
            </div>
            <div className="mt-8 border-t border-white/10 pt-8 text-center text-sm text-white/50">
                <p>&copy; {new Date().getFullYear()} Traillixz. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);


const ProgressBar = ({ value }) => (
    <div className="w-full bg-white/10 rounded-full h-2.5">
        <div 
            className="bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${value}%` }}
        ></div>
    </div>
);

const Checkbox = ({ checked, onChange }) => (
    <button 
        onClick={onChange}
        className={`flex items-center space-x-3 cursor-pointer p-2 rounded-lg transition-all duration-300 ${checked ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
    >
        <div className={`w-6 h-6 rounded-md border-2 flex-shrink-0 flex items-center justify-center ${checked ? 'bg-green-500 border-green-500' : 'border-white/30'}`}>
            {checked && <CheckCircle className="w-5 h-5 text-white" />}
        </div>
        <span className="font-semibold">{checked ? 'Completed! Great job!' : 'Mark as Complete'}</span>
    </button>
);

const FloatingSkillIcon = ({ icon, positionClasses, delay }) => {
    const IconComponent = icon;
    return (
        <div className={`absolute ${positionClasses} z-20`}>
            <div className="relative">
                <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-white" style={{ animation: `float 6s ease-in-out infinite`, animationDelay: `${delay}s`, filter: `drop-shadow(0 0 10px rgba(247, 45, 122, 0.8))` }} />
            </div>
        </div>
    );
};

const BookCard = ({ bookKey, bookData, onClick }) => {
    const BookIcon = bookData.icon;
    return (
        <div 
            className="bg-[#1C1E4A]/30 border border-white/10 p-6 rounded-xl shadow-lg hover:border-[#F72D7A]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col"
            onClick={onClick}
        >
            {bookData.coverImage ? (
                <img src={bookData.coverImage} alt={`${bookData.title} cover`} className="rounded-md mb-4 w-full h-64 object-cover" />
            ) : (
                <div className="rounded-md mb-4 w-full h-56 bg-[#1C1E4A]/60 flex flex-col items-center justify-center p-4 text-center">
                    <BookIcon className="w-12 h-12 text-[#F72D7A] mb-4" />
                    <span className="text-white font-bold text-lg">{bookData.title}</span>
                </div>
            )}
            <div className="flex flex-col flex-grow">
                <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] transition-colors">{bookData.title}</h2>
                <p className="text-sm text-white/50 mb-4">by {bookData.author}</p>
                <p className="text-white/70 text-sm mb-4 line-clamp-3 flex-grow">{bookData.description}</p>
                <span className="text-[#F72D7A] mt-auto inline-block font-semibold group-hover:text-white transition-colors duration-300">
                    Learn More <ArrowRight className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </div>
    );
};


// --- PAGE COMPONENTS ---

const HomePage = ({ setPage, setPath }) => {
    const [bgScroll, setBgScroll] = useState(0);
    const bookOfTheWeek = BOOKS_DATA['atomic-habits'];

    useEffect(() => {
        const handleScroll = () => {
            setBgScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=2070&auto=format&fit=crop')`,
                        transform: `scale(1.1) translateY(${bgScroll * 0.1}px)`,
                        filter: 'brightness(0.4)'
                    }}
                ></div>

                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#1C1E4A]/50"></div>

                <div className="absolute top-4 right-4 text-right text-white/70 text-sm z-20 max-w-xs italic">
                    <p>“It is crucial that students learn what the world really needs.”</p>
                </div>
                
                <FloatingSkillIcon icon={CodeXml} positionClasses="bottom-[20%] left-[10%] md:bottom-[25%] md:left-[15%]" delay={0} />
                <FloatingSkillIcon icon={Bot} positionClasses="top-[20%] right-[10%] md:top-[25%] md:right-[15%]" delay={1} />
                <FloatingSkillIcon icon={CloudLightning} positionClasses="bottom-[15%] right-[15%] md:bottom-[20%] md:right-[20%]" delay={2} />

                <div className="relative z-10 text-center text-white px-4">
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight"
                        style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}
                    >
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">India has talent.</span><br/> It just needs a map.
                    </h1>
                    <p 
                        className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/80"
                        style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}
                    >
                        Traillixz is a free platform for ambitious students and job-seekers. We turn your time into tech skills. Your hustle into high-paying careers.
                    </p>
                    <div className="flex justify-center flex-wrap gap-4">
                         <button 
                            onClick={() => setPage('careerPaths')} 
                            className="bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] text-white font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_#F72D7A] transform hover:scale-105 transition-all duration-300"
                        >
                            Explore Career Paths
                        </button>
                         <button onClick={() => setPage('books')} className="bg-white/10 text-white font-bold py-3 px-8 rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-300">
                            Discover Books
                         </button>
                    </div>
                </div>
            </section>
            
            {/* Book of the Week Section */}
            <section className="bg-[#121212] py-20">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-white">Book of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">Week</span></h2>
                    <p className="text-center text-white/70 mb-12 max-w-2xl mx-auto">A must-read for anyone looking to build better systems for success.</p>
                    <div className="max-w-4xl mx-auto bg-[#1C1E4A]/30 border border-white/10 rounded-xl shadow-lg overflow-hidden md:flex">
                        <div className="md:w-1/3">
                            <img src={bookOfTheWeek.coverImage} alt={`${bookOfTheWeek.title} cover`} className="h-full w-full object-cover" />
                        </div>
                        <div className="p-8 md:w-2/3 flex flex-col justify-center">
                            <h3 className="text-3xl font-bold text-white mb-2">{bookOfTheWeek.title}</h3>
                            <p className="text-md text-white/60 mb-4">by {bookOfTheWeek.author}</p>
                            <p className="text-white/80 mb-6">{bookOfTheWeek.description}</p>
                            <button 
                                onClick={() => { setPath('atomic-habits'); setPage('bookDetail'); }}
                                className="self-start bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] text-white font-bold py-3 px-6 rounded-full hover:shadow-[0_0_20px_#F72D7A] transform hover:scale-105 transition-all duration-300"
                            >
                                Learn More <ArrowRight className="inline-block w-4 h-4 ml-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

const WorkoutPage = ({ setPage, setPath }) => {
    const [bgScroll, setBgScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setBgScroll(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <section className="min-h-screen w-full relative overflow-hidden flex items-center justify-center">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop')`,
                        transform: `scale(1.1) translateY(${bgScroll * 0.1}px)`,
                        filter: 'brightness(0.5)'
                    }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/50"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 
                        className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 tracking-tight"
                        style={{ textShadow: '0 0 15px rgba(0,0,0,0.7)' }}
                    >
                        Forge Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">Strength</span>
                    </h1>
                    <p 
                        className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/80"
                        style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}
                    >
                        A strong mind needs a strong body. Our workout roadmaps are designed to build a solid foundation of fitness, one week at a time.
                    </p>
                </div>
            </section>
            <RoadmapListPage 
                setPage={setPage} 
                setPath={setPath} 
                roadmapData={WORKOUT_DATA} 
                title="Workout" 
                description="Choose a plan that fits your goals and start your fitness journey today." 
                pageKey="workoutDetail" 
            />
        </>
    );
};


const RoadmapCard = ({ pathKey, pathData, onClick }) => {
    const PathIcon = pathData.icon;
    return (
        <div 
            className="bg-[#1C1E4A]/30 border border-white/10 rounded-xl shadow-lg hover:border-[#F72D7A]/50 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col overflow-hidden"
            onClick={onClick}
        >
            {pathData.coverImage && (
                <div className="h-40 w-full overflow-hidden">
                    <img src={pathData.coverImage} alt={pathData.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start mb-4">
                    {!pathData.coverImage && (
                        <div className="w-14 h-14 rounded-lg bg-white/5 flex items-center justify-center mr-4 border border-white/10 flex-shrink-0">
                            <PathIcon className="h-7 w-7 text-[#F72D7A]" />
                        </div>
                    )}
                    <div className="flex-grow">
                        <h2 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] transition-colors">{pathData.title}</h2>
                        <p className="text-sm text-white/50">{pathData.totalDuration}</p>
                    </div>
                </div>
                <p className="text-white/70 text-sm mb-4 flex-grow">{pathData.description}</p>
                <span className="text-[#F72D7A] mt-auto inline-block font-semibold group-hover:text-white transition-colors duration-300">
                    View Roadmap <ArrowRight className="inline-block w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
            </div>
        </div>
    );
};


const RoadmapListPage = ({ setPage, setPath, roadmapData, title, description, pageKey }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    const categories = ['All', ...new Set(Object.values(roadmapData).map(p => p.category).filter(Boolean))];
    
    const filteredPaths = Object.entries(roadmapData)
        .filter(([, pathData]) => 
            pathData.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
            (selectedCategory === 'All' || pathData.category === selectedCategory)
        );

    return (
        <div className="container mx-auto py-12 sm:py-16 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-2 text-white">{title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">Roadmaps</span></h1>
            <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">{description}</p>
            
            <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                    <input 
                        type="text"
                        placeholder="Search for a roadmap..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-[#1C1E4A]/30 border border-white/10 rounded-lg py-3 pl-10 pr-4 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#F72D7A]"
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/50" />
                </div>
                {categories.length > 1 && (
                    <div className="flex-shrink-0">
                        <select
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-full md:w-auto bg-[#1C1E4A]/30 border border-white/10 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#F72D7A]"
                        >
                            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                        </select>
                    </div>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {filteredPaths.map(([pathKey, pathData]) => (
                    <RoadmapCard 
                        key={pathKey} 
                        pathKey={pathKey}
                        pathData={pathData}
                        onClick={() => { setPath(pathKey); setPage(pageKey); }}
                    />
                ))}
            </div>
        </div>
    );
}

const RoadmapDetailPage = ({ path, setPage, roadmapData, listPageKey }) => {
    const careerPath = roadmapData[path];
    const [openPhase, setOpenPhase] = useState(0);
    const [completedTasks, setCompletedTasks] = useState({});

    useEffect(() => {
        try {
            const savedProgress = localStorage.getItem(`progress_${path}`);
            if (savedProgress) {
                setCompletedTasks(JSON.parse(savedProgress));
            }
        } catch (error) {
            console.error("Failed to load progress from localStorage", error);
            setCompletedTasks({});
        }
    }, [path]);

    useEffect(() => {
        try {
            localStorage.setItem(`progress_${path}`, JSON.stringify(completedTasks));
        } catch (error) {
            console.error("Failed to save progress to localStorage", error);
        }
    }, [completedTasks, path]);

    const handleTaskToggle = (taskId) => {
        setCompletedTasks(prev => ({
            ...prev,
            [taskId]: !prev[taskId]
        }));
    };

    if (!careerPath || !careerPath.phases || careerPath.phases.length === 0) {
        return (
             <div className="container mx-auto py-24 px-4 text-center">
                <HardHat className="mx-auto h-16 w-16 text-[#F72D7A] mb-4" />
                <h2 className="text-3xl font-bold text-white">Roadmap Under Construction</h2>
                <p className="text-white/70 mt-4 max-w-md mx-auto">This roadmap is still being built. Please check back soon for detailed steps!</p>
                <button onClick={() => setPage(listPageKey)} className="mt-8 bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#F72D7A]/20 transform hover:scale-105 transition-all duration-300">
                    Explore Other Roadmaps
                </button>
            </div>
        );
    }

    const PathIcon = careerPath.icon;

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
                 <div className="text-center mb-12">
                     <div className="w-24 h-24 mx-auto rounded-full bg-[#1C1E4A]/50 border border-white/10 flex items-center justify-center mb-4">
                         <PathIcon className="h-12 w-12 text-[#F72D7A]" />
                     </div>
                     <h1 className="text-4xl md:text-5xl font-bold text-white">{careerPath.title}</h1>
                     <p className="text-lg text-white/70 mt-4 max-w-3xl mx-auto">{careerPath.description}</p>
                     <p className="mt-4 text-[#F72D7A] font-semibold">Estimated Duration: {careerPath.totalDuration}</p>
                 </div>

                 <div className="max-w-4xl mx-auto space-y-4">
                     {careerPath.phases.map((phase, phaseIndex) => {
                         const PhaseIcon = phase.icon;
                         const isOpen = openPhase === phaseIndex;
                         const totalTasksInPhase = phase.weeks.length;
                         const completedTasksInPhase = phase.weeks.filter(week => completedTasks[week.id]).length;
                         const progressPercentage = totalTasksInPhase > 0 ? (completedTasksInPhase / totalTasksInPhase) * 100 : 0;

                         return (
                             <div key={phaseIndex} className="border border-white/10 rounded-lg overflow-hidden">
                                 <button onClick={() => setOpenPhase(isOpen ? null : phaseIndex)} className="w-full text-left p-6 bg-[#1C1E4A]/30 hover:bg-[#1C1E4A]/60 transition-colors duration-300">
                                     <div className="flex justify-between items-center">
                                         <div className="flex items-center">
                                             <PhaseIcon className="w-8 h-8 mr-4 text-[#F72D7A]" />
                                             <h2 className="text-xl font-bold text-white">{phase.title}</h2>
                                         </div>
                                         <div className="flex items-center">
                                            <span className="text-sm text-white/60 mr-4">{completedTasksInPhase}/{totalTasksInPhase}</span>
                                            {isOpen ? <ChevronUp className="w-6 h-6 text-white/70" /> : <ChevronDown className="w-6 h-6 text-white/70" />}
                                         </div>
                                     </div>
                                     <div className="mt-4"><ProgressBar value={progressPercentage} /></div>
                                 </button>
                                 {isOpen && (
                                     <div className="p-6 bg-black/20">
                                         {phase.weeks.map((week) => (
                                             <div key={week.id} className="mb-8 last:mb-0 p-6 bg-[#121212]/50 border border-white/10 rounded-lg">
                                                 <p className="text-sm font-bold text-[#F72D7A] mb-2">Week(s): {week.week}</p>
                                                 <h3 className="text-xl font-bold text-white mb-4">{week.goal}</h3>
                                                 <div className="mb-4">
                                                     <h4 className="font-semibold text-white/80 mb-2">Key Learnings:</h4>
                                                     <div className="flex flex-wrap gap-2">{week.learnings.map((l, i) => <span key={i} className="bg-white/10 text-white/80 text-xs font-medium px-2.5 py-1 rounded-full">{l}</span>)}</div>
                                                 </div>
                                                 <div className="mb-4">
                                                     <h4 className="font-semibold text-white/80 mb-2">Recommended Resources:</h4>
                                                     <ul className="space-y-2">{week.resources.map((r, i) => <li key={i}><a href={r.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-[#F72D7A] hover:text-white transition-colors duration-300"><Youtube className="w-5 h-5 mr-2" /><span>{r.name}</span></a></li>)}</ul>
                                                 </div>
                                                 <div className="border-t border-white/10 pt-4 mt-4">
                                                     <h4 className="font-semibold text-white/80 mb-3">Proof of Work:</h4>
                                                     <div className="flex items-start text-white/90 mb-4"><Target className="w-5 h-5 mr-3 mt-1 text-green-400 flex-shrink-0" /><p>{week.proofOfWork}</p></div>
                                                     <Checkbox checked={!!completedTasks[week.id]} onChange={() => handleTaskToggle(week.id)} />
                                                 </div>
                                             </div>
                                         ))}
                                     </div>
                                 )}
                             </div>
                         );
                     })}
                 </div>
            </div>
        </div>
    );
};
const BookListPage = ({ setPage, setPath }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', ...new Set(Object.values(BOOKS_DATA).map(b => b.category))];
    
    const filteredBooks = Object.entries(BOOKS_DATA).filter(([, bookData]) => 
        selectedCategory === 'All' || bookData.category === selectedCategory
    );

    return (
        <div className="container mx-auto py-12 sm:py-16 px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-center mb-2 text-white">Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">Library</span></h1>
            <p className="text-center text-white/70 mb-8 max-w-2xl mx-auto">Hand-picked books to expand your knowledge, with curated video summaries to accelerate your learning.</p>
            
            <div className="flex justify-center flex-wrap gap-2 mb-10">
                {categories.map(category => (
                    <button 
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedCategory === category ? 'bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredBooks.map(([bookKey, bookData]) => (
                    <BookCard 
                        key={bookKey} 
                        bookKey={bookKey}
                        bookData={bookData}
                        onClick={() => { setPath(bookKey); setPage('bookDetail'); }}
                    />
                ))}
            </div>
        </div>
    );
};

const BookDetailPage = ({ path, setPage }) => {
    const book = BOOKS_DATA[path];

    if (!book) {
        return (
            <div className="container mx-auto py-24 px-4 text-center">
                <HardHat className="mx-auto h-16 w-16 text-[#F72D7A] mb-4" />
                <h2 className="text-3xl font-bold text-white">Book not found!</h2>
                <p className="text-white/70 mt-4 max-w-md mx-auto">We couldn't find the book you were looking for. It might be a broken link or the book has been removed.</p>
                <button onClick={() => setPage('books')} className="mt-8 bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg hover:shadow-[#F72D7A]/20 transform hover:scale-105 transition-all duration-300">
                    Back to Library
                </button>
            </div>
        );
    }
    
    const BookIcon = book.icon;

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    <div className="md:col-span-1">
                        {book.coverImage ? (
                            <img src={book.coverImage} alt={`${book.title} cover`} className="rounded-lg shadow-2xl w-full sticky top-28 aspect-[2/3] object-cover" />
                        ) : (
                            <div className="rounded-lg shadow-2xl w-full sticky top-28 bg-[#1C1E4A]/60 aspect-[2/3] flex flex-col items-center justify-center p-4 text-center">
                                <BookIcon className="w-20 h-20 text-[#F72D7A] mb-4" />
                                <h3 className="text-white text-2xl font-bold">{book.title}</h3>
                            </div>
                        )}
                    </div>
                    <div className="md:col-span-2">
                        <h1 className="text-4xl md:text-5xl font-bold text-white">{book.title}</h1>
                        <p className="text-lg text-white/70 mt-2">by {book.author}</p>
                        <div className="my-6 border-t border-white/10"></div>
                        <h2 className="text-2xl font-bold text-white mb-3">About the Book</h2>
                        <p className="text-white/80 leading-relaxed">{book.description}</p>
                        
                        <div className="my-8 border-t border-white/10"></div>

                        <h2 className="text-2xl font-bold text-white mb-4">Video Summaries</h2>
                        <div className="flex flex-wrap gap-4">
                            {Object.entries(book.videos).map(([lang, videoData]) => (
                                <a 
                                    key={lang} 
                                    href={videoData.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                                >
                                    <Youtube className="w-5 h-5 text-red-500" />
                                    <span>{videoData.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AboutPage = () => {
    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                     <h1 className="text-4xl md:text-5xl font-bold text-white">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">Traillixz</span></h1>
                     <p className="text-lg text-white/70 mt-4 max-w-3xl mx-auto">From Tier-3 to Top Tech – 100% Free.</p>
                </div>

                <div className="bg-[#1C1E4A]/30 border border-white/10 p-8 rounded-xl shadow-lg space-y-8 text-white/80 leading-relaxed">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">Our Mission</h2>
                        <p>India has immense talent, but it often lacks direction. Many students, especially from Tier-2 and Tier-3 colleges, have the ambition but not the roadmap to reach their dream careers in tech. Traillixz was created to bridge this gap. Our mission is to provide clear, actionable, and completely free career roadmaps that guide students from the classroom to their first high-paying tech job or enterprenuers.</p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-3">Our Story</h2>
                        <p>Founded by Chellu Naga Praveen, Traillixz was born from a simple observation: while premium resources exist, they are often locked behind expensive paywalls, leaving out a huge pool of deserving talent. We believe that financial constraints should never be a barrier to knowledge. That's why we've curated the best free resources on the internet—from YouTube tutorials to official documentation—and structured them into logical, step-by-step learning paths. We present not creating the content; we create the map that leads you through it.</p>
                    </div>
                     <div>
                        <h2 className="text-2xl font-bold text-white mb-3">What We Do</h2>
                        <p>We provide meticulously crafted roadmaps for various tech careers, including Full-Stack Development, Data Science, and UI/UX Design. Each roadmap is broken down into phases and weeks, with clear goals, key learnings, recommended free resources, and a "Proof of Work" project to solidify your skills and build your portfolio. It's not just about learning; it's about doing.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => { 
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        setSubmitted(true);
    };

    return (
        <div className="py-12 sm:py-16">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12">
                     <h1 className="text-4xl md:text-5xl font-bold text-white">Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F72D7A] to-[#9A1F63]">Touch</span></h1>
                     <p className="text-lg text-white/70 mt-4 max-w-3xl mx-auto">Have questions, feedback, or want to collaborate? We'd love to hear from you.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    <div className="bg-[#1C1E4A]/30 border border-white/10 p-8 rounded-xl shadow-lg">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-full text-center">
                                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                                <h3 className="text-2xl font-bold text-white">Thank You!</h3>
                                <p className="text-white/70 mt-2">Your message has been sent. We'll get back to you soon.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                                    <input type="text" name="name" id="name" required value={formState.name} onChange={handleChange} className="w-full bg-[#121212]/50 border border-white/20 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#F72D7A]" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                                    <input type="email" name="email" id="email" required value={formState.email} onChange={handleChange} className="w-full bg-[#121212]/50 border border-white/20 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#F72D7A]" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">Message</label>
                                    <textarea name="message" id="message" rows="4" required value={formState.message} onChange={handleChange} className="w-full bg-[#121212]/50 border border-white/20 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#F72D7A]"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-gradient-to-r from-[#F72D7A] to-[#9A1F63] text-white font-bold py-3 px-8 rounded-full hover:shadow-[0_0_20px_#F72D7A] transform hover:scale-105 transition-all duration-300">
                                    Send Message
                                </button>
                            </form>
                        )}
                    </div>
                     <div className="space-y-6">
                         <div className="bg-[#1C1E4A]/30 border border-white/10 p-6 rounded-xl shadow-lg flex items-center">
                             <Mail className="w-8 h-8 text-[#F72D7A] mr-4"/>
                             <div>
                                 <h3 className="text-xl font-bold text-white">Email</h3>
                                 <p className="text-white/70">traillixz@gmail.com</p>
                             </div>
                         </div>
                         <div className="bg-[#1C1E4A]/30 border border-white/10 p-6 rounded-xl shadow-lg flex items-center">
                         </div>
                          <div className="bg-[#1C1E4A]/30 border border-white/10 p-6 rounded-xl shadow-lg">
                              <h3 className="text-xl font-bold text-white mb-3">Follow Us</h3>
                              <div className="flex space-x-4">
                                  <a href="#" className="text-white/60 hover:text-[#F72D7A] transition-colors"><Linkedin size={28} /></a>
                                  <a href="#" className="text-white/60 hover:text-[#F72D7A] transition-colors"><Github size={28} /></a>
                                  <a href="#" className="text-white/60 hover:text-[#F72D7A] transition-colors"><Twitter size={28} /></a>
                              </div>
                          </div>
                     </div>
                </div>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---
export default function App() {
    const [page, setPage] = useState('home');
    const [path, setPath] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page, path]);

    useEffect(() => {
        let style = document.getElementById('app-styles');
        if (!style) {
            style = document.createElement('style');
            style.id = 'app-styles';
            document.head.appendChild(style);
        }
        style.innerHTML = `
            body {
                background-color: #121212;
                color: white;
                font-family: 'Montserrat', sans-serif;
            }
            @keyframes float {
                0% { transform: translatey(0px); }
                50% { transform: translatey(-10px); }
                100% { transform: translatey(0px); }
            }
        `;
        
        if (!document.querySelector('link[href*="Montserrat"]')) {
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap';
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }
    }, []);


    const renderPage = () => {
        switch (page) {
            case 'home':
                return <HomePage setPage={setPage} setPath={setPath} />;
            case 'careerPaths':
                return <RoadmapListPage setPage={setPage} setPath={setPath} roadmapData={CAREER_PATHS_DATA} title="Career" description="Your step-by-step guide from student to job-ready professional. Choose a path and start your journey." pageKey="careerPathDetail" />;
            case 'workouts':
                return <WorkoutPage setPage={setPage} setPath={setPath} />;
            case 'workoutDetail':
                return <RoadmapDetailPage path={path} setPage={setPage} roadmapData={WORKOUT_DATA} listPageKey="workouts" />;
            case 'personalityDev':
                 return <RoadmapListPage setPage={setPage} setPath={setPath} roadmapData={PERSONALITY_DEV_DATA} title="Personal Growth" description="Develop the essential soft skills you need to succeed in any career and in life." pageKey="personalityDevDetail" />;
            case 'books':
                return <BookListPage setPage={setPage} setPath={setPath} />;
            case 'careerPathDetail':
                return <RoadmapDetailPage path={path} setPage={setPage} roadmapData={CAREER_PATHS_DATA} listPageKey="careerPaths" />;
            case 'personalityDevDetail':
                 return <RoadmapDetailPage path={path} setPage={setPage} roadmapData={PERSONALITY_DEV_DATA} listPageKey="personalityDev" />;
            case 'bookDetail':
                return <BookDetailPage path={path} setPage={setPage} />;
            case 'contact':
                return <ContactPage />;
            case 'about':
                return <AboutPage />;
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div className="bg-[#121212] min-h-screen text-white">
            <Header setPage={setPage} />
            <main>
                {renderPage()}
            </main>
            <Footer setPage={setPage} />
        </div>
    );
}
