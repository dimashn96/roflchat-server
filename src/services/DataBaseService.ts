import {MongoClient, ObjectID} from 'mongodb';
import {config} from '../config';

const dbUri = process.env.MONGODB_ADDON_URI || config.db.uri;
const dbName = process.env.MONGODB_ADDON_DB || config.db.name;

export class DataBaseService {

  private static connect = (func) => {
    return new Promise((resolve, reject) => {
      MongoClient.connect(dbUri, (err, client) => {
        const db = client.db(dbName);
        if (err) {
          reject(err);
        } else {
          resolve(func(db));
        }
        client.close();
      });
    });
  };

  public static addUser = (user) => {
    return DataBaseService.connect((db) => db.collection(config.db.collections.users)
      .insertOne(user));
  };

  public static getUser = (name) => {
    return DataBaseService.connect((db) => db.collection(config.db.collections.users)
      .findOne({nm: name}));
  };

}
