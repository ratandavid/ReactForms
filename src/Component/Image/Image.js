import React from 'react';
import image from '../../Images/lighthouse.jpeg';
import './image.css'

function Image(props){
    return(
        <div>
            <img className="img-fluid air"  src={image} style={props.size} alt="airplane"/>
            <div className="image-text">
            <h1>Lorem Ipsum</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
        </div>

    );
}



export default Image;