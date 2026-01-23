const config = {
  title: "Mohammad Ayan | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Mohammad Ayan, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Mohammad Ayan, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Mohammad Ayan",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Mohammad Ayan",
  email: "ajlaan.ayan@gmail.com",
  site: "https://mohammadayan.netlify.app",

  // for github stars button
  githubUsername: "ajlaanayan-crypto",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    linkedin: "https://www.linkedin.com/in/mohammad-ayan-207643340?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    instagram: "https://www.instagram.com/starrynights_insta",
    facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/ajlaanayan-crypto",
  },
};
export { config };
