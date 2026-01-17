import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

let initialInputData: any = {
  baseStart: "",
  baseEnd: "",
  exponent: "",
};

export const Powers = () => {
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
        numRegExp.test(inputData.baseStart) &&
        numRegExp.test(inputData.baseEnd) &&
        numRegExp.test(inputData.exponent),
    );
  };
  const handleReset = () => {
    setInputData(initialInputData);
    setIsDisplay(false);
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
          value={inputData.baseStart}
          onChange={handleInputChange}
          sx={{ bgcolor: "white" }}
          label={"Start"}
          name={"baseStart"}
        />
        <TextField
          value={inputData.baseEnd}
          onChange={handleInputChange}
          sx={{ bgcolor: "white" }}
          label={"End"}
          name={"baseEnd"}
        />
        <TextField
          value={inputData.exponent}
          onChange={handleInputChange}
          sx={{ bgcolor: "white" }}
          label={"Exponent"}
          name={"exponent"}
        />
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="outlined" onClick={handleReset}>
          Reset
        </Button>
      </Stack>
      {inputData && inputData.baseStart && inputData.baseEnd && isDisplay && (
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ bgcolor: "lightgreen", p: 5 }}
        >
          {new Array(
            parseInt(inputData.baseEnd) - parseInt(inputData.baseStart) + 1,
          )
            .fill(0)
            .map((x: any, xIndex: number) => (
              <Typography key={xIndex}>
                {parseInt(inputData.baseStart) + xIndex}{" "}
                <sup>{inputData.exponent}</sup> ={" "}
                {Math.pow(
                  parseInt(inputData.baseStart) + xIndex,
                  parseInt(inputData.exponent),
                )}
              </Typography>
            ))}
        </Stack>
      )}
    </Stack>
  );
};
