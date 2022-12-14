import React from "react";

const Form = (props) => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        {error(props.error)}
        <div className="row py-4">
          <div className="col-md-3 offset-md-2">
            <input type="text" className="form-control" placeholder="City" name="city" autoComplete="off" />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="Country" name="country" autoComplete="off" />
          </div>
          <div className="col-md-3 mt-md-0 mt-2 text-md-left ">
            <button className="btn btn-primary">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = (error) => {
  return (
    error && (
      <div className="alert alert-danger mx-5 " role="alert">
        Please Enter City and Country...!
      </div>
    )
  );
};

export default Form;
