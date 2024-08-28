import { Box, Grid, GridItem, Text, Flex, IconButton } from "@chakra-ui/react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import MessageForm from "../components/MessageForm";

export default function Footer() {
  return (
    <Box position="fixed" bottom="0" width="100%" bg="white" zIndex="10">
      <MessageForm />

      <Grid
        templateColumns="1fr auto 1fr"
        textAlign="center"
        alignItems="center"
        py="4px"
        px={{ base: "10px", md: "30px" }}
        height="auto"
        bg="white"
        borderTop="1px solid #edf2f7"
      >
        <GridItem justifySelf="start">
          <Flex justifyContent="center" alignItems="center">
            <IconButton
              as="a"
              href="https://github.com/tejasrocksHere/"
              target="_blank"
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              variant="ghost"
              colorScheme="teal"
            />
            <IconButton
              as="a"
              href="https://twitter.com/yourprofile" // Replace with your Twitter URL
              target="_blank"
              aria-label="Twitter"
              icon={<FaTwitter />}
              size="lg"
              variant="ghost"
              colorScheme="teal"
              ml="4"
            />
          </Flex>
        </GridItem>

        <GridItem justifySelf="center" alignSelf="center">
          <Box textAlign="center">
            <Text fontSize="lg" fontWeight="bold">
              Tejas Mundhe
            </Text>
            <Text fontSize="sm">Full Stack Developer</Text>
          </Box>
        </GridItem>

        <GridItem justifySelf="end" display={{ base: "none", md: "block" }}>
          {/* You can add any other content here if needed */}
        </GridItem>
      </Grid>
    </Box>
  );
}
