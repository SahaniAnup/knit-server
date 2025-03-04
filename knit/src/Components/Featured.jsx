import React from "react";
import {useState,useEffect} from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import {Link} from 'react-router-dom';

export const Featured = () => {
  const [knits, setKnits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-knits")
      .then((response) => response.json())
      .then((data) => {
        setKnits(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <style>
      {`@import url('https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i');
body{
  font-family: 'Francois One' ;
 
}
.shell{
  padding:100px 0;
  animation: fade-in 1.5s;
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}

.wsk-cp-product{
  background:#fff;
  padding:15px;
  border-radius:6px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  position:relative;
  margin:20px auto;
}
.wsk-cp-img{
  position:absolute;
  top:5px;
  left:50%;
  transform:translate(-50%);
  -webkit-transform:translate(-50%);
  -ms-transform:translate(-50%);
  -moz-transform:translate(-50%);
  -o-transform:translate(-50%);
  -khtml-transform:translate(-50%);
  width: 100%;
  padding: 15px;
  transition: all 0.2s ease-in-out;
}
.wsk-cp-img img{
  width:100%;
  transition: all 0.2s ease-in-out;
  border-radius:6px;
}
.wsk-cp-product:hover .wsk-cp-img{
  top:-40px;
}
.wsk-cp-product:hover .wsk-cp-img img{
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
.wsk-cp-text{
  padding-top:100%;
}
.wsk-cp-text .category{
  text-align:center;
  font-size:14px;
  font-weight:bold;
  padding:5px;
  margin-bottom:45px;
  position:relative;
  transition: all 0.2s ease-in-out;
}
.wsk-cp-text .category > *{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  -webkit-transform: translate(-50%,-50%);
  -moz-transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
  -o-transform: translate(-50%,-50%);
  -khtml-transform: translate(-50%,-50%);
    
}
.wsk-cp-text .category > span{
  padding: 12px 30px;
  border: 1px solid #313131;
  background:#212121;
  color:#fff;
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
  border-radius:27px;
  transition: all 0.05s ease-in-out;
  
}
.wsk-cp-product:hover .wsk-cp-text .category > span{
  border-color:#ddd;
  box-shadow: none;
  padding: 11px 28px;
}
.wsk-cp-product:hover .wsk-cp-text .category{
  margin-top: 0px;
}
.wsk-cp-text .title-product{
  text-align:center;
}
.wsk-cp-text .title-product h3{
  font-size:20px;
  font-weight:bold;
  margin:15px auto;
  overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  width:100%;
}
.wsk-cp-text .description-prod p{
  margin:0;
}
/* Truncate */
.wsk-cp-text .description-prod {
  text-align:center;
  width: 100%;
  height:100px;
  overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  margin-bottom:5px;
}
.card-footer{
  padding: 10px 0 5px;
  border-top: 1px solid #ddd;
}
.card-footer:after, .card-footer:before{
  content:'';
  display:table;
}
.card-footer:after{
  clear:both;
}

.card-footer .wcf-left{
  float:left;
  
}

.card-footer .wcf-right{
  float:right;
}

.price{
  font-size:18px;
  font-weight:bold;
}

a.buy-btn{
  display:block;
  color:#212121;
  text-align:center;
  font-size: 18px;
  width:35px;
  height:35px;
  line-height:35px;
  border-radius:50%;
  border:1px solid #212121;
  transition: all 0.2s ease-in-out;
}
a.buy-btn:hover , a.buy-btn:active, a.buy-btn:focus{
  border-color: #FF9800;
  background: #FF9800;
  color: #fff;
  text-decoration:none;
}
.wsk-btn{
  display:inline-block;
  color:#212121;
  text-align:center;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
  border-color: #FF9800;
  background: #FF9800;
  padding:12px 30px;
  border-radius:27px;
  margin: 0 5px;
}
.wsk-btn:hover, .wsk-btn:focus, .wsk-btn:active{
  text-decoration:none;
  color:#fff;
}  
.red{
  color:#F44336;
  font-size:22px;
  display:inline-block;
  margin: 0 5px;
}
@media screen and (max-width: 991px) {
  .wsk-cp-product{
    margin:40px auto;
  }
  .wsk-cp-product .wsk-cp-img{
  top:-40px;
}
.wsk-cp-product .wsk-cp-img img{
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
  .wsk-cp-product .wsk-cp-text .category > span{
  border-color:#ddd;
  box-shadow: none;
  padding: 11px 28px;
}
.wsk-cp-product .wsk-cp-text .category{
  margin-top: 0px;
}
a.buy-btn{
  border-color: #FF9800;
  background: #FF9800;
  color: #fff;
}
}`}
      </style>

      <div className="shell">
        <div className="container">
          <div className="row">
          {knits.map((knit,index)=>(
            <div className="col-md-3">
              <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                  <img
                    src={knit.knitImg}
                    className="img-responsive"
                  />
                </div>
                <div className="wsk-cp-text">
                  <div className="category">
                    <span>{knit.knitCategory}</span>
                  </div>
                  <div className="title-product">
                    <h3>{knit.knitTitle}</h3>
                  </div>
                  <div className="description-prod">
                    <p>
                      {knit.knitDes}
                    </p>
                  </div>
                  <div className="card-footer">
                    <div className="wcf-left">
                      <span className="price"><FaRupeeSign />{knit.knitPrice}</span>
                    </div>
                    <div className="wcf-right">
                    <Link to="https://www.instagram.com/knitflixxandchilll/" className="buy-btn"><FaShoppingCart /></Link>
      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
            </div>
              </div>
            </div>


            
    </>
  );
};
