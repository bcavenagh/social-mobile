import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { watchUsers } from '../../redux/app-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
        console.log('in app')
        this.props.watchUsers();
    }

    render(){
        return(
            <View>
                <Text>User</Text>
                <Text>{this.props.user.firstName}</Text>
                <Text>{this.props.user.lastName}</Text>
            </View>
        );
    }
}

const mapStateToProps = ( state ) => {
    return { 
        user: state.user
    };
}

const mapDispatchToProps = ( dispatch ) => { 
    return {
        watchUsers: () => dispatch(watchUsers())
     };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);