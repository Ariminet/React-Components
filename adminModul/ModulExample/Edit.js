import React, { useEffect, Fragment, useState } from 'react';
import API from '../Api/ExampleAPI';
const Edit = ({ exampleID, reload }) => {
  const [current, setCurrent] = useState({});
  const [file, setFile] = useState('');
  const [currentregion, setCurrentRegion] = useState({});
  const [regions, setRegions] = useState([]);
  const {
    _id,
    antalpladser,
    beskrivelse,
    dato,
    pris,
    distance,
    region,
    titel,
  } = current;
  const newEvent = {
    antalpladser,
    beskrivelse,
    dato,
    pris,
    distance,
    region,
    titel,
  };

  useEffect(() => {
    try {
      API.getExampleById(`/url/${exampleID}`, setCurrent);
    } catch (err) {
      alert(err.message);
    }
  }, []);
  useEffect(() => {
    console.log(region);
    API.getExampleById(`/url/${region}`, setCurrentRegion);
    API.getExamples('/url', setRegions);
  }, [region]);

  const regionList = regions.length
    ? regions.map((item) => {
        return (
          <option key={item._id} value={item._id}>
            {item.regionnavn}
          </option>
        );
      })
    : null;

  const onChange = (e) => {
    setCurrent({ ...current, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('event', JSON.stringify(newEvent));
    formData.append('billede', file);
    console.log(current);
    try {
      const res = await API.editEvent(`/event/admin/${_id}`, formData);
      reload(true);
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="file">Image Upload</label>
        <input type="file" onChange={onFileChange} />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="titel" value={titel} onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="dato">Dato</label>
        <input type="date" name="dato" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="beskrivelse">Beskrivelse</label>
        <textarea
          rows={15}
          cols={50}
          name="beskrivelse"
          value={beskrivelse}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="distance">Distance</label>
        <input
          type="number"
          value={distance}
          name="distance"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="pris">Pris</label>
        <input type="number" value={pris} name="pris" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="antalpladser">Antalpladser</label>
        <input
          type="number"
          value={antalpladser}
          name="antalpladser"
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="region">Region</label>
        <select name="region" onChange={onChange}>
          <option defaultValue value={currentregion._id}>
            {currentregion.regionnavn}
          </option>
          {regionList}
        </select>
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Edit;
