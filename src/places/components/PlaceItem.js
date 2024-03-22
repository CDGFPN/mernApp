import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import Map from "../../shared/components/UIElements/Map";

import "./PlaceItem.css";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const switchMapHandler = () => setShowMap(!showMap);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={switchMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={switchMapHandler}>FECHAR</Button>}
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={switchMapHandler}>
              VER NO MAPA
            </Button>
            <Button to={`/places/${props.id}`}>EDITAR</Button>
            <Button danger>DELETAR</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;