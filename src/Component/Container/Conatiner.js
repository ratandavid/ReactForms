import React from 'react';
import Form from '../Form/Form';
import Image from '../Image/Image';
import './container.css';


const image = {
    width: '100%',
    height:'100vh'
};

function ImageContainer(){
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 col-sm-6 col-12 image_box">
                    <Image size={image}/>
                </div>

                <div className="col-md-6 col-sm-6 col-12 image_box">
                    <Form/>
                </div>
            </div>
        </div>
    );
}

export default ImageContainer;
