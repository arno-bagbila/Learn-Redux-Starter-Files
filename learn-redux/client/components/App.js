import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreator from '../actions/actionCreator.js';
import Main from './Main';

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

function mapDispachtToProps(dispatch) {
    return bindActionCreators(actionCreator, dispatch);
}

const App = connect(mapStateToProps, mapDispachtToProps)(Main);

export default App;