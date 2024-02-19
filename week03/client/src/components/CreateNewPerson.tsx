import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from 'react';

const ADD_PERSON = gql`
  mutation createPerson($name: String!, $age: Int, $imageUrl: String) {
    createPerson(name: $name, age: $age, imageUrl: $imageUrl) {
      id
      name
      age
      imageUrl
    }
  }
`;

function CreateNewPerson( {GET_PERSONS} ) {
  const [createPerson, { data, loading, error }] = useMutation(ADD_PERSON, { refetchQueries:[
    {query: GET_PERSONS}
  ]});

  const [personData, setPersonData] = useState({
    name: '',
    age: 0,
    imageUrl: '',
  });
  const ageAsString = personData.age.toString;

  const handlePersonDataChange = (e) => {
    const { name, value } = e.target;
    setPersonData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitPersonData = () => {
    createPerson({
      variables: {
        name: personData.name,
        age: ageAsString,
        imageUrl: personData.imageUrl,
      },
    });

    setPersonData({
      name: '',
      age: 0,
      imageUrl: '',
    });
  };

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
        <br />
        <br />
        <p>newpersons data: </p>
        <br />
        <p> name:{personData.name}, age: {personData.age}, image: {personData.imageUrl} </p>
        <button type="submit">create person</button>
      </form>
    </>
  );
}

export default CreateNewPerson;
