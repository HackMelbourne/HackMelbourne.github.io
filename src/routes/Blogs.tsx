import React, {useState, useEffect} from "react";
import Markdown from "markdown-to-jsx";
import { BlogInterface, BlogsData } from "./blogs/BlogsData";

interface BlogsProps {
  blogId?: number;
}

const Blogs: React.FC<BlogsProps> = ({ blogId }) => {
  const [post, setPost] = useState('');

  const blog: BlogInterface | undefined = blogId
    ? BlogsData.find((blog: BlogInterface) => blog.articleId === blogId)
    : undefined;

  useEffect(() => {
    if (!blogId || !blog) {
      return;
    }
    import(`./blogs/${blog.fileName}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  }, [blogId]);

  if (blogId && !blog) {
    return <div>Blog not found</div>;
  }
  if (blogId) {
    return (
      <div className="w-screen px-10 mt-28">
        <div className="w-inherit flex flex-col gap-8 justify-center items-center">
          <div>
            <h2>{blog?.title}</h2>
            <img src={blog?.articleImage} alt={blog?.title} />
            <Markdown>{post}</Markdown>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-screen mx-auto mt-28">
        <div className="flex flex-col gap-8 justify-center items-center">
          {BlogsData.map((blog: BlogInterface) => (
            <div key={blog.articleId} className="flex flex-row gap-8">
              <div className="flex-none">
                <img src={blog.articleImage} alt={blog.title} className="w-32 h-auto" />
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
