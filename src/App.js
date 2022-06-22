import './App.css';
import Character from "./components/cheracter/Character";
function App(){


    return(
        <div>
            <Character
                name={'BART'}
                desc={' He is the only son of Homer and Marge Simpson, and the older brother of Lisa and Maggie.'}
                picture={'https://static.wikia.nocookie.net/simpsons/images/6/65/Bart_Simpson.png'}
            />
            <Character
            name={'HOMER'}
            desc={' Homer is overweight (said to be ~240 pounds), lazy, and often ignorant to the world around him.'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/b/bd/Homer_Simpson.png'}
            />
            <Character
            name={'MONA'}
            desc={ 'Marge Simpson, paternal grandmother of Bart' }
            picture={'https://static.wikia.nocookie.net/simpsons/images/5/52/IMG_1693.PNG'}
            />
            <Character
            name={'PATTY'}
            desc={' Patty is a lesbian since she has confessed this to Marge'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/d/d5/Patty_Bouvier1.png'}
            />
            <Character
            name={'SELMA'}
            desc={'Selma Bouvier was born two minutes before Patty. Due to a childhood bottle rocket accident'}
            picture={'https://static.wikia.nocookie.net/simpsons/images/b/ba/Selma_Bouvier.png'}

            />


        </div>
    );
}

export default App;