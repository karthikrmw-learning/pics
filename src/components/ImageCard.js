import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.imageRef = React.createRef();
        this.state = { imageHeight : 0 };
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', () => {
            const height = Math.ceil(this.imageRef.current.clientHeight / 10) + 1;
            this.setState({ imageHeight : height });
        });
    }

    render(){
        console.log("rendering")
        return (
            <img
                ref={this.imageRef}
                alt={this.props.image.description} src={this.props.image.urls.regular}
                style={{gridRowEnd: `span ${this.state.imageHeight}` }}
                />
        );
    }
}

export default ImageCard;
