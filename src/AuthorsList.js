import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

class AuthorsList extends Component {
  state = {
    filteredAuthors: this.props.authors
  };

  filterAuthors = query => {
    query = query.toLowerCase();
    let filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`.toLowerCase().includes(query)
    );
    this.setState({ filteredAuthors: filteredAuthors });
  };
  authorcards = this.state.filteredAuthors.map(author => (
    <AuthorCard author={author} />
  ));

  render() {
    return (
      <div>
        <h3>Authors</h3>
        <SearchBar onChange={this.filterAuthors} />
        <div className="row">{this.authorcards}</div>
      </div>
    );
  }
}

export default AuthorsList;
