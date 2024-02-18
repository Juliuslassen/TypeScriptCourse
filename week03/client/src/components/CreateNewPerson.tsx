import { useQuery, gql, useMutation } from '@apollo/client';
import { Person } from '../../api/src/resolver/types';
import { FormHTMLAttributes, useState } from 'react';

const ADD_PERSON = gql`
  mutation createPerson($name: String!, $age: Int, $imageUrl: String) {
    createPerson(name: $name, age: $age, imageUrl: $imageUrl) {
      id
      name
      age
      imageUrl
      address
    }
  }
`;

function CreateNewPerson() {
  const [personData, setPersonData] = useState({
    name: '',
    age: '',
    imageUrl: '',
  });

  const handlePersonDataChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitPersonData = (e) => {
    e.preventDefault();
    createPerson({ variables: personData });

    setPersonData({
      name: '',
      age: '',
      imageUrl: '',
    });
  };

  const [createPerson, { data, loading, error }] = useMutation(ADD_PERSON);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message} </p>;

  return (
    <>
      <form onSubmit={handleSubmitPersonData}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            name="name"
            value={personData.name}
            onChange={handlePersonDataChange}
            placeholder="e.g Jack Jackson"
          />
        </div>

        <div>
          <label htmlFor="age">age</label>
          <input
            type="number"
            name="age"
            value={personData.age}
            onChange={handlePersonDataChange}
            placeholder="69"
          />
        </div>

        <div>
          <label htmlFor="imageUrl">image</label>
          <input
            type="text"
            name="imageUrl"
            value={personData.imageUrl}
            onChange={handlePersonDataChange}
            placeholder=".png"
          />
        </div>

        <button type="submit">create person</button>
      </form>
    </>
  );
}

export default CreateNewPerson;
