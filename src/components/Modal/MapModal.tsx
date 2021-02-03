import React, { FC } from "react";
import { createPortal } from "react-dom";
import Map from "../Map/Map";
import { Location } from "../../models/location";
import { Background, Header, Content, Icon } from "./ModalStyles";
import { MdCancel } from "react-icons/md";

const modalRoot = document.getElementById("modal");

interface IProps {
  closeModal: () => void;
  location: Location;
}

const MapModal: FC<IProps> = ({ closeModal, location }) =>
  createPortal(
    <Background onClick={closeModal}>
      <Content onClick={(e) => e.stopPropagation()}>
        <Header>
          <Icon onClick={closeModal}>
            <MdCancel color="grey" size={20} />
          </Icon>
        </Header>
        <Map lat={location.latitude} lng={location.longitude} />
      </Content>
    </Background>,
    modalRoot!
  );

export default MapModal;
