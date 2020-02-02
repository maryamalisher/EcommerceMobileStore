import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../Context'
import {ButtonContainer} from '../Components/Button'


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer >
                {value=>{
                   const {id,company,title,info,inCart,img,price}=value.detailProduct
                   return(
                    <div className="row">
                    <div className="col-10 mx-auto text-center text-slanter text-blue my-5">
                      <h1>
                        {title}
                      </h1>
                    </div>
                    <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3 ">
                        <img src={img} alt="product" className="img-fluid"/>

                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                   <h2>model:{title}</h2>
                   <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                   made by:<span className="text-uppercase">{company}</span>
                   </h4>
                   <h4 className="text-blue">
                       <strong>
                       price:<span>$</span>{price}
                       </strong>
                   </h4>
                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                   some info about product:
                      
                   </p>
                   <p className="text-muted lead">
                       {info}
                   </p>
                   <Link to="/">
                       <ButtonContainer>
                           Go to Product
                       </ButtonContainer>
                   </Link>
                   <ButtonContainer 
                            cart
                            disabled={inCart?true:false}
                            onClick={()=>{
                              value.addToCart(id);
                              value.openModal(id);
                            }}
                          >
                            {inCart ? "inCart":"add to cart"}
                          </ButtonContainer>
                    </div>
                    </div>
                    </div>
                   )
                }
                }

            </ProductConsumer>
        )
    }
}
