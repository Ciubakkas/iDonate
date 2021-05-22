import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";

export let db: firebase.firestore.Firestore;
export let auth: firebase.auth.Auth;
export let creationAuth: firebase.auth.Auth;
export let GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
export let fieldValue = firebase.firestore.FieldValue;
export let firebaseListeners: any = {};
export let storageRef: any;
export let klpProvider: firebase.auth.OAuthProvider;
export let functions: firebase.functions.Functions;

export const firebaseProducer: producer = ({
  firebaseConfig = observe.config.firebase,
  isReady = get.session.firebase.isReady,
  oidc = get.config.oidcProvider,

  setIsReady = update.session.firebase.isReady,
}) => {
  if (isReady.value() || !firebaseConfig) {
    return;
  }
  const app = firebase.initializeApp(firebaseConfig);
  db = app.firestore();
  db.settings({ experimentalForceLongPolling: true });
  auth = firebase.auth();
  functions = app.functions("europe-west2");
  if (process.env.NODE_ENV == "development") functions.useFunctionsEmulator("http://localhost:5001");
  klpProvider = new firebase.auth.OAuthProvider(oidc.value());
  creationAuth = firebase.initializeApp(firebaseConfig, "Secondary").auth();
  storageRef = firebase.storage().ref();
  // firebase.firestore.setLogLevel("debug");

  // if prod then do analytics
  firebase.analytics();

  setIsReady.set(true);
};
