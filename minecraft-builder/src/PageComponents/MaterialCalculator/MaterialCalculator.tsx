import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, FC, useState } from "react";
import image2 from "../../assets/room.jpg";
import image1 from "../../assets/portalroom.jpg";

import { TextField } from "@mui/material";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import { conversions } from "./material-conversions";
import { Box } from "@mui/material";
import backgroundImage from "../../assets/minecraft_mountains_trees.jpg";

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
    if (selectedValue.length < 1) {
      setUserInput(null);
    }
    const conversion = conversions[selectedValue];
    if (conversion) {
      setConversionDetails(conversion);
      const inputName = conversion.input;
      setInputMaterialLabel(`Input material amount for ${inputName}`);
    }
  };
  const headerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center bottom",
    color: "white",
    padding: 2,
    textAlign: "center",
    fontSize: "2rem",
  };

  // console.log(conversions, "conversions");
  console.log(selectedConversion, "selectedConversion");
  // console.log(conversionKeys, "conversionKeys");
  // console.log(conversionDetails, "conversionDetails");
  // console.log(conversionDetails.inputAmount, "conversionDetails");
  console.log(userInput, "userInput");
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

    if (totalOutput > 64) {
      const stacks = Math.floor(totalOutput / 64);
      const stackRemainder = totalOutput % 64;

      if (stackRemainder > 0) {
        return `${stacks} stacks and ${stackRemainder} ${conversionDetails.output} with ${remainder} ${conversionDetails.input} remaining`;
      } else {
        return `${stacks} stacks`;
      }
    } else if (remainder > 0) {
      return `${totalOutput} ${conversionDetails.output} with ${remainder} ${conversionDetails.input} remaining`;
    } else {
      return `${totalOutput} ${conversionDetails.output}`;
    }
  };

  return (
    <div>
      <Navigation />
      <Box sx={headerStyle}>
        <h1>CraftAssist</h1>
        <h3>A Minecraft Generator website</h3>
      </Box>
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Welcome to the Material Calculator</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <img
          src={image1}
          alt="house"
          style={{
            width: "45%",
            height: "auto",
            maxWidth: "100%",
            marginTop: "20px",
          }}
        />
        <img
          src={image2}
          alt="floor"
          style={{
            width: "45%",
            height: "auto",
            maxWidth: "100%",
            marginTop: "20px",
          }}
        />
      </div>
      <br></br>
      <div>
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
      {selectedConversion.length > 0 ? (
        <TextField
          sx={{ width: "45%" }}
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
          helperText={
            inputValidationMessage.length ? inputValidationMessage : ""
          }
        />
      ) : null}
      {userInput !== null && selectedConversion.length > 0 ? (
        <p>{calculateOutput()}</p>
      ) : null}
      <FooterPage />
    </div>
  );
};
