import React from 'react'
export default function Curve({valuesRange, properties}) {
    return (
        <div className='curve'>
            <div className="values">
                {valuesRange.map(value => <span className='value' key={value}>{value === valuesRange[valuesRange.length -1 ] ? `+${value}`: value}</span>)}
            </div>
            <div className="properties" >
                {properties.map(property =>
                    {
                        let valueHeight = property.propertyValue / valuesRange[valuesRange.length -1 ] * 100;
                        valueHeight < 1 ? valueHeight -= 22 :
                            valueHeight < 2 ? valueHeight -= 16 :
                            valueHeight < 10 ? valueHeight -= 12 :
                            valueHeight > 80 ? valueHeight = 67 :
                            valueHeight -= 8
                        return (
                            <div className="property" key={property.property} style={{'--value-height': valueHeight + '%'}}>
                                <div className="value" data-value={property.propertyValue < 10 ? `0${property.propertyValue}` : property.propertyValue}></div>
                                <div className="name">{property.property}</div>
                            </div>    
                        )
                    }
                )}
            </div>
        </div>
    )
}
