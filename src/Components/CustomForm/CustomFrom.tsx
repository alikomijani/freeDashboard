import React, { useState } from "react";
import PropTypes from "prop-types";

type Props<T> = {
  onSubmit: (data: T) => Promise<any>;
  // onSubmit is a function that return a promise and call when form is submitted
  fields: {
    label: string;
    fieldsProps: React.InputHTMLAttributes<HTMLInputElement>;
  }[];

  buttonText?: string;
  // a text displayed in submit button default is submit
};

function CustomFrom<T>({ onSubmit, fields, buttonText = "submit" }: Props<T>) {
  const [loading, setLoading] = useState(false);
  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    onSubmit(data as T).finally(() => setLoading(false));
  };
  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field, index) => (
        <label key={index}>
          <div>{field.label}</div>
          <input {...field.fieldsProps} />
        </label>
      ))}
      <button type="submit" disabled={loading}>
        {loading ? "...loading" : buttonText}
      </button>
    </form>
  );
}

CustomFrom.propTypes = {
  buttonText: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default CustomFrom;
