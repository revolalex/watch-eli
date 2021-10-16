import ServiceCard from '../Service/ServiceCard';
import ServiceTitre from '../Service/ServiceTitre';
import React from 'react';
import Service1 from '../../img/service/service1.JPG'

class ServiceGlobal extends React.Component {
    render() {
        return (
            <div>
                <ServiceTitre />
                <ServiceCard />
             
                <div style={{ display: "flex" }}>
                    <img
                        style={{
                            width: "100%",
                            margin: "auto",
                            padding: "7%"
                        }}
                        alt="montre"
                        src={Service1}
                    />
                </div>
            </div>
        )
    }
}

export default ServiceGlobal;