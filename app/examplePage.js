import React, { Component } from 'react';

import {  
    Text,
    ListView,
    View,
    TouchableHighlight
} from 'react-native';
import RNProgressHUD from './venders/RNProgressHUD/index';
import mixin from './venders/RNProgressHUD/mixin';
import jsonData from './data.json';

class ExamplePage extends  mixin(RNProgressHUD.Mixin){

    constructor(props){
        super(props);
        getRowData = (dataBlob,sectionID,rowID) => {
            return dataBlob[sectionID+":"+rowID];
        }

        getSectionHeaderData = (dataBlob,sectionID) => {
            return dataBlob[sectionID];
        }

        const ds = new ListView.DataSource({
            rowHasChanged: (r1,r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1,s2) => s1 !== s2,
            getRowData: getRowData,
            getSectionHeaderData: getSectionHeaderData
        });

        
        this.state = {
            dataSource: ds.cloneWithRowsAndSections({},[],[])
        }
    }



    render(){
        return(
            <View style={{flex: 1,backgroundColor: 'white'}}>
                <ListView
                    enableEmptySections={true}
                    style={{flex: 1}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    initialListSize={11}
                    renderSectionHeader={(sectionData) => {
                        return (
                            <View style={{
                                height: 60,
                                justifyContent: 'center',
                                borderTopColor: 'gray',
                                borderTopWidth: 1,
                                backgroundColor: 'white'
                            }}>
                                <Text style={{fontSize: 20,marginLeft: 20}}>{sectionData}</Text>
                            </View>
                        )
                    }}
                />
                <RNProgressHUD
                    isVisible={this.state.is_hud_visible}
                    color='rgb(69,149,252)'
                />
            </View>
        );
    }

    _renderRow = (rowData,sectionID,rowID) => {
        return (
            <TouchableHighlight 
                underlayColor="white"
                onPress={() => {
                    console.log(sectionID + "  " + rowID);
                    this.showHUD();
                    setTimeout(() => {
                        this.hideHUD();
                    },3000);
                }}    
            >
                <View style={{
                    backgroundColor: '#bbbbbb',
                    height: 60,
                    justifyContent: 'center',
                    borderTopColor: 'gray',
                    borderTopWidth: 1
                }}>
                    <Text style={{marginLeft: 20}}>{rowData}</Text>
                </View>
            </TouchableHighlight>
        )
    }


    componentDidMount() {
        
        let data = jsonData.data;
        let dataBlob = {};
        let sections = [];
        let rows = [];

        for (let i = 0 ; i < data.length; i++) {
            sections.push("section" + i);
            let sectionDic = data[i];
            dataBlob["section"+i] = sectionDic.title;
            let types = sectionDic.types;
            let rowsIDs = [];
            for (let j = 0; j < types.length; j++){
                rowsIDs.push("row" + j);
                dataBlob["section" + i + ":"+ "row"+j] = types[j].text;
            }
            rows.push(rowsIDs);
        }



        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob,sections,rows)
        });
    }
}

export default ExamplePage;