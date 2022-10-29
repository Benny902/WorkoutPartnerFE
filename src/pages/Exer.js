
import Exercises from '../components/Exercises' /*Chest*/
import Exercises2 from '../components/Exercises2' /*Back*/
import Exercises3 from '../components/Exercises3' /*Arms*/
import Exercises4 from '../components/Exercises4' /*Shoulders*/
import Exercises5 from '../components/Exercises5' /*Legs*/
import Exercises6 from '../components/Exercises6' /*Abs*/
import Exercises7 from '../components/Exercises7' /*Cardio*/

const Exer = () => {


  return (
    <div>
      <h2 className="mygallery">Exercises Examples:</h2>
      <div>&nbsp; </div>

      <div className="mygallery">
      <h3>Chest</h3>
      <Exercises/>
      </div>

      <div>&nbsp; </div>
      <div className="mygallery">
      <h3>Back</h3>
      <Exercises2/>
      </div>

      <div>&nbsp; </div>
      <div className="mygallery">
      <h3>Arms</h3>
      <Exercises3/>
      </div>

      <div>&nbsp; </div>
      <div className="mygallery">
      <h3>Shoulders</h3>
      <Exercises4/>
      </div>

      <div>&nbsp; </div>
      <div className="mygallery">
      <h3>Legs</h3>
      <Exercises5/>
      </div>

      <div>&nbsp; </div>
      <div className="mygallery">
      <h3>Abs</h3>
      <Exercises6/>
      </div>

      <div>&nbsp; </div>
      <div className="mygallery">
      <h3>Cardio</h3>
      <Exercises7/>
      </div>

    </div>
  )
}

export default Exer