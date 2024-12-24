import MainWrapper from "@/components/styledComponents/MainWrapper";
import ContentWrapper from "@/components/styledComponents/ContentWrapper";
import { useState, useEffect } from "react";

export default function About() {
  const [age, setAge] = useState(null);

  useEffect(() => {
    const calculateAge = (birthDate) => {
      const today = new Date();
      const birth = new Date(birthDate);
      let age = today.getFullYear() - birth.getFullYear();
      const monthDiff = today.getMonth() - birth.getMonth();
      const dayDiff = today.getDate() - birth.getDate();

      if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
      }
      return age;
    };

    const birthDate = "1998-08-25";
    setAge(calculateAge(birthDate));
  }, []);
  return (
    <MainWrapper>
      <ContentWrapper>
        <h3>About Me</h3>
        <p>
          Hello! My name is Krischan. I am {age} years old, living in Mömlingen,
          and I’m deeply passionate about software development and game
          development.
        </p>
        <p>
          From a young age, I’ve been fascinated by the power of code to bring
          creative ideas to life. Over the years, I’ve specialized in building
          functional and innovative software solutions that solve complex
          problems. My interest in game development also allows me to create
          immersive worlds where people can have fun and explore new
          experiences. What I value most is the blend of technical precision and
          creative freedom. Whether it’s learning new tools, overcoming
          challenges, or collaborating with others, I genuinely love what I do.
          In my free time, I experiment with emerging technologies, work on
          indie game projects, and continuously improve my skills to stay ahead
          in this ever-evolving field.
        </p>
      </ContentWrapper>
    </MainWrapper>
  );
}
