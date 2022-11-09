import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from './Button.js';
import './PageHome.css';
import { communePool, rarePool, epiquesPool, legendairePool } from "./Array.js"
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import XanaCollection from './artifacts/contracts/XanaCollection.sol/XanaCollection.json';

const XANAadress = "0x4f9Fbc120a652d7eE18F5D0f90f0cb3436baec99";


function PageHome() {

  const [error, setError] = useState('');
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    if(typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(XANAadress, XanaCollection.abi, provider);
      try {
        const cost = await contract.cost();
        const totalSupply = await contract.totalSupply();
        const object = {"cost": String(cost), "totalSupply": String(totalSupply)};
        setData(object);
      }
      catch(err) {
        setError(err.message);
      }
    }
  }

  async function mint() {
    if(typeof window.ethereum !== 'undefined') {
      let accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(XANAadress, XanaCollection.abi, signer);
      try {
        let overrides = {
          from: accounts[0],
          value: data.cost
        }
        const transaction = await contract.mint(accounts[0], 1, overrides);
        await transaction.wait();
        fetchData();
      }
      catch(err) {
        setError(err.message);
      }
    }
  }

  return (
    <div className="widget-home">
        <Carousel fade={false} pause={false} variant="dark">
            <Carousel.Item interval={4000}>
                <img
                className="d-block w-100"
                src="./Legendaire/25.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Xana NFT Collection</h3>
                <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./Epiques/14.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Xana NFT Collection</h3>
                <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./Rare/22.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Xana NFT Collection</h3>
                <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./Rare/48.png"
                alt="Second slide"
                />
                <Carousel.Caption>
                <h3>Xana NFT Collection</h3>
                <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./Commune/5.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Xana NFT Collection</h3>
                <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src="./Commune/34.png"
                alt="Third slide"
                />
                <Carousel.Caption>
                <h3>Xana NFT Collection</h3>
                <p>Une collection de NFT inédite créée par Théophile de Larquier & Antoine Pierson</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        <div className="error">
          {error && <p>{error}</p>}
        </div>
        <div className="info">
          <p>Il reste actuellement {50 - data.totalSupply} / 50 Xana </p>
          <p>Prix d'un NFT (prix de gaz exclus): {data.cost / 10**18} eth</p>
        </div>
        <div className="button">
          <Button variant="primary" handleChange={mint} name="Acheter un Xana"></Button>
        </div>
        
    </div>
  )

}

export default PageHome;