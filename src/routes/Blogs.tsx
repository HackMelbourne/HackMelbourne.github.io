import React from "react";
import { BlogInterface, BlogsData } from "./blogs/BlogsData";
import { Typography, Link, List, ListItem, ListItemText } from "@mui/material";

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
      <div className="w-screen mx-auto mt-28 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 justify-center items-center">
          {BlogsData.map((blog: BlogInterface) => (
            <div key={blog.articleId} className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
              <div className="flex-none w-full md:w-1/3">
                <img src={blog.articleImage} alt={blog.title} className="w-full h-auto" />
              </div>
              <div className="flex-grow w-full">
                <h2 className="text-2xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <a href={`/blogs/${blog.url}`} className="text-blue-500 hover:underline">
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default Blogs;
