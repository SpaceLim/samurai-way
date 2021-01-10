import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {getUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13485;
        }

        this.props.getUserProfile(userId);

    }

    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}


let AuthRedirectComponent =  withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);