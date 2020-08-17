import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import { Cover, Avatar, ImgFlex } from "../styles/profile";
import { StyledInput, Button } from "../styles/common";
import { Error } from "../styles/signin";
import UploadButton from "../uploadButton";

const validate = (data) => {
  const errors = {};
  if (!data.firstname) errors.firstname = "Firstname required";
  if (!data.lastname) errors.lastname = "Lastname required";
  if (!data.dob) errors.dob = "Date of birth required";
  return errors;
};

const Input = ({ input, type, placeholder, meta: { touched, error } }) => (
  <React.Fragment>
    <StyledInput {...input} type={type} placeholder={placeholder} />
    {touched && error && <Error>{error}</Error>}
  </React.Fragment>
);

let EditProfileForm = (props) => {
  const [cover, setCover] = useState(props.initialValues.cover);
  const [avatar, setAvatar] = useState(props.initialValues.avatar);

  const { isSaveDisabled } = props;

  const handleCover = (e, onChange) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCover(reader.result);
      onChange(file);
    };
  };

  const handleAvatar = (e, onChange) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(file);
    reader.onloadend = () => {
      setAvatar(reader.result);
      onChange(file);
    };
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <Cover
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${cover})`,
          backgroundSize: "cover",
        }}
      >
        {/* {cover && <img src={cover} />} */}
        <Field
          type="file"
          name="cover"
          component={({ input }) => {
            return (
              <React.Fragment>
                <label htmlFor="cover" style={{ zIndex: 1 }}>
                  <UploadButton
                    isCamera
                    color="rgb(255,255,255)"
                    width="22.5px"
                    height="22.5px"
                  />
                </label>
                <input
                  type="file"
                  id="cover"
                  name="cover"
                  accept="image/*"
                  onChange={(e) => handleCover(e, input.onChange)}
                  style={{ display: "none" }}
                />
              </React.Fragment>
            );
          }}
        />
      </Cover>
      <ImgFlex>
        <Avatar style={{ position: "relative" }} backgroundImage={avatar}>
          <Field
            type="file"
            name="avatar"
            component={({ input }) => (
              <React.Fragment>
                <label
                  htmlFor="avatar"
                  style={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <UploadButton
                    isCamera
                    color="rgb(255,255,255)"
                    width="22.5px"
                    height="22.5px"
                  />
                </label>
                <input
                  type="file"
                  id="avatar"
                  name="avatar"
                  accept="image/*"
                  onChange={(e) => handleAvatar(e, input.onChange)}
                  style={{ display: "none" }}
                />
              </React.Fragment>
            )}
          />
        </Avatar>
      </ImgFlex>
      <div style={{ marginBottom: "5%" }}>
        <Field
          type="text"
          name="firstname"
          component={Input}
          placeholder="Firstname"
        />
      </div>
      <div style={{ marginBottom: "5%" }}>
        <Field
          type="text"
          name="lastname"
          component={Input}
          placeholder="Lastname"
        />
      </div>
      <div style={{ marginBottom: "5%" }}>
        <Field type="text" name="bio" component={Input} placeholder="Bio" />
      </div>
      <div style={{ marginBottom: "5%" }}>
        <Field
          type="text"
          name="location"
          component={Input}
          placeholder="Location"
        />
      </div>
      <div style={{ marginBottom: "5%" }}>
        <Field
          type="date"
          name="dob"
          component={Input}
          placeholder="Birth Date"
        />
      </div>
      <Button
        type="submit"
        bg="rgb(29, 161, 242)"
        color="rgb(255,255,255)"
        padding="3px 10px"
        hoverBg="rgb(26,145,218)"
        disabled={isSaveDisabled}
      >
        Save
      </Button>
    </form>
  );
};

EditProfileForm = reduxForm({
  form: "editprofile",
  validate,
})(EditProfileForm);

export default EditProfileForm;
