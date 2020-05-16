import React from 'react';
import {Card, Skeleton, Avatar, Row, Col} from "antd";
import {Swiggy, UberEats, FoodPanda, Zomato, AppLogo, Background, OrderBackground } from "../../assets/images"
const { Meta } = Card;

function getAvatar(name){
        switch((name).toLowerCase()){
            case 'swiggy':
                return Swiggy;
            case 'zomato':
                return Zomato;    
            case 'ubereats':
                return UberEats;    
            case 'foodpanda':
                return FoodPanda;
            default:    
            return AppLogo;    
        }
}
const OrderedItemCard = ({order, loading})=>{
    const {clientName="", restaurantName="", dishNames=[], orderYimeStamp=null} = order;
    const clientAvatar = getAvatar(clientName)
    return(
        <Card 
            style={{ margin: "20px 10px" }} 
            hoverable
            cover={<img alt="example" height={300} src={OrderBackground} />}
            >
           <Meta
            avatar={
              <Avatar src={clientAvatar} />
            }
            title={order.clientName}
            
            description={
                <>
                    <Row>
                        <Col span={24}>
                            <h4>{restaurantName}</h4>
                            {dishNames.join(", ")}
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            
                        </Col>
                        <Col span={12}>
                            <span style={{float:"right"}}>
                                
                                {`Ordered On ${new Date(orderYimeStamp).toDateString()}`}
                            </span>    
                        </Col>
                    </Row>
                </>}

          />
            {/* <Skeleton loading={loading} avatar active>
                <Meta
                    avatar={
                        <Avatar src={clientAvatar} />
                    }
                    title={clientName}
                    description={
                        <div>
                            {restaurantName}
                            {dishNames.join(", ")}
                        </div>
                    }
                />
            </Skeleton> */}
        </Card>
    )
}


export default OrderedItemCard;