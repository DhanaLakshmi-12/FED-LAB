import React,{Component} from 'react'
class ArrayOfObjects extends Component{
    constructor(props){
        super(props);
        this.state={
            countriesInfo:[
                {name:'india',capital:'new delhi'},
                {name:'china',capital:'beijing'},
                {name:'USA',capital:'washington DC'},
                {name:'japan',capital:'tokyo'}
            ],
        }
    }
    render() {
        const {countriesInfo}=this.state;
        return(
            <div>
                <table border='1'>
                    <tr>
                        <th>country name</th>
                        <th>capital</th>
                    </tr>
                    {countriesInfo.length>0&&countriesInfo.map((country)=>{
                        return <tr key={country.name}>
                            <td>{country.name}</td>
                            <td>{country.capital}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}  
export default ArrayOfObjects;  