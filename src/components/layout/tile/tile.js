import React from "react";
import { connect } from "react-redux";

import { setActiveImage } from "../../../state/actions/set-active-image";

import './tile.css';

const Tile = (props) => {
    const maximizeImage = () => {
        props.dispatch(
            setActiveImage({
                id: props.id,
                name: props.name,
                url: props.url,
                source: props.source
            })
        );
    }

    return (
        <img
            id={props.id}
            tabIndex={props.tabIndex}
            className={`tile`}
            src={props.url}
            onClick={() => maximizeImage()}
            onKeyDown={(e) => {
                if (e.key === " " || e.key === "Enter") {
                    e.preventDefault();
                    maximizeImage();
                }
            }}
        />
    );
};

export default connect(() => ({}))(Tile);
