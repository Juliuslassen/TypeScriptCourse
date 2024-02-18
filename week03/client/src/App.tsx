import './App.css';
import { Person, Address } from '../../api/src/resolver/types';
import { useQuery, gql, useMutation } from '@apollo/client';
import CreateNewPerson from './components/CreateNewPerson';

const GET_PERSONS = gql`
  query GetPersons {
    persons {
      id
      name
      age
      imageUrl
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_PERSONS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :{error.message}</p>;
  return (
    <>
      <div>
        {data.persons.map((person: Person) => (
          <div key={person.id}>
            <div>
              name: {person.name} & age: {person.age}
            </div>
            <div>{person.imageUrl}</div>
          </div>
        ))}
      </div>

      <CreateNewPerson></CreateNewPerson>
    </>
  );
}

export default App;
