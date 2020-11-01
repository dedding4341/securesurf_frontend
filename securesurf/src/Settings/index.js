import React, { useEffect } from "react";
import "./Settings.css";
import SideNav from "../SideNav";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as a from "../actions";
import Table from "../Table";


function Settings() {
  const watchList = useSelector(state => state.watch_list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(a.getWatchListFromAPI());
  }, []);

  if (!localStorage.getItem("token")) {
    console.log("no token..");
    return <Redirect to="/" />
  }

  return (
    <div className="Settings">
      <SideNav />
      <div className="Settings-container">
        <Table data={watchList} />
      </div>
    </div>
  );
}

export default Settings;