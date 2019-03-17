import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SharePointList extends Component {
    static propTypes = {
        exampleProp : PropTypes.string
    };

    constructor(props) {
        super(props);

        this.state = {
            exampleString: props.exampleProp,
            listInfo: {
                    listName: "Initial Title",
                    listDescription: "",
                    templateId: 0,
                    itemCount: 0,
                    list: []
                }
        };
    }

    static getDerivedStateFromProps(nextProps, previousState) {
        if (nextProps.exampleProp !== previousState.exampleString) {
            return {
                ...previousState,
                exampleString: nextProps.exampleProp
            };
        }
    }

    componentDidMount() {
        //Ideally we initiate ajax call from here.
        //But for poc purposes and I do not have any sharepoint api accessible,
        //I am keeping this commented and adding a simple mocked data

        /*

        fetch(`https://somesharepointhost.com/_api/web/lists/getbytitle('TestList')`)
            .then(response => response.json())
            .then(responseJson => {

                 // Expecting the response in format
                 // listInfo: {
                 //        listName: "Initial Title",
                 //        listDescription: "",
                 //        templateId: 0,
                 //        itemCount: 0,
                 //        list: []
                 //    }
                 //
                 //    But it does not really matter you can write custom function to transform response into data structure that UI understands
                 //

                this.setState({
                    ...this.state,
                    listInfo: responseJson.listInfo
                });
            })

        */


        /**
         * MOCKING The response
         */

        setTimeout(() => {
            this.setState({
                ...this.state,
                listInfo: {
                    listName: "Example List",
                    listDescription: "Example list application",
                    templateId: 1234,
                    itemCount: 4,
                    list: [{
                        id: 1,
                        name: 'Mike',
                        age: 24
                    }, {
                        id: 2,
                        name: 'Linda',
                        age: 23
                    }, {
                        id: 3,
                        name: 'Alex',
                        age: 42
                    }, {
                        id: 4,
                        name: 'Tiff',
                        age: 20
                    }]
                }
            });
        }, 4000);
    }


    render() {
        return (
            <div>
                <div>SharePoint list example</div>
                <div>{this.state.exampleString}</div>

                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "200px"}}>Title</div>
                    <div>{this.state.listInfo.listName}</div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "200px"}}>Description</div>
                    <div>{this.state.listInfo.listDescription}</div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "200px"}}>Template ID</div>
                    <div>{this.state.listInfo.templateId}</div>
                </div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <div style={{width: "200px"}}>Item Count</div>
                    <div>{this.state.listInfo.itemCount}</div>
                </div>

                <div>
                    <div>Table info</div>
                    {this.state.listInfo.list.map((item) => {
                        return (
                            <div style={{display: "flex", flexDirection: "row"}} key={item.id}>
                                <div style={{width: "200px"}}>{item.name}</div>
                                <div style={{width: "200px"}}>{item.age}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}