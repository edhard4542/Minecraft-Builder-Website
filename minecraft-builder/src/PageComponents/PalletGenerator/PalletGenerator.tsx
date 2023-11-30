import { ChangeEvent, useState } from "react";
import FooterPage from "../../Footer/FooterPage";
import Navigation from "../../Navigation/Navigation";
import image2 from "../../assets/prettyfloor.jpg";
import image1 from "../../assets/villageHouse.jpg";

export const PalletGenerator = () => {
  const [selectedValue, setSelectedValue] = useState(3);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(parseInt(e.target.value, 10));
  };

  return (
    <div>
      <Navigation />
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

      <div>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>Welcome to The Pallet Generator!</h2>
          <p>
            Here you will be able to choose from a range of options to make your
            perfect minecraft block pallet! You will start by telling the
            generator how many blocks you want from 3 to 10. Then you can select
            from a drop-down menu what block you want to have in your pallet.
            Then you are able to choose what aesthetic you want from the
            drop-down list as well as a drop-down with any colors you wish to
            have.
          </p>
        </div>
      </div>
      <label>Select a number:</label>
      <select value={selectedValue} onChange={handleChange}>
        {Array.from({ length: 8 }, (_, index) => (
          <option key={index} value={index + 3}>
            {index + 3}
          </option>
        ))}
      </select>
      <FooterPage />
    </div>
  );
};
