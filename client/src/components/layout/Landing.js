import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import PostFeed from "../posts/PostFeed";
import Register from "../auth/Register";
import { getPosts } from "../../actions/postActions";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/feed");
    }
    this.props.getPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    if (posts === null || loading) {
      postContent = <Spinner />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }
    return (
      <div className="main">
        <div className="top-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="mt-5">Learn, Share, Build</h2>

                <p>
                  Create a profile & get started, share posts and get help from
                  other developers.
                </p>
                <p className="lead">Join the developer community.</p>
              </div>
              <div className="col-md-6">
                <Register />
              </div>
            </div>
          </div>
        </div>
        <div className="clearfix" />

        <div className="post-feed">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="left">Top Questions</h3>

                <Link to="/login" className="btn btn-primary right">
                  Ask Qustion
                </Link>
                <br />
              </div>
              <div className="col-md-12">{postContent}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Landing.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Landing);
