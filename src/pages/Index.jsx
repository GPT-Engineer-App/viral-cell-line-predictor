import React, { useState } from "react";
import { Container, VStack, Text, Input, Button, Select, Box, Heading, IconButton, useToast } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const Index = () => {
  const [sequence, setSequence] = useState("");
  const [cellLine, setCellLine] = useState("");
  const [prediction, setPrediction] = useState(null);
  const toast = useToast();

  const handlePredict = () => {
    if (!sequence || !cellLine) {
      toast({
        title: "Error",
        description: "Please provide both genomic sequence and cell line.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Simulate prediction logic
    const simulatedPrediction = `Predicted cell line for the given sequence is: ${cellLine}`;
    setPrediction(simulatedPrediction);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">
          Virus Cell Line Prediction Tool
        </Heading>
        <Text>Enter the genomic sequence of the virus and select a cell line to predict.</Text>
        <Input placeholder="Enter genomic sequence" value={sequence} onChange={(e) => setSequence(e.target.value)} />
        <Select placeholder="Select cell line" value={cellLine} onChange={(e) => setCellLine(e.target.value)}>
          <option value="HeLa">HeLa</option>
          <option value="Vero">Vero</option>
          <option value="MDCK">MDCK</option>
          <option value="293T">293T</option>
        </Select>
        <Button leftIcon={<FaSearch />} colorScheme="teal" onClick={handlePredict}>
          Predict
        </Button>
        {prediction && (
          <Box p={4} mt={4} borderWidth={1} borderRadius="md" width="100%">
            <Text>{prediction}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
