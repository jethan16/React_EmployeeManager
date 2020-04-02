import React from "react";
// import employees from "./employees.json";
import Wrapper from "./Wrapper/Wrapper";
import EmployeeTable from "./EmployeeTable/EmployeeTable";
import API from "./utils/API";
// import Title from "./Title/Title"
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    API.getMany(100)
      .then(res => this.setState({ employees: res.data.results }))
      .catch(err => console.log(err));
  }

  handleSearch = event => {
    event.preventDefault();
    console.log(event.target.value);

    // let filteredEmployee = [];

    const { value } = event.target;
    const searched = this.state.employees.filter(employee =>
      employee.name.first.includes(value)
    );
    searched.map(employee => console.log(employee));
    this.setState({ employees: searched });
  };

  render() {
    return (
      <Wrapper>
        <div className="search-bar">
          <input onChange={this.handleSearch} placeholder="search"></input>
        </div>
        <table className="table">
          <thead>
            <tbody>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Location</th>
              </tr>
              {this.state.employees.map(employee => (
                <EmployeeTable
                  key={employee.email}
                  name={`${employee.name.first} ${employee.name.last}`}
                  image={employee.picture.large}
                  location={`${employee.location.city} ${employee.location.state}`}
                  email={employee.email}
                  number={employee.phone}
                />
              ))}
            </tbody>
          </thead>
        </table>
      </Wrapper>
    );
  }

  // render() {
  //   return (
  //     <Wrapper>
  //       <h1 className="title">Friends List</h1>
  //       {this.state.friends.map(friend => (
  //         <EmployeeTable
  //           key={friend.id}
  //           id={friend.id}
  //           name={friend.name}
  //           image={friend.image}
  //           occupation={friend.occupation}
  //           location={friend.location}
  //           onRemove={this.handleDelete}
  //         />
  //       ))}
  //     </Wrapper>
  //   );
  // }
}

// {
//   this.state.friends.map(friend => (
//     <EmployeeTable
//       key={friend.id}
//       id={friend.id}
//       name={friend.name}
//       image={friend.image}
//       occupation={friend.occupation}
//       location={friend.location}
//       onRemove={this.handleDelete}
//     />
//   ));
// }

export default App;
