import React, { useState } from "react";

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewItemForm = ({ addItem }) => {
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
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="description">Description:</label>
      <input
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />

      <label htmlFor="recipe">Recipe:</label>
      <input
        id="recipe"
        name="recipe"
        value={formData.recipe}
        onChange={handleChange}
      />

      <label htmlFor="serve">Serve:</label>
      <input
        id="serve"
        name="serve"
        value={formData.serve}
        onChange={handleChange}
      />

      <button>Submit</button>
    </form>
  );
};

export default NewItemForm;
