import React from 'react';
import {Card} from './Card.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './PageInfos.css';

function PageInfos() {

    return (
        <div className="container">
            <h1>Notre collection NFT</h1>
            <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
            <h2>Exemples des cartes:</h2>

            <div classname="container-cards">
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        <Card 
                        variant='primary'
                        image='./Legendaire/25.png'
                        title='Legendaire'
                        text='3 attributs rares (background de couleur, logo de couleur et pattern) + le super background sandwich'
                        />
                    </Col>
                    <Col>
                        <Card 
                        variant='primary'
                        image='./Epiques/18.png'
                        title='Epique'
                        text='3 attributs rares (background de couleur, logo de couleur et pattern)'
                        />
                    </Col>
                    <Col>
                        <Card 
                        variant='primary'
                        image='./Rare/48.png'
                        title='Rare'
                        text='2 attributs rares parmis: background de couleur, logo de couleur et pattern'
                        />
                    </Col>
                    <Col>
                        <Card 
                        variant='primary'
                        image='./Commune/5.png'
                        title='Commun'
                        text='1 attribut rares parmis: background de couleur, logo de couleur et pattern'
                        />
                    </Col>
                </Row>
            </div>
        </div>
    )

}

export default PageInfos;