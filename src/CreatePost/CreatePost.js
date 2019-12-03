import React, { Component } from 'react';
import './Create.scss';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import postModel from '../models/post.model';
import { tsConstructSignatureDeclaration } from '@babel/types';
import config from '../config';
import TagsInput from 'react-tagsinput';


export default class CreatePost extends Component {
    constructor(props) {
		super(props);
		this.state = {
			tags: []
		};
	}

	handleTagsChange(tags) {
		this.setState({
			tags: tags
		});
	}

	convertToFormData(values) {
		const data = new FormData();
		for (let key in values) {
			Array.isArray(values[key])
				? values[key].forEach(value => data.append(key + '[]', value))
				: data.append(key, values[key]) ;
		}
		return data;
	}
    
    submit(values){
        const data = new FormData();
        for(let key in values){
            data.append(key, values[key])
        }
        fetch(config.apiUrl + '/api/posts', {
            method: 'POST',
            body: data,
        }).then(res=> res.json())
                .then(post=> console.log(post))
                .catch(err=> console.log(err));
    }

    render() {
        return (   
        <div>
            <h2>Create Post</h2>
            <Formik initialValues={{image: '', title: '', tags: []}}
                     validationSchema={postModel}
                     onSubmit={this.submit.bind(this)}
                     render={({setFieldValue}) => {
                        return <Form className="CreatePost col-xs-12 col-sm-6">
                        <div className="form-group">
                            <label>Image: </label>
                            <input type="file" name="image" onChange={(event)=>{
                               setFieldValue('image', event.currentTarget.files[0]);
                            }}/>
                            <ErrorMessage className="alert alert-danger" name="image" component="div" />
                        </div>
                        <div className="form-group">
                                <label>Title: </label>
                                <Field type="text" name="title" className="form-control"/>
                                <ErrorMessage className="alert alert-danger" name="title" component="div" />
                        </div>
                        <div className="form-group">
                                <label>Tags: </label>
                                <TagsInput value={this.state.tags}
									           onChange={(tags) => {
									               this.handleTagsChange(tags);
										           setFieldValue('tags', tags);
									           }}
									           className="tags-wrapper" />
                                <ErrorMessage className="alert alert-danger" name="tags" component="div" />
                                <div><sub>Press Enter after inserting a tag</sub></div>
                        </div>
                        <div className="form-group">
                                <Button type="submit">Share</Button>
                        </div>
                        </Form>
                     }}>
            </Formik>
        </div>
        );
    }
}
