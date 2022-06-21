import logo from './logo.svg';
import './App.css';
import Character from "./components/character/Character";
function App() {
  return (
    <div>
      <Character
          name={'BART'}
          desc={'Bart has also been on the cover on numerous comics, such as "Critical Hit", '}
          picture={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}
      />
        <Character
            name={'HOMER'}
            desc={'His favorite color is blue and he enjoys dancing, eating donuts, drinking,' +
                ' hugging, driving a sit-down arcade racer'}
            picture={"https://static.wikia.nocookie.net/simpsons/images/0/02/Homer_Simpson_2006.png"}
        />
        <Character
            name={'MARGE'}
            desc={' Aside from her duties at home,' +
                ' Marge has flirted briefly with a number of careers ranging from a police officer' +
                ' to an anti-violence activist.'}
            picture={"https://static.wikia.nocookie.net/simpsons/images/4/4d/MargeSimpson.png"}
        />
        <Character
        name={'LISA'}
        desc={'She is a charismatic 8-year-old girl, who exceeds the standard achievement ' +
            'of the intelligence level of children her age.'}
        picture={"https://static.wikia.nocookie.net/simpsons/images/d/d5/Lisa_Simpson_official.png"}
        />
        <Character
        name={'MEGGIE'}
        desc={'She is often seen sucking on her pacifier, and when she walks,'}
        picture={"https://static.wikia.nocookie.net/simpsons/images/9/9d/Maggie_Simpson.png"}
        />
    </div>
  );
}

export default App;
