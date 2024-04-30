import { Box, Flex, Heading, Text, VStack, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box p={8}>
      <Flex direction="column" align="center" justify="center" minHeight="100vh">
        <Heading mb={4}>John Doe</Heading>
        <Text fontSize="lg" mb={6}>Frontend Developer | UI/UX Enthusiast</Text>
        <VStack spacing={5}>
          <Button as={Link} href="#about" variant="outline" size="lg">About</Button>
          <Button as={Link} href="#portfolio" variant="outline" size="lg">Portfolio</Button>
          <Button as={Link} href="#contact" variant="outline" size="lg">Contact</Button>
        </VStack>
      </Flex>
      <Box id="about" pt={10} pb={6}>
        <Heading size="lg" textAlign="center" mb={4}>About Me</Heading>
        <Text fontSize="md" px={10}>
          Passionate about building excellent software that improves the lives of those around me.
          Specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.
        </Text>
      </Box>
      <Box id="portfolio" pt={6} pb={10}>
        <Heading size="lg" textAlign="center" mb={4}>Portfolio</Heading>
        <Flex justify="center">
          <Text fontSize="md" px={10}>Projects will be displayed here.</Text>
        </Flex>
      </Box>
      <Box id="contact" pt={6} pb={10}>
        <Heading size="lg" textAlign="center" mb={4}>Contact</Heading>
        <Flex justify="center" align="center">
          <Link href="mailto:john.doe@example.com" p={2}><FaEnvelope size="24px" /></Link>
          <Link href="https://github.com/johndoe" p={2}><FaGithub size="24px" /></Link>
          <Link href="https://linkedin.com/in/johndoe" p={2}><FaLinkedin size="24px" /></Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Index;