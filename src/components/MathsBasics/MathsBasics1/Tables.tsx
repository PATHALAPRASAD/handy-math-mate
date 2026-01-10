import { Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export const Tables = () => {
  const [value, setValue] = useState<string>("");
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setValue(e.target.value);
    setIsDisplay(false);
  };
  const handleSearch = () => {
    const numRegExp: any = /^[0-9]+$/;
    console.log({ value });
    console.log(typeof value);
    console.log(!isNaN(parseInt(value)));
    console.log("numRegExp.test(value) : ", numRegExp.test(value));
    if (value && !isNaN(parseInt(value)) && numRegExp.test(value)) {
      console.log("entered");
      setIsDisplay(true);
    } else {
      console.log("not entered");
      setIsDisplay(false);
    }
  };
  const handleReset = () => {
    setValue("");
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
          bgcolor: "violet",
          p: 5,
        }}
      >
        <Typography variant="body1">Enter which table you want ?</Typography>
        <TextField
          value={value}
          onChange={handleChange}
          sx={{ bgcolor: "white" }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Reset
        </Button>
      </Stack>
      {value && isDisplay && (
        <Stack
          spacing={2}
          direction={"column"}
          sx={{ bgcolor: "lightgreen", p: 5 }}
        >
          {new Array(20).fill(0).map((x: any, xIndex: number) => (
            <Typography key={xIndex}>
              {`${value}\tx\t${xIndex + 1}\t=\t${
                parseInt(value) * (xIndex + 1)
              }`}
            </Typography>
          ))}
        </Stack>
      )}
    </Stack>
  );
};
