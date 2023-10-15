import React, { FC, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import Navigation from "../../Navigation/Navigation";
import { conversions } from "./material-conversions";
import { TextField } from "@mui/material";

export const MaterialCalculator: FC = () => {
  const [selectedConversion, setSelectedConversion] = useState<string>("");
  const [inputMaterialLabel, setInputMaterialLabel] = useState<string>("");

  const handleConversionChange = (event: SelectChangeEvent): void => {
    const selectedValue = event.target.value as string;
    setSelectedConversion(selectedValue);
    setInputMaterialLabel(`Input material amount for ${selectedValue}`);
  };

  const conversionKeys: string[] = Object.keys(conversions);
  console.log(conversions, "conversions");
  console.log(selectedConversion, "selectedConversion");
  console.log(conversionKeys, "conversionKeys");
  console.log(conversionKeys, "conversionKeys");

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
        id="outlined-number"
        label={inputMaterialLabel}
        type="number"
      />
    </>
  );
};
