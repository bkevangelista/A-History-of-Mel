import React from "react";
import { Card } from "react-bootstrap";
import './Box.css';

function MessageCard(props) {
    const {cardInfo = {} } = props;
    
    const renderCardImages = (card) => {
        let images = [];
        card.image.forEach(i => {
            if (i.slice(-4).toLowerCase().includes(".mov")) {
                images.push(
                    <div>
                        <video width="100%" height="100%" src={i} controls/>
                        <br />
                    </div>
                )
            } else {
                images.push(
                    <Card.Img variant="top" src={i} style={{width: 400, height: 533}} />
                )
            }
        }
        );
        return (
            <div>
                {images}
            </div>
        )
    }
    const renderMessage = (card) => {
        let text = [];
        card.description.forEach(message => 
            text.push(
                <div>
                    <Card.Text>{message}</Card.Text>
                    <p />
                </div>
            )
        );
        return (
            <div>
                {text}
            </div>
        )
    }
    const renderCards = (card) => {
        return (
            <Card className="box" >
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    {renderMessage(card)}
                    {renderCardImages(card)}
                </Card.Body>
            </Card>
        );
    }
    return (
        <div className="box">
            {renderCards(cardInfo)}
        </div>
    )
}

export default MessageCard;