//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './portfolio.css';
import { projects } from './models/projects';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Footer, About, Contact, ProjectDetail, ProjectList, Home, Sidebar } from './components';

//const project_api = "./models/projects.json";

//const contact_api = './models/contacts.json';

const contact_api = "https://jsonhost.com/json/238de7a4f3ed37abd0251c9819f382b8"
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      projectList: projects, 
      contactList: [],
      canPost: false }
  }

  componentDidMount() {
    fetch(contact_api)
      .then(res => res.json())
      .then(data => this.setState({ contactList : data }))
      .catch(err => console.log(err))
  }
      
  /**
   * Updates the contactList state with the new contact info
   */
  addContact = (newContact) => {
    console.log(newContact);
    console.log(this.state.contactList);

    this.setState 
      ( prevState => ({
        contactList:[...prevState.contactList, newContact],
        canPost: true
    }), ()=> {
          console.log('during', this.state.contactList);
          this.postUpdatedContactList();
        });

    console.log('after', this.state.contactList);
  }

  /**
   * Checks if the contactList state has been updated, then
   * uses fetch API to get the JSON file, and posts a new version
   * of the file with the added contact info
   */
  postUpdatedContactList = async () => {
    if (!this.state.canPost) return;
    const token = "7qcqn1nzcquo3oul1ls8smfywq2hvjbf";
    try {
      const response = await fetch(contact_api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${token}`
        },
        body: JSON.stringify(this.state.contactList)
      });

      if (response.ok) {
        console.log('Contact successfully updated!');
      } else {
        console.error("Failed to update Contact List.")
      }
    } catch(err) {
      console.error('Error updating Contact List:', err)
    } finally {
      this.setState({canPost: false});
    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header></Header>
          <div className="body-content">
            <Routes className="routes-container">
              <Route path='/' element={<Home></Home>}></Route>
              <Route path='/about' element={<About></About>}></Route>
              <Route path='/contact' element={<Contact addContact={this.addContact}></Contact>}></Route>
              <Route path='/projects' element={<ProjectList projectList={this.state.projectList}></ProjectList>}></Route>
              <Route path='/projects/:name' element={<ProjectDetail projectList={this.state.projectList}></ProjectDetail>}></Route>
              <Route path='*' element={<h1>Sorry! This page doesn't exist.</h1>}></Route>
            </Routes>
            <Sidebar></Sidebar>
          </div>
          <Footer></Footer>
        </BrowserRouter>
      </div>
    );
  }
}



/**
 *      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
 */

export default App;
