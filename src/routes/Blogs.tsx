import React from "react";
import { BlogInterface, BlogsData } from "./blogs/BlogsData";
import { Typography, Link, List, ListItem, ListItemText } from "@mui/material";
import TitleHero from "../features/TitleHero/TitleHero";

const mdxComponents = {
  h1: (props: any) => <Typography variant="h1" gutterBottom {...props} />,
  h2: (props: any) => <Typography variant="h2" gutterBottom {...props} />,
  h3: (props: any) => <Typography variant="h3" gutterBottom {...props} />,
  h4: (props: any) => <Typography variant="h4" gutterBottom {...props} />,
  h5: (props: any) => <Typography variant="h5" gutterBottom {...props} />,
  h6: (props: any) => <Typography variant="h6" gutterBottom {...props} />,
  p: (props: any) => <Typography variant="body1" paragraph {...props} />,
  a: (props: any) => <Link {...props} />,
  ul: (props: any) => <List {...props} />,
  ol: (props: any) => <List component="ol" {...props} />,
  li: (props: any) => (
    <ListItem>
      <ListItemText primary={props.children} />
    </ListItem>
  ),
};

interface BlogsProps {
  blogId?: number;
}

const Blogs: React.FC<BlogsProps> = ({ blogId }) => {
  const blog: BlogInterface | undefined = blogId
    ? BlogsData.find((blog: BlogInterface) => blog.articleId === blogId)
    : undefined;

  if (blogId && !blog) {
    // TODO: 404 page
    return <div>Blog not found</div>;
  }

  if (blogId) {
    const BlogComponent = blog?.BlogComponent;
    return (
      <div className="w-screen px-10 mt-28">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div>
            <h2 className="text-3xl font-bold">{blog?.title}</h2>
            <img src={blog?.articleImage} alt={blog?.title} className="max-w-full h-auto mt-4" />
            {BlogComponent && <BlogComponent components={mdxComponents} />}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <TitleHero
          pageTitle="Blogs"
          pageDescription="We created HackMelbourne Blogs as a way to share our knowledge for everyone, from tips and tricks with hackathons to how to work efficiently in a team!"
        />

        <div className="max-w-screen-lg mx-auto mt-28 px-4">
          <div className="flex flex-col gap-8 justify-center items-center">
            {BlogsData.map((blog: BlogInterface) => (
              <div
                key={blog.articleId}
                className="flex flex-col md:flex-row gap-4 sm:gap-8 w-full max-w-4xl items-center p-8 bg-white/10 rounded-md">
                <div className="flex-none w-full md:w-1/3">
                  <img src={blog.articleImage} alt={blog.title} className="w-full h-full bg-cover" />
                </div>
                <div className="flex-grow w-full flex flex-col gap-2">
                  <h2 className="text-3xl font-bold">{blog.title}</h2>
                  <p className="text-gray-600">{blog.description}</p>
                  <a
                    href={`/blogs/${blog.url}`}
                    className="p-2 px-4 bg-primary/10 rounded w-fit border border-primary font-bold hover:scale-105 transition-all">
                    Read more
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Blogs;
