import {
    initializeApp,
    applicationDefault,
    cert,
    ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// TODO: put your service_account.json from Firebase in this same folder (/backend) so that this import works.
import serviceAccount from "./service_account.json";

const leServiceAcct: any = serviceAccount;

const app = initializeApp({
    credential: cert(leServiceAcct),
});

const db = getFirestore();

export { db };
