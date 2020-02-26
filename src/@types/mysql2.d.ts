// import * as mysql from 'mysql';
// mysql.createPool().query('fsddfs', [], () => {

// })

declare module 'mysql2' {
    import { Connection, Pool, PoolCluster, PoolClusterConfig, PoolConfig, ConnectionConfig, Query, QueryOptions, queryCallback } from 'mysql';

    interface MySQL2Connection extends Connection {
        promise(): Promise<Connection>;
    }

    interface InnerPool {
        query(query: Query): Promise<any>;
        query(options: string | QueryOptions): Promise<any>;
        query(options: string, values: any): Promise<any>;
    }
    interface MySQL2Pool extends Pool {
        promise(): Promise<InnerPool>;
    }

    interface MySQL2PoolCluster extends PoolCluster {
        promise(): Promise<PoolCluster>;
    }

    export function createConnection(connectionUri: string | ConnectionConfig): MySQL2Connection;
    export function createPool(config: string | PoolConfig): MySQL2Pool;
    export function createPoolCluster(config?: PoolClusterConfig): PoolCluster;
    export function escape(value: any, stringifyObjects?: boolean, timeZone?: string): string;
    export function escapeId(value: string, forbidQualified?: boolean): string;
    export function format(sql: string, values: any[], stringifyObjects?: boolean, timeZone?: string): string;
    export function raw(sql: string): () => string;
}
