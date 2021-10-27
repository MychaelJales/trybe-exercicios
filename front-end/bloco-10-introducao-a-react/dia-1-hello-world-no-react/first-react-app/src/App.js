import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const arrayAppointments = ['compromisso 1',
 'compromisso 2',
 'compromisso 3',
 'compromisso 4',
];

function App() {
  return (
    <ul>
      {arrayAppointments.map((appointments) => Task(appointments))}
    </ul>
  );
}

export default App;
