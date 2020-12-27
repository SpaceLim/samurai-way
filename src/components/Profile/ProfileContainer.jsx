import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {usersAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 13485;
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        usersAPI.usersProfile(userId).then(data => {
                this.props.setUserProfile(data);
            });

    }

    render() {
    return (
        <div>
            <Profile {...this.props} profile={this.props.profile} />
        </div>
    )
}
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent);