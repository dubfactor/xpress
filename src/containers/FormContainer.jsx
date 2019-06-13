import React, {Component} from 'react';  

/* Import Components */
import CheckBox from '../components/CheckBox';  
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button'

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        car_year: '',
        car_make: '',
        car_model: '',
        gender: '',
        needs: [],
        extra: ''

      },

      makeOptions: ['Dodge', 'Ford', 'Crysler'],
      modelOptions: ['Caravan', 'F-150', 'Cutlass'],
      needsOptions: ['Check fluids?', 'Check codes?', 'New wiper blades?']

    }
    this.handleTextArea = this.handleTextArea.bind(this);
    
    this.handleCarYear = this.handleCarYear.bind(this);
    this.handleCarMake = this.handleCarMake.bind(this);
    this.handleCarModel = this.handleCarYear.bind(this);

    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */
  
  handleFullName(e) {
   let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, name: value
        }
      }), () => console.log(this.state.newUser))
  }

  handleCarYear(e) {
       let value = e.target.value;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, car_year: value
        }
      }), () => console.log(this.state.car_year))
  }

  handleCarMake(e) {
    let value = e.target.value;
this.setState( prevState => ({ newUser : 
     {...prevState.newUser, car_make: value
     }
   }), () => console.log(this.state.car_make))
}

handleCarModel(e) {
  let value = e.target.value;
this.setState( prevState => ({ newUser : 
   {...prevState.newUser, car_model: value
   }
 }), () => console.log(this.state.car_model))
}

  handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.needs))
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(prevState => ({
      newUser: {
        ...prevState.newUser, about: value
      }
      }), ()=>console.log(this.state.extra))
  }


  handleCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.needs.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.needs.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.needs, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.Input, needs: newSelectionArray }
      })
      )
}

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com/',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  handleClearForm(e) {
  
      e.preventDefault();
      this.setState({ 
        newUser: {
          name: '',
          car_year: '',
          car_make: '',
          car_model: '',
          gender: '',
          needs: [],
          about: ''
        },
      })
  }

  render() {
    return (
    
        <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       
            <Input inputType={'text'}
                   title= {'Customer Name'} 
                   name= {'name'}
                   value={this.state.newUser.name} 
                   placeholder = {'Enter customer name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Name of the user */}

            <Input inputType={'text'}
                   title= {'Car Name?'} 
                   name= {'car_name'}
                   value={this.state.newUser.car_name} 
                   placeholder = {'Enter Car Name'}
                   handleChange = {this.handleInput}
                   
                   /> {/* Name of the car_name */}
        
            <Input inputType={'number'} 
                  name={'car_year'}
                  title= {'Car year?'} 
                  value={this.state.newUser.car_year} 
                  placeholder = {'Enter Car Year'}
                  handleChange={this.handleCarYear} /> {/* car_year */} 

             <Select title={'Make?'}
                  name={'make'}
                  options = {this.state.makeOptions} 
                  value = {this.state.newUser.make}
                  placeholder = {'Select Car Make'}
                  handleChange = {this.handleCarMake}
                  /> {/* Car Make Selection *///}

          <Select title={'Model?'}
                 name={'model'}
                 options = {this.state.modelOptions} 
                 value = {this.state.newUser.model}
                 placeholder = {'Select Car Model'}
                 handleChange = {this.handleCarModel }
                 /> 
                 { /*Model Selection */// } 


          /* <Select title={'Gender?'}
                  name={'gender'}
                  options = {this.state.genderOptions} 
                  value = {this.state.newUser.gender}
                  placeholder = {'Select Gender'}
                  handleChange = {this.handleInput}
                  /> {/*select } */}

          <CheckBox  title={'Needs'}
                  name={'needs'}
                  options={this.state.needsOptions}
                  selectedOptions = { this.state.newUser.needs}
                  handleChange={this.handleCheckBox}
                   /> {/* Needs */}

          <TextArea
            title={'Further Information'}
            rows={10}
            value={this.state.newUser.extra}
            name={'currentCarInfo'}
            handleChange={this.handleTextArea}
            placeholder={'Any extra information...'} />{/* Extra info */}

          <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
            style={buttonStyle}
          /> { /*Submit */ }
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear Form'}
            style={buttonStyle}
          /> {/* Clear the form */}
          
        </form>
  
    );
  }
}

const buttonStyle = {
  margin : '20px 20px 20px 20px'
}

export default FormContainer;