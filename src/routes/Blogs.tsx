import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import Markdown from 'markdown-to-jsx'
import fs from "fs";
import path from "path";


const Blogs = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    fetchBlogs().then((result) => {
      console.log(result );
      setBlogs(result);
      setIsLoading(false);
    });
  }, []);

  const fetchBlogs = async () => {
    const blogFiles = fs.readdirSync(path.resolve(__dirname, "blogs"));

    const blogs = await Promise.all(
      blogFiles.map(async (file) => {
        const filePath = path.resolve(__dirname, "blogs", file);
        const markdownContent = fs.readFileSync(filePath, "utf-8");
        return { title: file, content: markdownContent };
      })
    );

    return blogs;
  };

  return (
    <div className="w-screen mx-auto mt-28">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div className="w-inherit flex flex-col gap-8 justify-center items-center">
          {blogs.map((blog) => (
            <div key={blog.title}>
              <h2>{blog.title}</h2>
              <Markdown>{blog.content}</Markdown>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
