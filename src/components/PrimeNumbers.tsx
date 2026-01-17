import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

let initialInputData: any = {
  first: "",
  last: "",
};

export const PrimeNumbers = () => {
  const [inputData, setInputData] = useState<any>(initialInputData);
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputData((x: any) => ({ ...x, [name]: value }));
    setIsDisplay(false);
  };

  const handleSubmit = () => {
    const numRegExp: any = /^[0-9]+$/;
    setIsDisplay(
      inputData &&
        numRegExp.test(inputData.first) &&
        numRegExp.test(inputData.last),
    );
  };
  const handleReset = () => {
    setInputData(initialInputData);
    setIsDisplay(false);
  };

  const isPrime = (n: number) => {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  };

  return (
    <Stack
      spacing={2}
      direction={"column"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "cyan",
        p: 5,
        m: 0,
      }}
    >
      <Stack
        spacing={2}
        direction={"row"}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "white",
          p: 5,
        }}
      >
        <TextField
          value={inputData.first}
          onChange={handleInputChange}
          sx={{ bgcolor: "white" }}
          label={"First"}
          name={"first"}
        />
        <TextField
          value={inputData.last}
          onChange={handleInputChange}
          sx={{ bgcolor: "white" }}
          label={"Last"}
          name={"last"}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Stack>
      {inputData && inputData.first && inputData.last && isDisplay && (
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ bgcolor: "lightgreen", p: 5 }}
        >
          {new Array(parseInt(inputData.last) - parseInt(inputData.first) + 1)
            .fill(0)
            .map((x: any, xIndex: number) =>
              isPrime(parseInt(inputData.first) + xIndex) ? (
                <Typography key={xIndex}>
                  {parseInt(inputData.first) + xIndex}
                </Typography>
              ) : null,
            )}
        </Stack>
      )}
    </Stack>
  );
};
