import pythonImg from "../../assets/blog/images/python.png";
import gitcover from "../../assets/blog/images/git_tutorial_cover.png";
import GitBlog from "./Gittutorial.mdx";
import TemplateBlog from "./TemplateBlog.mdx";
import DescRblog from "./IntroToStats.mdx";
import rcover from "../../assets/blog/images/Desc_R_cover.png";


export interface BlogInterface {
  title: string;
  articleImage: string;
  description: string;
  time: string;
  author: string;
  fileName: string;
  tags: string[];
  url: string;
  BlogComponent: React.ComponentType<{ components: any }>;
  articleId: number;
  hidden?: boolean;
}

export const BlogsData: BlogInterface[] = [
  {
    articleId: 1,
    title: "Getting Started with MDX",
    description:
      "Learn how to integrate MDX into your React project and explore the components you can use to enhance your markdown content.",
    tags: ["MDX", "React", "Components"],
    articleImage: pythonImg,
    time: "17 June 2024",
    author: "Abhijeet Kumar",
    fileName: "Blog1.mdx",
    url: "blog-documentation",
    BlogComponent: TemplateBlog,
    hidden: true,
  },

  {
    articleId: 2,
    title: "Introduction to Using Git/Github",
    description: "",
    tags: ["Git", "programming", "beginner"],
    articleImage: gitcover,
    time: "25 August 2024",
    author: "Anshan Arnott-Tan",
    fileName: "Git_Tutorial.mdx",
    url: "Git-Tutorial",
    BlogComponent: GitBlog,
    hidden: false,
  },


  {
    articleId: 3,
    title: "Introduction to Statistics in R",
    description: "",
    tags: ["R", "programming", "beginner"],
    articleImage: rcover,
    time: "8th September 2024",
    author: "Anshan Arnott-Tan",
    fileName: "IntroToStats.mdx",
    url: "Intro-To-Stats",
    BlogComponent: DescRblog,
    hidden: false,
  },


];
