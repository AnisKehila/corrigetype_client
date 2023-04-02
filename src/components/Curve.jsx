import React from 'react'

export default function Curve({valuesRange, properties}) {
    return (
        <div className='curve'>
            <div className="values">
                {valuesRange.map(value => <span className='value' key={value}>{value}</span>)}
            </div>
            <div className="properties">
                {properties.map(property =>
                    <div className="property" key={property.property}>
                        <div className="value">{property.propertyValue}</div>
                        <div className="name">{property.property}</div>
                    </div>    
                )}
            </div>
        </div>
    )
}
