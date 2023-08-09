import React, { Component } from 'react';

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
         if(network.name === "phone")
            return <li key={network.name}><a href={network.url}><i className={network.className} ></i></a></li>

        return <li key={network.name}><a href={network.url} target='_blank' rel="noreferrer"><i className={network.className} ></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">메인</a></li>
            <li><a className="smoothscroll" href="#about">요약</a></li>
	         <li><a className="smoothscroll" href="#resume">누구인가</a></li>
            <li><a className="smoothscroll" href="#portfolio">사진첩</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline"> {name}</h1>
            <h3> {city} <span>{occupation}</span>{description} <br /> 
            <span>전화 주시거나, 카카오톡과 문자로 사진 보내주시면 수리비용 견적내드리겠습니다.</span><br /> 
            <span>010-9424-6862</span>
            
            </h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
