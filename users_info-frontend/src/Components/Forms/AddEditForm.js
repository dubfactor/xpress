import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddEditForm extends React.Component {
  state = {
    id: 0,
    first_name: '',
    last_name: '',
    email: '',
    city: '',
    zipcode: '',
    address: '',
    registration_date: '',
    phone: '',
    added: ''
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
	id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        city: this.state.city,
        zipcode: this.state.zipcode,
        address: this.state.address,
        registration_date: this.state.registration_date,
        phone: this.state.phone,
	added: this.state.added
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/crud', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        city: this.state.city,
        zipcode: this.state.zipcode,
        address: this.state.address,
	registration_date: this.state.registration_date,
        phone: this.state.phone,
	added: this.state.added
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, first_name, last_name, email, city, zipcode, address, registration_date, phone, added  } = this.props.item
      this.setState({ id, first_name, last_name, email, city, zipcode, address, registration_date, phone, added })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="id">id</Label>
          <Input type="text" name="id" id="id" onChange={this.onChange} value={this.state.id}  />
        </FormGroup>
        <FormGroup>
          <Label for="first_name">First Name</Label>
          <Input type="text" name="first_name" id="first_name" onChange={this.onChange} value={this.state.first_name === null ? '' : this.state.first_name} />
        </FormGroup>
        <FormGroup>
          <Label for="last_name">Last Name</Label>
          <Input type="text" name="last_name" id="last_name" onChange={this.onChange} value={this.state.last_name === null ? '' : this.state.last_name}  />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="text" name="email" id="email" onChange={this.onChange} value={this.state.email === null ? '' : this.state.email}  />
        </FormGroup>
<FormGroup>
          <Label for="city">city</Label>
          <Input type="text" name="city" id="city" onChange={this.onChange} value={this.state.city === null ? '' : this.state.city}   />
        </FormGroup>
<FormGroup>
          <Label for="zipcode">zipcode</Label>
          <Input type="text" name="zipcode" id="zipcode" onChange={this.onChange} value={this.state.zipcode === null ? '' : this.state.zipcode}   />
        </FormGroup>
        <FormGroup>
          <Label for="address">address</Label>
          <Input type="text" name="address" id="address" onChange={this.onChange} value={this.state.address === null ? '' : this.state.address}   />
        </FormGroup>
        <FormGroup>
          <Label for="registration_date">registration_date</Label>
          <Input type="text" name="registration_date" id="registration_date" onChange={this.onChange} value={this.state.registration_date === null ? '' : this.state.registration_date}  />
        </FormGroup>
        <FormGroup>
          <Label for="phone">phone</Label>
          <Input type="text" name="phone" id="phone" onChange={this.onChange} value={this.state.phone}  />
        </FormGroup>
<FormGroup>
          <Label for="added">added</Label>
          <Input type="text" name="added" id="added" onChange={this.onChange} value={this.state.added}  />
        </FormGroup>

        <Button>Submit</Button>
      </Form>
    );
  }
}

export default AddEditForm