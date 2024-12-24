import MainWrapper from "../components/MainWrapper";
import styled, { keyframes } from "styled-components";
import languageSymbols from "../utils/languageSymbols";
import { useEffect, useRef } from "react";
import ContentWrapper from "../components/ContentWrapper";

// Keyframes
const wobble = keyframes`
  0%, 100% {
    transform: rotate(-20deg);
  }
  50% {
    transform: rotate(1deg);
  }
`;

//Styling
const StyledWobbleEmoji = styled.span`
  display: inline-block;
  animation: ${wobble} 1.5s infinite ease-in-out;
  margin-bottom: 10px;
  margin-top: 10px;
`;

const StyledSlogan = styled.h3`
  margin-bottom: 0px;
  margin-top: 0px;
  &:hover {
    color: gray;
    scale: 1.02;
  }
`;

const StyledH3 = styled.h3`
  margin-top: 0px;
  margin-bottom: 10px;
  &:hover {
    color: gray;
    scale: 1.02;
  }
`;

const StyledP = styled.p`
  margin-top: 0px;
  margin-bottom: 10px;
`;

const StyledUl = styled.ul`
  padding-left: 0px;
`;

const StyledLi = styled.li`
  margin-bottom: 10px;
`;

const StyledImageSliderContainter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 50px;
  overflow-x: auto;
  white-space: nowrap;
  scroll-behavior: smooth;
  max-width: 50vw;

  @media (max-width: 768px) {
    margin-left: 20vw;
    margin-right: 20vw;
    max-width: 60vw;
  }

  &::-webkit-scrollbar {
    height: 0px;
  }
`;

const StyledImageIcons = styled.p`
  display: inline-block;
  font-size: 50px;
  margin: 0 2vw;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export default function Home() {
  const sliderRef = useRef(null);

  //Auto scroll
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let scrollDirection = 1;
    let interval;
    const buffer = 10;

    const startAutoScroll = () => {
      interval = setInterval(() => {
        slider.scrollLeft += scrollDirection * 1;

        if (
          slider.scrollLeft + slider.offsetWidth + buffer >=
          slider.scrollWidth
        ) {
          scrollDirection = -1;
        }

        if (slider.scrollLeft <= buffer && scrollDirection < 0) {
          scrollDirection = 1;
        }
      }, 20);
    };

    const stopAutoScroll = () => {
      clearInterval(interval);
    };

    startAutoScroll();

    slider.addEventListener("mouseover", stopAutoScroll);
    slider.addEventListener("mouseout", startAutoScroll);
    slider.addEventListener("touchstart", stopAutoScroll);
    slider.addEventListener("touchend", startAutoScroll);

    return () => {
      clearInterval(interval);
      slider.removeEventListener("mouseover", stopAutoScroll);
      slider.removeEventListener("mouseout", startAutoScroll);
      slider.removeEventListener("touchstart", stopAutoScroll);
      slider.removeEventListener("touchend", startAutoScroll);
    };
  }, []);

  return (
    <>
      <MainWrapper>
        <ContentWrapper>
          <StyledH3>Unleashing Creativity Through Code {"</>"}</StyledH3>
          <StyledP>
            At the intersection of technology and art, I craft software
            solutions that inspire, innovate, and elevate experiences. Welcome
            to my digital studio, where every line of code is a brushstroke, and
            every project is a masterpiece in the making. As a software
            developer, I specialize in building unique applications, engaging
            games, and tailored software for individuals and businesses alike.
          </StyledP>
        </ContentWrapper>
        <ContentWrapper>
          <StyledH3>What You'll Find Here: 🔎</StyledH3>
          <StyledUl>
            <StyledLi>
              Showcase of Projects: Explore the diverse software and games I've
              created, each reflecting a blend of technical expertise and
              artistic vision.
            </StyledLi>
            <StyledLi>
              About Me: Learn more about my journey, my philosophy, and the
              passion that drives my work.
            </StyledLi>
            <StyledLi>
              Custom Software Solutions: Have an idea? Let’s bring it to life
              together. I transform your vision into innovative, user-centric
              applications.
            </StyledLi>
          </StyledUl>
        </ContentWrapper>
        <ContentWrapper>
          <div>
            <StyledSlogan>
              "Software development is not just coding"
            </StyledSlogan>
            <StyledSlogan>
              "it's an art form." <StyledWobbleEmoji>✒️</StyledWobbleEmoji>
            </StyledSlogan>
          </div>
          <StyledUl>
            <StyledLi>
              With a focus on elegance, efficiency, and creativity, I strive to
              create solutions that are as functional as they are beautiful.
            </StyledLi>
            <StyledLi>
              Let’s shape the future together. Dive in and explore the world of
              possibilities.
            </StyledLi>
          </StyledUl>
        </ContentWrapper>
        <StyledImageSliderContainter ref={sliderRef}>
          {languageSymbols.map((symbol, index) => (
            <StyledImageIcons
              onClick={() => window.open(symbol.wikiLink)}
              key={index}
            >
              {symbol.name}
            </StyledImageIcons>
          ))}
        </StyledImageSliderContainter>
      </MainWrapper>
    </>
  );
}
