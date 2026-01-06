import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      width="100%"
      cursor="pointer"
      transition="all 0.2s"
      _hover={{ transform: "scale(1.05)", boxShadow: "2xl" }}
    >
      <Image src={imageSrc} alt={title} width="100%" height="200px" objectFit="cover" />

      <VStack align="flex-start" spacing={2} p={4}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text color="gray.600" noOfLines={3}>
          {description}
        </Text>
      </VStack>

      <HStack color="#000000ff" justifyContent="flex-start" spacing={2} p={4} pt={0}>
        <Text >
          See more
        </Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </Box>
  );
};

export default Card;
