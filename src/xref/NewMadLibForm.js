import React, { useState } from "react";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewMadLibForm = ({ addItem }) => {
  const INITIAL_STATE = {};
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    addItem(formData);
    setFormData(INITIAL_STATE);
    // console.log(formData);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { name, value }= evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Noun1">Noun1:</label>
      <input
        id="noun1"
        name="noun1"
        value={formData.noun1}
        onChange={handleChange}
      />

      <label htmlFor="Noun2">Noun2:</label>
      <input
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
      />

      <label htmlFor="adjective">adjective:</label>
      <input
        id="adjective"
        name="adjective"
        value={formData.adjective}
        onChange={handleChange}
      />

      <label htmlFor="color">color:</label>
      <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Get Story</button>
    </form>
  );
};

export default NewMadLibForm;
