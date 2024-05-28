import React, { useEffect, useState } from "react";
import { app, db } from "./firebase";
import { onValue, ref } from "firebase/database";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";
import Header from "./components/header";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { MdFileDownloadDone } from "react-icons/md";

const Transaction = () => {
  const [data, upData] = useState([]);

  useEffect(() => {
    onValue(ref(db, `users`), (snapshot) => {
      const usersData = snapshot.val();
      if (usersData) {
        const formattedData = Object.keys(usersData).map((key) => ({
          id: key,
          ...usersData[key],
        }));
        upData(formattedData);
      } else {
        upData([]);
      }
    });
  }, []);
  console.log("firebase data");
  console.log(data);
  return (
    <div>
      <Header />
      <div className="container">
        <ul className="responsive-table">
          <li className="table-header">
            <div className="col col-2">Customer Name</div>
            <div className="col col-3">payment inr</div>
            <div className="col col-4">payment status</div>
          </li>

          {data.map(({ name, amount }) => (
            <li className="table-row">
              <div className="col col-2 " data-label="Customer Name">
                {name}
              </div>
              <div className="col col-3" data-label="Amount">
                {amount}
              </div>
              <div className="col col-4" data-label="delete">
                <MdFileDownloadDone id="deleteicon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Transaction;
