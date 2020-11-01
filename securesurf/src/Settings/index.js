import React, { useEffect, useState } from "react";
import "./Settings.css";
import SideNav from "../SideNav";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as a from "../actions";
import Table from "../Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


function Settings() {
  const INITIAL_VALUES = { url1: "", url2: "", url3: "", url4: "", url5: "", url6: "" }
  const watchList = useSelector(state => state.watch_list);
  const [formData, setFormData] = useState(INITIAL_VALUES);
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(a.getWatchListFromAPI());
  }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let formDataList = Object.values(formData).filter(v => v !== "");
    dispatch(a.postWatchListToAPI(formDataList));
    dispatch(a.getWatchListFromAPI());
    setFormData(INITIAL_VALUES);
    setShowForm(false);
  }

  if (!localStorage.getItem("token")) {
    return <Redirect to="/" />
  }

  return (
    <div className="Settings">
      <SideNav />
      <div className="Settings-css">
        <div className="Settings-container">
          <div className="Settings-form-list-container">
            <button className="Settings-show-form" onClick={() => setShowForm(true)}>Add a URL to Watch List</button>
            <Table data={watchList} />
            {showForm &&
              <section className="Settings-form-container">
                <FontAwesomeIcon onClick={() => setShowForm(false)} icon={faTimes} size="3x" />
                <form className="Settings-form" onSubmit={handleSubmit}>
                  <p>Enter an https:// URL:</p>
                  <input placeholder="URL #1" type="url" name="url1" value={formData.url1} onChange={handleChange} />
                  <input placeholder="URL #2" type="url" name="url2" value={formData.url2} onChange={handleChange} />
                  <input placeholder="URL #3" type="url" name="url3" value={formData.url3} onChange={handleChange} />
                  <input placeholder="URL #4" type="url" name="url4" value={formData.url4} onChange={handleChange} />
                  <input placeholder="URL #5" type="url" name="url5" value={formData.url5} onChange={handleChange} />
                  <input placeholder="URL #6" type="url" name="url6" value={formData.url6} onChange={handleChange} />
                  <button type="submit">Add Watch List</button>
                </form>
              </section>}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;