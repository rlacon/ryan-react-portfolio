import React, { Component } from 'react';

class MockProj extends Component {
  render() {

    // if(this.props.data){
    //   var name = this.props.data.name;
    //   var profilepic= "images/"+this.props.data.image;
    //   var bio = this.props.data.bio;
    //   var city = this.props.data.address.city;
    //   var state = this.props.data.address.state;
    //   var zip = this.props.data.address.zip;
    //   var phone= this.props.data.phone;
    //   var email = this.props.data.email;
    //   var resumeDownload = this.props.data.resumedownload;
    // }

    return (
      <div>
        <h1 style={{color: "white"}}>Test</h1>
        {/* <img src={profilepic} /> */}
        <h1>{"city"}</h1>
      </div>
    );
  }
}

export default MockProj;
