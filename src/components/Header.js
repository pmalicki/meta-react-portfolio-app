import React, { useEffect, useRef, useState } from "react";
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
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (e, anchor) => () => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    
    const urlHash = e.currentTarget.getAttribute('href');
    window.history.pushState(null, "", `/${urlHash}`);
  };

  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const debounce = useRef(false);

  useEffect(() => {
    const update = () => {
      const current = window.scrollY;

      if (current > lastScrollY.current) {
        setIsVisible(false);
      } else if (current < lastScrollY.current) {
        setIsVisible(true);
      }
      lastScrollY.current = current;
      debounce.current = false;
    };

    const onScroll = () => {
      if (!debounce.current) {
        window.requestAnimationFrame(update);
        debounce.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={isVisible ? "translateY(0)" : "translateY(-110%)"}
      transition="transform 220ms ease-in-out"
      backgroundColor="#18181b"
      zIndex={100}
      pointerEvents={isVisible ? "auto" : "none"}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={{ base: 4, md: 16 }}
          py={{ base: 2, md: 4 }}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={{ base: 4, md: 6 }} alignItems="center">
              {socials.map((s, idx) => (
                <a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`social-link-${idx}`}
                  style={{ color: "inherit" }}
                >
                  <Box as="span" fontSize={{ base: "20px", md: "32px" }} >
                    <FontAwesomeIcon icon={s.icon} />
                  </Box>
                </a>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={{ base: 4, md: 8 }}>
              <a
                href="#projects"
                onClick={(e) => { handleClick(e, "projects")(); }}
                style={{ cursor: "pointer", fontSize: '14px' }}
              >
                Projects
              </a>
              <a
                href="#contact-me"
                onClick={(e) => { handleClick(e, "contactme")(); }}
                style={{ cursor: "pointer", fontSize: '14px' }}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
