import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import module from "./PokemonProfileTabs.module.css"
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function PokemonProfileTabs({selectedPokemon}) {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    //like container div
    <>
      {selectedPokemon && (
        <Box >
          <AppBar position="static" id={module.AppBarTabs}>
            <Tabs
              value={value}
              onChange={handleChange}


              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="STATS" {...a11yProps(0)} />
              <Tab label="MOVES" {...a11yProps(1)} />
              <Tab label="ABILITIES" {...a11yProps(2)} />
            </Tabs>
          </AppBar>


            <TabPanel value={value} index={0} dir={theme.direction}>
              {selectedPokemon.stats.map((state) => {
                return( <span key={state.stat.name+selectedPokemon.id}>{state.stat.name +'|'+ state.base_stat }<br></br></span>)
              })}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            {selectedPokemon.moves.slice(0,10).map((move) => {
                return( <span key={move.move.name+selectedPokemon.id}>{move.move.name}<br></br></span>)
              })}
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            {selectedPokemon.abilities.map((ability) => {
                return( <span key={ability.ability.name +selectedPokemon.id}>{ability.ability.name}<br></br></span>)
              })}
            </TabPanel>

        </Box>
      )}
    </>
  );
}

PokemonProfileTabs.propTypes = {
  selectedPokemon: PropTypes.object.isRequired,
};
