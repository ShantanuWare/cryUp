import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  VStack,
  Text,
  Image,
} from "@chakra-ui/react";
import Loader from "./Loader";
import Err from "./Err";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);

  useEffect(() => {
    const fetchExchanges = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setErr(true);
      }
    };
    fetchExchanges();
  }, []);
  if(err) return <Err message={"Error in fetching Exchanges"}/>;
  return (
    
    <Container maxW={"Container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => (
  <a href={url} target={"blank"}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"5"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"5"}
      css={{ "&:hover": { transform: "scale(1.1)" } }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />

      <Heading size={"md"} noOfLines={"1"}>
        {rank}
      </Heading>
      <Text noOfLines={"1"}>{name}</Text>
    </VStack>
  </a>
);
export default Exchanges;
