import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import * as serviceWorker from "./serviceWorkerRegistration";
import { defineCustomElements as jeepSqlite, applyPolyfills, JSX as LocalJSX  } from "jeep-sqlite/loader";
import { HTMLAttributes } from "react";
import { Capacitor } from "@capacitor/core";
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from "@capacitor-community/sqlite";

type StencilToReact<T> = {
  [P in keyof T]?: T[P] & Omit<HTMLAttributes<Element>, "className"> & {
    class?: string;
  };
} ;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {
    }
  }
}
applyPolyfills().then(() => {
  jeepSqlite(window);
});

window.addEventListener("DOMContentLoaded", async () => {
  const platform = Capacitor.getPlatform();
  const sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite)
  try {
    if(platform === "web") {
      const jeepEl = document.createElement("jeep-sqlite");
      document.body.appendChild(jeepEl);
      await customElements.whenDefined("jeep-sqlite");
      await sqlite.initWebStore();
    }
    const ret = await sqlite.checkConnectionsConsistency();
    const isConn = (await sqlite.isConnection("db_issue9")).result;
    /* the code below is an example if you wish to set-up the schema of your database */
    var db: SQLiteDBConnection
    if (ret.result && isConn) {
      db = await sqlite.retrieveConnection("db_issue9");
    } else {
      db = await sqlite.createConnection("db_issue9", false, "no-encryption", 1);
    }
    
    await db.open();
    let query = `
    CREATE TABLE IF NOT EXISTS test (
      id INTEGER PRIMARY KEY NOT NULL,
      service_name TEXT,
      email TEXT,
      password TEXT,
      is_credit_card BOOLEAN,
      is_address BOOLEAN
    );
    `

    const res: any = await db.execute(query);
    console.log(`res: ${JSON.stringify(res)}`);
    // const res1 = await db.execute(`INSERT INTO test values(0, "google", "remighost@gmail.com", "password", true, true);`);
    // console.log(`res: ${JSON.stringify(res1)}`);
    const res2 = await db.query(`SELECT * FROM test;`);
    console.log(`res: ${JSON.stringify(res2)}`);
    await db.close();
    await sqlite.closeConnection("db_issue9");
    
    ReactDOM.render(
      <React.StrictMode>
        <App /> 
      </React.StrictMode>,
      document.getElementById("root")
    );

    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: https://bit.ly/CRA-PWA
    serviceWorker.unregister();

  } catch (err) {
    console.log(`Error: ${err}`);
    throw new Error(`Error: ${err}`)
  }

});
