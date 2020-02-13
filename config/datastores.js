/**
 * Datastores
 * (sails.config.datastores)
 *
 * A set of datastore configurations which tell Sails where to fetch or save
 * data when you execute built-in model methods like `.find()` and `.create()`.
 *
 *  > This file is mainly useful for configuring your development database,
 *  > as well as any additional one-off databases used by individual models.
 *  > Ready to go live?  Head towards `config/env/production.js`.
 *
 * For more information on configuring datastores, check out:
 * https://sailsjs.com/config/datastores
 */

module.exports.datastores = {


  /***************************************************************************
  *                                                                          *
  * Your app's default datastore.                                            *
  *                                                                          *
  * Sails apps read and write to local disk by default, using a built-in     *
  * database adapter called `sails-disk`.  This feature is purely for        *
  * convenience during development; since `sails-disk` is not designed for   *
  * use in a production environment.                                         *
  *                                                                          *
  * To use a different db _in development_, follow the directions below.     *
  * Otherwise, just leave the default datastore as-is, with no `adapter`.    *
  *                                                                          *
  * (For production configuration, see `config/env/production.js`.)          *
  *                                                                          *
  ***************************************************************************/

  default: {

    /***************************************************************************
    *                                                                          *
    * Want to use a different database during development?                     *
    *                                                                          *
    * 1. Choose an adapter:                                                    *
    *    https://sailsjs.com/plugins/databases                                 *
    *                                                                          *
    * 2. Install it as a dependency of your Sails app.                         *
    *    (For example:  npm install sails-mysql --save)                        *
    *                                                                          *
    * 3. Then pass it in, along with a connection URL.                         *
    *    (See https://sailsjs.com/config/datastores for help.)                 *
    *                                                                          *
    ***************************************************************************/
    // adapter: 'sails-mysql',
    // url: 'mysql://user:password@host:port/database',
    user: 'sa',
    password: '',
    database: 'master',
    dialect: 'mssql',
    options: {
      dialect: 'mssql',
      host: 'localhost',
      port: 1433,
      encrypt: false,
      enableArithAbort: false,
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      logging: console.log        // or specify sails log level to use ('info', 'warn', 'verbose', etc)
    }
  },

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
*                                                                          *
* MongoDB is the leading NoSQL database.                                   *
* http://en.wikipedia.org/wiki/MongoDB                                     *
*                                                                          *
* Run: npm install sails-mongo                                             *
*                                                                          *
***************************************************************************/
  someMongodbServer: {
    adapter: 'sails-mongo',
    host: 'localhost',
    port: 27017,
    // user: 'username',
    // password: 'password',
    database: 'cafe'
  },

  somePostgresqlServer: {
    user: 'postgres',
    password: '',
    database: 'sequelize',
    dialect: 'postgres',
    options: {
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      logging: console.log        // or specify sails log level to use ('info', 'warn', 'verbose', etc)
    }
  }

};
