import  React, { Component } from 'react';
import NavBar from './components/NavBar';
import { Button, Form, FormGroup, Label, Input, FormText,Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText  } from 'reactstrap';


class GridTied extends Component {
  render() {
    return  (

      <Container>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form>
              <FormGroup>
                <Label for="nombre">Nombre completo</Label>
                <Input type="text" name="nombre" id="nombre" placeholder="Nicolás Esquivel Camacho" />
              </FormGroup>
              <FormGroup>
                <Label for="correoE">Correo electrónico</Label>
                <Input type="email" name="correo" id="correo" placeholder="nicolas.esquivel@idenergias.com.co" />
              </FormGroup>
              <FormGroup>
                <Label for="seleccionarCiudad">Ciudad</Label>
                <Input type="select" name="ciudad" id="ciudad">
                <option>Barranquilla</option>
                  <option>Bogotá</option>
                  <option>Cartagena</option>
                  <option>Ibagué</option>
                  <option>Neiva</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="direccion">Dirección</Label>
                <Input type="text" name="direccion" id="dirección" placeholder="Calle 92 No 16-11"/>
              </FormGroup>
              <FormGroup>
                <Label for="seleccionarEstrato">Estrato</Label>
                <Input type="select" name="ciudad" id="ciudad">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Input>
              </FormGroup>
              <FormGroup>
              <Label for="preciokWh">Precio kWh</Label>
              <InputGroup>
               <InputGroupAddon addonType="prepend">$</InputGroupAddon>
               <Input placeholder="400" type="number" step="1" />
               </InputGroup>
               </FormGroup>
               <FormGroup>
               <Label for="preciokWh">Consumo en un mes usual (kWh)</Label>
               <InputGroup>
                <Input placeholder="400.0" type="number" step="0.1" />
                <InputGroupAddon addonType="prepend">kWh</InputGroupAddon>
                </InputGroup>
                </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">
                  This is some placeholder block-level help text for the above input.
                  It's a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option one is this and that—be sure to include why it's great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Option two can be something else and selecting it will deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="radio1" disabled />{' '}
                    Option three is disabled
                  </Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />{' '}
                  Check me out
                </Label>
              </FormGroup>
              <Button>Simular</Button>
            </Form>
            </Col>
            </Container>
            );
  }
  }

export default GridTied;
