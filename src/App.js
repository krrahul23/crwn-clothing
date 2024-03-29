import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route, Redirect } from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import {
  auth,
  createUserProfileDocument,
  addCollectionAndDocuments,
} from ".//firebase/firebase.utils";
import { GlobalStyle } from "./globalStyles";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-action";
import { selectCurrentUser } from "./redux/user/user-select";
import { createStructuredSelector } from "reselect";
import CheckoutPage from "./pages/checkout/checkout";
import { selectCollectionForPreview } from "./redux/shop/shop_reselector";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      } else setCurrentUser(userAuth);
      addCollectionAndDocuments("collection", collectionArray);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>

          <Route path="/checkout" exact component={CheckoutPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionArray: selectCollectionForPreview,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
