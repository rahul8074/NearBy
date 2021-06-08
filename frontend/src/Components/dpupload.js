import React from 'react'; 
import axios from 'axios';


class SomeForm extends React.Component{

    handleSubmit(e){
        if (e.target.input.files.length) {
            const upload_file = e.target.input.files[0];
            const formData = new FormData();
            formData.append('file', upload_file);

            const request = axios.post(this.props.cfg_url+'/upload', formData)
                .then(function(response){
                    console.log('successfully uploaded', upload_file);
                });
        } else {
            console.log('You need to select a file');
        }
    }

    
    render(){
        return(
            <form style={{display:"block"}} onSubmit={this.handleSubmit}>
         
                    <input
                        type='file'
                        name="input-file"
                        label='File'
                    />
                
                <button style={{display:"block"}} type='submit'>Upload</button>
            </form>
        );
    }
}

export default SomeForm;