import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: malickipiotr@yahoo.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/pmalicki",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/pmalicki1/",
  },
  {
    icon: faMedium,
    url: "https://medium.com/@pit.malicki",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com/users/32150898/piotr-malicki",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };


  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`social-link-${idx}`}
                  style={{ color: "inherit" }}
                >
                  <FontAwesomeIcon icon={s.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a
                href="#projects-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("projects")();
                }}
                style={{ cursor: "pointer" }}
              >
                Projects
              </a>
              <a
                href="#contactme-section"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick("contactme")();
                }}
                style={{ cursor: "pointer" }}
              >
                Contact
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
