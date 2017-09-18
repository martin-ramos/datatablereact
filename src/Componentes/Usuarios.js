import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import { Component } from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import * as axios from 'axios';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

    const styles = {
      propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
        visibility: 'hidden',
      },
      propToggleHeader: {
        margin: '20px auto 10px',
      },
    };

class Usuarios extends Component {

    constructor(props){
        super();
        // this.state = {
        //
        // };
    }

    // Este metodo pertenece al ciclo de vida de los Componentes
    // se ejecuta antes de que el componente sea montado en el DOM
    // ref: https://medium.com/@pedroparra/react-js-y-el-ciclo-de-vida-de-los-componentes-5d083e5089c6
    componentWillMount() {
      // axios.get('http://127.0.0.1:8000/api/user')
      //     .then(res => {
      //       const users = res.data;
      //       console.log(res.data);
      //       this.setState({ users });
      //   });
      axios.get('data.json')
          .then(res => {
            const users = res.data;
            console.log(res.data);
            this.setState({ users });
        });
    }

    state = {
        // en el estado guardo los usuarios
        users: [],
        // Esta variable es para que guarde el valor el SelectField, NO VA A EXISTIR
        value: 1,
        //
        fixedHeader: true,
        fixedFooter: true,
        stripedRows: true,
        showRowHover: false,
        selectable: true,
        multiSelectable: false,
        enableSelectAll: false,
        deselectOnClickaway: true,
        showCheckboxes: true,
        height: '300px',
      };

      handleToggle = (event, toggled) => {
        this.setState({
          [event.target.name]: toggled,
        });
      };

      handleChange = (event) => {
        this.setState({height: event.target.value});
      };

      handleChangeSelect = (event, index, value) => this.setState({value});


    render() {
        return (
           <MuiThemeProvider>
            <div>
            <Card>
                <Table
                  height={this.state.height}
                  fixedHeader={this.state.fixedHeader}
                  fixedFooter={this.state.fixedFooter}
                  selectable={this.state.selectable}
                  multiSelectable={this.state.multiSelectable}
                >
                  <TableHeader
                    displaySelectAll={this.state.showCheckboxes}
                    adjustForCheckbox={this.state.showCheckboxes}
                    enableSelectAll={this.state.enableSelectAll}
                  >
                    <TableRow>
                      <TableHeaderColumn colSpan="3" tooltip="Lista de usuarios" style={{textAlign: 'center'}}>
                        Lista de usuarios
                      </TableHeaderColumn>
                      <TableRow>
                    </TableRow>
                      <TableHeaderColumn tooltip="id">ID</TableHeaderColumn>
                      <TableHeaderColumn tooltip="name">Nombre</TableHeaderColumn>
                      <TableHeaderColumn tooltip="role">Rol</TableHeaderColumn>
                    </TableRow>
                  </TableHeader>
                  <TableBody
                    displayRowCheckbox={false}
                    deselectOnClickaway={this.state.deselectOnClickaway}
                    showRowHover={this.state.showRowHover}
                    stripedRows={true}//{this.state.stripedRows}
                  >
                    {this.state.users.map( (row, index) => (
                      <TableRow key={index}>
                        <TableRowColumn>{index}</TableRowColumn>
                        <TableRowColumn>{row.name}</TableRowColumn>
                        <TableRowColumn>{row.role}</TableRowColumn>
                        <TableRowColumn>
                          <SelectField value={this.state.value} onChange={this.handleChangeSelect}>
                             <MenuItem value={1} label="Ya curse" primaryText="Ya curse" />
                             <MenuItem value={2} label="Por ahora no la cursare" primaryText="No Cursare por el momento" />
                             <MenuItem value={3} label="Curso en comision 1" primaryText="Cursare en comision 1" />
                             <MenuItem value={4} label="Curso en comision 2" primaryText="Cursare en comision 2" />
                          </SelectField>
                        </TableRowColumn>
                      </TableRow>
                      ))}
                  </TableBody>
                  <TableFooter
                    adjustForCheckbox={this.state.showCheckboxes}
                  >
                    <TableRow>
                      <TableRowColumn>ID</TableRowColumn>
                      <TableRowColumn>Name</TableRowColumn>
                      <TableRowColumn>Status</TableRowColumn>
                    </TableRow>
                    <TableRow>
                      <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
                        Super Footer
                      </TableRowColumn>
                    </TableRow>
                  </TableFooter>
                </Table>
                  <CardActions>
                   <FlatButton label="Action1" />
                   <FlatButton label="Action2" />
                 </CardActions>
                 <CardText expandable={true}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                   Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                   Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                 </CardText>
                </Card>
                <div style={styles.propContainer}>
                  <h3>Table Properties</h3>
                  <TextField
                    floatingLabelText="Table Body Height"
                    defaultValue={this.state.height}
                    onChange={this.handleChange}
                  />
                  <Toggle
                    name="fixedHeader"
                    label="Fixed Header"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.fixedHeader}
                  />
                  <Toggle
                    name="fixedFooter"
                    label="Fixed Footer"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.fixedFooter}
                  />
                  <Toggle
                    name="selectable"
                    label="Selectable"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.selectable}
                  />
                  <Toggle
                    name="multiSelectable"
                    label="Multi-Selectable"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.multiSelectable}
                  />
                  <Toggle
                    name="enableSelectAll"
                    label="Enable Select All"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.enableSelectAll}
                  />
                  <h3 style={styles.propToggleHeader}>TableBody Properties</h3>
                  <Toggle
                    name="deselectOnClickaway"
                    label="Deselect On Clickaway"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.deselectOnClickaway}
                  />
                  <Toggle
                    name="stripedRows"
                    label="Stripe Rows"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.stripedRows}
                  />
                  <Toggle
                    name="showRowHover"
                    label="Show Row Hover"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.showRowHover}
                  />
                  <h3 style={styles.propToggleHeader}>Multiple Properties</h3>
                  <Toggle
                    name="showCheckboxes"
                    label="Show Checkboxes"
                    onToggle={this.handleToggle}
                    defaultToggled={this.state.showCheckboxes}
                  />
                </div>
              </div>
           </MuiThemeProvider>
         );
    }
}



export default Usuarios;
