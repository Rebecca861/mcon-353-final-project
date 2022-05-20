import { useState, useEffect, useRef, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled as styled1 } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import { countryReducer } from "../State/Country/reducer";
import { CountryActions } from "../State/Country/reducer";
import { CountryContext } from "../State/Country/context";

function Home() {
  const [countries, setCountries] = useState([]);
  const { countryState, countryDispatch } = useContext(CountryContext);

  const [electricalVoltage, setElectricalVoltage] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [languages, setLanguages] = useState([{}]);
  const [phoneNumbers, setPhoneNumbers] = useState({});
  const [waterInfo, setWaterInfo] = useState("");
  const [vaccinations, setVaccinations] = useState([""]);
  const [currencyName, setCurrencyName] = useState("");
  const [currencyCode, setCurrencyCode] = useState("");
  const [currencyRate, setCurrencyRate] = useState("");
  const [avgTemp, setAvgTemp] = useState("");

  function getCountries() {
    fetch("https://travelbriefing.org/countries.json", {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }

  const handleChange = (event, newAlignment) => {
    const newCountry = event.target.value;
    //setCountry(newCountry);
    getCountryInfo(newCountry);
  };

  function getCountryInfo(newCountry) {
    countryDispatch({
      type: CountryActions.SET,
      country: newCountry,
    });
    console.log(newCountry);
    console.log(countryState.country);
    fetch(newCountry.url, {
      headers: {},
    })
      .then((response) => response.json())
      .then((data) => {
        setElectricalVoltage(data.electricity.voltage);
        setTimeZone(data.timezone.name);
        setLanguages(data.language);
        setPhoneNumbers(data.telephone);
        setWaterInfo(data.water.short);
        setVaccinations(data.vaccinations);
        setCurrencyName(data.currency.name);
        setCurrencyCode(data.currency.code);
        setCurrencyRate(data.currency.rate);
      });
  }

  return (
    <div>
      {/* <!--label="Select a country..."--> */}
      <h1>Countries</h1>
      <div
        id="countryDiv"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <FormControl sx={{ minWidth: 120 }}>
          <div>
            <InputLabel id="demo-select-label">Select a country...</InputLabel>
            <Select
              /*labelId="demo-select-label"*/
              id="demo-select"
              onChange={handleChange}
              onOpen={getCountries}
              label="Select a country..."
              style={{ minWidth: 250 }}
            >
              {countries.map((country) => (
                <MenuItem key={country.url} value={country}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
            <br />
            <br />
            <br />
            <Accordion sx={{ width: 800 }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Miscelaneous</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Electrical voltage: {electricalVoltage}
                  <br />
                  Time zone: {timeZone}
                  <br />
                  Tap water classification: {waterInfo}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>Languages</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {languages.map((language) => (
                  <Typography>
                    {language.language} (official: {language.official})
                  </Typography>
                ))}
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Phone Numbers:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Police: {phoneNumbers.police}
                  <br />
                  Fire: {phoneNumbers.fire}
                  <br />
                  Ambulance: {phoneNumbers.ambulance}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default Home;
