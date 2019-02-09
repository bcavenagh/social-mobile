import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

class Login extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>{this.props.personData.firstName}</Text>
                <Text>{this.props.personData.lastName}</Text>
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {
    return { };
}

const mapDispatchToProps = ( dispatch ) => {
    return { };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);