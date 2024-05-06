import pythonImg from "../../assets/blog/images/python.png";
import typescriptImg from "../../assets/blog/images/typescript.png";

import pythonBlog from "./Intro to Python.md";
import typescriptBlog from "./Intro to Typescript.md";

interface BlogInterface {
  title: string;
  articleImage: string;
  description: string;
  time: string;
  author: string;
  blogContent: string;
  fileName: string;
  tags: string[];
  url: string;
  articleId: number;
}

const BlogsData: BlogInterface[] = [
  {
    title: "Introduction to Python Programming",
    articleImage: pythonImg,
    description: "A beginner's guide to Python programming language.",
    time: "2024-05-01T12:00:00Z",
    author: "John Doe",
    blogContent: pythonBlog,
    fileName: "Intro to Python.md",
    tags: ["python", "programming", "beginner"],
    url: "intro-to-python",
    articleId: 1,
  },
  {
    title: "Getting Started with TypeScript",
    articleImage: typescriptImg,
    description: "Learn the basics of TypeScript language.",
    time: "2024-04-28T10:30:00Z",
    author: "Jane Smith",
    blogContent: typescriptBlog,
    fileName: "Intro to Typescript.md",
    tags: ["typescript", "programming", "javascript"],
    url: "javascript/intro-to-typescript",
    articleId: 2,
  }
];
export type { BlogInterface };
export { BlogsData };
