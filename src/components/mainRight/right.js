import Tooltip from "@material-ui/core/Tooltip";
import Avatar from "@material-ui/core/Avatar";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import { Link } from "@material-ui/core";
import { Context } from "contexts/context";
import React, { useContext } from "react";
import Paper from "./paper/Paper";
import { makeStyles } from "@material-ui/core/styles";
import pink from "@material-ui/core/colors/pink";
import green from "@material-ui/core/colors/green";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    "& > *": {
      margin: 0,
    },
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
    margin: 10,
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
    margin: 10,
  },
}));

function Right() {
  const { setContent } = useContext(Context);
  const classes = useStyles();
  const handleDeleteDate = (event) => {
    event.preventDefault();
    localStorage.clear();
    setContent({
      header: {},
      experience: { description: ["", "", ""], description2: ["", ""] },
      education: {},
      skill: [],
    });
  };
  const handleSaveToPDF = (event) => {
    event.preventDefault();
    window.print();
  };
  return (
    <div className="right">
      <div className={classes.root}>
        <Link href="#" onClick={handleDeleteDate}>
          <Tooltip title="Delete All Data" placement="right">
            <Avatar className={classes.pink}>
              <ClearIcon />
            </Avatar>
          </Tooltip>
        </Link>
        <Link href="#" onClick={handleSaveToPDF}>
          <Tooltip title="Save to PDF" placement="right">
            <Avatar className={classes.green}>
              <PictureAsPdfIcon />
            </Avatar>
          </Tooltip>
        </Link>
      </div>
      <Paper />
    </div>
  );
}

export default Right;
