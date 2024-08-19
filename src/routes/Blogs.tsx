import React from "react";
import { BlogInterface, BlogsData } from "./blogs/BlogsData";
import { Typography, Link, List, ListItem, ListItemText, createTheme, ThemeProvider } from "@mui/material";
import TitleHero from "../features/TitleHero/TitleHero";
import HeroBanner from "../features/LandingHero/LandingHero";

const theme = createTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontWeight: "800",
    },
    h2: {
      fontWeight: "600",
    },
    h3: {
      fontWeight: "500",
    },
    h4: {
      fontWeight: "400",
    },
    body1: {
      fontFamily: "'Poppins', sans-serif",
      margin: "0",
    },
  },
});

const mdxComponents = {
  h1: (props: any) => <Typography variant="h1" {...props} />,
  h2: (props: any) => <Typography variant="h2" {...props} />,
  h3: (props: any) => <Typography variant="h3" {...props} />,
  h4: (props: any) => <Typography variant="h4" {...props} />,
  h5: (props: any) => <Typography variant="h5" {...props} />,
  h6: (props: any) => <Typography variant="h6" {...props} />,
  p: (props: any) => <Typography variant="body1" {...props} />,
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

    // Blog article
    return (
      <>
        <TitleHero pageTitle={blog?.title || ""} pageDescription={blog?.description || ""} />
        <section className="max-w-screen-lg mx-auto flex flex-col gap-1 mt-8 px-4">
          <img src={blog?.articleImage} alt={blog?.title} className="w-full h-auto" />
          <div className="flex w-full justify-between font-bold">
            <div>Liang</div>
            <div>31st Jan</div>
          </div>
        </section>
        <ThemeProvider theme={theme}>
          <div className="max-w-screen-lg mx-auto px-4 mt-28">
            <div className="flex flex-col gap-8 justify-center items-center">
              <div>{BlogComponent && <BlogComponent components={mdxComponents} />}</div>
            </div>
          </div>
        </ThemeProvider>
      </>
    );
  } else {
    // Blog selection screen
    return (
      <>
        <TitleHero
          pageTitle="Blogs"
          pageDescription="We created HackMelbourne Blogs as a way to share our knowledge for everyone, from tips and tricks with hackathons to how to work efficiently in a team!"
        />

        <div className="max-w-screen-lg mx-auto mt-28 px-4">
          <div className="flex flex-col gap-8 justify-center items-center">
            {BlogsData.map((blog: BlogInterface) => {
              if (!blog.hidden) {
                return (
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
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
};

export default Blogs;
