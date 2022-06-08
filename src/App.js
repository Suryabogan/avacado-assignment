import './App.css';
import {
  FormLabel
} from '@chakra-ui/react';
import { Input, InputLeftAddon, InputGroup, } from '@chakra-ui/react';
import { Select } from '@chakra-ui/react';
import { Checkbox } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Stack } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import React, {useState, useEffect} from 'react';

function App() {
  useEffect(()=> {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
  };
  const [values, setValues] = useState({
    layout: '',
    name: '',
    capacity: '',
  });
  const handleSubmit = (event) => {
    console.log(event);
  };
  const cancel = () => {
    window.location.reload();
  };
  const handleLayout = (e) => {
    setValues({...values, layout: e.target.value});
  }
  const handleName = (e) => {
    setValues({...values, name: e.target.value});
  }
  const handleCapacity = (e) => {
    setValues({...values, capacity: e.target.value});
  }
  return (
    <div className="App"> 
    <div className='heading'><h3>Create Table</h3></div>
    <div className='container'>
    <Container maxW='3xl' bg='white'  centerContent>
    <InputGroup margin='10px'>
    <InputLeftAddon children="Layout:" backgroundColor="white" />
    
    <FormLabel htmlFor='layout'></FormLabel>
    <Select id='layout'  placeholder='Select Layout' value={values.layout} onChange={handleLayout}>
      <option>Header</option>
      <option>Body</option>
      <option>Footer</option>
    </Select>
    
  </InputGroup>
   
    <InputGroup margin='10px'>
    <InputLeftAddon  children="Name :" backgroundColor="white" />
    <FormLabel htmlFor='text'></FormLabel>
    <Input id='name' type='text' placeholder='Enter Name'
    _placeholder={{ opacity: 1, color: 'gray.500'}} value={values.name} onChange={handleName} />
    </InputGroup>

    <InputGroup margin='10px'>
    <InputLeftAddon children="Capacity:" backgroundColor="white" />
    <FormLabel htmlFor='capacity'></FormLabel>
    <Input id='capacity' type='number' placeholder='Enter number of capacity' value={values.capacity} onChange={handleCapacity} />
    </InputGroup>

    <InputGroup margin='10px'>
    <InputLeftAddon children="Status :" backgroundColor="white" onChange={values.status} />
    <Checkbox defaultChecked></Checkbox>
    </InputGroup>
    
    <InputGroup margin='10px'>
    <InputLeftAddon children="Image :" backgroundColor="white" />
    <input type="file" name='file' onChange={(e)=>this.onChange(e)}/>
    </InputGroup>

    <InputGroup>
    <Stack direction='column'/>
  <Box
    display='flex'
    alignItems='center'
    paddingLeft='80px'
    width='100%'
    py={3}
    mb={2}
  >
    <ButtonGroup gap='0'>
      <Button colorScheme='facebook' onClick={handleSubmit}>Create Table</Button>
      <Button colorScheme='red' onClick={cancel}>Cancel</Button>
    </ButtonGroup>
  </Box>
    </InputGroup>
    </Container>
    </div>
    </div>
  );
}

export default App;
