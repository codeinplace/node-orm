export function createQuery(sql: string): string {
    return sql.replace(/(\r\n|\n|\r| +(?= ))/gm, '').trim();
}
