import MainWrapper from "@/components/styledComponents/MainWrapper";
import { buildImageUrl, getCollectionData } from "@/lib/directus";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

export async function getStaticProps() {
  const projects = await getCollectionData("projects");
  const projectsWithImageUrl = projects.map((project) => ({
    ...project,
    imageUrl: buildImageUrl(project.image),
  }));
  return {
    props: {
      projects: projectsWithImageUrl,
    },
  };
}

const StyledButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export default function Projects({ projects }) {
  return (
    <MainWrapper>
      <h2>Projects</h2>
      {projects.map((project) => (
        <StyledCardWrapper key={project.id}>
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={150}
            height={150}
            style={{ marginRight: "20px" }}
          />
          <div>
            <h3>{project.title}</h3>
            <h4>{project.text}</h4>
            <StyledButtonWrapper>
              <button href={project.link_github}>GitHub</button>
              <button href={project.link_demo}>Demo</button>
            </StyledButtonWrapper>
          </div>
        </StyledCardWrapper>
      ))}
    </MainWrapper>
  );
}
