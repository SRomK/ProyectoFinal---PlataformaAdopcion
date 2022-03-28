import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import ProfileImgGeneric from "../../img/profile_image_generic.jpg";
import PropTypes from "prop-types";

import "../../styles/buttonsforeditprofilephoto.css";
import {} from "react/cjs/react.production.min";
export const ButtonsForEditProfilePhoto = (props) => {
  const { store, actions } = useContext(Context);

  const [image, setImage] = useState([]);

  const editProfilePhoto = async () => {
    var data = new FormData();
    data.append("file", image[0]);
    const response = await fetch(store.URLAPIDOGS + `${props.route}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: data,
    });

    if (response.ok) {
      console.log("entra al if");
      () => {
        props.getinfo;
      };
      console.log("ejecuta la funcion");
      console.log(props.getinfo);
    } else {
      alert("el guardado no se ha hecho");
    }
  };

  return (
    <>
      <div className="button_edit_photo_profile d-block">
        <div className="row">
          <div className="col-xl-12 d-block">
            <label className="file-upload">
              <input
                type="file"
                multiple="multiple"
                onChange={(event) => {
                  setImage(event.target.files);
                }}
                name="fileToUpload"
              />
              {store.shelterInfo.image ? "Modificar" : "Añadir imagen"}
            </label>

            <button
              type="button"
              onClick={() => {
                editProfilePhoto();
              }}
              className="buttoneditphoto"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
{
  /* <label class="file-upload">
<input type="file" multiple="multiple" name="fileToUpload" />
{store.shelterInfo.image ? "Modificar" : <img
src={ProfileImgGeneric} />}
</label> */
}
ButtonsForEditProfilePhoto.propTypes = {
  route: PropTypes.string,
  getinfo: PropTypes.func,
};
