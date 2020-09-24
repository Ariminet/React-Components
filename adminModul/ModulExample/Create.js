import React, { useState, useEffect } from 'react';
import API from '../../../Api/Events';
const Create = ({ reload }) => {
  const [payload, setPayload] = useState({});
  const [file, setFile] = useState('');
  const [region, setRegion] = useState({});

  useEffect(() => {
    API.getRegion('/region', setRegion);
  }, []);

  const onChange = (e) => {
    setPayload({ ...payload, [e.target.name]: e.target.value });
  };
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(payload);

    const formData = new FormData();
    formData.append('event', JSON.stringify(payload));
    formData.append('billede', file);

    try {
      const res = await API.createEvent('/url/admin', formData);
      reload(true);
    } catch (err) {
      alert(err.message);
    }
  };

  const regionList = region.length
    ? region.map((item) => {
        return <option value={item._id}>{item.regionnavn}</option>;
      })
    : null;
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="file">Image Upload</label>
        <input type="file" onChange={onFileChange} />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" name="titel" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="dato">Dato</label>
        <input type="date" name="dato" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="beskrivelse">Beskrivelse</label>
        <textarea rows={15} cols={50} name="beskrivelse" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="distance">Distance</label>
        <input type="number" name="distance" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="pris">Pris</label>
        <input type="number" name="pris" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="antalpladser">Antalpladser</label>
        <input type="number" name="antalpladser" onChange={onChange} />
      </div>
      <div className="form-group">
        <label htmlFor="region">Region</label>
        <select name="region" onChange={onChange}>
          <option value=""></option>
          {regionList}
        </select>
      </div>
      <div className="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Create;
