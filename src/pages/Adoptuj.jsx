import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Form, Button, Card } from 'react-bootstrap';
import './adoptuj.css'
import { FaChevronDown} from '@react-icons/all-files/fa/FaChevronDown';
import { FaChevronUp} from '@react-icons/all-files/fa/FaChevronUp';

const Adoptuj = () => {
  const api = 'https://retoolapi.dev/KrZlu2/data'; //TODO: Podmienić na ścieżkę która zwróci żądanie GET API

  const [pets, setPets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPets, setFilteredPets] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState('');
  const [searchFormVisible, setSearchFormVisible] = useState(false);

  useEffect(() => {
    const getPets = async () => {
      const { data: res } = await axios.get(api);
      setPets(res);
      setFilteredPets(res);
      setBreeds([...new Set(res.map(pet => pet.rasa))]);
    }
    getPets();
  }, [])

  const handleSearch = async (term, breed) => {
    let filteredResults = pets;

    if (term) {
      if (!isNaN(term)) {
        filteredResults = filteredResults.filter((pet) => pet.age === parseInt(term));
      } else {
        filteredResults = filteredResults.filter((pet) => pet.name.toLowerCase().includes(term.toLowerCase()));
      }
    }

    if (breed) {
      filteredResults = filteredResults.filter((pet) => pet.rasa.toLowerCase() === breed.toLowerCase());
    }

    setFilteredPets(filteredResults);
  };

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    handleSearch(value, selectedBreed);
  };

  const handleBreedChange = async (event) => {
    const value = event.target.value;
    setSelectedBreed(value);
    handleSearch(searchTerm, value);
  };


  return (
    <div className='bodyadopt'>
      <div>
        {searchFormVisible ? (
          <FaChevronUp
            className='chevron'
            onClick={() => setSearchFormVisible(false)}
            title='Wyszukaj'
          />
        ) : (
          <FaChevronDown
            className='chevron'
            onClick={() => setSearchFormVisible(true)}
          />
        )}
        <span className='search-text'>Wyszukaj</span>
        {searchFormVisible && (
          <Form className='searchbar'>
            <Form.Control
              type="search"
              placeholder="Wyszukaj swojego pupila"
              className="search"
              aria-label="Search"
              value={searchTerm}
              onChange={handleInputChange}
            />
            <Form.Label className='label-breed'>Wybierz preferowaną rasę:</Form.Label>
            <Form.Select className='breed' value={selectedBreed} onChange={handleBreedChange}>
              <option value="">Wszystkie rasy</option>
              {breeds.map((breed, index) => {
                return (
                  <option value={breed} key={index}>
                    {breed}
                  </option>
                );
              })}
            </Form.Select>
            <Button className='btnsearch' variant="outline-success" onClick={() => handleSearch(searchTerm, selectedBreed)}>Wyszukaj</Button>
          </Form>
        )}
      </div>
      <div className='cards'>
        {
          filteredPets.map((pet, index) => {
            return (
              <Card className='card' key={index}>
                <Card.Img className='card-img' variant='top' src={pet.image} />
                <Card.Title className='card-title'>{pet.name}</Card.Title>
                <Card.Text className='card-age'>{pet.age} lat</Card.Text>
                <Button className='btnadpt' variant='outline-warning'>Adoptuj!</Button>
              </Card>
            )
          })
        }
      </div>
    </div>
  )
}

export default Adoptuj;