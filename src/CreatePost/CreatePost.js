import React, { Component } from 'react';
import './Create.scss';
import { Button } from 'react-bootstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import postModel from '../models/post.model';
import { tsConstructSignatureDeclaration } from '@babel/types';

export default class CreatePost extends Component {

    submit(values){
        console.log(values);
    }

    render() {
        return (
        <div>
            <h2>Create Post</h2>
            <Formik initialValues={{image: '', title: '', tags: ''}}
                     validationSchema={postModel}
                     onSubmit={this.submit.bind(this)}>
                <Form className="CreatePost col-xs-12 col-sm-6">
                <div className="form-group">
                    <label>Image: </label>
                    <Field type="file" name="image" accept="image/*"/>
                    <ErrorMessage className="alert alert-danger" name="image" component="div" />
                </div>
                <div className="form-group">
                        <label>Title: </label>
                        <Field type="text" name="title" className="form-control"/>
                        <ErrorMessage className="alert alert-danger" name="title" component="div" />
                </div>
                <div className="form-group">
                        <label>Tags: </label>
                        <Field type="text" name="tags" className="form-control"/>
                        <ErrorMessage className="alert alert-danger" name="tags" component="div" />
                </div>
                <div className="form-group">
                        <Button type="submit">Share</Button>
                </div>
                </Form>
            </Formik>
        </div>
        );
    }
}
