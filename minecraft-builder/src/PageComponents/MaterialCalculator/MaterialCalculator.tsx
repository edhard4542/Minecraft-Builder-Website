import React, { ChangeEvent, FC, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Navigation from "../../Navigation/Navigation";
import { conversions } from "./material-conversions";
import { TextField } from "@mui/material";

export const MaterialCalculator: FC = () => {
  const [selectedConversion, setSelectedConversion] = useState<string>("");
  const [inputMaterialLabel, setInputMaterialLabel] = useState<string>("");
  const [inputValidationMessage, setInputValidationMessage] =
    useState<string>("");
  const [conversionDetails, setConversionDetails] = useState({
    input: "",
    inputAmount: 0,
    output: "",
    outputAmount: 0,
  });
  const [userInput, setUserInput] = useState<number | null>(null);
  const conversionKeys: string[] = Object.keys(conversions);
  const handleConversionChange = (event: SelectChangeEvent): void => {
    const selectedValue = event.target.value as string;
    setSelectedConversion(selectedValue);
    const conversion = conversions[selectedValue];
    if (conversion) {
      setConversionDetails(conversion);
      const inputName = conversion.input;
      setInputMaterialLabel(`Input material amount for ${inputName}`);
    }
  };
  console.log(conversions, "conversions");
  console.log(selectedConversion, "selectedConversion");
  console.log(conversionKeys, "conversionKeys");
  console.log(conversionDetails, "conversionDetails");
  console.log(conversionDetails.inputAmount, "conversionDetails");
  const handleInputChange = (inputValue: string): void => {
    const inputValueParsed = parseFloat(inputValue);
// && = AND
// || = OR
    if (
      isNaN(inputValueParsed) || // is not a number
      inputValueParsed < 0 || // is less than zero
      inputValueParsed < conversionDetails.inputAmount // input is less than minimum input value  needed
    ) {
      // Invalid input, you can display an error message or take other actions
      console.error("Invalid input");
      setInputValidationMessage("Please enter the minimum amount");
      setUserInput(null);
    } else {
      // Valid input, you can handle it accordingly
      console.log("Valid input:", inputValueParsed);
      setInputValidationMessage("");
      setUserInput(inputValueParsed);
    }
  };

  const calculateOutput = (): string => {
    if (userInput === null) {
      return "";
    }

    const totalOutput =
      Math.floor(userInput / conversionDetails.inputAmount) *
      conversionDetails.outputAmount;
    const remainder = userInput % conversionDetails.inputAmount;

    if (remainder > 0) {
      return `${totalOutput} ${conversionDetails.output} with ${remainder} ${conversionDetails.input} remaining`;
    } else {
      return `${totalOutput} ${conversionDetails.output}`;
    }
  };

  return (
    <>
      <Navigation />
      <div>
        <h2>Material Calculator</h2>
        <Select
          value={selectedConversion}
          label="Material Input"
          onChange={handleConversionChange}
          displayEmpty
        >
          <MenuItem value="">
            <em>Material Input</em>
          </MenuItem>
          {conversionKeys.map((key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          ))}
        </Select>
        {selectedConversion && <p>Selected Conversion: {selectedConversion}</p>}
      </div>
      <TextField
        disabled={selectedConversion.length < 1}
        id="outlined-number"
        label={inputMaterialLabel}
        type="number"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          handleInputChange(event.target.value)
        }
        inputProps={{
          min: selectedConversion ? conversionDetails.inputAmount : 0,
        }}
        error={inputValidationMessage.length > 0}
        helperText={inputValidationMessage.length ? inputValidationMessage : ""}
      />
      {userInput !== null && <p>{calculateOutput()}</p>}
    </>
  );
};
