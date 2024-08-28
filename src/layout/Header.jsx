import { Button, Grid, GridItem, Image, Text, Box } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

export default function Header() {
  return (
    <Grid
      templateColumns="max-content 1fr min-content"
      justifyItems="center"
      alignItems="center"
      bg="white"
      position="sticky"
      top="0"
      zIndex="10"
      borderBottom="20px solid #edf2f7"
    >
      <GridItem justifySelf="start" m="2">
        <Image src="/logo.png" height="30px" ml="2" />
      </GridItem>

      <GridItem justifySelf="center" alignSelf="center">
        <Box textAlign="center">
          <Text fontSize="lg" fontWeight="bold">
            <a href="https://tejas-mundhe-projects.netlify.app/">
              {" "}
              Tejas Mundhe 💻{" "}
            </a>
          </Text>
          <Text fontSize="sm">Full Stack Developer 😎</Text>
        </Box>
      </GridItem>

      <GridItem justifySelf="end" alignSelf="center" mr="4">
        <Button
          size="sm"
          colorScheme="teal"
          rightIcon={<FaGithub />}
          variant="outline"
          onClick={() =>
            window.open("https://github.com/tejasrocksHere/", "_blank")
          }
        >
          My GitHub
        </Button>
      </GridItem>
    </Grid>
  );
}
