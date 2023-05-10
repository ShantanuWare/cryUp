import { Grid, Flex, Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import btcSrc from "../assets/btc.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Grid
      templateColumns={["1fr", "1fr 1fr"]}
      gap={4}
      bgColor={"blackAlpha.900"}
      w={"full"}
      h={"100vh"}
      alignItems="center"
      justifyContent="center"
      overflowX="hidden"
    >
      <Box gridColumn={["1", "1 / 2"]} justifySelf="start" ml={8}>
        <Text
          fontSize={"6xl"}
          textAlign={"start"}
          fontWeight={"medium"}
          color={"whiteAlpha.700"}
          mb={4}
        >
          CrypUp
        </Text>
        <Flex flexDirection="column">
          <Text fontSize={"3xl"} mb={2} color={"whiteAlpha.700"}>
            Discover the possibilities of crypto trading, with CrypUp by your side.
          </Text>
        </Flex>
      </Box>

      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateX: ["0", "20px"],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        justifySelf="end"
        gridColumn={["1", "2 / 3"]}
        mr={8}
      >
        <Image
          w={"full"}
          h={"full"}
          objectFit={"contain"}
          src={btcSrc}
          
        />
      </motion.div>
    </Grid>
  );
}
;



export default Home;
