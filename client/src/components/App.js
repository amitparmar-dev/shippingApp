import React from 'react'
import axios from 'axios';
import RenderTable from './RenderTable';

class App extends React.Component{
    state = { data:[] };
    sortBy = (key) =>{ 
        let tempData = this.state.data; 
        tempData.sort((a,b) => { 
                        if(a[key] < b[key]){ 
                            return -1;
                        }else if(a[key] > b[key]){
                            return 1;
                        }else{
                            return 0;
                        }
            });
        this.setState({ data : tempData});
    }

    async componentDidMount(){
       const data = await axios.get('http://localhost:3004/shipments');
       this.setState({data : Object.values(data.data)})
    }
    
render(){
        return(<div>  
                    <h1>Shipping Data</h1>
                    <h3>Click heading to sort</h3>
                    <RenderTable  
                        sortBy = {this.sortBy} 
                        data = {this.state.data} 
                    />
                </div>);
    }
}


export default App;