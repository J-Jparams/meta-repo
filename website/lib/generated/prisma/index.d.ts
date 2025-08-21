
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ActivationCode
 * 
 */
export type ActivationCode = $Result.DefaultSelection<Prisma.$ActivationCodePayload>
/**
 * Model JoinRequest
 * 
 */
export type JoinRequest = $Result.DefaultSelection<Prisma.$JoinRequestPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Verification
 * 
 */
export type Verification = $Result.DefaultSelection<Prisma.$VerificationPayload>
/**
 * Model PRSubmission
 * 
 */
export type PRSubmission = $Result.DefaultSelection<Prisma.$PRSubmissionPayload>
/**
 * Model PRFlag
 * 
 */
export type PRFlag = $Result.DefaultSelection<Prisma.$PRFlagPayload>
/**
 * Model Avatar
 * 
 */
export type Avatar = $Result.DefaultSelection<Prisma.$AvatarPayload>
/**
 * Model PRAuditLog
 * 
 */
export type PRAuditLog = $Result.DefaultSelection<Prisma.$PRAuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ActivationCodeType: {
  ADMIN: 'ADMIN',
  TEAM: 'TEAM'
};

export type ActivationCodeType = (typeof ActivationCodeType)[keyof typeof ActivationCodeType]


export const PRStatus: {
  AWAITING_CONSENSUS: 'AWAITING_CONSENSUS',
  INCUBATING: 'INCUBATING',
  PENDING_REFINEMENT: 'PENDING_REFINEMENT',
  IN_PROGRESS: 'IN_PROGRESS',
  INTEGRATION_APPROVED: 'INTEGRATION_APPROVED',
  CLOSED: 'CLOSED',
  DECOMMISSIONED: 'DECOMMISSIONED'
};

export type PRStatus = (typeof PRStatus)[keyof typeof PRStatus]

}

export type ActivationCodeType = $Enums.ActivationCodeType

export const ActivationCodeType: typeof $Enums.ActivationCodeType

export type PRStatus = $Enums.PRStatus

export const PRStatus: typeof $Enums.PRStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activationCode`: Exposes CRUD operations for the **ActivationCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivationCodes
    * const activationCodes = await prisma.activationCode.findMany()
    * ```
    */
  get activationCode(): Prisma.ActivationCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.joinRequest`: Exposes CRUD operations for the **JoinRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JoinRequests
    * const joinRequests = await prisma.joinRequest.findMany()
    * ```
    */
  get joinRequest(): Prisma.JoinRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verification`: Exposes CRUD operations for the **Verification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifications
    * const verifications = await prisma.verification.findMany()
    * ```
    */
  get verification(): Prisma.VerificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pRSubmission`: Exposes CRUD operations for the **PRSubmission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRSubmissions
    * const pRSubmissions = await prisma.pRSubmission.findMany()
    * ```
    */
  get pRSubmission(): Prisma.PRSubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pRFlag`: Exposes CRUD operations for the **PRFlag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRFlags
    * const pRFlags = await prisma.pRFlag.findMany()
    * ```
    */
  get pRFlag(): Prisma.PRFlagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avatar`: Exposes CRUD operations for the **Avatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avatars
    * const avatars = await prisma.avatar.findMany()
    * ```
    */
  get avatar(): Prisma.AvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pRAuditLog`: Exposes CRUD operations for the **PRAuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRAuditLogs
    * const pRAuditLogs = await prisma.pRAuditLog.findMany()
    * ```
    */
  get pRAuditLog(): Prisma.PRAuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.14.0
   * Query Engine version: 717184b7b35ea05dfa71a3236b7af656013e1e49
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ActivationCode: 'ActivationCode',
    JoinRequest: 'JoinRequest',
    Session: 'Session',
    Account: 'Account',
    Profile: 'Profile',
    Verification: 'Verification',
    PRSubmission: 'PRSubmission',
    PRFlag: 'PRFlag',
    Avatar: 'Avatar',
    PRAuditLog: 'PRAuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "activationCode" | "joinRequest" | "session" | "account" | "profile" | "verification" | "pRSubmission" | "pRFlag" | "avatar" | "pRAuditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ActivationCode: {
        payload: Prisma.$ActivationCodePayload<ExtArgs>
        fields: Prisma.ActivationCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivationCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivationCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>
          }
          findFirst: {
            args: Prisma.ActivationCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivationCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>
          }
          findMany: {
            args: Prisma.ActivationCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>[]
          }
          create: {
            args: Prisma.ActivationCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>
          }
          createMany: {
            args: Prisma.ActivationCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivationCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>[]
          }
          delete: {
            args: Prisma.ActivationCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>
          }
          update: {
            args: Prisma.ActivationCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>
          }
          deleteMany: {
            args: Prisma.ActivationCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivationCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivationCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>[]
          }
          upsert: {
            args: Prisma.ActivationCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationCodePayload>
          }
          aggregate: {
            args: Prisma.ActivationCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivationCode>
          }
          groupBy: {
            args: Prisma.ActivationCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivationCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivationCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ActivationCodeCountAggregateOutputType> | number
          }
        }
      }
      JoinRequest: {
        payload: Prisma.$JoinRequestPayload<ExtArgs>
        fields: Prisma.JoinRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JoinRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JoinRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findFirst: {
            args: Prisma.JoinRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JoinRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          findMany: {
            args: Prisma.JoinRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          create: {
            args: Prisma.JoinRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          createMany: {
            args: Prisma.JoinRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JoinRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          delete: {
            args: Prisma.JoinRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          update: {
            args: Prisma.JoinRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          deleteMany: {
            args: Prisma.JoinRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JoinRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JoinRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>[]
          }
          upsert: {
            args: Prisma.JoinRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JoinRequestPayload>
          }
          aggregate: {
            args: Prisma.JoinRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJoinRequest>
          }
          groupBy: {
            args: Prisma.JoinRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.JoinRequestCountArgs<ExtArgs>
            result: $Utils.Optional<JoinRequestCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Verification: {
        payload: Prisma.$VerificationPayload<ExtArgs>
        fields: Prisma.VerificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findFirst: {
            args: Prisma.VerificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          findMany: {
            args: Prisma.VerificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          create: {
            args: Prisma.VerificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          createMany: {
            args: Prisma.VerificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          delete: {
            args: Prisma.VerificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          update: {
            args: Prisma.VerificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          deleteMany: {
            args: Prisma.VerificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>[]
          }
          upsert: {
            args: Prisma.VerificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationPayload>
          }
          aggregate: {
            args: Prisma.VerificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerification>
          }
          groupBy: {
            args: Prisma.VerificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationCountAggregateOutputType> | number
          }
        }
      }
      PRSubmission: {
        payload: Prisma.$PRSubmissionPayload<ExtArgs>
        fields: Prisma.PRSubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRSubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRSubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>
          }
          findFirst: {
            args: Prisma.PRSubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRSubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>
          }
          findMany: {
            args: Prisma.PRSubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>[]
          }
          create: {
            args: Prisma.PRSubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>
          }
          createMany: {
            args: Prisma.PRSubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PRSubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>[]
          }
          delete: {
            args: Prisma.PRSubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>
          }
          update: {
            args: Prisma.PRSubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>
          }
          deleteMany: {
            args: Prisma.PRSubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PRSubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PRSubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>[]
          }
          upsert: {
            args: Prisma.PRSubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRSubmissionPayload>
          }
          aggregate: {
            args: Prisma.PRSubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePRSubmission>
          }
          groupBy: {
            args: Prisma.PRSubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PRSubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRSubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<PRSubmissionCountAggregateOutputType> | number
          }
        }
      }
      PRFlag: {
        payload: Prisma.$PRFlagPayload<ExtArgs>
        fields: Prisma.PRFlagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRFlagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRFlagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>
          }
          findFirst: {
            args: Prisma.PRFlagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRFlagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>
          }
          findMany: {
            args: Prisma.PRFlagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>[]
          }
          create: {
            args: Prisma.PRFlagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>
          }
          createMany: {
            args: Prisma.PRFlagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PRFlagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>[]
          }
          delete: {
            args: Prisma.PRFlagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>
          }
          update: {
            args: Prisma.PRFlagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>
          }
          deleteMany: {
            args: Prisma.PRFlagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PRFlagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PRFlagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>[]
          }
          upsert: {
            args: Prisma.PRFlagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRFlagPayload>
          }
          aggregate: {
            args: Prisma.PRFlagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePRFlag>
          }
          groupBy: {
            args: Prisma.PRFlagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PRFlagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRFlagCountArgs<ExtArgs>
            result: $Utils.Optional<PRFlagCountAggregateOutputType> | number
          }
        }
      }
      Avatar: {
        payload: Prisma.$AvatarPayload<ExtArgs>
        fields: Prisma.AvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findFirst: {
            args: Prisma.AvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          findMany: {
            args: Prisma.AvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          create: {
            args: Prisma.AvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          createMany: {
            args: Prisma.AvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          delete: {
            args: Prisma.AvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          update: {
            args: Prisma.AvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          deleteMany: {
            args: Prisma.AvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>[]
          }
          upsert: {
            args: Prisma.AvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvatarPayload>
          }
          aggregate: {
            args: Prisma.AvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvatar>
          }
          groupBy: {
            args: Prisma.AvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvatarCountArgs<ExtArgs>
            result: $Utils.Optional<AvatarCountAggregateOutputType> | number
          }
        }
      }
      PRAuditLog: {
        payload: Prisma.$PRAuditLogPayload<ExtArgs>
        fields: Prisma.PRAuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRAuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRAuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>
          }
          findFirst: {
            args: Prisma.PRAuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRAuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>
          }
          findMany: {
            args: Prisma.PRAuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>[]
          }
          create: {
            args: Prisma.PRAuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>
          }
          createMany: {
            args: Prisma.PRAuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PRAuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>[]
          }
          delete: {
            args: Prisma.PRAuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>
          }
          update: {
            args: Prisma.PRAuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>
          }
          deleteMany: {
            args: Prisma.PRAuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PRAuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PRAuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>[]
          }
          upsert: {
            args: Prisma.PRAuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PRAuditLogPayload>
          }
          aggregate: {
            args: Prisma.PRAuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePRAuditLog>
          }
          groupBy: {
            args: Prisma.PRAuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PRAuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRAuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<PRAuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    activationCode?: ActivationCodeOmit
    joinRequest?: JoinRequestOmit
    session?: SessionOmit
    account?: AccountOmit
    profile?: ProfileOmit
    verification?: VerificationOmit
    pRSubmission?: PRSubmissionOmit
    pRFlag?: PRFlagOmit
    avatar?: AvatarOmit
    pRAuditLog?: PRAuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    sessions: number
    accounts: number
    prFlagsCreated: number
    mentoredPRs: number
    actedAuditLogs: number
    avatars: number
    issuedCodes: number
    usedCodes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    prFlagsCreated?: boolean | UserCountOutputTypeCountPrFlagsCreatedArgs
    mentoredPRs?: boolean | UserCountOutputTypeCountMentoredPRsArgs
    actedAuditLogs?: boolean | UserCountOutputTypeCountActedAuditLogsArgs
    avatars?: boolean | UserCountOutputTypeCountAvatarsArgs
    issuedCodes?: boolean | UserCountOutputTypeCountIssuedCodesArgs
    usedCodes?: boolean | UserCountOutputTypeCountUsedCodesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPrFlagsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRFlagWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMentoredPRsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRSubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountActedAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRAuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIssuedCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationCodeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsedCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationCodeWhereInput
  }


  /**
   * Count Type PRSubmissionCountOutputType
   */

  export type PRSubmissionCountOutputType = {
    flags: number
    audits: number
  }

  export type PRSubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flags?: boolean | PRSubmissionCountOutputTypeCountFlagsArgs
    audits?: boolean | PRSubmissionCountOutputTypeCountAuditsArgs
  }

  // Custom InputTypes
  /**
   * PRSubmissionCountOutputType without action
   */
  export type PRSubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmissionCountOutputType
     */
    select?: PRSubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PRSubmissionCountOutputType without action
   */
  export type PRSubmissionCountOutputTypeCountFlagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRFlagWhereInput
  }

  /**
   * PRSubmissionCountOutputType without action
   */
  export type PRSubmissionCountOutputTypeCountAuditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRAuditLogWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    email: string | null
    emailVerified: boolean | null
    image: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    email: number
    emailVerified: number
    image: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    email: string
    emailVerified: boolean
    image: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    prFlagsCreated?: boolean | User$prFlagsCreatedArgs<ExtArgs>
    mentoredPRs?: boolean | User$mentoredPRsArgs<ExtArgs>
    actedAuditLogs?: boolean | User$actedAuditLogsArgs<ExtArgs>
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    issuedCodes?: boolean | User$issuedCodesArgs<ExtArgs>
    usedCodes?: boolean | User$usedCodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "email" | "emailVerified" | "image", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    accounts?: boolean | User$accountsArgs<ExtArgs>
    profile?: boolean | User$profileArgs<ExtArgs>
    prFlagsCreated?: boolean | User$prFlagsCreatedArgs<ExtArgs>
    mentoredPRs?: boolean | User$mentoredPRsArgs<ExtArgs>
    actedAuditLogs?: boolean | User$actedAuditLogsArgs<ExtArgs>
    avatars?: boolean | User$avatarsArgs<ExtArgs>
    issuedCodes?: boolean | User$issuedCodesArgs<ExtArgs>
    usedCodes?: boolean | User$usedCodesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      profile: Prisma.$ProfilePayload<ExtArgs> | null
      prFlagsCreated: Prisma.$PRFlagPayload<ExtArgs>[]
      mentoredPRs: Prisma.$PRSubmissionPayload<ExtArgs>[]
      actedAuditLogs: Prisma.$PRAuditLogPayload<ExtArgs>[]
      avatars: Prisma.$AvatarPayload<ExtArgs>[]
      issuedCodes: Prisma.$ActivationCodePayload<ExtArgs>[]
      usedCodes: Prisma.$ActivationCodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      email: string
      emailVerified: boolean
      image: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profile<T extends User$profileArgs<ExtArgs> = {}>(args?: Subset<T, User$profileArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    prFlagsCreated<T extends User$prFlagsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$prFlagsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mentoredPRs<T extends User$mentoredPRsArgs<ExtArgs> = {}>(args?: Subset<T, User$mentoredPRsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    actedAuditLogs<T extends User$actedAuditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$actedAuditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    avatars<T extends User$avatarsArgs<ExtArgs> = {}>(args?: Subset<T, User$avatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    issuedCodes<T extends User$issuedCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$issuedCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usedCodes<T extends User$usedCodesArgs<ExtArgs> = {}>(args?: Subset<T, User$usedCodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly image: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.profile
   */
  export type User$profileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    where?: ProfileWhereInput
  }

  /**
   * User.prFlagsCreated
   */
  export type User$prFlagsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    where?: PRFlagWhereInput
    orderBy?: PRFlagOrderByWithRelationInput | PRFlagOrderByWithRelationInput[]
    cursor?: PRFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRFlagScalarFieldEnum | PRFlagScalarFieldEnum[]
  }

  /**
   * User.mentoredPRs
   */
  export type User$mentoredPRsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    where?: PRSubmissionWhereInput
    orderBy?: PRSubmissionOrderByWithRelationInput | PRSubmissionOrderByWithRelationInput[]
    cursor?: PRSubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRSubmissionScalarFieldEnum | PRSubmissionScalarFieldEnum[]
  }

  /**
   * User.actedAuditLogs
   */
  export type User$actedAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    where?: PRAuditLogWhereInput
    orderBy?: PRAuditLogOrderByWithRelationInput | PRAuditLogOrderByWithRelationInput[]
    cursor?: PRAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRAuditLogScalarFieldEnum | PRAuditLogScalarFieldEnum[]
  }

  /**
   * User.avatars
   */
  export type User$avatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    cursor?: AvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * User.issuedCodes
   */
  export type User$issuedCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    where?: ActivationCodeWhereInput
    orderBy?: ActivationCodeOrderByWithRelationInput | ActivationCodeOrderByWithRelationInput[]
    cursor?: ActivationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivationCodeScalarFieldEnum | ActivationCodeScalarFieldEnum[]
  }

  /**
   * User.usedCodes
   */
  export type User$usedCodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    where?: ActivationCodeWhereInput
    orderBy?: ActivationCodeOrderByWithRelationInput | ActivationCodeOrderByWithRelationInput[]
    cursor?: ActivationCodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivationCodeScalarFieldEnum | ActivationCodeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model ActivationCode
   */

  export type AggregateActivationCode = {
    _count: ActivationCodeCountAggregateOutputType | null
    _min: ActivationCodeMinAggregateOutputType | null
    _max: ActivationCodeMaxAggregateOutputType | null
  }

  export type ActivationCodeMinAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.ActivationCodeType | null
    organizationId: string | null
    issuedByUserId: string | null
    usedByUserId: string | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ActivationCodeMaxAggregateOutputType = {
    id: string | null
    code: string | null
    type: $Enums.ActivationCodeType | null
    organizationId: string | null
    issuedByUserId: string | null
    usedByUserId: string | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type ActivationCodeCountAggregateOutputType = {
    id: number
    code: number
    type: number
    organizationId: number
    issuedByUserId: number
    usedByUserId: number
    usedAt: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type ActivationCodeMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    organizationId?: true
    issuedByUserId?: true
    usedByUserId?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ActivationCodeMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    organizationId?: true
    issuedByUserId?: true
    usedByUserId?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
  }

  export type ActivationCodeCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    organizationId?: true
    issuedByUserId?: true
    usedByUserId?: true
    usedAt?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type ActivationCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivationCode to aggregate.
     */
    where?: ActivationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationCodes to fetch.
     */
    orderBy?: ActivationCodeOrderByWithRelationInput | ActivationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivationCodes
    **/
    _count?: true | ActivationCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivationCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivationCodeMaxAggregateInputType
  }

  export type GetActivationCodeAggregateType<T extends ActivationCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateActivationCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivationCode[P]>
      : GetScalarType<T[P], AggregateActivationCode[P]>
  }




  export type ActivationCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationCodeWhereInput
    orderBy?: ActivationCodeOrderByWithAggregationInput | ActivationCodeOrderByWithAggregationInput[]
    by: ActivationCodeScalarFieldEnum[] | ActivationCodeScalarFieldEnum
    having?: ActivationCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivationCodeCountAggregateInputType | true
    _min?: ActivationCodeMinAggregateInputType
    _max?: ActivationCodeMaxAggregateInputType
  }

  export type ActivationCodeGroupByOutputType = {
    id: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    issuedByUserId: string | null
    usedByUserId: string | null
    usedAt: Date | null
    expiresAt: Date | null
    createdAt: Date
    _count: ActivationCodeCountAggregateOutputType | null
    _min: ActivationCodeMinAggregateOutputType | null
    _max: ActivationCodeMaxAggregateOutputType | null
  }

  type GetActivationCodeGroupByPayload<T extends ActivationCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivationCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivationCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivationCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ActivationCodeGroupByOutputType[P]>
        }
      >
    >


  export type ActivationCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    organizationId?: boolean
    issuedByUserId?: boolean
    usedByUserId?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    issuedByUser?: boolean | ActivationCode$issuedByUserArgs<ExtArgs>
    usedByUser?: boolean | ActivationCode$usedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["activationCode"]>

  export type ActivationCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    organizationId?: boolean
    issuedByUserId?: boolean
    usedByUserId?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    issuedByUser?: boolean | ActivationCode$issuedByUserArgs<ExtArgs>
    usedByUser?: boolean | ActivationCode$usedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["activationCode"]>

  export type ActivationCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    type?: boolean
    organizationId?: boolean
    issuedByUserId?: boolean
    usedByUserId?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    issuedByUser?: boolean | ActivationCode$issuedByUserArgs<ExtArgs>
    usedByUser?: boolean | ActivationCode$usedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["activationCode"]>

  export type ActivationCodeSelectScalar = {
    id?: boolean
    code?: boolean
    type?: boolean
    organizationId?: boolean
    issuedByUserId?: boolean
    usedByUserId?: boolean
    usedAt?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type ActivationCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "type" | "organizationId" | "issuedByUserId" | "usedByUserId" | "usedAt" | "expiresAt" | "createdAt", ExtArgs["result"]["activationCode"]>
  export type ActivationCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedByUser?: boolean | ActivationCode$issuedByUserArgs<ExtArgs>
    usedByUser?: boolean | ActivationCode$usedByUserArgs<ExtArgs>
  }
  export type ActivationCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedByUser?: boolean | ActivationCode$issuedByUserArgs<ExtArgs>
    usedByUser?: boolean | ActivationCode$usedByUserArgs<ExtArgs>
  }
  export type ActivationCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issuedByUser?: boolean | ActivationCode$issuedByUserArgs<ExtArgs>
    usedByUser?: boolean | ActivationCode$usedByUserArgs<ExtArgs>
  }

  export type $ActivationCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivationCode"
    objects: {
      issuedByUser: Prisma.$UserPayload<ExtArgs> | null
      usedByUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      type: $Enums.ActivationCodeType
      organizationId: string
      issuedByUserId: string | null
      usedByUserId: string | null
      usedAt: Date | null
      expiresAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["activationCode"]>
    composites: {}
  }

  type ActivationCodeGetPayload<S extends boolean | null | undefined | ActivationCodeDefaultArgs> = $Result.GetResult<Prisma.$ActivationCodePayload, S>

  type ActivationCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivationCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivationCodeCountAggregateInputType | true
    }

  export interface ActivationCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivationCode'], meta: { name: 'ActivationCode' } }
    /**
     * Find zero or one ActivationCode that matches the filter.
     * @param {ActivationCodeFindUniqueArgs} args - Arguments to find a ActivationCode
     * @example
     * // Get one ActivationCode
     * const activationCode = await prisma.activationCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivationCodeFindUniqueArgs>(args: SelectSubset<T, ActivationCodeFindUniqueArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivationCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivationCodeFindUniqueOrThrowArgs} args - Arguments to find a ActivationCode
     * @example
     * // Get one ActivationCode
     * const activationCode = await prisma.activationCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivationCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivationCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivationCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeFindFirstArgs} args - Arguments to find a ActivationCode
     * @example
     * // Get one ActivationCode
     * const activationCode = await prisma.activationCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivationCodeFindFirstArgs>(args?: SelectSubset<T, ActivationCodeFindFirstArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivationCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeFindFirstOrThrowArgs} args - Arguments to find a ActivationCode
     * @example
     * // Get one ActivationCode
     * const activationCode = await prisma.activationCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivationCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivationCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivationCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivationCodes
     * const activationCodes = await prisma.activationCode.findMany()
     * 
     * // Get first 10 ActivationCodes
     * const activationCodes = await prisma.activationCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activationCodeWithIdOnly = await prisma.activationCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivationCodeFindManyArgs>(args?: SelectSubset<T, ActivationCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivationCode.
     * @param {ActivationCodeCreateArgs} args - Arguments to create a ActivationCode.
     * @example
     * // Create one ActivationCode
     * const ActivationCode = await prisma.activationCode.create({
     *   data: {
     *     // ... data to create a ActivationCode
     *   }
     * })
     * 
     */
    create<T extends ActivationCodeCreateArgs>(args: SelectSubset<T, ActivationCodeCreateArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivationCodes.
     * @param {ActivationCodeCreateManyArgs} args - Arguments to create many ActivationCodes.
     * @example
     * // Create many ActivationCodes
     * const activationCode = await prisma.activationCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivationCodeCreateManyArgs>(args?: SelectSubset<T, ActivationCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivationCodes and returns the data saved in the database.
     * @param {ActivationCodeCreateManyAndReturnArgs} args - Arguments to create many ActivationCodes.
     * @example
     * // Create many ActivationCodes
     * const activationCode = await prisma.activationCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivationCodes and only return the `id`
     * const activationCodeWithIdOnly = await prisma.activationCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivationCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivationCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivationCode.
     * @param {ActivationCodeDeleteArgs} args - Arguments to delete one ActivationCode.
     * @example
     * // Delete one ActivationCode
     * const ActivationCode = await prisma.activationCode.delete({
     *   where: {
     *     // ... filter to delete one ActivationCode
     *   }
     * })
     * 
     */
    delete<T extends ActivationCodeDeleteArgs>(args: SelectSubset<T, ActivationCodeDeleteArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivationCode.
     * @param {ActivationCodeUpdateArgs} args - Arguments to update one ActivationCode.
     * @example
     * // Update one ActivationCode
     * const activationCode = await prisma.activationCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivationCodeUpdateArgs>(args: SelectSubset<T, ActivationCodeUpdateArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivationCodes.
     * @param {ActivationCodeDeleteManyArgs} args - Arguments to filter ActivationCodes to delete.
     * @example
     * // Delete a few ActivationCodes
     * const { count } = await prisma.activationCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivationCodeDeleteManyArgs>(args?: SelectSubset<T, ActivationCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivationCodes
     * const activationCode = await prisma.activationCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivationCodeUpdateManyArgs>(args: SelectSubset<T, ActivationCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivationCodes and returns the data updated in the database.
     * @param {ActivationCodeUpdateManyAndReturnArgs} args - Arguments to update many ActivationCodes.
     * @example
     * // Update many ActivationCodes
     * const activationCode = await prisma.activationCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivationCodes and only return the `id`
     * const activationCodeWithIdOnly = await prisma.activationCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivationCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivationCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivationCode.
     * @param {ActivationCodeUpsertArgs} args - Arguments to update or create a ActivationCode.
     * @example
     * // Update or create a ActivationCode
     * const activationCode = await prisma.activationCode.upsert({
     *   create: {
     *     // ... data to create a ActivationCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivationCode we want to update
     *   }
     * })
     */
    upsert<T extends ActivationCodeUpsertArgs>(args: SelectSubset<T, ActivationCodeUpsertArgs<ExtArgs>>): Prisma__ActivationCodeClient<$Result.GetResult<Prisma.$ActivationCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivationCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeCountArgs} args - Arguments to filter ActivationCodes to count.
     * @example
     * // Count the number of ActivationCodes
     * const count = await prisma.activationCode.count({
     *   where: {
     *     // ... the filter for the ActivationCodes we want to count
     *   }
     * })
    **/
    count<T extends ActivationCodeCountArgs>(
      args?: Subset<T, ActivationCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivationCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ActivationCodeAggregateArgs>(args: Subset<T, ActivationCodeAggregateArgs>): Prisma.PrismaPromise<GetActivationCodeAggregateType<T>>

    /**
     * Group by ActivationCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationCodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ActivationCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivationCodeGroupByArgs['orderBy'] }
        : { orderBy?: ActivationCodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ActivationCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivationCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivationCode model
   */
  readonly fields: ActivationCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivationCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivationCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issuedByUser<T extends ActivationCode$issuedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ActivationCode$issuedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usedByUser<T extends ActivationCode$usedByUserArgs<ExtArgs> = {}>(args?: Subset<T, ActivationCode$usedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivationCode model
   */
  interface ActivationCodeFieldRefs {
    readonly id: FieldRef<"ActivationCode", 'String'>
    readonly code: FieldRef<"ActivationCode", 'String'>
    readonly type: FieldRef<"ActivationCode", 'ActivationCodeType'>
    readonly organizationId: FieldRef<"ActivationCode", 'String'>
    readonly issuedByUserId: FieldRef<"ActivationCode", 'String'>
    readonly usedByUserId: FieldRef<"ActivationCode", 'String'>
    readonly usedAt: FieldRef<"ActivationCode", 'DateTime'>
    readonly expiresAt: FieldRef<"ActivationCode", 'DateTime'>
    readonly createdAt: FieldRef<"ActivationCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ActivationCode findUnique
   */
  export type ActivationCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ActivationCode to fetch.
     */
    where: ActivationCodeWhereUniqueInput
  }

  /**
   * ActivationCode findUniqueOrThrow
   */
  export type ActivationCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ActivationCode to fetch.
     */
    where: ActivationCodeWhereUniqueInput
  }

  /**
   * ActivationCode findFirst
   */
  export type ActivationCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ActivationCode to fetch.
     */
    where?: ActivationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationCodes to fetch.
     */
    orderBy?: ActivationCodeOrderByWithRelationInput | ActivationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivationCodes.
     */
    cursor?: ActivationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivationCodes.
     */
    distinct?: ActivationCodeScalarFieldEnum | ActivationCodeScalarFieldEnum[]
  }

  /**
   * ActivationCode findFirstOrThrow
   */
  export type ActivationCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ActivationCode to fetch.
     */
    where?: ActivationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationCodes to fetch.
     */
    orderBy?: ActivationCodeOrderByWithRelationInput | ActivationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivationCodes.
     */
    cursor?: ActivationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivationCodes.
     */
    distinct?: ActivationCodeScalarFieldEnum | ActivationCodeScalarFieldEnum[]
  }

  /**
   * ActivationCode findMany
   */
  export type ActivationCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * Filter, which ActivationCodes to fetch.
     */
    where?: ActivationCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationCodes to fetch.
     */
    orderBy?: ActivationCodeOrderByWithRelationInput | ActivationCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivationCodes.
     */
    cursor?: ActivationCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationCodes.
     */
    skip?: number
    distinct?: ActivationCodeScalarFieldEnum | ActivationCodeScalarFieldEnum[]
  }

  /**
   * ActivationCode create
   */
  export type ActivationCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivationCode.
     */
    data: XOR<ActivationCodeCreateInput, ActivationCodeUncheckedCreateInput>
  }

  /**
   * ActivationCode createMany
   */
  export type ActivationCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivationCodes.
     */
    data: ActivationCodeCreateManyInput | ActivationCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivationCode createManyAndReturn
   */
  export type ActivationCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ActivationCodes.
     */
    data: ActivationCodeCreateManyInput | ActivationCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivationCode update
   */
  export type ActivationCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivationCode.
     */
    data: XOR<ActivationCodeUpdateInput, ActivationCodeUncheckedUpdateInput>
    /**
     * Choose, which ActivationCode to update.
     */
    where: ActivationCodeWhereUniqueInput
  }

  /**
   * ActivationCode updateMany
   */
  export type ActivationCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivationCodes.
     */
    data: XOR<ActivationCodeUpdateManyMutationInput, ActivationCodeUncheckedUpdateManyInput>
    /**
     * Filter which ActivationCodes to update
     */
    where?: ActivationCodeWhereInput
    /**
     * Limit how many ActivationCodes to update.
     */
    limit?: number
  }

  /**
   * ActivationCode updateManyAndReturn
   */
  export type ActivationCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * The data used to update ActivationCodes.
     */
    data: XOR<ActivationCodeUpdateManyMutationInput, ActivationCodeUncheckedUpdateManyInput>
    /**
     * Filter which ActivationCodes to update
     */
    where?: ActivationCodeWhereInput
    /**
     * Limit how many ActivationCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivationCode upsert
   */
  export type ActivationCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivationCode to update in case it exists.
     */
    where: ActivationCodeWhereUniqueInput
    /**
     * In case the ActivationCode found by the `where` argument doesn't exist, create a new ActivationCode with this data.
     */
    create: XOR<ActivationCodeCreateInput, ActivationCodeUncheckedCreateInput>
    /**
     * In case the ActivationCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivationCodeUpdateInput, ActivationCodeUncheckedUpdateInput>
  }

  /**
   * ActivationCode delete
   */
  export type ActivationCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
    /**
     * Filter which ActivationCode to delete.
     */
    where: ActivationCodeWhereUniqueInput
  }

  /**
   * ActivationCode deleteMany
   */
  export type ActivationCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivationCodes to delete
     */
    where?: ActivationCodeWhereInput
    /**
     * Limit how many ActivationCodes to delete.
     */
    limit?: number
  }

  /**
   * ActivationCode.issuedByUser
   */
  export type ActivationCode$issuedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivationCode.usedByUser
   */
  export type ActivationCode$usedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * ActivationCode without action
   */
  export type ActivationCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationCode
     */
    select?: ActivationCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationCode
     */
    omit?: ActivationCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationCodeInclude<ExtArgs> | null
  }


  /**
   * Model JoinRequest
   */

  export type AggregateJoinRequest = {
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  export type JoinRequestMinAggregateOutputType = {
    id: string | null
    email: string | null
    note: string | null
    createdAt: Date | null
  }

  export type JoinRequestMaxAggregateOutputType = {
    id: string | null
    email: string | null
    note: string | null
    createdAt: Date | null
  }

  export type JoinRequestCountAggregateOutputType = {
    id: number
    email: number
    note: number
    createdAt: number
    _all: number
  }


  export type JoinRequestMinAggregateInputType = {
    id?: true
    email?: true
    note?: true
    createdAt?: true
  }

  export type JoinRequestMaxAggregateInputType = {
    id?: true
    email?: true
    note?: true
    createdAt?: true
  }

  export type JoinRequestCountAggregateInputType = {
    id?: true
    email?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type JoinRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequest to aggregate.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JoinRequests
    **/
    _count?: true | JoinRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JoinRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JoinRequestMaxAggregateInputType
  }

  export type GetJoinRequestAggregateType<T extends JoinRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateJoinRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJoinRequest[P]>
      : GetScalarType<T[P], AggregateJoinRequest[P]>
  }




  export type JoinRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JoinRequestWhereInput
    orderBy?: JoinRequestOrderByWithAggregationInput | JoinRequestOrderByWithAggregationInput[]
    by: JoinRequestScalarFieldEnum[] | JoinRequestScalarFieldEnum
    having?: JoinRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JoinRequestCountAggregateInputType | true
    _min?: JoinRequestMinAggregateInputType
    _max?: JoinRequestMaxAggregateInputType
  }

  export type JoinRequestGroupByOutputType = {
    id: string
    email: string
    note: string | null
    createdAt: Date
    _count: JoinRequestCountAggregateOutputType | null
    _min: JoinRequestMinAggregateOutputType | null
    _max: JoinRequestMaxAggregateOutputType | null
  }

  type GetJoinRequestGroupByPayload<T extends JoinRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JoinRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JoinRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
            : GetScalarType<T[P], JoinRequestGroupByOutputType[P]>
        }
      >
    >


  export type JoinRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    note?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["joinRequest"]>

  export type JoinRequestSelectScalar = {
    id?: boolean
    email?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type JoinRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "note" | "createdAt", ExtArgs["result"]["joinRequest"]>

  export type $JoinRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JoinRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["joinRequest"]>
    composites: {}
  }

  type JoinRequestGetPayload<S extends boolean | null | undefined | JoinRequestDefaultArgs> = $Result.GetResult<Prisma.$JoinRequestPayload, S>

  type JoinRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JoinRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JoinRequestCountAggregateInputType | true
    }

  export interface JoinRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JoinRequest'], meta: { name: 'JoinRequest' } }
    /**
     * Find zero or one JoinRequest that matches the filter.
     * @param {JoinRequestFindUniqueArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JoinRequestFindUniqueArgs>(args: SelectSubset<T, JoinRequestFindUniqueArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one JoinRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JoinRequestFindUniqueOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JoinRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, JoinRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JoinRequestFindFirstArgs>(args?: SelectSubset<T, JoinRequestFindFirstArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first JoinRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindFirstOrThrowArgs} args - Arguments to find a JoinRequest
     * @example
     * // Get one JoinRequest
     * const joinRequest = await prisma.joinRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JoinRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, JoinRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more JoinRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany()
     * 
     * // Get first 10 JoinRequests
     * const joinRequests = await prisma.joinRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JoinRequestFindManyArgs>(args?: SelectSubset<T, JoinRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a JoinRequest.
     * @param {JoinRequestCreateArgs} args - Arguments to create a JoinRequest.
     * @example
     * // Create one JoinRequest
     * const JoinRequest = await prisma.joinRequest.create({
     *   data: {
     *     // ... data to create a JoinRequest
     *   }
     * })
     * 
     */
    create<T extends JoinRequestCreateArgs>(args: SelectSubset<T, JoinRequestCreateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many JoinRequests.
     * @param {JoinRequestCreateManyArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JoinRequestCreateManyArgs>(args?: SelectSubset<T, JoinRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JoinRequests and returns the data saved in the database.
     * @param {JoinRequestCreateManyAndReturnArgs} args - Arguments to create many JoinRequests.
     * @example
     * // Create many JoinRequests
     * const joinRequest = await prisma.joinRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JoinRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, JoinRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a JoinRequest.
     * @param {JoinRequestDeleteArgs} args - Arguments to delete one JoinRequest.
     * @example
     * // Delete one JoinRequest
     * const JoinRequest = await prisma.joinRequest.delete({
     *   where: {
     *     // ... filter to delete one JoinRequest
     *   }
     * })
     * 
     */
    delete<T extends JoinRequestDeleteArgs>(args: SelectSubset<T, JoinRequestDeleteArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one JoinRequest.
     * @param {JoinRequestUpdateArgs} args - Arguments to update one JoinRequest.
     * @example
     * // Update one JoinRequest
     * const joinRequest = await prisma.joinRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JoinRequestUpdateArgs>(args: SelectSubset<T, JoinRequestUpdateArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more JoinRequests.
     * @param {JoinRequestDeleteManyArgs} args - Arguments to filter JoinRequests to delete.
     * @example
     * // Delete a few JoinRequests
     * const { count } = await prisma.joinRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JoinRequestDeleteManyArgs>(args?: SelectSubset<T, JoinRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JoinRequestUpdateManyArgs>(args: SelectSubset<T, JoinRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JoinRequests and returns the data updated in the database.
     * @param {JoinRequestUpdateManyAndReturnArgs} args - Arguments to update many JoinRequests.
     * @example
     * // Update many JoinRequests
     * const joinRequest = await prisma.joinRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more JoinRequests and only return the `id`
     * const joinRequestWithIdOnly = await prisma.joinRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JoinRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, JoinRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one JoinRequest.
     * @param {JoinRequestUpsertArgs} args - Arguments to update or create a JoinRequest.
     * @example
     * // Update or create a JoinRequest
     * const joinRequest = await prisma.joinRequest.upsert({
     *   create: {
     *     // ... data to create a JoinRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JoinRequest we want to update
     *   }
     * })
     */
    upsert<T extends JoinRequestUpsertArgs>(args: SelectSubset<T, JoinRequestUpsertArgs<ExtArgs>>): Prisma__JoinRequestClient<$Result.GetResult<Prisma.$JoinRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of JoinRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestCountArgs} args - Arguments to filter JoinRequests to count.
     * @example
     * // Count the number of JoinRequests
     * const count = await prisma.joinRequest.count({
     *   where: {
     *     // ... the filter for the JoinRequests we want to count
     *   }
     * })
    **/
    count<T extends JoinRequestCountArgs>(
      args?: Subset<T, JoinRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JoinRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JoinRequestAggregateArgs>(args: Subset<T, JoinRequestAggregateArgs>): Prisma.PrismaPromise<GetJoinRequestAggregateType<T>>

    /**
     * Group by JoinRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JoinRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JoinRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JoinRequestGroupByArgs['orderBy'] }
        : { orderBy?: JoinRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JoinRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJoinRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JoinRequest model
   */
  readonly fields: JoinRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JoinRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JoinRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JoinRequest model
   */
  interface JoinRequestFieldRefs {
    readonly id: FieldRef<"JoinRequest", 'String'>
    readonly email: FieldRef<"JoinRequest", 'String'>
    readonly note: FieldRef<"JoinRequest", 'String'>
    readonly createdAt: FieldRef<"JoinRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JoinRequest findUnique
   */
  export type JoinRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findUniqueOrThrow
   */
  export type JoinRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest findFirst
   */
  export type JoinRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findFirstOrThrow
   */
  export type JoinRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Filter, which JoinRequest to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JoinRequests.
     */
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest findMany
   */
  export type JoinRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Filter, which JoinRequests to fetch.
     */
    where?: JoinRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JoinRequests to fetch.
     */
    orderBy?: JoinRequestOrderByWithRelationInput | JoinRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JoinRequests.
     */
    cursor?: JoinRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JoinRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JoinRequests.
     */
    skip?: number
    distinct?: JoinRequestScalarFieldEnum | JoinRequestScalarFieldEnum[]
  }

  /**
   * JoinRequest create
   */
  export type JoinRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a JoinRequest.
     */
    data: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
  }

  /**
   * JoinRequest createMany
   */
  export type JoinRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinRequest createManyAndReturn
   */
  export type JoinRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to create many JoinRequests.
     */
    data: JoinRequestCreateManyInput | JoinRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JoinRequest update
   */
  export type JoinRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a JoinRequest.
     */
    data: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
    /**
     * Choose, which JoinRequest to update.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest updateMany
   */
  export type JoinRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest updateManyAndReturn
   */
  export type JoinRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The data used to update JoinRequests.
     */
    data: XOR<JoinRequestUpdateManyMutationInput, JoinRequestUncheckedUpdateManyInput>
    /**
     * Filter which JoinRequests to update
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to update.
     */
    limit?: number
  }

  /**
   * JoinRequest upsert
   */
  export type JoinRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the JoinRequest to update in case it exists.
     */
    where: JoinRequestWhereUniqueInput
    /**
     * In case the JoinRequest found by the `where` argument doesn't exist, create a new JoinRequest with this data.
     */
    create: XOR<JoinRequestCreateInput, JoinRequestUncheckedCreateInput>
    /**
     * In case the JoinRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JoinRequestUpdateInput, JoinRequestUncheckedUpdateInput>
  }

  /**
   * JoinRequest delete
   */
  export type JoinRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
    /**
     * Filter which JoinRequest to delete.
     */
    where: JoinRequestWhereUniqueInput
  }

  /**
   * JoinRequest deleteMany
   */
  export type JoinRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JoinRequests to delete
     */
    where?: JoinRequestWhereInput
    /**
     * Limit how many JoinRequests to delete.
     */
    limit?: number
  }

  /**
   * JoinRequest without action
   */
  export type JoinRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JoinRequest
     */
    select?: JoinRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the JoinRequest
     */
    omit?: JoinRequestOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expiresAt: Date | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    userId: string | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expiresAt: number
    token: number
    ipAddress: number
    userAgent: number
    userId: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expiresAt?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    userId?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    expiresAt: Date
    token: string
    ipAddress: string | null
    userAgent: string | null
    userId: string
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expiresAt?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    userId?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "expiresAt" | "token" | "ipAddress" | "userAgent" | "userId", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      expiresAt: Date
      token: string
      ipAddress: string | null
      userAgent: string | null
      userId: string
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly token: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    userId: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    accountId: string | null
    providerId: string | null
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    userId: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    accountId: number
    providerId: number
    accessToken: number
    refreshToken: number
    idToken: number
    accessTokenExpiresAt: number
    refreshTokenExpiresAt: number
    scope: number
    password: number
    userId: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    userId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    userId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    accountId?: true
    providerId?: true
    accessToken?: true
    refreshToken?: true
    idToken?: true
    accessTokenExpiresAt?: true
    refreshTokenExpiresAt?: true
    scope?: true
    password?: true
    userId?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    accountId: string
    providerId: string
    accessToken: string | null
    refreshToken: string | null
    idToken: string | null
    accessTokenExpiresAt: Date | null
    refreshTokenExpiresAt: Date | null
    scope: string | null
    password: string | null
    userId: string
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accountId?: boolean
    providerId?: boolean
    accessToken?: boolean
    refreshToken?: boolean
    idToken?: boolean
    accessTokenExpiresAt?: boolean
    refreshTokenExpiresAt?: boolean
    scope?: boolean
    password?: boolean
    userId?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "accountId" | "providerId" | "accessToken" | "refreshToken" | "idToken" | "accessTokenExpiresAt" | "refreshTokenExpiresAt" | "scope" | "password" | "userId", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      accountId: string
      providerId: string
      accessToken: string | null
      refreshToken: string | null
      idToken: string | null
      accessTokenExpiresAt: Date | null
      refreshTokenExpiresAt: Date | null
      scope: string | null
      password: string | null
      userId: string
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
    readonly accountId: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly idToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly refreshTokenExpiresAt: FieldRef<"Account", 'DateTime'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    bio: string | null
    avatarUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    bio: number
    avatarUrl: number
    linkedinUrl: number
    githubUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    bio?: true
    avatarUrl?: true
    linkedinUrl?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    bio?: true
    avatarUrl?: true
    linkedinUrl?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    bio?: true
    avatarUrl?: true
    linkedinUrl?: true
    githubUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    userId: string
    name: string | null
    bio: string | null
    avatarUrl: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    bio?: boolean
    avatarUrl?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "bio" | "avatarUrl" | "linkedinUrl" | "githubUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string | null
      bio: string | null
      avatarUrl: string | null
      linkedinUrl: string | null
      githubUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly userId: FieldRef<"Profile", 'String'>
    readonly name: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly avatarUrl: FieldRef<"Profile", 'String'>
    readonly linkedinUrl: FieldRef<"Profile", 'String'>
    readonly githubUrl: FieldRef<"Profile", 'String'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Verification
   */

  export type AggregateVerification = {
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  export type VerificationMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
  }

  export type VerificationMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    identifier: string | null
    value: string | null
    expiresAt: Date | null
  }

  export type VerificationCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    identifier: number
    value: number
    expiresAt: number
    _all: number
  }


  export type VerificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    identifier?: true
    value?: true
    expiresAt?: true
  }

  export type VerificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    identifier?: true
    value?: true
    expiresAt?: true
  }

  export type VerificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    identifier?: true
    value?: true
    expiresAt?: true
    _all?: true
  }

  export type VerificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verification to aggregate.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifications
    **/
    _count?: true | VerificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationMaxAggregateInputType
  }

  export type GetVerificationAggregateType<T extends VerificationAggregateArgs> = {
        [P in keyof T & keyof AggregateVerification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerification[P]>
      : GetScalarType<T[P], AggregateVerification[P]>
  }




  export type VerificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationWhereInput
    orderBy?: VerificationOrderByWithAggregationInput | VerificationOrderByWithAggregationInput[]
    by: VerificationScalarFieldEnum[] | VerificationScalarFieldEnum
    having?: VerificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationCountAggregateInputType | true
    _min?: VerificationMinAggregateInputType
    _max?: VerificationMaxAggregateInputType
  }

  export type VerificationGroupByOutputType = {
    id: string
    createdAt: Date | null
    updatedAt: Date | null
    identifier: string
    value: string
    expiresAt: Date
    _count: VerificationCountAggregateOutputType | null
    _min: VerificationMinAggregateOutputType | null
    _max: VerificationMaxAggregateOutputType | null
  }

  type GetVerificationGroupByPayload<T extends VerificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationGroupByOutputType[P]>
        }
      >
    >


  export type VerificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["verification"]>

  export type VerificationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    identifier?: boolean
    value?: boolean
    expiresAt?: boolean
  }

  export type VerificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "identifier" | "value" | "expiresAt", ExtArgs["result"]["verification"]>

  export type $VerificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Verification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date | null
      updatedAt: Date | null
      identifier: string
      value: string
      expiresAt: Date
    }, ExtArgs["result"]["verification"]>
    composites: {}
  }

  type VerificationGetPayload<S extends boolean | null | undefined | VerificationDefaultArgs> = $Result.GetResult<Prisma.$VerificationPayload, S>

  type VerificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationCountAggregateInputType | true
    }

  export interface VerificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Verification'], meta: { name: 'Verification' } }
    /**
     * Find zero or one Verification that matches the filter.
     * @param {VerificationFindUniqueArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationFindUniqueArgs>(args: SelectSubset<T, VerificationFindUniqueArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationFindUniqueOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationFindFirstArgs>(args?: SelectSubset<T, VerificationFindFirstArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindFirstOrThrowArgs} args - Arguments to find a Verification
     * @example
     * // Get one Verification
     * const verification = await prisma.verification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifications
     * const verifications = await prisma.verification.findMany()
     * 
     * // Get first 10 Verifications
     * const verifications = await prisma.verification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationWithIdOnly = await prisma.verification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationFindManyArgs>(args?: SelectSubset<T, VerificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verification.
     * @param {VerificationCreateArgs} args - Arguments to create a Verification.
     * @example
     * // Create one Verification
     * const Verification = await prisma.verification.create({
     *   data: {
     *     // ... data to create a Verification
     *   }
     * })
     * 
     */
    create<T extends VerificationCreateArgs>(args: SelectSubset<T, VerificationCreateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verifications.
     * @param {VerificationCreateManyArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationCreateManyArgs>(args?: SelectSubset<T, VerificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verifications and returns the data saved in the database.
     * @param {VerificationCreateManyAndReturnArgs} args - Arguments to create many Verifications.
     * @example
     * // Create many Verifications
     * const verification = await prisma.verification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verification.
     * @param {VerificationDeleteArgs} args - Arguments to delete one Verification.
     * @example
     * // Delete one Verification
     * const Verification = await prisma.verification.delete({
     *   where: {
     *     // ... filter to delete one Verification
     *   }
     * })
     * 
     */
    delete<T extends VerificationDeleteArgs>(args: SelectSubset<T, VerificationDeleteArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verification.
     * @param {VerificationUpdateArgs} args - Arguments to update one Verification.
     * @example
     * // Update one Verification
     * const verification = await prisma.verification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationUpdateArgs>(args: SelectSubset<T, VerificationUpdateArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verifications.
     * @param {VerificationDeleteManyArgs} args - Arguments to filter Verifications to delete.
     * @example
     * // Delete a few Verifications
     * const { count } = await prisma.verification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationDeleteManyArgs>(args?: SelectSubset<T, VerificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationUpdateManyArgs>(args: SelectSubset<T, VerificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifications and returns the data updated in the database.
     * @param {VerificationUpdateManyAndReturnArgs} args - Arguments to update many Verifications.
     * @example
     * // Update many Verifications
     * const verification = await prisma.verification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verifications and only return the `id`
     * const verificationWithIdOnly = await prisma.verification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verification.
     * @param {VerificationUpsertArgs} args - Arguments to update or create a Verification.
     * @example
     * // Update or create a Verification
     * const verification = await prisma.verification.upsert({
     *   create: {
     *     // ... data to create a Verification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verification we want to update
     *   }
     * })
     */
    upsert<T extends VerificationUpsertArgs>(args: SelectSubset<T, VerificationUpsertArgs<ExtArgs>>): Prisma__VerificationClient<$Result.GetResult<Prisma.$VerificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationCountArgs} args - Arguments to filter Verifications to count.
     * @example
     * // Count the number of Verifications
     * const count = await prisma.verification.count({
     *   where: {
     *     // ... the filter for the Verifications we want to count
     *   }
     * })
    **/
    count<T extends VerificationCountArgs>(
      args?: Subset<T, VerificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationAggregateArgs>(args: Subset<T, VerificationAggregateArgs>): Prisma.PrismaPromise<GetVerificationAggregateType<T>>

    /**
     * Group by Verification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationGroupByArgs['orderBy'] }
        : { orderBy?: VerificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Verification model
   */
  readonly fields: VerificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Verification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Verification model
   */
  interface VerificationFieldRefs {
    readonly id: FieldRef<"Verification", 'String'>
    readonly createdAt: FieldRef<"Verification", 'DateTime'>
    readonly updatedAt: FieldRef<"Verification", 'DateTime'>
    readonly identifier: FieldRef<"Verification", 'String'>
    readonly value: FieldRef<"Verification", 'String'>
    readonly expiresAt: FieldRef<"Verification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Verification findUnique
   */
  export type VerificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findUniqueOrThrow
   */
  export type VerificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification findFirst
   */
  export type VerificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findFirstOrThrow
   */
  export type VerificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verification to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifications.
     */
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification findMany
   */
  export type VerificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter, which Verifications to fetch.
     */
    where?: VerificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifications to fetch.
     */
    orderBy?: VerificationOrderByWithRelationInput | VerificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifications.
     */
    cursor?: VerificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifications.
     */
    skip?: number
    distinct?: VerificationScalarFieldEnum | VerificationScalarFieldEnum[]
  }

  /**
   * Verification create
   */
  export type VerificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Verification.
     */
    data: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
  }

  /**
   * Verification createMany
   */
  export type VerificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification createManyAndReturn
   */
  export type VerificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to create many Verifications.
     */
    data: VerificationCreateManyInput | VerificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Verification update
   */
  export type VerificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Verification.
     */
    data: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
    /**
     * Choose, which Verification to update.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification updateMany
   */
  export type VerificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification updateManyAndReturn
   */
  export type VerificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The data used to update Verifications.
     */
    data: XOR<VerificationUpdateManyMutationInput, VerificationUncheckedUpdateManyInput>
    /**
     * Filter which Verifications to update
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to update.
     */
    limit?: number
  }

  /**
   * Verification upsert
   */
  export type VerificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Verification to update in case it exists.
     */
    where: VerificationWhereUniqueInput
    /**
     * In case the Verification found by the `where` argument doesn't exist, create a new Verification with this data.
     */
    create: XOR<VerificationCreateInput, VerificationUncheckedCreateInput>
    /**
     * In case the Verification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationUpdateInput, VerificationUncheckedUpdateInput>
  }

  /**
   * Verification delete
   */
  export type VerificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
    /**
     * Filter which Verification to delete.
     */
    where: VerificationWhereUniqueInput
  }

  /**
   * Verification deleteMany
   */
  export type VerificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Verifications to delete
     */
    where?: VerificationWhereInput
    /**
     * Limit how many Verifications to delete.
     */
    limit?: number
  }

  /**
   * Verification without action
   */
  export type VerificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Verification
     */
    select?: VerificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Verification
     */
    omit?: VerificationOmit<ExtArgs> | null
  }


  /**
   * Model PRSubmission
   */

  export type AggregatePRSubmission = {
    _count: PRSubmissionCountAggregateOutputType | null
    _min: PRSubmissionMinAggregateOutputType | null
    _max: PRSubmissionMaxAggregateOutputType | null
  }

  export type PRSubmissionMinAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    author: string | null
    submitter: string | null
    status: $Enums.PRStatus | null
    mentorId: string | null
    claimedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PRSubmissionMaxAggregateOutputType = {
    id: string | null
    url: string | null
    title: string | null
    author: string | null
    submitter: string | null
    status: $Enums.PRStatus | null
    mentorId: string | null
    claimedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PRSubmissionCountAggregateOutputType = {
    id: number
    url: number
    title: number
    author: number
    submitter: number
    status: number
    mentorId: number
    claimedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PRSubmissionMinAggregateInputType = {
    id?: true
    url?: true
    title?: true
    author?: true
    submitter?: true
    status?: true
    mentorId?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PRSubmissionMaxAggregateInputType = {
    id?: true
    url?: true
    title?: true
    author?: true
    submitter?: true
    status?: true
    mentorId?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PRSubmissionCountAggregateInputType = {
    id?: true
    url?: true
    title?: true
    author?: true
    submitter?: true
    status?: true
    mentorId?: true
    claimedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PRSubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRSubmission to aggregate.
     */
    where?: PRSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRSubmissions to fetch.
     */
    orderBy?: PRSubmissionOrderByWithRelationInput | PRSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRSubmissions
    **/
    _count?: true | PRSubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRSubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRSubmissionMaxAggregateInputType
  }

  export type GetPRSubmissionAggregateType<T extends PRSubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePRSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRSubmission[P]>
      : GetScalarType<T[P], AggregatePRSubmission[P]>
  }




  export type PRSubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRSubmissionWhereInput
    orderBy?: PRSubmissionOrderByWithAggregationInput | PRSubmissionOrderByWithAggregationInput[]
    by: PRSubmissionScalarFieldEnum[] | PRSubmissionScalarFieldEnum
    having?: PRSubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRSubmissionCountAggregateInputType | true
    _min?: PRSubmissionMinAggregateInputType
    _max?: PRSubmissionMaxAggregateInputType
  }

  export type PRSubmissionGroupByOutputType = {
    id: string
    url: string
    title: string | null
    author: string | null
    submitter: string | null
    status: $Enums.PRStatus
    mentorId: string | null
    claimedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PRSubmissionCountAggregateOutputType | null
    _min: PRSubmissionMinAggregateOutputType | null
    _max: PRSubmissionMaxAggregateOutputType | null
  }

  type GetPRSubmissionGroupByPayload<T extends PRSubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRSubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRSubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRSubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], PRSubmissionGroupByOutputType[P]>
        }
      >
    >


  export type PRSubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
    submitter?: boolean
    status?: boolean
    mentorId?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mentor?: boolean | PRSubmission$mentorArgs<ExtArgs>
    flags?: boolean | PRSubmission$flagsArgs<ExtArgs>
    audits?: boolean | PRSubmission$auditsArgs<ExtArgs>
    _count?: boolean | PRSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRSubmission"]>

  export type PRSubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
    submitter?: boolean
    status?: boolean
    mentorId?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mentor?: boolean | PRSubmission$mentorArgs<ExtArgs>
  }, ExtArgs["result"]["pRSubmission"]>

  export type PRSubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
    submitter?: boolean
    status?: boolean
    mentorId?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mentor?: boolean | PRSubmission$mentorArgs<ExtArgs>
  }, ExtArgs["result"]["pRSubmission"]>

  export type PRSubmissionSelectScalar = {
    id?: boolean
    url?: boolean
    title?: boolean
    author?: boolean
    submitter?: boolean
    status?: boolean
    mentorId?: boolean
    claimedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PRSubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "title" | "author" | "submitter" | "status" | "mentorId" | "claimedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["pRSubmission"]>
  export type PRSubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | PRSubmission$mentorArgs<ExtArgs>
    flags?: boolean | PRSubmission$flagsArgs<ExtArgs>
    audits?: boolean | PRSubmission$auditsArgs<ExtArgs>
    _count?: boolean | PRSubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PRSubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | PRSubmission$mentorArgs<ExtArgs>
  }
  export type PRSubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mentor?: boolean | PRSubmission$mentorArgs<ExtArgs>
  }

  export type $PRSubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRSubmission"
    objects: {
      mentor: Prisma.$UserPayload<ExtArgs> | null
      flags: Prisma.$PRFlagPayload<ExtArgs>[]
      audits: Prisma.$PRAuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      title: string | null
      author: string | null
      submitter: string | null
      status: $Enums.PRStatus
      mentorId: string | null
      claimedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pRSubmission"]>
    composites: {}
  }

  type PRSubmissionGetPayload<S extends boolean | null | undefined | PRSubmissionDefaultArgs> = $Result.GetResult<Prisma.$PRSubmissionPayload, S>

  type PRSubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PRSubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PRSubmissionCountAggregateInputType | true
    }

  export interface PRSubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRSubmission'], meta: { name: 'PRSubmission' } }
    /**
     * Find zero or one PRSubmission that matches the filter.
     * @param {PRSubmissionFindUniqueArgs} args - Arguments to find a PRSubmission
     * @example
     * // Get one PRSubmission
     * const pRSubmission = await prisma.pRSubmission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PRSubmissionFindUniqueArgs>(args: SelectSubset<T, PRSubmissionFindUniqueArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PRSubmission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PRSubmissionFindUniqueOrThrowArgs} args - Arguments to find a PRSubmission
     * @example
     * // Get one PRSubmission
     * const pRSubmission = await prisma.pRSubmission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PRSubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PRSubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRSubmission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionFindFirstArgs} args - Arguments to find a PRSubmission
     * @example
     * // Get one PRSubmission
     * const pRSubmission = await prisma.pRSubmission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PRSubmissionFindFirstArgs>(args?: SelectSubset<T, PRSubmissionFindFirstArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRSubmission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionFindFirstOrThrowArgs} args - Arguments to find a PRSubmission
     * @example
     * // Get one PRSubmission
     * const pRSubmission = await prisma.pRSubmission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PRSubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PRSubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PRSubmissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRSubmissions
     * const pRSubmissions = await prisma.pRSubmission.findMany()
     * 
     * // Get first 10 PRSubmissions
     * const pRSubmissions = await prisma.pRSubmission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRSubmissionWithIdOnly = await prisma.pRSubmission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PRSubmissionFindManyArgs>(args?: SelectSubset<T, PRSubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PRSubmission.
     * @param {PRSubmissionCreateArgs} args - Arguments to create a PRSubmission.
     * @example
     * // Create one PRSubmission
     * const PRSubmission = await prisma.pRSubmission.create({
     *   data: {
     *     // ... data to create a PRSubmission
     *   }
     * })
     * 
     */
    create<T extends PRSubmissionCreateArgs>(args: SelectSubset<T, PRSubmissionCreateArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PRSubmissions.
     * @param {PRSubmissionCreateManyArgs} args - Arguments to create many PRSubmissions.
     * @example
     * // Create many PRSubmissions
     * const pRSubmission = await prisma.pRSubmission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PRSubmissionCreateManyArgs>(args?: SelectSubset<T, PRSubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PRSubmissions and returns the data saved in the database.
     * @param {PRSubmissionCreateManyAndReturnArgs} args - Arguments to create many PRSubmissions.
     * @example
     * // Create many PRSubmissions
     * const pRSubmission = await prisma.pRSubmission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PRSubmissions and only return the `id`
     * const pRSubmissionWithIdOnly = await prisma.pRSubmission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PRSubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PRSubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PRSubmission.
     * @param {PRSubmissionDeleteArgs} args - Arguments to delete one PRSubmission.
     * @example
     * // Delete one PRSubmission
     * const PRSubmission = await prisma.pRSubmission.delete({
     *   where: {
     *     // ... filter to delete one PRSubmission
     *   }
     * })
     * 
     */
    delete<T extends PRSubmissionDeleteArgs>(args: SelectSubset<T, PRSubmissionDeleteArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PRSubmission.
     * @param {PRSubmissionUpdateArgs} args - Arguments to update one PRSubmission.
     * @example
     * // Update one PRSubmission
     * const pRSubmission = await prisma.pRSubmission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PRSubmissionUpdateArgs>(args: SelectSubset<T, PRSubmissionUpdateArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PRSubmissions.
     * @param {PRSubmissionDeleteManyArgs} args - Arguments to filter PRSubmissions to delete.
     * @example
     * // Delete a few PRSubmissions
     * const { count } = await prisma.pRSubmission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PRSubmissionDeleteManyArgs>(args?: SelectSubset<T, PRSubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRSubmissions
     * const pRSubmission = await prisma.pRSubmission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PRSubmissionUpdateManyArgs>(args: SelectSubset<T, PRSubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRSubmissions and returns the data updated in the database.
     * @param {PRSubmissionUpdateManyAndReturnArgs} args - Arguments to update many PRSubmissions.
     * @example
     * // Update many PRSubmissions
     * const pRSubmission = await prisma.pRSubmission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PRSubmissions and only return the `id`
     * const pRSubmissionWithIdOnly = await prisma.pRSubmission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PRSubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PRSubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PRSubmission.
     * @param {PRSubmissionUpsertArgs} args - Arguments to update or create a PRSubmission.
     * @example
     * // Update or create a PRSubmission
     * const pRSubmission = await prisma.pRSubmission.upsert({
     *   create: {
     *     // ... data to create a PRSubmission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRSubmission we want to update
     *   }
     * })
     */
    upsert<T extends PRSubmissionUpsertArgs>(args: SelectSubset<T, PRSubmissionUpsertArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PRSubmissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionCountArgs} args - Arguments to filter PRSubmissions to count.
     * @example
     * // Count the number of PRSubmissions
     * const count = await prisma.pRSubmission.count({
     *   where: {
     *     // ... the filter for the PRSubmissions we want to count
     *   }
     * })
    **/
    count<T extends PRSubmissionCountArgs>(
      args?: Subset<T, PRSubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRSubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRSubmissionAggregateArgs>(args: Subset<T, PRSubmissionAggregateArgs>): Prisma.PrismaPromise<GetPRSubmissionAggregateType<T>>

    /**
     * Group by PRSubmission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRSubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRSubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRSubmissionGroupByArgs['orderBy'] }
        : { orderBy?: PRSubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRSubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRSubmission model
   */
  readonly fields: PRSubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRSubmission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRSubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mentor<T extends PRSubmission$mentorArgs<ExtArgs> = {}>(args?: Subset<T, PRSubmission$mentorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    flags<T extends PRSubmission$flagsArgs<ExtArgs> = {}>(args?: Subset<T, PRSubmission$flagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    audits<T extends PRSubmission$auditsArgs<ExtArgs> = {}>(args?: Subset<T, PRSubmission$auditsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PRSubmission model
   */
  interface PRSubmissionFieldRefs {
    readonly id: FieldRef<"PRSubmission", 'String'>
    readonly url: FieldRef<"PRSubmission", 'String'>
    readonly title: FieldRef<"PRSubmission", 'String'>
    readonly author: FieldRef<"PRSubmission", 'String'>
    readonly submitter: FieldRef<"PRSubmission", 'String'>
    readonly status: FieldRef<"PRSubmission", 'PRStatus'>
    readonly mentorId: FieldRef<"PRSubmission", 'String'>
    readonly claimedAt: FieldRef<"PRSubmission", 'DateTime'>
    readonly createdAt: FieldRef<"PRSubmission", 'DateTime'>
    readonly updatedAt: FieldRef<"PRSubmission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PRSubmission findUnique
   */
  export type PRSubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which PRSubmission to fetch.
     */
    where: PRSubmissionWhereUniqueInput
  }

  /**
   * PRSubmission findUniqueOrThrow
   */
  export type PRSubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which PRSubmission to fetch.
     */
    where: PRSubmissionWhereUniqueInput
  }

  /**
   * PRSubmission findFirst
   */
  export type PRSubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which PRSubmission to fetch.
     */
    where?: PRSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRSubmissions to fetch.
     */
    orderBy?: PRSubmissionOrderByWithRelationInput | PRSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRSubmissions.
     */
    cursor?: PRSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRSubmissions.
     */
    distinct?: PRSubmissionScalarFieldEnum | PRSubmissionScalarFieldEnum[]
  }

  /**
   * PRSubmission findFirstOrThrow
   */
  export type PRSubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which PRSubmission to fetch.
     */
    where?: PRSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRSubmissions to fetch.
     */
    orderBy?: PRSubmissionOrderByWithRelationInput | PRSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRSubmissions.
     */
    cursor?: PRSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRSubmissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRSubmissions.
     */
    distinct?: PRSubmissionScalarFieldEnum | PRSubmissionScalarFieldEnum[]
  }

  /**
   * PRSubmission findMany
   */
  export type PRSubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * Filter, which PRSubmissions to fetch.
     */
    where?: PRSubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRSubmissions to fetch.
     */
    orderBy?: PRSubmissionOrderByWithRelationInput | PRSubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRSubmissions.
     */
    cursor?: PRSubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRSubmissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRSubmissions.
     */
    skip?: number
    distinct?: PRSubmissionScalarFieldEnum | PRSubmissionScalarFieldEnum[]
  }

  /**
   * PRSubmission create
   */
  export type PRSubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a PRSubmission.
     */
    data: XOR<PRSubmissionCreateInput, PRSubmissionUncheckedCreateInput>
  }

  /**
   * PRSubmission createMany
   */
  export type PRSubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRSubmissions.
     */
    data: PRSubmissionCreateManyInput | PRSubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PRSubmission createManyAndReturn
   */
  export type PRSubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many PRSubmissions.
     */
    data: PRSubmissionCreateManyInput | PRSubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRSubmission update
   */
  export type PRSubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a PRSubmission.
     */
    data: XOR<PRSubmissionUpdateInput, PRSubmissionUncheckedUpdateInput>
    /**
     * Choose, which PRSubmission to update.
     */
    where: PRSubmissionWhereUniqueInput
  }

  /**
   * PRSubmission updateMany
   */
  export type PRSubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRSubmissions.
     */
    data: XOR<PRSubmissionUpdateManyMutationInput, PRSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which PRSubmissions to update
     */
    where?: PRSubmissionWhereInput
    /**
     * Limit how many PRSubmissions to update.
     */
    limit?: number
  }

  /**
   * PRSubmission updateManyAndReturn
   */
  export type PRSubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * The data used to update PRSubmissions.
     */
    data: XOR<PRSubmissionUpdateManyMutationInput, PRSubmissionUncheckedUpdateManyInput>
    /**
     * Filter which PRSubmissions to update
     */
    where?: PRSubmissionWhereInput
    /**
     * Limit how many PRSubmissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRSubmission upsert
   */
  export type PRSubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the PRSubmission to update in case it exists.
     */
    where: PRSubmissionWhereUniqueInput
    /**
     * In case the PRSubmission found by the `where` argument doesn't exist, create a new PRSubmission with this data.
     */
    create: XOR<PRSubmissionCreateInput, PRSubmissionUncheckedCreateInput>
    /**
     * In case the PRSubmission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRSubmissionUpdateInput, PRSubmissionUncheckedUpdateInput>
  }

  /**
   * PRSubmission delete
   */
  export type PRSubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
    /**
     * Filter which PRSubmission to delete.
     */
    where: PRSubmissionWhereUniqueInput
  }

  /**
   * PRSubmission deleteMany
   */
  export type PRSubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRSubmissions to delete
     */
    where?: PRSubmissionWhereInput
    /**
     * Limit how many PRSubmissions to delete.
     */
    limit?: number
  }

  /**
   * PRSubmission.mentor
   */
  export type PRSubmission$mentorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PRSubmission.flags
   */
  export type PRSubmission$flagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    where?: PRFlagWhereInput
    orderBy?: PRFlagOrderByWithRelationInput | PRFlagOrderByWithRelationInput[]
    cursor?: PRFlagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRFlagScalarFieldEnum | PRFlagScalarFieldEnum[]
  }

  /**
   * PRSubmission.audits
   */
  export type PRSubmission$auditsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    where?: PRAuditLogWhereInput
    orderBy?: PRAuditLogOrderByWithRelationInput | PRAuditLogOrderByWithRelationInput[]
    cursor?: PRAuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRAuditLogScalarFieldEnum | PRAuditLogScalarFieldEnum[]
  }

  /**
   * PRSubmission without action
   */
  export type PRSubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRSubmission
     */
    select?: PRSubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRSubmission
     */
    omit?: PRSubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRSubmissionInclude<ExtArgs> | null
  }


  /**
   * Model PRFlag
   */

  export type AggregatePRFlag = {
    _count: PRFlagCountAggregateOutputType | null
    _min: PRFlagMinAggregateOutputType | null
    _max: PRFlagMaxAggregateOutputType | null
  }

  export type PRFlagMinAggregateOutputType = {
    id: string | null
    prId: string | null
    createdByUserId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PRFlagMaxAggregateOutputType = {
    id: string | null
    prId: string | null
    createdByUserId: string | null
    reason: string | null
    createdAt: Date | null
  }

  export type PRFlagCountAggregateOutputType = {
    id: number
    prId: number
    createdByUserId: number
    reason: number
    createdAt: number
    _all: number
  }


  export type PRFlagMinAggregateInputType = {
    id?: true
    prId?: true
    createdByUserId?: true
    reason?: true
    createdAt?: true
  }

  export type PRFlagMaxAggregateInputType = {
    id?: true
    prId?: true
    createdByUserId?: true
    reason?: true
    createdAt?: true
  }

  export type PRFlagCountAggregateInputType = {
    id?: true
    prId?: true
    createdByUserId?: true
    reason?: true
    createdAt?: true
    _all?: true
  }

  export type PRFlagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRFlag to aggregate.
     */
    where?: PRFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFlags to fetch.
     */
    orderBy?: PRFlagOrderByWithRelationInput | PRFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRFlags
    **/
    _count?: true | PRFlagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRFlagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRFlagMaxAggregateInputType
  }

  export type GetPRFlagAggregateType<T extends PRFlagAggregateArgs> = {
        [P in keyof T & keyof AggregatePRFlag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRFlag[P]>
      : GetScalarType<T[P], AggregatePRFlag[P]>
  }




  export type PRFlagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRFlagWhereInput
    orderBy?: PRFlagOrderByWithAggregationInput | PRFlagOrderByWithAggregationInput[]
    by: PRFlagScalarFieldEnum[] | PRFlagScalarFieldEnum
    having?: PRFlagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRFlagCountAggregateInputType | true
    _min?: PRFlagMinAggregateInputType
    _max?: PRFlagMaxAggregateInputType
  }

  export type PRFlagGroupByOutputType = {
    id: string
    prId: string
    createdByUserId: string
    reason: string
    createdAt: Date
    _count: PRFlagCountAggregateOutputType | null
    _min: PRFlagMinAggregateOutputType | null
    _max: PRFlagMaxAggregateOutputType | null
  }

  type GetPRFlagGroupByPayload<T extends PRFlagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRFlagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRFlagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRFlagGroupByOutputType[P]>
            : GetScalarType<T[P], PRFlagGroupByOutputType[P]>
        }
      >
    >


  export type PRFlagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    createdByUserId?: boolean
    reason?: boolean
    createdAt?: boolean
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRFlag"]>

  export type PRFlagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    createdByUserId?: boolean
    reason?: boolean
    createdAt?: boolean
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRFlag"]>

  export type PRFlagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    createdByUserId?: boolean
    reason?: boolean
    createdAt?: boolean
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRFlag"]>

  export type PRFlagSelectScalar = {
    id?: boolean
    prId?: boolean
    createdByUserId?: boolean
    reason?: boolean
    createdAt?: boolean
  }

  export type PRFlagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prId" | "createdByUserId" | "reason" | "createdAt", ExtArgs["result"]["pRFlag"]>
  export type PRFlagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PRFlagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PRFlagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PRFlagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRFlag"
    objects: {
      pr: Prisma.$PRSubmissionPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prId: string
      createdByUserId: string
      reason: string
      createdAt: Date
    }, ExtArgs["result"]["pRFlag"]>
    composites: {}
  }

  type PRFlagGetPayload<S extends boolean | null | undefined | PRFlagDefaultArgs> = $Result.GetResult<Prisma.$PRFlagPayload, S>

  type PRFlagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PRFlagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PRFlagCountAggregateInputType | true
    }

  export interface PRFlagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRFlag'], meta: { name: 'PRFlag' } }
    /**
     * Find zero or one PRFlag that matches the filter.
     * @param {PRFlagFindUniqueArgs} args - Arguments to find a PRFlag
     * @example
     * // Get one PRFlag
     * const pRFlag = await prisma.pRFlag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PRFlagFindUniqueArgs>(args: SelectSubset<T, PRFlagFindUniqueArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PRFlag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PRFlagFindUniqueOrThrowArgs} args - Arguments to find a PRFlag
     * @example
     * // Get one PRFlag
     * const pRFlag = await prisma.pRFlag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PRFlagFindUniqueOrThrowArgs>(args: SelectSubset<T, PRFlagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRFlag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagFindFirstArgs} args - Arguments to find a PRFlag
     * @example
     * // Get one PRFlag
     * const pRFlag = await prisma.pRFlag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PRFlagFindFirstArgs>(args?: SelectSubset<T, PRFlagFindFirstArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRFlag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagFindFirstOrThrowArgs} args - Arguments to find a PRFlag
     * @example
     * // Get one PRFlag
     * const pRFlag = await prisma.pRFlag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PRFlagFindFirstOrThrowArgs>(args?: SelectSubset<T, PRFlagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PRFlags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRFlags
     * const pRFlags = await prisma.pRFlag.findMany()
     * 
     * // Get first 10 PRFlags
     * const pRFlags = await prisma.pRFlag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRFlagWithIdOnly = await prisma.pRFlag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PRFlagFindManyArgs>(args?: SelectSubset<T, PRFlagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PRFlag.
     * @param {PRFlagCreateArgs} args - Arguments to create a PRFlag.
     * @example
     * // Create one PRFlag
     * const PRFlag = await prisma.pRFlag.create({
     *   data: {
     *     // ... data to create a PRFlag
     *   }
     * })
     * 
     */
    create<T extends PRFlagCreateArgs>(args: SelectSubset<T, PRFlagCreateArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PRFlags.
     * @param {PRFlagCreateManyArgs} args - Arguments to create many PRFlags.
     * @example
     * // Create many PRFlags
     * const pRFlag = await prisma.pRFlag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PRFlagCreateManyArgs>(args?: SelectSubset<T, PRFlagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PRFlags and returns the data saved in the database.
     * @param {PRFlagCreateManyAndReturnArgs} args - Arguments to create many PRFlags.
     * @example
     * // Create many PRFlags
     * const pRFlag = await prisma.pRFlag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PRFlags and only return the `id`
     * const pRFlagWithIdOnly = await prisma.pRFlag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PRFlagCreateManyAndReturnArgs>(args?: SelectSubset<T, PRFlagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PRFlag.
     * @param {PRFlagDeleteArgs} args - Arguments to delete one PRFlag.
     * @example
     * // Delete one PRFlag
     * const PRFlag = await prisma.pRFlag.delete({
     *   where: {
     *     // ... filter to delete one PRFlag
     *   }
     * })
     * 
     */
    delete<T extends PRFlagDeleteArgs>(args: SelectSubset<T, PRFlagDeleteArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PRFlag.
     * @param {PRFlagUpdateArgs} args - Arguments to update one PRFlag.
     * @example
     * // Update one PRFlag
     * const pRFlag = await prisma.pRFlag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PRFlagUpdateArgs>(args: SelectSubset<T, PRFlagUpdateArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PRFlags.
     * @param {PRFlagDeleteManyArgs} args - Arguments to filter PRFlags to delete.
     * @example
     * // Delete a few PRFlags
     * const { count } = await prisma.pRFlag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PRFlagDeleteManyArgs>(args?: SelectSubset<T, PRFlagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRFlags
     * const pRFlag = await prisma.pRFlag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PRFlagUpdateManyArgs>(args: SelectSubset<T, PRFlagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRFlags and returns the data updated in the database.
     * @param {PRFlagUpdateManyAndReturnArgs} args - Arguments to update many PRFlags.
     * @example
     * // Update many PRFlags
     * const pRFlag = await prisma.pRFlag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PRFlags and only return the `id`
     * const pRFlagWithIdOnly = await prisma.pRFlag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PRFlagUpdateManyAndReturnArgs>(args: SelectSubset<T, PRFlagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PRFlag.
     * @param {PRFlagUpsertArgs} args - Arguments to update or create a PRFlag.
     * @example
     * // Update or create a PRFlag
     * const pRFlag = await prisma.pRFlag.upsert({
     *   create: {
     *     // ... data to create a PRFlag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRFlag we want to update
     *   }
     * })
     */
    upsert<T extends PRFlagUpsertArgs>(args: SelectSubset<T, PRFlagUpsertArgs<ExtArgs>>): Prisma__PRFlagClient<$Result.GetResult<Prisma.$PRFlagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PRFlags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagCountArgs} args - Arguments to filter PRFlags to count.
     * @example
     * // Count the number of PRFlags
     * const count = await prisma.pRFlag.count({
     *   where: {
     *     // ... the filter for the PRFlags we want to count
     *   }
     * })
    **/
    count<T extends PRFlagCountArgs>(
      args?: Subset<T, PRFlagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRFlagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRFlagAggregateArgs>(args: Subset<T, PRFlagAggregateArgs>): Prisma.PrismaPromise<GetPRFlagAggregateType<T>>

    /**
     * Group by PRFlag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRFlagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRFlagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRFlagGroupByArgs['orderBy'] }
        : { orderBy?: PRFlagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRFlagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRFlagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRFlag model
   */
  readonly fields: PRFlagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRFlag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRFlagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pr<T extends PRSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PRSubmissionDefaultArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PRFlag model
   */
  interface PRFlagFieldRefs {
    readonly id: FieldRef<"PRFlag", 'String'>
    readonly prId: FieldRef<"PRFlag", 'String'>
    readonly createdByUserId: FieldRef<"PRFlag", 'String'>
    readonly reason: FieldRef<"PRFlag", 'String'>
    readonly createdAt: FieldRef<"PRFlag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PRFlag findUnique
   */
  export type PRFlagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * Filter, which PRFlag to fetch.
     */
    where: PRFlagWhereUniqueInput
  }

  /**
   * PRFlag findUniqueOrThrow
   */
  export type PRFlagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * Filter, which PRFlag to fetch.
     */
    where: PRFlagWhereUniqueInput
  }

  /**
   * PRFlag findFirst
   */
  export type PRFlagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * Filter, which PRFlag to fetch.
     */
    where?: PRFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFlags to fetch.
     */
    orderBy?: PRFlagOrderByWithRelationInput | PRFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRFlags.
     */
    cursor?: PRFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRFlags.
     */
    distinct?: PRFlagScalarFieldEnum | PRFlagScalarFieldEnum[]
  }

  /**
   * PRFlag findFirstOrThrow
   */
  export type PRFlagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * Filter, which PRFlag to fetch.
     */
    where?: PRFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFlags to fetch.
     */
    orderBy?: PRFlagOrderByWithRelationInput | PRFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRFlags.
     */
    cursor?: PRFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFlags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRFlags.
     */
    distinct?: PRFlagScalarFieldEnum | PRFlagScalarFieldEnum[]
  }

  /**
   * PRFlag findMany
   */
  export type PRFlagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * Filter, which PRFlags to fetch.
     */
    where?: PRFlagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRFlags to fetch.
     */
    orderBy?: PRFlagOrderByWithRelationInput | PRFlagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRFlags.
     */
    cursor?: PRFlagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRFlags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRFlags.
     */
    skip?: number
    distinct?: PRFlagScalarFieldEnum | PRFlagScalarFieldEnum[]
  }

  /**
   * PRFlag create
   */
  export type PRFlagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * The data needed to create a PRFlag.
     */
    data: XOR<PRFlagCreateInput, PRFlagUncheckedCreateInput>
  }

  /**
   * PRFlag createMany
   */
  export type PRFlagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRFlags.
     */
    data: PRFlagCreateManyInput | PRFlagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PRFlag createManyAndReturn
   */
  export type PRFlagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * The data used to create many PRFlags.
     */
    data: PRFlagCreateManyInput | PRFlagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRFlag update
   */
  export type PRFlagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * The data needed to update a PRFlag.
     */
    data: XOR<PRFlagUpdateInput, PRFlagUncheckedUpdateInput>
    /**
     * Choose, which PRFlag to update.
     */
    where: PRFlagWhereUniqueInput
  }

  /**
   * PRFlag updateMany
   */
  export type PRFlagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRFlags.
     */
    data: XOR<PRFlagUpdateManyMutationInput, PRFlagUncheckedUpdateManyInput>
    /**
     * Filter which PRFlags to update
     */
    where?: PRFlagWhereInput
    /**
     * Limit how many PRFlags to update.
     */
    limit?: number
  }

  /**
   * PRFlag updateManyAndReturn
   */
  export type PRFlagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * The data used to update PRFlags.
     */
    data: XOR<PRFlagUpdateManyMutationInput, PRFlagUncheckedUpdateManyInput>
    /**
     * Filter which PRFlags to update
     */
    where?: PRFlagWhereInput
    /**
     * Limit how many PRFlags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRFlag upsert
   */
  export type PRFlagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * The filter to search for the PRFlag to update in case it exists.
     */
    where: PRFlagWhereUniqueInput
    /**
     * In case the PRFlag found by the `where` argument doesn't exist, create a new PRFlag with this data.
     */
    create: XOR<PRFlagCreateInput, PRFlagUncheckedCreateInput>
    /**
     * In case the PRFlag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRFlagUpdateInput, PRFlagUncheckedUpdateInput>
  }

  /**
   * PRFlag delete
   */
  export type PRFlagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
    /**
     * Filter which PRFlag to delete.
     */
    where: PRFlagWhereUniqueInput
  }

  /**
   * PRFlag deleteMany
   */
  export type PRFlagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRFlags to delete
     */
    where?: PRFlagWhereInput
    /**
     * Limit how many PRFlags to delete.
     */
    limit?: number
  }

  /**
   * PRFlag without action
   */
  export type PRFlagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRFlag
     */
    select?: PRFlagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRFlag
     */
    omit?: PRFlagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRFlagInclude<ExtArgs> | null
  }


  /**
   * Model Avatar
   */

  export type AggregateAvatar = {
    _count: AvatarCountAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  export type AvatarMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    taken: boolean | null
    takenByUserId: string | null
    takenAt: Date | null
  }

  export type AvatarMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    name: string | null
    taken: boolean | null
    takenByUserId: string | null
    takenAt: Date | null
  }

  export type AvatarCountAggregateOutputType = {
    id: number
    organizationId: number
    name: number
    taken: number
    takenByUserId: number
    takenAt: number
    _all: number
  }


  export type AvatarMinAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    taken?: true
    takenByUserId?: true
    takenAt?: true
  }

  export type AvatarMaxAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    taken?: true
    takenByUserId?: true
    takenAt?: true
  }

  export type AvatarCountAggregateInputType = {
    id?: true
    organizationId?: true
    name?: true
    taken?: true
    takenByUserId?: true
    takenAt?: true
    _all?: true
  }

  export type AvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatar to aggregate.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avatars
    **/
    _count?: true | AvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvatarMaxAggregateInputType
  }

  export type GetAvatarAggregateType<T extends AvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvatar[P]>
      : GetScalarType<T[P], AggregateAvatar[P]>
  }




  export type AvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvatarWhereInput
    orderBy?: AvatarOrderByWithAggregationInput | AvatarOrderByWithAggregationInput[]
    by: AvatarScalarFieldEnum[] | AvatarScalarFieldEnum
    having?: AvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvatarCountAggregateInputType | true
    _min?: AvatarMinAggregateInputType
    _max?: AvatarMaxAggregateInputType
  }

  export type AvatarGroupByOutputType = {
    id: string
    organizationId: string
    name: string
    taken: boolean
    takenByUserId: string | null
    takenAt: Date | null
    _count: AvatarCountAggregateOutputType | null
    _min: AvatarMinAggregateOutputType | null
    _max: AvatarMaxAggregateOutputType | null
  }

  type GetAvatarGroupByPayload<T extends AvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvatarGroupByOutputType[P]>
            : GetScalarType<T[P], AvatarGroupByOutputType[P]>
        }
      >
    >


  export type AvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    taken?: boolean
    takenByUserId?: boolean
    takenAt?: boolean
    user?: boolean | Avatar$userArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    taken?: boolean
    takenByUserId?: boolean
    takenAt?: boolean
    user?: boolean | Avatar$userArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    name?: boolean
    taken?: boolean
    takenByUserId?: boolean
    takenAt?: boolean
    user?: boolean | Avatar$userArgs<ExtArgs>
  }, ExtArgs["result"]["avatar"]>

  export type AvatarSelectScalar = {
    id?: boolean
    organizationId?: boolean
    name?: boolean
    taken?: boolean
    takenByUserId?: boolean
    takenAt?: boolean
  }

  export type AvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "name" | "taken" | "takenByUserId" | "takenAt", ExtArgs["result"]["avatar"]>
  export type AvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Avatar$userArgs<ExtArgs>
  }
  export type AvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Avatar$userArgs<ExtArgs>
  }
  export type AvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Avatar$userArgs<ExtArgs>
  }

  export type $AvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avatar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      name: string
      taken: boolean
      takenByUserId: string | null
      takenAt: Date | null
    }, ExtArgs["result"]["avatar"]>
    composites: {}
  }

  type AvatarGetPayload<S extends boolean | null | undefined | AvatarDefaultArgs> = $Result.GetResult<Prisma.$AvatarPayload, S>

  type AvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvatarCountAggregateInputType | true
    }

  export interface AvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avatar'], meta: { name: 'Avatar' } }
    /**
     * Find zero or one Avatar that matches the filter.
     * @param {AvatarFindUniqueArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvatarFindUniqueArgs>(args: SelectSubset<T, AvatarFindUniqueArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvatarFindUniqueOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, AvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvatarFindFirstArgs>(args?: SelectSubset<T, AvatarFindFirstArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindFirstOrThrowArgs} args - Arguments to find a Avatar
     * @example
     * // Get one Avatar
     * const avatar = await prisma.avatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, AvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avatars
     * const avatars = await prisma.avatar.findMany()
     * 
     * // Get first 10 Avatars
     * const avatars = await prisma.avatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avatarWithIdOnly = await prisma.avatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvatarFindManyArgs>(args?: SelectSubset<T, AvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avatar.
     * @param {AvatarCreateArgs} args - Arguments to create a Avatar.
     * @example
     * // Create one Avatar
     * const Avatar = await prisma.avatar.create({
     *   data: {
     *     // ... data to create a Avatar
     *   }
     * })
     * 
     */
    create<T extends AvatarCreateArgs>(args: SelectSubset<T, AvatarCreateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avatars.
     * @param {AvatarCreateManyArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvatarCreateManyArgs>(args?: SelectSubset<T, AvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avatars and returns the data saved in the database.
     * @param {AvatarCreateManyAndReturnArgs} args - Arguments to create many Avatars.
     * @example
     * // Create many Avatars
     * const avatar = await prisma.avatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, AvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avatar.
     * @param {AvatarDeleteArgs} args - Arguments to delete one Avatar.
     * @example
     * // Delete one Avatar
     * const Avatar = await prisma.avatar.delete({
     *   where: {
     *     // ... filter to delete one Avatar
     *   }
     * })
     * 
     */
    delete<T extends AvatarDeleteArgs>(args: SelectSubset<T, AvatarDeleteArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avatar.
     * @param {AvatarUpdateArgs} args - Arguments to update one Avatar.
     * @example
     * // Update one Avatar
     * const avatar = await prisma.avatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvatarUpdateArgs>(args: SelectSubset<T, AvatarUpdateArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avatars.
     * @param {AvatarDeleteManyArgs} args - Arguments to filter Avatars to delete.
     * @example
     * // Delete a few Avatars
     * const { count } = await prisma.avatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvatarDeleteManyArgs>(args?: SelectSubset<T, AvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvatarUpdateManyArgs>(args: SelectSubset<T, AvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avatars and returns the data updated in the database.
     * @param {AvatarUpdateManyAndReturnArgs} args - Arguments to update many Avatars.
     * @example
     * // Update many Avatars
     * const avatar = await prisma.avatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avatars and only return the `id`
     * const avatarWithIdOnly = await prisma.avatar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, AvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avatar.
     * @param {AvatarUpsertArgs} args - Arguments to update or create a Avatar.
     * @example
     * // Update or create a Avatar
     * const avatar = await prisma.avatar.upsert({
     *   create: {
     *     // ... data to create a Avatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avatar we want to update
     *   }
     * })
     */
    upsert<T extends AvatarUpsertArgs>(args: SelectSubset<T, AvatarUpsertArgs<ExtArgs>>): Prisma__AvatarClient<$Result.GetResult<Prisma.$AvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarCountArgs} args - Arguments to filter Avatars to count.
     * @example
     * // Count the number of Avatars
     * const count = await prisma.avatar.count({
     *   where: {
     *     // ... the filter for the Avatars we want to count
     *   }
     * })
    **/
    count<T extends AvatarCountArgs>(
      args?: Subset<T, AvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvatarAggregateArgs>(args: Subset<T, AvatarAggregateArgs>): Prisma.PrismaPromise<GetAvatarAggregateType<T>>

    /**
     * Group by Avatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvatarGroupByArgs['orderBy'] }
        : { orderBy?: AvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avatar model
   */
  readonly fields: AvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Avatar$userArgs<ExtArgs> = {}>(args?: Subset<T, Avatar$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avatar model
   */
  interface AvatarFieldRefs {
    readonly id: FieldRef<"Avatar", 'String'>
    readonly organizationId: FieldRef<"Avatar", 'String'>
    readonly name: FieldRef<"Avatar", 'String'>
    readonly taken: FieldRef<"Avatar", 'Boolean'>
    readonly takenByUserId: FieldRef<"Avatar", 'String'>
    readonly takenAt: FieldRef<"Avatar", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avatar findUnique
   */
  export type AvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findUniqueOrThrow
   */
  export type AvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar findFirst
   */
  export type AvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findFirstOrThrow
   */
  export type AvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatar to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avatars.
     */
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar findMany
   */
  export type AvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter, which Avatars to fetch.
     */
    where?: AvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avatars to fetch.
     */
    orderBy?: AvatarOrderByWithRelationInput | AvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avatars.
     */
    cursor?: AvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avatars.
     */
    skip?: number
    distinct?: AvatarScalarFieldEnum | AvatarScalarFieldEnum[]
  }

  /**
   * Avatar create
   */
  export type AvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a Avatar.
     */
    data: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
  }

  /**
   * Avatar createMany
   */
  export type AvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avatar createManyAndReturn
   */
  export type AvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to create many Avatars.
     */
    data: AvatarCreateManyInput | AvatarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar update
   */
  export type AvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a Avatar.
     */
    data: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
    /**
     * Choose, which Avatar to update.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar updateMany
   */
  export type AvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
  }

  /**
   * Avatar updateManyAndReturn
   */
  export type AvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * The data used to update Avatars.
     */
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyInput>
    /**
     * Filter which Avatars to update
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avatar upsert
   */
  export type AvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the Avatar to update in case it exists.
     */
    where: AvatarWhereUniqueInput
    /**
     * In case the Avatar found by the `where` argument doesn't exist, create a new Avatar with this data.
     */
    create: XOR<AvatarCreateInput, AvatarUncheckedCreateInput>
    /**
     * In case the Avatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvatarUpdateInput, AvatarUncheckedUpdateInput>
  }

  /**
   * Avatar delete
   */
  export type AvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
    /**
     * Filter which Avatar to delete.
     */
    where: AvatarWhereUniqueInput
  }

  /**
   * Avatar deleteMany
   */
  export type AvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avatars to delete
     */
    where?: AvatarWhereInput
    /**
     * Limit how many Avatars to delete.
     */
    limit?: number
  }

  /**
   * Avatar.user
   */
  export type Avatar$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Avatar without action
   */
  export type AvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avatar
     */
    select?: AvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avatar
     */
    omit?: AvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvatarInclude<ExtArgs> | null
  }


  /**
   * Model PRAuditLog
   */

  export type AggregatePRAuditLog = {
    _count: PRAuditLogCountAggregateOutputType | null
    _min: PRAuditLogMinAggregateOutputType | null
    _max: PRAuditLogMaxAggregateOutputType | null
  }

  export type PRAuditLogMinAggregateOutputType = {
    id: string | null
    prId: string | null
    actorUserId: string | null
    action: string | null
    fromStatus: $Enums.PRStatus | null
    toStatus: $Enums.PRStatus | null
    createdAt: Date | null
  }

  export type PRAuditLogMaxAggregateOutputType = {
    id: string | null
    prId: string | null
    actorUserId: string | null
    action: string | null
    fromStatus: $Enums.PRStatus | null
    toStatus: $Enums.PRStatus | null
    createdAt: Date | null
  }

  export type PRAuditLogCountAggregateOutputType = {
    id: number
    prId: number
    actorUserId: number
    action: number
    fromStatus: number
    toStatus: number
    data: number
    createdAt: number
    _all: number
  }


  export type PRAuditLogMinAggregateInputType = {
    id?: true
    prId?: true
    actorUserId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    createdAt?: true
  }

  export type PRAuditLogMaxAggregateInputType = {
    id?: true
    prId?: true
    actorUserId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    createdAt?: true
  }

  export type PRAuditLogCountAggregateInputType = {
    id?: true
    prId?: true
    actorUserId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    data?: true
    createdAt?: true
    _all?: true
  }

  export type PRAuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRAuditLog to aggregate.
     */
    where?: PRAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRAuditLogs to fetch.
     */
    orderBy?: PRAuditLogOrderByWithRelationInput | PRAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRAuditLogs
    **/
    _count?: true | PRAuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRAuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRAuditLogMaxAggregateInputType
  }

  export type GetPRAuditLogAggregateType<T extends PRAuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePRAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRAuditLog[P]>
      : GetScalarType<T[P], AggregatePRAuditLog[P]>
  }




  export type PRAuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRAuditLogWhereInput
    orderBy?: PRAuditLogOrderByWithAggregationInput | PRAuditLogOrderByWithAggregationInput[]
    by: PRAuditLogScalarFieldEnum[] | PRAuditLogScalarFieldEnum
    having?: PRAuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRAuditLogCountAggregateInputType | true
    _min?: PRAuditLogMinAggregateInputType
    _max?: PRAuditLogMaxAggregateInputType
  }

  export type PRAuditLogGroupByOutputType = {
    id: string
    prId: string
    actorUserId: string | null
    action: string
    fromStatus: $Enums.PRStatus | null
    toStatus: $Enums.PRStatus | null
    data: JsonValue | null
    createdAt: Date
    _count: PRAuditLogCountAggregateOutputType | null
    _min: PRAuditLogMinAggregateOutputType | null
    _max: PRAuditLogMaxAggregateOutputType | null
  }

  type GetPRAuditLogGroupByPayload<T extends PRAuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRAuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRAuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRAuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], PRAuditLogGroupByOutputType[P]>
        }
      >
    >


  export type PRAuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    actorUserId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    data?: boolean
    createdAt?: boolean
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    actor?: boolean | PRAuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["pRAuditLog"]>

  export type PRAuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    actorUserId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    data?: boolean
    createdAt?: boolean
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    actor?: boolean | PRAuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["pRAuditLog"]>

  export type PRAuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prId?: boolean
    actorUserId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    data?: boolean
    createdAt?: boolean
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    actor?: boolean | PRAuditLog$actorArgs<ExtArgs>
  }, ExtArgs["result"]["pRAuditLog"]>

  export type PRAuditLogSelectScalar = {
    id?: boolean
    prId?: boolean
    actorUserId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    data?: boolean
    createdAt?: boolean
  }

  export type PRAuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prId" | "actorUserId" | "action" | "fromStatus" | "toStatus" | "data" | "createdAt", ExtArgs["result"]["pRAuditLog"]>
  export type PRAuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    actor?: boolean | PRAuditLog$actorArgs<ExtArgs>
  }
  export type PRAuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    actor?: boolean | PRAuditLog$actorArgs<ExtArgs>
  }
  export type PRAuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pr?: boolean | PRSubmissionDefaultArgs<ExtArgs>
    actor?: boolean | PRAuditLog$actorArgs<ExtArgs>
  }

  export type $PRAuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRAuditLog"
    objects: {
      pr: Prisma.$PRSubmissionPayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prId: string
      actorUserId: string | null
      action: string
      fromStatus: $Enums.PRStatus | null
      toStatus: $Enums.PRStatus | null
      data: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["pRAuditLog"]>
    composites: {}
  }

  type PRAuditLogGetPayload<S extends boolean | null | undefined | PRAuditLogDefaultArgs> = $Result.GetResult<Prisma.$PRAuditLogPayload, S>

  type PRAuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PRAuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PRAuditLogCountAggregateInputType | true
    }

  export interface PRAuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRAuditLog'], meta: { name: 'PRAuditLog' } }
    /**
     * Find zero or one PRAuditLog that matches the filter.
     * @param {PRAuditLogFindUniqueArgs} args - Arguments to find a PRAuditLog
     * @example
     * // Get one PRAuditLog
     * const pRAuditLog = await prisma.pRAuditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PRAuditLogFindUniqueArgs>(args: SelectSubset<T, PRAuditLogFindUniqueArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PRAuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PRAuditLogFindUniqueOrThrowArgs} args - Arguments to find a PRAuditLog
     * @example
     * // Get one PRAuditLog
     * const pRAuditLog = await prisma.pRAuditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PRAuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PRAuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRAuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogFindFirstArgs} args - Arguments to find a PRAuditLog
     * @example
     * // Get one PRAuditLog
     * const pRAuditLog = await prisma.pRAuditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PRAuditLogFindFirstArgs>(args?: SelectSubset<T, PRAuditLogFindFirstArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PRAuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogFindFirstOrThrowArgs} args - Arguments to find a PRAuditLog
     * @example
     * // Get one PRAuditLog
     * const pRAuditLog = await prisma.pRAuditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PRAuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PRAuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PRAuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRAuditLogs
     * const pRAuditLogs = await prisma.pRAuditLog.findMany()
     * 
     * // Get first 10 PRAuditLogs
     * const pRAuditLogs = await prisma.pRAuditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRAuditLogWithIdOnly = await prisma.pRAuditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PRAuditLogFindManyArgs>(args?: SelectSubset<T, PRAuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PRAuditLog.
     * @param {PRAuditLogCreateArgs} args - Arguments to create a PRAuditLog.
     * @example
     * // Create one PRAuditLog
     * const PRAuditLog = await prisma.pRAuditLog.create({
     *   data: {
     *     // ... data to create a PRAuditLog
     *   }
     * })
     * 
     */
    create<T extends PRAuditLogCreateArgs>(args: SelectSubset<T, PRAuditLogCreateArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PRAuditLogs.
     * @param {PRAuditLogCreateManyArgs} args - Arguments to create many PRAuditLogs.
     * @example
     * // Create many PRAuditLogs
     * const pRAuditLog = await prisma.pRAuditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PRAuditLogCreateManyArgs>(args?: SelectSubset<T, PRAuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PRAuditLogs and returns the data saved in the database.
     * @param {PRAuditLogCreateManyAndReturnArgs} args - Arguments to create many PRAuditLogs.
     * @example
     * // Create many PRAuditLogs
     * const pRAuditLog = await prisma.pRAuditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PRAuditLogs and only return the `id`
     * const pRAuditLogWithIdOnly = await prisma.pRAuditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PRAuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PRAuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PRAuditLog.
     * @param {PRAuditLogDeleteArgs} args - Arguments to delete one PRAuditLog.
     * @example
     * // Delete one PRAuditLog
     * const PRAuditLog = await prisma.pRAuditLog.delete({
     *   where: {
     *     // ... filter to delete one PRAuditLog
     *   }
     * })
     * 
     */
    delete<T extends PRAuditLogDeleteArgs>(args: SelectSubset<T, PRAuditLogDeleteArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PRAuditLog.
     * @param {PRAuditLogUpdateArgs} args - Arguments to update one PRAuditLog.
     * @example
     * // Update one PRAuditLog
     * const pRAuditLog = await prisma.pRAuditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PRAuditLogUpdateArgs>(args: SelectSubset<T, PRAuditLogUpdateArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PRAuditLogs.
     * @param {PRAuditLogDeleteManyArgs} args - Arguments to filter PRAuditLogs to delete.
     * @example
     * // Delete a few PRAuditLogs
     * const { count } = await prisma.pRAuditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PRAuditLogDeleteManyArgs>(args?: SelectSubset<T, PRAuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRAuditLogs
     * const pRAuditLog = await prisma.pRAuditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PRAuditLogUpdateManyArgs>(args: SelectSubset<T, PRAuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRAuditLogs and returns the data updated in the database.
     * @param {PRAuditLogUpdateManyAndReturnArgs} args - Arguments to update many PRAuditLogs.
     * @example
     * // Update many PRAuditLogs
     * const pRAuditLog = await prisma.pRAuditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PRAuditLogs and only return the `id`
     * const pRAuditLogWithIdOnly = await prisma.pRAuditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PRAuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, PRAuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PRAuditLog.
     * @param {PRAuditLogUpsertArgs} args - Arguments to update or create a PRAuditLog.
     * @example
     * // Update or create a PRAuditLog
     * const pRAuditLog = await prisma.pRAuditLog.upsert({
     *   create: {
     *     // ... data to create a PRAuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRAuditLog we want to update
     *   }
     * })
     */
    upsert<T extends PRAuditLogUpsertArgs>(args: SelectSubset<T, PRAuditLogUpsertArgs<ExtArgs>>): Prisma__PRAuditLogClient<$Result.GetResult<Prisma.$PRAuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PRAuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogCountArgs} args - Arguments to filter PRAuditLogs to count.
     * @example
     * // Count the number of PRAuditLogs
     * const count = await prisma.pRAuditLog.count({
     *   where: {
     *     // ... the filter for the PRAuditLogs we want to count
     *   }
     * })
    **/
    count<T extends PRAuditLogCountArgs>(
      args?: Subset<T, PRAuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRAuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PRAuditLogAggregateArgs>(args: Subset<T, PRAuditLogAggregateArgs>): Prisma.PrismaPromise<GetPRAuditLogAggregateType<T>>

    /**
     * Group by PRAuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRAuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PRAuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRAuditLogGroupByArgs['orderBy'] }
        : { orderBy?: PRAuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PRAuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRAuditLog model
   */
  readonly fields: PRAuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRAuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRAuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pr<T extends PRSubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PRSubmissionDefaultArgs<ExtArgs>>): Prisma__PRSubmissionClient<$Result.GetResult<Prisma.$PRSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends PRAuditLog$actorArgs<ExtArgs> = {}>(args?: Subset<T, PRAuditLog$actorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PRAuditLog model
   */
  interface PRAuditLogFieldRefs {
    readonly id: FieldRef<"PRAuditLog", 'String'>
    readonly prId: FieldRef<"PRAuditLog", 'String'>
    readonly actorUserId: FieldRef<"PRAuditLog", 'String'>
    readonly action: FieldRef<"PRAuditLog", 'String'>
    readonly fromStatus: FieldRef<"PRAuditLog", 'PRStatus'>
    readonly toStatus: FieldRef<"PRAuditLog", 'PRStatus'>
    readonly data: FieldRef<"PRAuditLog", 'Json'>
    readonly createdAt: FieldRef<"PRAuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PRAuditLog findUnique
   */
  export type PRAuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PRAuditLog to fetch.
     */
    where: PRAuditLogWhereUniqueInput
  }

  /**
   * PRAuditLog findUniqueOrThrow
   */
  export type PRAuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PRAuditLog to fetch.
     */
    where: PRAuditLogWhereUniqueInput
  }

  /**
   * PRAuditLog findFirst
   */
  export type PRAuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PRAuditLog to fetch.
     */
    where?: PRAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRAuditLogs to fetch.
     */
    orderBy?: PRAuditLogOrderByWithRelationInput | PRAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRAuditLogs.
     */
    cursor?: PRAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRAuditLogs.
     */
    distinct?: PRAuditLogScalarFieldEnum | PRAuditLogScalarFieldEnum[]
  }

  /**
   * PRAuditLog findFirstOrThrow
   */
  export type PRAuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PRAuditLog to fetch.
     */
    where?: PRAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRAuditLogs to fetch.
     */
    orderBy?: PRAuditLogOrderByWithRelationInput | PRAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRAuditLogs.
     */
    cursor?: PRAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRAuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRAuditLogs.
     */
    distinct?: PRAuditLogScalarFieldEnum | PRAuditLogScalarFieldEnum[]
  }

  /**
   * PRAuditLog findMany
   */
  export type PRAuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * Filter, which PRAuditLogs to fetch.
     */
    where?: PRAuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRAuditLogs to fetch.
     */
    orderBy?: PRAuditLogOrderByWithRelationInput | PRAuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRAuditLogs.
     */
    cursor?: PRAuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRAuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRAuditLogs.
     */
    skip?: number
    distinct?: PRAuditLogScalarFieldEnum | PRAuditLogScalarFieldEnum[]
  }

  /**
   * PRAuditLog create
   */
  export type PRAuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a PRAuditLog.
     */
    data: XOR<PRAuditLogCreateInput, PRAuditLogUncheckedCreateInput>
  }

  /**
   * PRAuditLog createMany
   */
  export type PRAuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRAuditLogs.
     */
    data: PRAuditLogCreateManyInput | PRAuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PRAuditLog createManyAndReturn
   */
  export type PRAuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many PRAuditLogs.
     */
    data: PRAuditLogCreateManyInput | PRAuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRAuditLog update
   */
  export type PRAuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a PRAuditLog.
     */
    data: XOR<PRAuditLogUpdateInput, PRAuditLogUncheckedUpdateInput>
    /**
     * Choose, which PRAuditLog to update.
     */
    where: PRAuditLogWhereUniqueInput
  }

  /**
   * PRAuditLog updateMany
   */
  export type PRAuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRAuditLogs.
     */
    data: XOR<PRAuditLogUpdateManyMutationInput, PRAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which PRAuditLogs to update
     */
    where?: PRAuditLogWhereInput
    /**
     * Limit how many PRAuditLogs to update.
     */
    limit?: number
  }

  /**
   * PRAuditLog updateManyAndReturn
   */
  export type PRAuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * The data used to update PRAuditLogs.
     */
    data: XOR<PRAuditLogUpdateManyMutationInput, PRAuditLogUncheckedUpdateManyInput>
    /**
     * Filter which PRAuditLogs to update
     */
    where?: PRAuditLogWhereInput
    /**
     * Limit how many PRAuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PRAuditLog upsert
   */
  export type PRAuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the PRAuditLog to update in case it exists.
     */
    where: PRAuditLogWhereUniqueInput
    /**
     * In case the PRAuditLog found by the `where` argument doesn't exist, create a new PRAuditLog with this data.
     */
    create: XOR<PRAuditLogCreateInput, PRAuditLogUncheckedCreateInput>
    /**
     * In case the PRAuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRAuditLogUpdateInput, PRAuditLogUncheckedUpdateInput>
  }

  /**
   * PRAuditLog delete
   */
  export type PRAuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
    /**
     * Filter which PRAuditLog to delete.
     */
    where: PRAuditLogWhereUniqueInput
  }

  /**
   * PRAuditLog deleteMany
   */
  export type PRAuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRAuditLogs to delete
     */
    where?: PRAuditLogWhereInput
    /**
     * Limit how many PRAuditLogs to delete.
     */
    limit?: number
  }

  /**
   * PRAuditLog.actor
   */
  export type PRAuditLog$actorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PRAuditLog without action
   */
  export type PRAuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRAuditLog
     */
    select?: PRAuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PRAuditLog
     */
    omit?: PRAuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PRAuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ActivationCodeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    organizationId: 'organizationId',
    issuedByUserId: 'issuedByUserId',
    usedByUserId: 'usedByUserId',
    usedAt: 'usedAt',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type ActivationCodeScalarFieldEnum = (typeof ActivationCodeScalarFieldEnum)[keyof typeof ActivationCodeScalarFieldEnum]


  export const JoinRequestScalarFieldEnum: {
    id: 'id',
    email: 'email',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type JoinRequestScalarFieldEnum = (typeof JoinRequestScalarFieldEnum)[keyof typeof JoinRequestScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expiresAt: 'expiresAt',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    userId: 'userId'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    accountId: 'accountId',
    providerId: 'providerId',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    idToken: 'idToken',
    accessTokenExpiresAt: 'accessTokenExpiresAt',
    refreshTokenExpiresAt: 'refreshTokenExpiresAt',
    scope: 'scope',
    password: 'password',
    userId: 'userId'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    linkedinUrl: 'linkedinUrl',
    githubUrl: 'githubUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const VerificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    identifier: 'identifier',
    value: 'value',
    expiresAt: 'expiresAt'
  };

  export type VerificationScalarFieldEnum = (typeof VerificationScalarFieldEnum)[keyof typeof VerificationScalarFieldEnum]


  export const PRSubmissionScalarFieldEnum: {
    id: 'id',
    url: 'url',
    title: 'title',
    author: 'author',
    submitter: 'submitter',
    status: 'status',
    mentorId: 'mentorId',
    claimedAt: 'claimedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PRSubmissionScalarFieldEnum = (typeof PRSubmissionScalarFieldEnum)[keyof typeof PRSubmissionScalarFieldEnum]


  export const PRFlagScalarFieldEnum: {
    id: 'id',
    prId: 'prId',
    createdByUserId: 'createdByUserId',
    reason: 'reason',
    createdAt: 'createdAt'
  };

  export type PRFlagScalarFieldEnum = (typeof PRFlagScalarFieldEnum)[keyof typeof PRFlagScalarFieldEnum]


  export const AvatarScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    name: 'name',
    taken: 'taken',
    takenByUserId: 'takenByUserId',
    takenAt: 'takenAt'
  };

  export type AvatarScalarFieldEnum = (typeof AvatarScalarFieldEnum)[keyof typeof AvatarScalarFieldEnum]


  export const PRAuditLogScalarFieldEnum: {
    id: 'id',
    prId: 'prId',
    actorUserId: 'actorUserId',
    action: 'action',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    data: 'data',
    createdAt: 'createdAt'
  };

  export type PRAuditLogScalarFieldEnum = (typeof PRAuditLogScalarFieldEnum)[keyof typeof PRAuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ActivationCodeType'
   */
  export type EnumActivationCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivationCodeType'>
    


  /**
   * Reference to a field of type 'ActivationCodeType[]'
   */
  export type ListEnumActivationCodeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ActivationCodeType[]'>
    


  /**
   * Reference to a field of type 'PRStatus'
   */
  export type EnumPRStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRStatus'>
    


  /**
   * Reference to a field of type 'PRStatus[]'
   */
  export type ListEnumPRStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    prFlagsCreated?: PRFlagListRelationFilter
    mentoredPRs?: PRSubmissionListRelationFilter
    actedAuditLogs?: PRAuditLogListRelationFilter
    avatars?: AvatarListRelationFilter
    issuedCodes?: ActivationCodeListRelationFilter
    usedCodes?: ActivationCodeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    sessions?: SessionOrderByRelationAggregateInput
    accounts?: AccountOrderByRelationAggregateInput
    profile?: ProfileOrderByWithRelationInput
    prFlagsCreated?: PRFlagOrderByRelationAggregateInput
    mentoredPRs?: PRSubmissionOrderByRelationAggregateInput
    actedAuditLogs?: PRAuditLogOrderByRelationAggregateInput
    avatars?: AvatarOrderByRelationAggregateInput
    issuedCodes?: ActivationCodeOrderByRelationAggregateInput
    usedCodes?: ActivationCodeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringFilter<"User"> | string
    emailVerified?: BoolFilter<"User"> | boolean
    image?: StringNullableFilter<"User"> | string | null
    sessions?: SessionListRelationFilter
    accounts?: AccountListRelationFilter
    profile?: XOR<ProfileNullableScalarRelationFilter, ProfileWhereInput> | null
    prFlagsCreated?: PRFlagListRelationFilter
    mentoredPRs?: PRSubmissionListRelationFilter
    actedAuditLogs?: PRAuditLogListRelationFilter
    avatars?: AvatarListRelationFilter
    issuedCodes?: ActivationCodeListRelationFilter
    usedCodes?: ActivationCodeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ActivationCodeWhereInput = {
    AND?: ActivationCodeWhereInput | ActivationCodeWhereInput[]
    OR?: ActivationCodeWhereInput[]
    NOT?: ActivationCodeWhereInput | ActivationCodeWhereInput[]
    id?: StringFilter<"ActivationCode"> | string
    code?: StringFilter<"ActivationCode"> | string
    type?: EnumActivationCodeTypeFilter<"ActivationCode"> | $Enums.ActivationCodeType
    organizationId?: StringFilter<"ActivationCode"> | string
    issuedByUserId?: StringNullableFilter<"ActivationCode"> | string | null
    usedByUserId?: StringNullableFilter<"ActivationCode"> | string | null
    usedAt?: DateTimeNullableFilter<"ActivationCode"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ActivationCode"> | Date | string | null
    createdAt?: DateTimeFilter<"ActivationCode"> | Date | string
    issuedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    usedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type ActivationCodeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    organizationId?: SortOrder
    issuedByUserId?: SortOrderInput | SortOrder
    usedByUserId?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    issuedByUser?: UserOrderByWithRelationInput
    usedByUser?: UserOrderByWithRelationInput
  }

  export type ActivationCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ActivationCodeWhereInput | ActivationCodeWhereInput[]
    OR?: ActivationCodeWhereInput[]
    NOT?: ActivationCodeWhereInput | ActivationCodeWhereInput[]
    type?: EnumActivationCodeTypeFilter<"ActivationCode"> | $Enums.ActivationCodeType
    organizationId?: StringFilter<"ActivationCode"> | string
    issuedByUserId?: StringNullableFilter<"ActivationCode"> | string | null
    usedByUserId?: StringNullableFilter<"ActivationCode"> | string | null
    usedAt?: DateTimeNullableFilter<"ActivationCode"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ActivationCode"> | Date | string | null
    createdAt?: DateTimeFilter<"ActivationCode"> | Date | string
    issuedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    usedByUser?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "code">

  export type ActivationCodeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    organizationId?: SortOrder
    issuedByUserId?: SortOrderInput | SortOrder
    usedByUserId?: SortOrderInput | SortOrder
    usedAt?: SortOrderInput | SortOrder
    expiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ActivationCodeCountOrderByAggregateInput
    _max?: ActivationCodeMaxOrderByAggregateInput
    _min?: ActivationCodeMinOrderByAggregateInput
  }

  export type ActivationCodeScalarWhereWithAggregatesInput = {
    AND?: ActivationCodeScalarWhereWithAggregatesInput | ActivationCodeScalarWhereWithAggregatesInput[]
    OR?: ActivationCodeScalarWhereWithAggregatesInput[]
    NOT?: ActivationCodeScalarWhereWithAggregatesInput | ActivationCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ActivationCode"> | string
    code?: StringWithAggregatesFilter<"ActivationCode"> | string
    type?: EnumActivationCodeTypeWithAggregatesFilter<"ActivationCode"> | $Enums.ActivationCodeType
    organizationId?: StringWithAggregatesFilter<"ActivationCode"> | string
    issuedByUserId?: StringNullableWithAggregatesFilter<"ActivationCode"> | string | null
    usedByUserId?: StringNullableWithAggregatesFilter<"ActivationCode"> | string | null
    usedAt?: DateTimeNullableWithAggregatesFilter<"ActivationCode"> | Date | string | null
    expiresAt?: DateTimeNullableWithAggregatesFilter<"ActivationCode"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivationCode"> | Date | string
  }

  export type JoinRequestWhereInput = {
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    id?: StringFilter<"JoinRequest"> | string
    email?: StringFilter<"JoinRequest"> | string
    note?: StringNullableFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
  }

  export type JoinRequestOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JoinRequestWhereInput | JoinRequestWhereInput[]
    OR?: JoinRequestWhereInput[]
    NOT?: JoinRequestWhereInput | JoinRequestWhereInput[]
    email?: StringFilter<"JoinRequest"> | string
    note?: StringNullableFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeFilter<"JoinRequest"> | Date | string
  }, "id">

  export type JoinRequestOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JoinRequestCountOrderByAggregateInput
    _max?: JoinRequestMaxOrderByAggregateInput
    _min?: JoinRequestMinOrderByAggregateInput
  }

  export type JoinRequestScalarWhereWithAggregatesInput = {
    AND?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    OR?: JoinRequestScalarWhereWithAggregatesInput[]
    NOT?: JoinRequestScalarWhereWithAggregatesInput | JoinRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JoinRequest"> | string
    email?: StringWithAggregatesFilter<"JoinRequest"> | string
    note?: StringNullableWithAggregatesFilter<"JoinRequest"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JoinRequest"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    token?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userId?: StringWithAggregatesFilter<"Session"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    idToken?: SortOrderInput | SortOrder
    accessTokenExpiresAt?: SortOrderInput | SortOrder
    refreshTokenExpiresAt?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    accountId?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    idToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    userId?: StringWithAggregatesFilter<"Account"> | string
  }

  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    userId?: StringFilter<"Profile"> | string
    name?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableFilter<"Profile"> | string | null
    githubUrl?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    name?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    avatarUrl?: StringNullableFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableFilter<"Profile"> | string | null
    githubUrl?: StringNullableFilter<"Profile"> | string | null
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    userId?: StringWithAggregatesFilter<"Profile"> | string
    name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    linkedinUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type VerificationWhereInput = {
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    id?: StringFilter<"Verification"> | string
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
  }

  export type VerificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
  }

  export type VerificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationWhereInput | VerificationWhereInput[]
    OR?: VerificationWhereInput[]
    NOT?: VerificationWhereInput | VerificationWhereInput[]
    createdAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Verification"> | Date | string | null
    identifier?: StringFilter<"Verification"> | string
    value?: StringFilter<"Verification"> | string
    expiresAt?: DateTimeFilter<"Verification"> | Date | string
  }, "id">

  export type VerificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
    _count?: VerificationCountOrderByAggregateInput
    _max?: VerificationMaxOrderByAggregateInput
    _min?: VerificationMinOrderByAggregateInput
  }

  export type VerificationScalarWhereWithAggregatesInput = {
    AND?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    OR?: VerificationScalarWhereWithAggregatesInput[]
    NOT?: VerificationScalarWhereWithAggregatesInput | VerificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Verification"> | string
    createdAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Verification"> | Date | string | null
    identifier?: StringWithAggregatesFilter<"Verification"> | string
    value?: StringWithAggregatesFilter<"Verification"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Verification"> | Date | string
  }

  export type PRSubmissionWhereInput = {
    AND?: PRSubmissionWhereInput | PRSubmissionWhereInput[]
    OR?: PRSubmissionWhereInput[]
    NOT?: PRSubmissionWhereInput | PRSubmissionWhereInput[]
    id?: StringFilter<"PRSubmission"> | string
    url?: StringFilter<"PRSubmission"> | string
    title?: StringNullableFilter<"PRSubmission"> | string | null
    author?: StringNullableFilter<"PRSubmission"> | string | null
    submitter?: StringNullableFilter<"PRSubmission"> | string | null
    status?: EnumPRStatusFilter<"PRSubmission"> | $Enums.PRStatus
    mentorId?: StringNullableFilter<"PRSubmission"> | string | null
    claimedAt?: DateTimeNullableFilter<"PRSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"PRSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"PRSubmission"> | Date | string
    mentor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    flags?: PRFlagListRelationFilter
    audits?: PRAuditLogListRelationFilter
  }

  export type PRSubmissionOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    submitter?: SortOrderInput | SortOrder
    status?: SortOrder
    mentorId?: SortOrderInput | SortOrder
    claimedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mentor?: UserOrderByWithRelationInput
    flags?: PRFlagOrderByRelationAggregateInput
    audits?: PRAuditLogOrderByRelationAggregateInput
  }

  export type PRSubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PRSubmissionWhereInput | PRSubmissionWhereInput[]
    OR?: PRSubmissionWhereInput[]
    NOT?: PRSubmissionWhereInput | PRSubmissionWhereInput[]
    url?: StringFilter<"PRSubmission"> | string
    title?: StringNullableFilter<"PRSubmission"> | string | null
    author?: StringNullableFilter<"PRSubmission"> | string | null
    submitter?: StringNullableFilter<"PRSubmission"> | string | null
    status?: EnumPRStatusFilter<"PRSubmission"> | $Enums.PRStatus
    mentorId?: StringNullableFilter<"PRSubmission"> | string | null
    claimedAt?: DateTimeNullableFilter<"PRSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"PRSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"PRSubmission"> | Date | string
    mentor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    flags?: PRFlagListRelationFilter
    audits?: PRAuditLogListRelationFilter
  }, "id">

  export type PRSubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrderInput | SortOrder
    author?: SortOrderInput | SortOrder
    submitter?: SortOrderInput | SortOrder
    status?: SortOrder
    mentorId?: SortOrderInput | SortOrder
    claimedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PRSubmissionCountOrderByAggregateInput
    _max?: PRSubmissionMaxOrderByAggregateInput
    _min?: PRSubmissionMinOrderByAggregateInput
  }

  export type PRSubmissionScalarWhereWithAggregatesInput = {
    AND?: PRSubmissionScalarWhereWithAggregatesInput | PRSubmissionScalarWhereWithAggregatesInput[]
    OR?: PRSubmissionScalarWhereWithAggregatesInput[]
    NOT?: PRSubmissionScalarWhereWithAggregatesInput | PRSubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PRSubmission"> | string
    url?: StringWithAggregatesFilter<"PRSubmission"> | string
    title?: StringNullableWithAggregatesFilter<"PRSubmission"> | string | null
    author?: StringNullableWithAggregatesFilter<"PRSubmission"> | string | null
    submitter?: StringNullableWithAggregatesFilter<"PRSubmission"> | string | null
    status?: EnumPRStatusWithAggregatesFilter<"PRSubmission"> | $Enums.PRStatus
    mentorId?: StringNullableWithAggregatesFilter<"PRSubmission"> | string | null
    claimedAt?: DateTimeNullableWithAggregatesFilter<"PRSubmission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PRSubmission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PRSubmission"> | Date | string
  }

  export type PRFlagWhereInput = {
    AND?: PRFlagWhereInput | PRFlagWhereInput[]
    OR?: PRFlagWhereInput[]
    NOT?: PRFlagWhereInput | PRFlagWhereInput[]
    id?: StringFilter<"PRFlag"> | string
    prId?: StringFilter<"PRFlag"> | string
    createdByUserId?: StringFilter<"PRFlag"> | string
    reason?: StringFilter<"PRFlag"> | string
    createdAt?: DateTimeFilter<"PRFlag"> | Date | string
    pr?: XOR<PRSubmissionScalarRelationFilter, PRSubmissionWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PRFlagOrderByWithRelationInput = {
    id?: SortOrder
    prId?: SortOrder
    createdByUserId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    pr?: PRSubmissionOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type PRFlagWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PRFlagWhereInput | PRFlagWhereInput[]
    OR?: PRFlagWhereInput[]
    NOT?: PRFlagWhereInput | PRFlagWhereInput[]
    prId?: StringFilter<"PRFlag"> | string
    createdByUserId?: StringFilter<"PRFlag"> | string
    reason?: StringFilter<"PRFlag"> | string
    createdAt?: DateTimeFilter<"PRFlag"> | Date | string
    pr?: XOR<PRSubmissionScalarRelationFilter, PRSubmissionWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PRFlagOrderByWithAggregationInput = {
    id?: SortOrder
    prId?: SortOrder
    createdByUserId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    _count?: PRFlagCountOrderByAggregateInput
    _max?: PRFlagMaxOrderByAggregateInput
    _min?: PRFlagMinOrderByAggregateInput
  }

  export type PRFlagScalarWhereWithAggregatesInput = {
    AND?: PRFlagScalarWhereWithAggregatesInput | PRFlagScalarWhereWithAggregatesInput[]
    OR?: PRFlagScalarWhereWithAggregatesInput[]
    NOT?: PRFlagScalarWhereWithAggregatesInput | PRFlagScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PRFlag"> | string
    prId?: StringWithAggregatesFilter<"PRFlag"> | string
    createdByUserId?: StringWithAggregatesFilter<"PRFlag"> | string
    reason?: StringWithAggregatesFilter<"PRFlag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PRFlag"> | Date | string
  }

  export type AvatarWhereInput = {
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    id?: StringFilter<"Avatar"> | string
    organizationId?: StringFilter<"Avatar"> | string
    name?: StringFilter<"Avatar"> | string
    taken?: BoolFilter<"Avatar"> | boolean
    takenByUserId?: StringNullableFilter<"Avatar"> | string | null
    takenAt?: DateTimeNullableFilter<"Avatar"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type AvatarOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    taken?: SortOrder
    takenByUserId?: SortOrderInput | SortOrder
    takenAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    organizationId_name?: AvatarOrganizationIdNameCompoundUniqueInput
    AND?: AvatarWhereInput | AvatarWhereInput[]
    OR?: AvatarWhereInput[]
    NOT?: AvatarWhereInput | AvatarWhereInput[]
    organizationId?: StringFilter<"Avatar"> | string
    name?: StringFilter<"Avatar"> | string
    taken?: BoolFilter<"Avatar"> | boolean
    takenByUserId?: StringNullableFilter<"Avatar"> | string | null
    takenAt?: DateTimeNullableFilter<"Avatar"> | Date | string | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "organizationId_name">

  export type AvatarOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    taken?: SortOrder
    takenByUserId?: SortOrderInput | SortOrder
    takenAt?: SortOrderInput | SortOrder
    _count?: AvatarCountOrderByAggregateInput
    _max?: AvatarMaxOrderByAggregateInput
    _min?: AvatarMinOrderByAggregateInput
  }

  export type AvatarScalarWhereWithAggregatesInput = {
    AND?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    OR?: AvatarScalarWhereWithAggregatesInput[]
    NOT?: AvatarScalarWhereWithAggregatesInput | AvatarScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Avatar"> | string
    organizationId?: StringWithAggregatesFilter<"Avatar"> | string
    name?: StringWithAggregatesFilter<"Avatar"> | string
    taken?: BoolWithAggregatesFilter<"Avatar"> | boolean
    takenByUserId?: StringNullableWithAggregatesFilter<"Avatar"> | string | null
    takenAt?: DateTimeNullableWithAggregatesFilter<"Avatar"> | Date | string | null
  }

  export type PRAuditLogWhereInput = {
    AND?: PRAuditLogWhereInput | PRAuditLogWhereInput[]
    OR?: PRAuditLogWhereInput[]
    NOT?: PRAuditLogWhereInput | PRAuditLogWhereInput[]
    id?: StringFilter<"PRAuditLog"> | string
    prId?: StringFilter<"PRAuditLog"> | string
    actorUserId?: StringNullableFilter<"PRAuditLog"> | string | null
    action?: StringFilter<"PRAuditLog"> | string
    fromStatus?: EnumPRStatusNullableFilter<"PRAuditLog"> | $Enums.PRStatus | null
    toStatus?: EnumPRStatusNullableFilter<"PRAuditLog"> | $Enums.PRStatus | null
    data?: JsonNullableFilter<"PRAuditLog">
    createdAt?: DateTimeFilter<"PRAuditLog"> | Date | string
    pr?: XOR<PRSubmissionScalarRelationFilter, PRSubmissionWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type PRAuditLogOrderByWithRelationInput = {
    id?: SortOrder
    prId?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    pr?: PRSubmissionOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type PRAuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PRAuditLogWhereInput | PRAuditLogWhereInput[]
    OR?: PRAuditLogWhereInput[]
    NOT?: PRAuditLogWhereInput | PRAuditLogWhereInput[]
    prId?: StringFilter<"PRAuditLog"> | string
    actorUserId?: StringNullableFilter<"PRAuditLog"> | string | null
    action?: StringFilter<"PRAuditLog"> | string
    fromStatus?: EnumPRStatusNullableFilter<"PRAuditLog"> | $Enums.PRStatus | null
    toStatus?: EnumPRStatusNullableFilter<"PRAuditLog"> | $Enums.PRStatus | null
    data?: JsonNullableFilter<"PRAuditLog">
    createdAt?: DateTimeFilter<"PRAuditLog"> | Date | string
    pr?: XOR<PRSubmissionScalarRelationFilter, PRSubmissionWhereInput>
    actor?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type PRAuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    prId?: SortOrder
    actorUserId?: SortOrderInput | SortOrder
    action?: SortOrder
    fromStatus?: SortOrderInput | SortOrder
    toStatus?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PRAuditLogCountOrderByAggregateInput
    _max?: PRAuditLogMaxOrderByAggregateInput
    _min?: PRAuditLogMinOrderByAggregateInput
  }

  export type PRAuditLogScalarWhereWithAggregatesInput = {
    AND?: PRAuditLogScalarWhereWithAggregatesInput | PRAuditLogScalarWhereWithAggregatesInput[]
    OR?: PRAuditLogScalarWhereWithAggregatesInput[]
    NOT?: PRAuditLogScalarWhereWithAggregatesInput | PRAuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PRAuditLog"> | string
    prId?: StringWithAggregatesFilter<"PRAuditLog"> | string
    actorUserId?: StringNullableWithAggregatesFilter<"PRAuditLog"> | string | null
    action?: StringWithAggregatesFilter<"PRAuditLog"> | string
    fromStatus?: EnumPRStatusNullableWithAggregatesFilter<"PRAuditLog"> | $Enums.PRStatus | null
    toStatus?: EnumPRStatusNullableWithAggregatesFilter<"PRAuditLog"> | $Enums.PRStatus | null
    data?: JsonNullableWithAggregatesFilter<"PRAuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"PRAuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ActivationCodeCreateInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    issuedByUser?: UserCreateNestedOneWithoutIssuedCodesInput
    usedByUser?: UserCreateNestedOneWithoutUsedCodesInput
  }

  export type ActivationCodeUncheckedCreateInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    issuedByUserId?: string | null
    usedByUserId?: string | null
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ActivationCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedByUser?: UserUpdateOneWithoutIssuedCodesNestedInput
    usedByUser?: UserUpdateOneWithoutUsedCodesNestedInput
  }

  export type ActivationCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    issuedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCodeCreateManyInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    issuedByUserId?: string | null
    usedByUserId?: string | null
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ActivationCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    issuedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestCreateInput = {
    id?: string
    email: string
    note?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestUncheckedCreateInput = {
    id?: string
    email: string
    note?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestCreateManyInput = {
    id?: string
    email: string
    note?: string | null
    createdAt?: Date | string
  }

  export type JoinRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JoinRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateManyInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    userId: string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    userId: string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManyInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
    userId: string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ProfileCreateInput = {
    id?: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileCreateManyInput = {
    id?: string
    userId: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateInput = {
    id: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    identifier: string
    value: string
    expiresAt: Date | string
  }

  export type VerificationUncheckedCreateInput = {
    id: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    identifier: string
    value: string
    expiresAt: Date | string
  }

  export type VerificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationCreateManyInput = {
    id: string
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    identifier: string
    value: string
    expiresAt: Date | string
  }

  export type VerificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    identifier?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRSubmissionCreateInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentor?: UserCreateNestedOneWithoutMentoredPRsInput
    flags?: PRFlagCreateNestedManyWithoutPrInput
    audits?: PRAuditLogCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionUncheckedCreateInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    mentorId?: string | null
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: PRFlagUncheckedCreateNestedManyWithoutPrInput
    audits?: PRAuditLogUncheckedCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneWithoutMentoredPRsNestedInput
    flags?: PRFlagUpdateManyWithoutPrNestedInput
    audits?: PRAuditLogUpdateManyWithoutPrNestedInput
  }

  export type PRSubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: PRFlagUncheckedUpdateManyWithoutPrNestedInput
    audits?: PRAuditLogUncheckedUpdateManyWithoutPrNestedInput
  }

  export type PRSubmissionCreateManyInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    mentorId?: string | null
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PRSubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRSubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagCreateInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    pr: PRSubmissionCreateNestedOneWithoutFlagsInput
    createdBy: UserCreateNestedOneWithoutPrFlagsCreatedInput
  }

  export type PRFlagUncheckedCreateInput = {
    id?: string
    prId: string
    createdByUserId: string
    reason: string
    createdAt?: Date | string
  }

  export type PRFlagUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pr?: PRSubmissionUpdateOneRequiredWithoutFlagsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutPrFlagsCreatedNestedInput
  }

  export type PRFlagUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagCreateManyInput = {
    id?: string
    prId: string
    createdByUserId: string
    reason: string
    createdAt?: Date | string
  }

  export type PRFlagUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarCreateInput = {
    id?: string
    organizationId: string
    name: string
    taken?: boolean
    takenAt?: Date | string | null
    user?: UserCreateNestedOneWithoutAvatarsInput
  }

  export type AvatarUncheckedCreateInput = {
    id?: string
    organizationId: string
    name: string
    taken?: boolean
    takenByUserId?: string | null
    takenAt?: Date | string | null
  }

  export type AvatarUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutAvatarsNestedInput
  }

  export type AvatarUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvatarCreateManyInput = {
    id?: string
    organizationId: string
    name: string
    taken?: boolean
    takenByUserId?: string | null
    takenAt?: Date | string | null
  }

  export type AvatarUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvatarUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRAuditLogCreateInput = {
    id?: string
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    pr: PRSubmissionCreateNestedOneWithoutAuditsInput
    actor?: UserCreateNestedOneWithoutActedAuditLogsInput
  }

  export type PRAuditLogUncheckedCreateInput = {
    id?: string
    prId: string
    actorUserId?: string | null
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PRAuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pr?: PRSubmissionUpdateOneRequiredWithoutAuditsNestedInput
    actor?: UserUpdateOneWithoutActedAuditLogsNestedInput
  }

  export type PRAuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRAuditLogCreateManyInput = {
    id?: string
    prId: string
    actorUserId?: string | null
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PRAuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRAuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type ProfileNullableScalarRelationFilter = {
    is?: ProfileWhereInput | null
    isNot?: ProfileWhereInput | null
  }

  export type PRFlagListRelationFilter = {
    every?: PRFlagWhereInput
    some?: PRFlagWhereInput
    none?: PRFlagWhereInput
  }

  export type PRSubmissionListRelationFilter = {
    every?: PRSubmissionWhereInput
    some?: PRSubmissionWhereInput
    none?: PRSubmissionWhereInput
  }

  export type PRAuditLogListRelationFilter = {
    every?: PRAuditLogWhereInput
    some?: PRAuditLogWhereInput
    none?: PRAuditLogWhereInput
  }

  export type AvatarListRelationFilter = {
    every?: AvatarWhereInput
    some?: AvatarWhereInput
    none?: AvatarWhereInput
  }

  export type ActivationCodeListRelationFilter = {
    every?: ActivationCodeWhereInput
    some?: ActivationCodeWhereInput
    none?: ActivationCodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PRFlagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PRSubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PRAuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivationCodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumActivationCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivationCodeType | EnumActivationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivationCodeTypeFilter<$PrismaModel> | $Enums.ActivationCodeType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type ActivationCodeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    organizationId?: SortOrder
    issuedByUserId?: SortOrder
    usedByUserId?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivationCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    organizationId?: SortOrder
    issuedByUserId?: SortOrder
    usedByUserId?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ActivationCodeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    organizationId?: SortOrder
    issuedByUserId?: SortOrder
    usedByUserId?: SortOrder
    usedAt?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumActivationCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivationCodeType | EnumActivationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivationCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivationCodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivationCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumActivationCodeTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JoinRequestCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type JoinRequestMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expiresAt?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    userId?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    userId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    userId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accountId?: SortOrder
    providerId?: SortOrder
    accessToken?: SortOrder
    refreshToken?: SortOrder
    idToken?: SortOrder
    accessTokenExpiresAt?: SortOrder
    refreshTokenExpiresAt?: SortOrder
    scope?: SortOrder
    password?: SortOrder
    userId?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VerificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
  }

  export type VerificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
  }

  export type VerificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    identifier?: SortOrder
    value?: SortOrder
    expiresAt?: SortOrder
  }

  export type EnumPRStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusFilter<$PrismaModel> | $Enums.PRStatus
  }

  export type PRSubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
    submitter?: SortOrder
    status?: SortOrder
    mentorId?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PRSubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
    submitter?: SortOrder
    status?: SortOrder
    mentorId?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PRSubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    title?: SortOrder
    author?: SortOrder
    submitter?: SortOrder
    status?: SortOrder
    mentorId?: SortOrder
    claimedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPRStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusWithAggregatesFilter<$PrismaModel> | $Enums.PRStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRStatusFilter<$PrismaModel>
    _max?: NestedEnumPRStatusFilter<$PrismaModel>
  }

  export type PRSubmissionScalarRelationFilter = {
    is?: PRSubmissionWhereInput
    isNot?: PRSubmissionWhereInput
  }

  export type PRFlagCountOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    createdByUserId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PRFlagMaxOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    createdByUserId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type PRFlagMinOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    createdByUserId?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
  }

  export type AvatarOrganizationIdNameCompoundUniqueInput = {
    organizationId: string
    name: string
  }

  export type AvatarCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    taken?: SortOrder
    takenByUserId?: SortOrder
    takenAt?: SortOrder
  }

  export type AvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    taken?: SortOrder
    takenByUserId?: SortOrder
    takenAt?: SortOrder
  }

  export type AvatarMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    name?: SortOrder
    taken?: SortOrder
    takenByUserId?: SortOrder
    takenAt?: SortOrder
  }

  export type EnumPRStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPRStatusNullableFilter<$PrismaModel> | $Enums.PRStatus | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PRAuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
  }

  export type PRAuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type PRAuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    prId?: SortOrder
    actorUserId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPRStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPRStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PRStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPRStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPRStatusNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PRFlagCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PRFlagCreateWithoutCreatedByInput, PRFlagUncheckedCreateWithoutCreatedByInput> | PRFlagCreateWithoutCreatedByInput[] | PRFlagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutCreatedByInput | PRFlagCreateOrConnectWithoutCreatedByInput[]
    createMany?: PRFlagCreateManyCreatedByInputEnvelope
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
  }

  export type PRSubmissionCreateNestedManyWithoutMentorInput = {
    create?: XOR<PRSubmissionCreateWithoutMentorInput, PRSubmissionUncheckedCreateWithoutMentorInput> | PRSubmissionCreateWithoutMentorInput[] | PRSubmissionUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutMentorInput | PRSubmissionCreateOrConnectWithoutMentorInput[]
    createMany?: PRSubmissionCreateManyMentorInputEnvelope
    connect?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
  }

  export type PRAuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<PRAuditLogCreateWithoutActorInput, PRAuditLogUncheckedCreateWithoutActorInput> | PRAuditLogCreateWithoutActorInput[] | PRAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutActorInput | PRAuditLogCreateOrConnectWithoutActorInput[]
    createMany?: PRAuditLogCreateManyActorInputEnvelope
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
  }

  export type AvatarCreateNestedManyWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type ActivationCodeCreateNestedManyWithoutIssuedByUserInput = {
    create?: XOR<ActivationCodeCreateWithoutIssuedByUserInput, ActivationCodeUncheckedCreateWithoutIssuedByUserInput> | ActivationCodeCreateWithoutIssuedByUserInput[] | ActivationCodeUncheckedCreateWithoutIssuedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutIssuedByUserInput | ActivationCodeCreateOrConnectWithoutIssuedByUserInput[]
    createMany?: ActivationCodeCreateManyIssuedByUserInputEnvelope
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
  }

  export type ActivationCodeCreateNestedManyWithoutUsedByUserInput = {
    create?: XOR<ActivationCodeCreateWithoutUsedByUserInput, ActivationCodeUncheckedCreateWithoutUsedByUserInput> | ActivationCodeCreateWithoutUsedByUserInput[] | ActivationCodeUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutUsedByUserInput | ActivationCodeCreateOrConnectWithoutUsedByUserInput[]
    createMany?: ActivationCodeCreateManyUsedByUserInputEnvelope
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type ProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    connect?: ProfileWhereUniqueInput
  }

  export type PRFlagUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<PRFlagCreateWithoutCreatedByInput, PRFlagUncheckedCreateWithoutCreatedByInput> | PRFlagCreateWithoutCreatedByInput[] | PRFlagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutCreatedByInput | PRFlagCreateOrConnectWithoutCreatedByInput[]
    createMany?: PRFlagCreateManyCreatedByInputEnvelope
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
  }

  export type PRSubmissionUncheckedCreateNestedManyWithoutMentorInput = {
    create?: XOR<PRSubmissionCreateWithoutMentorInput, PRSubmissionUncheckedCreateWithoutMentorInput> | PRSubmissionCreateWithoutMentorInput[] | PRSubmissionUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutMentorInput | PRSubmissionCreateOrConnectWithoutMentorInput[]
    createMany?: PRSubmissionCreateManyMentorInputEnvelope
    connect?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
  }

  export type PRAuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<PRAuditLogCreateWithoutActorInput, PRAuditLogUncheckedCreateWithoutActorInput> | PRAuditLogCreateWithoutActorInput[] | PRAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutActorInput | PRAuditLogCreateOrConnectWithoutActorInput[]
    createMany?: PRAuditLogCreateManyActorInputEnvelope
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
  }

  export type AvatarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
  }

  export type ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput = {
    create?: XOR<ActivationCodeCreateWithoutIssuedByUserInput, ActivationCodeUncheckedCreateWithoutIssuedByUserInput> | ActivationCodeCreateWithoutIssuedByUserInput[] | ActivationCodeUncheckedCreateWithoutIssuedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutIssuedByUserInput | ActivationCodeCreateOrConnectWithoutIssuedByUserInput[]
    createMany?: ActivationCodeCreateManyIssuedByUserInputEnvelope
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
  }

  export type ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput = {
    create?: XOR<ActivationCodeCreateWithoutUsedByUserInput, ActivationCodeUncheckedCreateWithoutUsedByUserInput> | ActivationCodeCreateWithoutUsedByUserInput[] | ActivationCodeUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutUsedByUserInput | ActivationCodeCreateOrConnectWithoutUsedByUserInput[]
    createMany?: ActivationCodeCreateManyUsedByUserInputEnvelope
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PRFlagUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PRFlagCreateWithoutCreatedByInput, PRFlagUncheckedCreateWithoutCreatedByInput> | PRFlagCreateWithoutCreatedByInput[] | PRFlagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutCreatedByInput | PRFlagCreateOrConnectWithoutCreatedByInput[]
    upsert?: PRFlagUpsertWithWhereUniqueWithoutCreatedByInput | PRFlagUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PRFlagCreateManyCreatedByInputEnvelope
    set?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    disconnect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    delete?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    update?: PRFlagUpdateWithWhereUniqueWithoutCreatedByInput | PRFlagUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PRFlagUpdateManyWithWhereWithoutCreatedByInput | PRFlagUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PRFlagScalarWhereInput | PRFlagScalarWhereInput[]
  }

  export type PRSubmissionUpdateManyWithoutMentorNestedInput = {
    create?: XOR<PRSubmissionCreateWithoutMentorInput, PRSubmissionUncheckedCreateWithoutMentorInput> | PRSubmissionCreateWithoutMentorInput[] | PRSubmissionUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutMentorInput | PRSubmissionCreateOrConnectWithoutMentorInput[]
    upsert?: PRSubmissionUpsertWithWhereUniqueWithoutMentorInput | PRSubmissionUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: PRSubmissionCreateManyMentorInputEnvelope
    set?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    disconnect?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    delete?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    connect?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    update?: PRSubmissionUpdateWithWhereUniqueWithoutMentorInput | PRSubmissionUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: PRSubmissionUpdateManyWithWhereWithoutMentorInput | PRSubmissionUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: PRSubmissionScalarWhereInput | PRSubmissionScalarWhereInput[]
  }

  export type PRAuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<PRAuditLogCreateWithoutActorInput, PRAuditLogUncheckedCreateWithoutActorInput> | PRAuditLogCreateWithoutActorInput[] | PRAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutActorInput | PRAuditLogCreateOrConnectWithoutActorInput[]
    upsert?: PRAuditLogUpsertWithWhereUniqueWithoutActorInput | PRAuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: PRAuditLogCreateManyActorInputEnvelope
    set?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    disconnect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    delete?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    update?: PRAuditLogUpdateWithWhereUniqueWithoutActorInput | PRAuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: PRAuditLogUpdateManyWithWhereWithoutActorInput | PRAuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: PRAuditLogScalarWhereInput | PRAuditLogScalarWhereInput[]
  }

  export type AvatarUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutUserInput | AvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutUserInput | AvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutUserInput | AvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type ActivationCodeUpdateManyWithoutIssuedByUserNestedInput = {
    create?: XOR<ActivationCodeCreateWithoutIssuedByUserInput, ActivationCodeUncheckedCreateWithoutIssuedByUserInput> | ActivationCodeCreateWithoutIssuedByUserInput[] | ActivationCodeUncheckedCreateWithoutIssuedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutIssuedByUserInput | ActivationCodeCreateOrConnectWithoutIssuedByUserInput[]
    upsert?: ActivationCodeUpsertWithWhereUniqueWithoutIssuedByUserInput | ActivationCodeUpsertWithWhereUniqueWithoutIssuedByUserInput[]
    createMany?: ActivationCodeCreateManyIssuedByUserInputEnvelope
    set?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    disconnect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    delete?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    update?: ActivationCodeUpdateWithWhereUniqueWithoutIssuedByUserInput | ActivationCodeUpdateWithWhereUniqueWithoutIssuedByUserInput[]
    updateMany?: ActivationCodeUpdateManyWithWhereWithoutIssuedByUserInput | ActivationCodeUpdateManyWithWhereWithoutIssuedByUserInput[]
    deleteMany?: ActivationCodeScalarWhereInput | ActivationCodeScalarWhereInput[]
  }

  export type ActivationCodeUpdateManyWithoutUsedByUserNestedInput = {
    create?: XOR<ActivationCodeCreateWithoutUsedByUserInput, ActivationCodeUncheckedCreateWithoutUsedByUserInput> | ActivationCodeCreateWithoutUsedByUserInput[] | ActivationCodeUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutUsedByUserInput | ActivationCodeCreateOrConnectWithoutUsedByUserInput[]
    upsert?: ActivationCodeUpsertWithWhereUniqueWithoutUsedByUserInput | ActivationCodeUpsertWithWhereUniqueWithoutUsedByUserInput[]
    createMany?: ActivationCodeCreateManyUsedByUserInputEnvelope
    set?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    disconnect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    delete?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    update?: ActivationCodeUpdateWithWhereUniqueWithoutUsedByUserInput | ActivationCodeUpdateWithWhereUniqueWithoutUsedByUserInput[]
    updateMany?: ActivationCodeUpdateManyWithWhereWithoutUsedByUserInput | ActivationCodeUpdateManyWithWhereWithoutUsedByUserInput[]
    deleteMany?: ActivationCodeScalarWhereInput | ActivationCodeScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type ProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutUserInput
    upsert?: ProfileUpsertWithoutUserInput
    disconnect?: ProfileWhereInput | boolean
    delete?: ProfileWhereInput | boolean
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutUserInput, ProfileUpdateWithoutUserInput>, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<PRFlagCreateWithoutCreatedByInput, PRFlagUncheckedCreateWithoutCreatedByInput> | PRFlagCreateWithoutCreatedByInput[] | PRFlagUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutCreatedByInput | PRFlagCreateOrConnectWithoutCreatedByInput[]
    upsert?: PRFlagUpsertWithWhereUniqueWithoutCreatedByInput | PRFlagUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: PRFlagCreateManyCreatedByInputEnvelope
    set?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    disconnect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    delete?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    update?: PRFlagUpdateWithWhereUniqueWithoutCreatedByInput | PRFlagUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: PRFlagUpdateManyWithWhereWithoutCreatedByInput | PRFlagUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: PRFlagScalarWhereInput | PRFlagScalarWhereInput[]
  }

  export type PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput = {
    create?: XOR<PRSubmissionCreateWithoutMentorInput, PRSubmissionUncheckedCreateWithoutMentorInput> | PRSubmissionCreateWithoutMentorInput[] | PRSubmissionUncheckedCreateWithoutMentorInput[]
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutMentorInput | PRSubmissionCreateOrConnectWithoutMentorInput[]
    upsert?: PRSubmissionUpsertWithWhereUniqueWithoutMentorInput | PRSubmissionUpsertWithWhereUniqueWithoutMentorInput[]
    createMany?: PRSubmissionCreateManyMentorInputEnvelope
    set?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    disconnect?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    delete?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    connect?: PRSubmissionWhereUniqueInput | PRSubmissionWhereUniqueInput[]
    update?: PRSubmissionUpdateWithWhereUniqueWithoutMentorInput | PRSubmissionUpdateWithWhereUniqueWithoutMentorInput[]
    updateMany?: PRSubmissionUpdateManyWithWhereWithoutMentorInput | PRSubmissionUpdateManyWithWhereWithoutMentorInput[]
    deleteMany?: PRSubmissionScalarWhereInput | PRSubmissionScalarWhereInput[]
  }

  export type PRAuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<PRAuditLogCreateWithoutActorInput, PRAuditLogUncheckedCreateWithoutActorInput> | PRAuditLogCreateWithoutActorInput[] | PRAuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutActorInput | PRAuditLogCreateOrConnectWithoutActorInput[]
    upsert?: PRAuditLogUpsertWithWhereUniqueWithoutActorInput | PRAuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: PRAuditLogCreateManyActorInputEnvelope
    set?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    disconnect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    delete?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    update?: PRAuditLogUpdateWithWhereUniqueWithoutActorInput | PRAuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: PRAuditLogUpdateManyWithWhereWithoutActorInput | PRAuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: PRAuditLogScalarWhereInput | PRAuditLogScalarWhereInput[]
  }

  export type AvatarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput> | AvatarCreateWithoutUserInput[] | AvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvatarCreateOrConnectWithoutUserInput | AvatarCreateOrConnectWithoutUserInput[]
    upsert?: AvatarUpsertWithWhereUniqueWithoutUserInput | AvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AvatarCreateManyUserInputEnvelope
    set?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    disconnect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    delete?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    connect?: AvatarWhereUniqueInput | AvatarWhereUniqueInput[]
    update?: AvatarUpdateWithWhereUniqueWithoutUserInput | AvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvatarUpdateManyWithWhereWithoutUserInput | AvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
  }

  export type ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput = {
    create?: XOR<ActivationCodeCreateWithoutIssuedByUserInput, ActivationCodeUncheckedCreateWithoutIssuedByUserInput> | ActivationCodeCreateWithoutIssuedByUserInput[] | ActivationCodeUncheckedCreateWithoutIssuedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutIssuedByUserInput | ActivationCodeCreateOrConnectWithoutIssuedByUserInput[]
    upsert?: ActivationCodeUpsertWithWhereUniqueWithoutIssuedByUserInput | ActivationCodeUpsertWithWhereUniqueWithoutIssuedByUserInput[]
    createMany?: ActivationCodeCreateManyIssuedByUserInputEnvelope
    set?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    disconnect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    delete?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    update?: ActivationCodeUpdateWithWhereUniqueWithoutIssuedByUserInput | ActivationCodeUpdateWithWhereUniqueWithoutIssuedByUserInput[]
    updateMany?: ActivationCodeUpdateManyWithWhereWithoutIssuedByUserInput | ActivationCodeUpdateManyWithWhereWithoutIssuedByUserInput[]
    deleteMany?: ActivationCodeScalarWhereInput | ActivationCodeScalarWhereInput[]
  }

  export type ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput = {
    create?: XOR<ActivationCodeCreateWithoutUsedByUserInput, ActivationCodeUncheckedCreateWithoutUsedByUserInput> | ActivationCodeCreateWithoutUsedByUserInput[] | ActivationCodeUncheckedCreateWithoutUsedByUserInput[]
    connectOrCreate?: ActivationCodeCreateOrConnectWithoutUsedByUserInput | ActivationCodeCreateOrConnectWithoutUsedByUserInput[]
    upsert?: ActivationCodeUpsertWithWhereUniqueWithoutUsedByUserInput | ActivationCodeUpsertWithWhereUniqueWithoutUsedByUserInput[]
    createMany?: ActivationCodeCreateManyUsedByUserInputEnvelope
    set?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    disconnect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    delete?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    connect?: ActivationCodeWhereUniqueInput | ActivationCodeWhereUniqueInput[]
    update?: ActivationCodeUpdateWithWhereUniqueWithoutUsedByUserInput | ActivationCodeUpdateWithWhereUniqueWithoutUsedByUserInput[]
    updateMany?: ActivationCodeUpdateManyWithWhereWithoutUsedByUserInput | ActivationCodeUpdateManyWithWhereWithoutUsedByUserInput[]
    deleteMany?: ActivationCodeScalarWhereInput | ActivationCodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIssuedCodesInput = {
    create?: XOR<UserCreateWithoutIssuedCodesInput, UserUncheckedCreateWithoutIssuedCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedCodesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUsedCodesInput = {
    create?: XOR<UserCreateWithoutUsedCodesInput, UserUncheckedCreateWithoutUsedCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsedCodesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumActivationCodeTypeFieldUpdateOperationsInput = {
    set?: $Enums.ActivationCodeType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutIssuedCodesNestedInput = {
    create?: XOR<UserCreateWithoutIssuedCodesInput, UserUncheckedCreateWithoutIssuedCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutIssuedCodesInput
    upsert?: UserUpsertWithoutIssuedCodesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIssuedCodesInput, UserUpdateWithoutIssuedCodesInput>, UserUncheckedUpdateWithoutIssuedCodesInput>
  }

  export type UserUpdateOneWithoutUsedCodesNestedInput = {
    create?: XOR<UserCreateWithoutUsedCodesInput, UserUncheckedCreateWithoutUsedCodesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsedCodesInput
    upsert?: UserUpsertWithoutUsedCodesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsedCodesInput, UserUpdateWithoutUsedCodesInput>, UserUncheckedUpdateWithoutUsedCodesInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutProfileInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProfileNestedInput = {
    create?: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutProfileInput
    upsert?: UserUpsertWithoutProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProfileInput, UserUpdateWithoutProfileInput>, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserCreateNestedOneWithoutMentoredPRsInput = {
    create?: XOR<UserCreateWithoutMentoredPRsInput, UserUncheckedCreateWithoutMentoredPRsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentoredPRsInput
    connect?: UserWhereUniqueInput
  }

  export type PRFlagCreateNestedManyWithoutPrInput = {
    create?: XOR<PRFlagCreateWithoutPrInput, PRFlagUncheckedCreateWithoutPrInput> | PRFlagCreateWithoutPrInput[] | PRFlagUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutPrInput | PRFlagCreateOrConnectWithoutPrInput[]
    createMany?: PRFlagCreateManyPrInputEnvelope
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
  }

  export type PRAuditLogCreateNestedManyWithoutPrInput = {
    create?: XOR<PRAuditLogCreateWithoutPrInput, PRAuditLogUncheckedCreateWithoutPrInput> | PRAuditLogCreateWithoutPrInput[] | PRAuditLogUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutPrInput | PRAuditLogCreateOrConnectWithoutPrInput[]
    createMany?: PRAuditLogCreateManyPrInputEnvelope
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
  }

  export type PRFlagUncheckedCreateNestedManyWithoutPrInput = {
    create?: XOR<PRFlagCreateWithoutPrInput, PRFlagUncheckedCreateWithoutPrInput> | PRFlagCreateWithoutPrInput[] | PRFlagUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutPrInput | PRFlagCreateOrConnectWithoutPrInput[]
    createMany?: PRFlagCreateManyPrInputEnvelope
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
  }

  export type PRAuditLogUncheckedCreateNestedManyWithoutPrInput = {
    create?: XOR<PRAuditLogCreateWithoutPrInput, PRAuditLogUncheckedCreateWithoutPrInput> | PRAuditLogCreateWithoutPrInput[] | PRAuditLogUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutPrInput | PRAuditLogCreateOrConnectWithoutPrInput[]
    createMany?: PRAuditLogCreateManyPrInputEnvelope
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
  }

  export type EnumPRStatusFieldUpdateOperationsInput = {
    set?: $Enums.PRStatus
  }

  export type UserUpdateOneWithoutMentoredPRsNestedInput = {
    create?: XOR<UserCreateWithoutMentoredPRsInput, UserUncheckedCreateWithoutMentoredPRsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMentoredPRsInput
    upsert?: UserUpsertWithoutMentoredPRsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMentoredPRsInput, UserUpdateWithoutMentoredPRsInput>, UserUncheckedUpdateWithoutMentoredPRsInput>
  }

  export type PRFlagUpdateManyWithoutPrNestedInput = {
    create?: XOR<PRFlagCreateWithoutPrInput, PRFlagUncheckedCreateWithoutPrInput> | PRFlagCreateWithoutPrInput[] | PRFlagUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutPrInput | PRFlagCreateOrConnectWithoutPrInput[]
    upsert?: PRFlagUpsertWithWhereUniqueWithoutPrInput | PRFlagUpsertWithWhereUniqueWithoutPrInput[]
    createMany?: PRFlagCreateManyPrInputEnvelope
    set?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    disconnect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    delete?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    update?: PRFlagUpdateWithWhereUniqueWithoutPrInput | PRFlagUpdateWithWhereUniqueWithoutPrInput[]
    updateMany?: PRFlagUpdateManyWithWhereWithoutPrInput | PRFlagUpdateManyWithWhereWithoutPrInput[]
    deleteMany?: PRFlagScalarWhereInput | PRFlagScalarWhereInput[]
  }

  export type PRAuditLogUpdateManyWithoutPrNestedInput = {
    create?: XOR<PRAuditLogCreateWithoutPrInput, PRAuditLogUncheckedCreateWithoutPrInput> | PRAuditLogCreateWithoutPrInput[] | PRAuditLogUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutPrInput | PRAuditLogCreateOrConnectWithoutPrInput[]
    upsert?: PRAuditLogUpsertWithWhereUniqueWithoutPrInput | PRAuditLogUpsertWithWhereUniqueWithoutPrInput[]
    createMany?: PRAuditLogCreateManyPrInputEnvelope
    set?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    disconnect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    delete?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    update?: PRAuditLogUpdateWithWhereUniqueWithoutPrInput | PRAuditLogUpdateWithWhereUniqueWithoutPrInput[]
    updateMany?: PRAuditLogUpdateManyWithWhereWithoutPrInput | PRAuditLogUpdateManyWithWhereWithoutPrInput[]
    deleteMany?: PRAuditLogScalarWhereInput | PRAuditLogScalarWhereInput[]
  }

  export type PRFlagUncheckedUpdateManyWithoutPrNestedInput = {
    create?: XOR<PRFlagCreateWithoutPrInput, PRFlagUncheckedCreateWithoutPrInput> | PRFlagCreateWithoutPrInput[] | PRFlagUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRFlagCreateOrConnectWithoutPrInput | PRFlagCreateOrConnectWithoutPrInput[]
    upsert?: PRFlagUpsertWithWhereUniqueWithoutPrInput | PRFlagUpsertWithWhereUniqueWithoutPrInput[]
    createMany?: PRFlagCreateManyPrInputEnvelope
    set?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    disconnect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    delete?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    connect?: PRFlagWhereUniqueInput | PRFlagWhereUniqueInput[]
    update?: PRFlagUpdateWithWhereUniqueWithoutPrInput | PRFlagUpdateWithWhereUniqueWithoutPrInput[]
    updateMany?: PRFlagUpdateManyWithWhereWithoutPrInput | PRFlagUpdateManyWithWhereWithoutPrInput[]
    deleteMany?: PRFlagScalarWhereInput | PRFlagScalarWhereInput[]
  }

  export type PRAuditLogUncheckedUpdateManyWithoutPrNestedInput = {
    create?: XOR<PRAuditLogCreateWithoutPrInput, PRAuditLogUncheckedCreateWithoutPrInput> | PRAuditLogCreateWithoutPrInput[] | PRAuditLogUncheckedCreateWithoutPrInput[]
    connectOrCreate?: PRAuditLogCreateOrConnectWithoutPrInput | PRAuditLogCreateOrConnectWithoutPrInput[]
    upsert?: PRAuditLogUpsertWithWhereUniqueWithoutPrInput | PRAuditLogUpsertWithWhereUniqueWithoutPrInput[]
    createMany?: PRAuditLogCreateManyPrInputEnvelope
    set?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    disconnect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    delete?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    connect?: PRAuditLogWhereUniqueInput | PRAuditLogWhereUniqueInput[]
    update?: PRAuditLogUpdateWithWhereUniqueWithoutPrInput | PRAuditLogUpdateWithWhereUniqueWithoutPrInput[]
    updateMany?: PRAuditLogUpdateManyWithWhereWithoutPrInput | PRAuditLogUpdateManyWithWhereWithoutPrInput[]
    deleteMany?: PRAuditLogScalarWhereInput | PRAuditLogScalarWhereInput[]
  }

  export type PRSubmissionCreateNestedOneWithoutFlagsInput = {
    create?: XOR<PRSubmissionCreateWithoutFlagsInput, PRSubmissionUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutFlagsInput
    connect?: PRSubmissionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPrFlagsCreatedInput = {
    create?: XOR<UserCreateWithoutPrFlagsCreatedInput, UserUncheckedCreateWithoutPrFlagsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrFlagsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type PRSubmissionUpdateOneRequiredWithoutFlagsNestedInput = {
    create?: XOR<PRSubmissionCreateWithoutFlagsInput, PRSubmissionUncheckedCreateWithoutFlagsInput>
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutFlagsInput
    upsert?: PRSubmissionUpsertWithoutFlagsInput
    connect?: PRSubmissionWhereUniqueInput
    update?: XOR<XOR<PRSubmissionUpdateToOneWithWhereWithoutFlagsInput, PRSubmissionUpdateWithoutFlagsInput>, PRSubmissionUncheckedUpdateWithoutFlagsInput>
  }

  export type UserUpdateOneRequiredWithoutPrFlagsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutPrFlagsCreatedInput, UserUncheckedCreateWithoutPrFlagsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPrFlagsCreatedInput
    upsert?: UserUpsertWithoutPrFlagsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPrFlagsCreatedInput, UserUpdateWithoutPrFlagsCreatedInput>, UserUncheckedUpdateWithoutPrFlagsCreatedInput>
  }

  export type UserCreateNestedOneWithoutAvatarsInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAvatarsNestedInput = {
    create?: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvatarsInput
    upsert?: UserUpsertWithoutAvatarsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvatarsInput, UserUpdateWithoutAvatarsInput>, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type PRSubmissionCreateNestedOneWithoutAuditsInput = {
    create?: XOR<PRSubmissionCreateWithoutAuditsInput, PRSubmissionUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutAuditsInput
    connect?: PRSubmissionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutActedAuditLogsInput = {
    create?: XOR<UserCreateWithoutActedAuditLogsInput, UserUncheckedCreateWithoutActedAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActedAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumPRStatusFieldUpdateOperationsInput = {
    set?: $Enums.PRStatus | null
  }

  export type PRSubmissionUpdateOneRequiredWithoutAuditsNestedInput = {
    create?: XOR<PRSubmissionCreateWithoutAuditsInput, PRSubmissionUncheckedCreateWithoutAuditsInput>
    connectOrCreate?: PRSubmissionCreateOrConnectWithoutAuditsInput
    upsert?: PRSubmissionUpsertWithoutAuditsInput
    connect?: PRSubmissionWhereUniqueInput
    update?: XOR<XOR<PRSubmissionUpdateToOneWithWhereWithoutAuditsInput, PRSubmissionUpdateWithoutAuditsInput>, PRSubmissionUncheckedUpdateWithoutAuditsInput>
  }

  export type UserUpdateOneWithoutActedAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutActedAuditLogsInput, UserUncheckedCreateWithoutActedAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutActedAuditLogsInput
    upsert?: UserUpsertWithoutActedAuditLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActedAuditLogsInput, UserUpdateWithoutActedAuditLogsInput>, UserUncheckedUpdateWithoutActedAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumActivationCodeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivationCodeType | EnumActivationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivationCodeTypeFilter<$PrismaModel> | $Enums.ActivationCodeType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumActivationCodeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ActivationCodeType | EnumActivationCodeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ActivationCodeType[] | ListEnumActivationCodeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumActivationCodeTypeWithAggregatesFilter<$PrismaModel> | $Enums.ActivationCodeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumActivationCodeTypeFilter<$PrismaModel>
    _max?: NestedEnumActivationCodeTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPRStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusFilter<$PrismaModel> | $Enums.PRStatus
  }

  export type NestedEnumPRStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusWithAggregatesFilter<$PrismaModel> | $Enums.PRStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRStatusFilter<$PrismaModel>
    _max?: NestedEnumPRStatusFilter<$PrismaModel>
  }

  export type NestedEnumPRStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPRStatusNullableFilter<$PrismaModel> | $Enums.PRStatus | null
  }

  export type NestedEnumPRStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPRStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.PRStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPRStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumPRStatusNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SessionCreateWithoutUserInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountCreateWithoutUserInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProfileCreateWithoutUserInput = {
    id?: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string | null
    bio?: string | null
    avatarUrl?: string | null
    linkedinUrl?: string | null
    githubUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileCreateOrConnectWithoutUserInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
  }

  export type PRFlagCreateWithoutCreatedByInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    pr: PRSubmissionCreateNestedOneWithoutFlagsInput
  }

  export type PRFlagUncheckedCreateWithoutCreatedByInput = {
    id?: string
    prId: string
    reason: string
    createdAt?: Date | string
  }

  export type PRFlagCreateOrConnectWithoutCreatedByInput = {
    where: PRFlagWhereUniqueInput
    create: XOR<PRFlagCreateWithoutCreatedByInput, PRFlagUncheckedCreateWithoutCreatedByInput>
  }

  export type PRFlagCreateManyCreatedByInputEnvelope = {
    data: PRFlagCreateManyCreatedByInput | PRFlagCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type PRSubmissionCreateWithoutMentorInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: PRFlagCreateNestedManyWithoutPrInput
    audits?: PRAuditLogCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionUncheckedCreateWithoutMentorInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: PRFlagUncheckedCreateNestedManyWithoutPrInput
    audits?: PRAuditLogUncheckedCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionCreateOrConnectWithoutMentorInput = {
    where: PRSubmissionWhereUniqueInput
    create: XOR<PRSubmissionCreateWithoutMentorInput, PRSubmissionUncheckedCreateWithoutMentorInput>
  }

  export type PRSubmissionCreateManyMentorInputEnvelope = {
    data: PRSubmissionCreateManyMentorInput | PRSubmissionCreateManyMentorInput[]
    skipDuplicates?: boolean
  }

  export type PRAuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    pr: PRSubmissionCreateNestedOneWithoutAuditsInput
  }

  export type PRAuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    prId: string
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PRAuditLogCreateOrConnectWithoutActorInput = {
    where: PRAuditLogWhereUniqueInput
    create: XOR<PRAuditLogCreateWithoutActorInput, PRAuditLogUncheckedCreateWithoutActorInput>
  }

  export type PRAuditLogCreateManyActorInputEnvelope = {
    data: PRAuditLogCreateManyActorInput | PRAuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type AvatarCreateWithoutUserInput = {
    id?: string
    organizationId: string
    name: string
    taken?: boolean
    takenAt?: Date | string | null
  }

  export type AvatarUncheckedCreateWithoutUserInput = {
    id?: string
    organizationId: string
    name: string
    taken?: boolean
    takenAt?: Date | string | null
  }

  export type AvatarCreateOrConnectWithoutUserInput = {
    where: AvatarWhereUniqueInput
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type AvatarCreateManyUserInputEnvelope = {
    data: AvatarCreateManyUserInput | AvatarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivationCodeCreateWithoutIssuedByUserInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    usedByUser?: UserCreateNestedOneWithoutUsedCodesInput
  }

  export type ActivationCodeUncheckedCreateWithoutIssuedByUserInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    usedByUserId?: string | null
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ActivationCodeCreateOrConnectWithoutIssuedByUserInput = {
    where: ActivationCodeWhereUniqueInput
    create: XOR<ActivationCodeCreateWithoutIssuedByUserInput, ActivationCodeUncheckedCreateWithoutIssuedByUserInput>
  }

  export type ActivationCodeCreateManyIssuedByUserInputEnvelope = {
    data: ActivationCodeCreateManyIssuedByUserInput | ActivationCodeCreateManyIssuedByUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivationCodeCreateWithoutUsedByUserInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
    issuedByUser?: UserCreateNestedOneWithoutIssuedCodesInput
  }

  export type ActivationCodeUncheckedCreateWithoutUsedByUserInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    issuedByUserId?: string | null
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ActivationCodeCreateOrConnectWithoutUsedByUserInput = {
    where: ActivationCodeWhereUniqueInput
    create: XOR<ActivationCodeCreateWithoutUsedByUserInput, ActivationCodeUncheckedCreateWithoutUsedByUserInput>
  }

  export type ActivationCodeCreateManyUsedByUserInputEnvelope = {
    data: ActivationCodeCreateManyUsedByUserInput | ActivationCodeCreateManyUsedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    token?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    userId?: StringFilter<"Session"> | string
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    accountId?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    accessToken?: StringNullableFilter<"Account"> | string | null
    refreshToken?: StringNullableFilter<"Account"> | string | null
    idToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    refreshTokenExpiresAt?: DateTimeNullableFilter<"Account"> | Date | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    password?: StringNullableFilter<"Account"> | string | null
    userId?: StringFilter<"Account"> | string
  }

  export type ProfileUpsertWithoutUserInput = {
    update: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
    create: XOR<ProfileCreateWithoutUserInput, ProfileUncheckedCreateWithoutUserInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutUserInput, ProfileUncheckedUpdateWithoutUserInput>
  }

  export type ProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: PRFlagWhereUniqueInput
    update: XOR<PRFlagUpdateWithoutCreatedByInput, PRFlagUncheckedUpdateWithoutCreatedByInput>
    create: XOR<PRFlagCreateWithoutCreatedByInput, PRFlagUncheckedCreateWithoutCreatedByInput>
  }

  export type PRFlagUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: PRFlagWhereUniqueInput
    data: XOR<PRFlagUpdateWithoutCreatedByInput, PRFlagUncheckedUpdateWithoutCreatedByInput>
  }

  export type PRFlagUpdateManyWithWhereWithoutCreatedByInput = {
    where: PRFlagScalarWhereInput
    data: XOR<PRFlagUpdateManyMutationInput, PRFlagUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type PRFlagScalarWhereInput = {
    AND?: PRFlagScalarWhereInput | PRFlagScalarWhereInput[]
    OR?: PRFlagScalarWhereInput[]
    NOT?: PRFlagScalarWhereInput | PRFlagScalarWhereInput[]
    id?: StringFilter<"PRFlag"> | string
    prId?: StringFilter<"PRFlag"> | string
    createdByUserId?: StringFilter<"PRFlag"> | string
    reason?: StringFilter<"PRFlag"> | string
    createdAt?: DateTimeFilter<"PRFlag"> | Date | string
  }

  export type PRSubmissionUpsertWithWhereUniqueWithoutMentorInput = {
    where: PRSubmissionWhereUniqueInput
    update: XOR<PRSubmissionUpdateWithoutMentorInput, PRSubmissionUncheckedUpdateWithoutMentorInput>
    create: XOR<PRSubmissionCreateWithoutMentorInput, PRSubmissionUncheckedCreateWithoutMentorInput>
  }

  export type PRSubmissionUpdateWithWhereUniqueWithoutMentorInput = {
    where: PRSubmissionWhereUniqueInput
    data: XOR<PRSubmissionUpdateWithoutMentorInput, PRSubmissionUncheckedUpdateWithoutMentorInput>
  }

  export type PRSubmissionUpdateManyWithWhereWithoutMentorInput = {
    where: PRSubmissionScalarWhereInput
    data: XOR<PRSubmissionUpdateManyMutationInput, PRSubmissionUncheckedUpdateManyWithoutMentorInput>
  }

  export type PRSubmissionScalarWhereInput = {
    AND?: PRSubmissionScalarWhereInput | PRSubmissionScalarWhereInput[]
    OR?: PRSubmissionScalarWhereInput[]
    NOT?: PRSubmissionScalarWhereInput | PRSubmissionScalarWhereInput[]
    id?: StringFilter<"PRSubmission"> | string
    url?: StringFilter<"PRSubmission"> | string
    title?: StringNullableFilter<"PRSubmission"> | string | null
    author?: StringNullableFilter<"PRSubmission"> | string | null
    submitter?: StringNullableFilter<"PRSubmission"> | string | null
    status?: EnumPRStatusFilter<"PRSubmission"> | $Enums.PRStatus
    mentorId?: StringNullableFilter<"PRSubmission"> | string | null
    claimedAt?: DateTimeNullableFilter<"PRSubmission"> | Date | string | null
    createdAt?: DateTimeFilter<"PRSubmission"> | Date | string
    updatedAt?: DateTimeFilter<"PRSubmission"> | Date | string
  }

  export type PRAuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: PRAuditLogWhereUniqueInput
    update: XOR<PRAuditLogUpdateWithoutActorInput, PRAuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<PRAuditLogCreateWithoutActorInput, PRAuditLogUncheckedCreateWithoutActorInput>
  }

  export type PRAuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: PRAuditLogWhereUniqueInput
    data: XOR<PRAuditLogUpdateWithoutActorInput, PRAuditLogUncheckedUpdateWithoutActorInput>
  }

  export type PRAuditLogUpdateManyWithWhereWithoutActorInput = {
    where: PRAuditLogScalarWhereInput
    data: XOR<PRAuditLogUpdateManyMutationInput, PRAuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type PRAuditLogScalarWhereInput = {
    AND?: PRAuditLogScalarWhereInput | PRAuditLogScalarWhereInput[]
    OR?: PRAuditLogScalarWhereInput[]
    NOT?: PRAuditLogScalarWhereInput | PRAuditLogScalarWhereInput[]
    id?: StringFilter<"PRAuditLog"> | string
    prId?: StringFilter<"PRAuditLog"> | string
    actorUserId?: StringNullableFilter<"PRAuditLog"> | string | null
    action?: StringFilter<"PRAuditLog"> | string
    fromStatus?: EnumPRStatusNullableFilter<"PRAuditLog"> | $Enums.PRStatus | null
    toStatus?: EnumPRStatusNullableFilter<"PRAuditLog"> | $Enums.PRStatus | null
    data?: JsonNullableFilter<"PRAuditLog">
    createdAt?: DateTimeFilter<"PRAuditLog"> | Date | string
  }

  export type AvatarUpsertWithWhereUniqueWithoutUserInput = {
    where: AvatarWhereUniqueInput
    update: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
    create: XOR<AvatarCreateWithoutUserInput, AvatarUncheckedCreateWithoutUserInput>
  }

  export type AvatarUpdateWithWhereUniqueWithoutUserInput = {
    where: AvatarWhereUniqueInput
    data: XOR<AvatarUpdateWithoutUserInput, AvatarUncheckedUpdateWithoutUserInput>
  }

  export type AvatarUpdateManyWithWhereWithoutUserInput = {
    where: AvatarScalarWhereInput
    data: XOR<AvatarUpdateManyMutationInput, AvatarUncheckedUpdateManyWithoutUserInput>
  }

  export type AvatarScalarWhereInput = {
    AND?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    OR?: AvatarScalarWhereInput[]
    NOT?: AvatarScalarWhereInput | AvatarScalarWhereInput[]
    id?: StringFilter<"Avatar"> | string
    organizationId?: StringFilter<"Avatar"> | string
    name?: StringFilter<"Avatar"> | string
    taken?: BoolFilter<"Avatar"> | boolean
    takenByUserId?: StringNullableFilter<"Avatar"> | string | null
    takenAt?: DateTimeNullableFilter<"Avatar"> | Date | string | null
  }

  export type ActivationCodeUpsertWithWhereUniqueWithoutIssuedByUserInput = {
    where: ActivationCodeWhereUniqueInput
    update: XOR<ActivationCodeUpdateWithoutIssuedByUserInput, ActivationCodeUncheckedUpdateWithoutIssuedByUserInput>
    create: XOR<ActivationCodeCreateWithoutIssuedByUserInput, ActivationCodeUncheckedCreateWithoutIssuedByUserInput>
  }

  export type ActivationCodeUpdateWithWhereUniqueWithoutIssuedByUserInput = {
    where: ActivationCodeWhereUniqueInput
    data: XOR<ActivationCodeUpdateWithoutIssuedByUserInput, ActivationCodeUncheckedUpdateWithoutIssuedByUserInput>
  }

  export type ActivationCodeUpdateManyWithWhereWithoutIssuedByUserInput = {
    where: ActivationCodeScalarWhereInput
    data: XOR<ActivationCodeUpdateManyMutationInput, ActivationCodeUncheckedUpdateManyWithoutIssuedByUserInput>
  }

  export type ActivationCodeScalarWhereInput = {
    AND?: ActivationCodeScalarWhereInput | ActivationCodeScalarWhereInput[]
    OR?: ActivationCodeScalarWhereInput[]
    NOT?: ActivationCodeScalarWhereInput | ActivationCodeScalarWhereInput[]
    id?: StringFilter<"ActivationCode"> | string
    code?: StringFilter<"ActivationCode"> | string
    type?: EnumActivationCodeTypeFilter<"ActivationCode"> | $Enums.ActivationCodeType
    organizationId?: StringFilter<"ActivationCode"> | string
    issuedByUserId?: StringNullableFilter<"ActivationCode"> | string | null
    usedByUserId?: StringNullableFilter<"ActivationCode"> | string | null
    usedAt?: DateTimeNullableFilter<"ActivationCode"> | Date | string | null
    expiresAt?: DateTimeNullableFilter<"ActivationCode"> | Date | string | null
    createdAt?: DateTimeFilter<"ActivationCode"> | Date | string
  }

  export type ActivationCodeUpsertWithWhereUniqueWithoutUsedByUserInput = {
    where: ActivationCodeWhereUniqueInput
    update: XOR<ActivationCodeUpdateWithoutUsedByUserInput, ActivationCodeUncheckedUpdateWithoutUsedByUserInput>
    create: XOR<ActivationCodeCreateWithoutUsedByUserInput, ActivationCodeUncheckedCreateWithoutUsedByUserInput>
  }

  export type ActivationCodeUpdateWithWhereUniqueWithoutUsedByUserInput = {
    where: ActivationCodeWhereUniqueInput
    data: XOR<ActivationCodeUpdateWithoutUsedByUserInput, ActivationCodeUncheckedUpdateWithoutUsedByUserInput>
  }

  export type ActivationCodeUpdateManyWithWhereWithoutUsedByUserInput = {
    where: ActivationCodeScalarWhereInput
    data: XOR<ActivationCodeUpdateManyMutationInput, ActivationCodeUncheckedUpdateManyWithoutUsedByUserInput>
  }

  export type UserCreateWithoutIssuedCodesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutIssuedCodesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutIssuedCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIssuedCodesInput, UserUncheckedCreateWithoutIssuedCodesInput>
  }

  export type UserCreateWithoutUsedCodesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
  }

  export type UserUncheckedCreateWithoutUsedCodesInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
  }

  export type UserCreateOrConnectWithoutUsedCodesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsedCodesInput, UserUncheckedCreateWithoutUsedCodesInput>
  }

  export type UserUpsertWithoutIssuedCodesInput = {
    update: XOR<UserUpdateWithoutIssuedCodesInput, UserUncheckedUpdateWithoutIssuedCodesInput>
    create: XOR<UserCreateWithoutIssuedCodesInput, UserUncheckedCreateWithoutIssuedCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIssuedCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIssuedCodesInput, UserUncheckedUpdateWithoutIssuedCodesInput>
  }

  export type UserUpdateWithoutIssuedCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIssuedCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUpsertWithoutUsedCodesInput = {
    update: XOR<UserUpdateWithoutUsedCodesInput, UserUncheckedUpdateWithoutUsedCodesInput>
    create: XOR<UserCreateWithoutUsedCodesInput, UserUncheckedCreateWithoutUsedCodesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsedCodesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsedCodesInput, UserUncheckedUpdateWithoutUsedCodesInput>
  }

  export type UserUpdateWithoutUsedCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUsedCodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserCreateWithoutAccountsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserCreateWithoutProfileInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutProfileInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
  }

  export type UserUpsertWithoutProfileInput = {
    update: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
    create: XOR<UserCreateWithoutProfileInput, UserUncheckedCreateWithoutProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProfileInput, UserUncheckedUpdateWithoutProfileInput>
  }

  export type UserUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserCreateWithoutMentoredPRsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutMentoredPRsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutMentoredPRsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMentoredPRsInput, UserUncheckedCreateWithoutMentoredPRsInput>
  }

  export type PRFlagCreateWithoutPrInput = {
    id?: string
    reason: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutPrFlagsCreatedInput
  }

  export type PRFlagUncheckedCreateWithoutPrInput = {
    id?: string
    createdByUserId: string
    reason: string
    createdAt?: Date | string
  }

  export type PRFlagCreateOrConnectWithoutPrInput = {
    where: PRFlagWhereUniqueInput
    create: XOR<PRFlagCreateWithoutPrInput, PRFlagUncheckedCreateWithoutPrInput>
  }

  export type PRFlagCreateManyPrInputEnvelope = {
    data: PRFlagCreateManyPrInput | PRFlagCreateManyPrInput[]
    skipDuplicates?: boolean
  }

  export type PRAuditLogCreateWithoutPrInput = {
    id?: string
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor?: UserCreateNestedOneWithoutActedAuditLogsInput
  }

  export type PRAuditLogUncheckedCreateWithoutPrInput = {
    id?: string
    actorUserId?: string | null
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PRAuditLogCreateOrConnectWithoutPrInput = {
    where: PRAuditLogWhereUniqueInput
    create: XOR<PRAuditLogCreateWithoutPrInput, PRAuditLogUncheckedCreateWithoutPrInput>
  }

  export type PRAuditLogCreateManyPrInputEnvelope = {
    data: PRAuditLogCreateManyPrInput | PRAuditLogCreateManyPrInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMentoredPRsInput = {
    update: XOR<UserUpdateWithoutMentoredPRsInput, UserUncheckedUpdateWithoutMentoredPRsInput>
    create: XOR<UserCreateWithoutMentoredPRsInput, UserUncheckedCreateWithoutMentoredPRsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMentoredPRsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMentoredPRsInput, UserUncheckedUpdateWithoutMentoredPRsInput>
  }

  export type UserUpdateWithoutMentoredPRsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMentoredPRsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type PRFlagUpsertWithWhereUniqueWithoutPrInput = {
    where: PRFlagWhereUniqueInput
    update: XOR<PRFlagUpdateWithoutPrInput, PRFlagUncheckedUpdateWithoutPrInput>
    create: XOR<PRFlagCreateWithoutPrInput, PRFlagUncheckedCreateWithoutPrInput>
  }

  export type PRFlagUpdateWithWhereUniqueWithoutPrInput = {
    where: PRFlagWhereUniqueInput
    data: XOR<PRFlagUpdateWithoutPrInput, PRFlagUncheckedUpdateWithoutPrInput>
  }

  export type PRFlagUpdateManyWithWhereWithoutPrInput = {
    where: PRFlagScalarWhereInput
    data: XOR<PRFlagUpdateManyMutationInput, PRFlagUncheckedUpdateManyWithoutPrInput>
  }

  export type PRAuditLogUpsertWithWhereUniqueWithoutPrInput = {
    where: PRAuditLogWhereUniqueInput
    update: XOR<PRAuditLogUpdateWithoutPrInput, PRAuditLogUncheckedUpdateWithoutPrInput>
    create: XOR<PRAuditLogCreateWithoutPrInput, PRAuditLogUncheckedCreateWithoutPrInput>
  }

  export type PRAuditLogUpdateWithWhereUniqueWithoutPrInput = {
    where: PRAuditLogWhereUniqueInput
    data: XOR<PRAuditLogUpdateWithoutPrInput, PRAuditLogUncheckedUpdateWithoutPrInput>
  }

  export type PRAuditLogUpdateManyWithWhereWithoutPrInput = {
    where: PRAuditLogScalarWhereInput
    data: XOR<PRAuditLogUpdateManyMutationInput, PRAuditLogUncheckedUpdateManyWithoutPrInput>
  }

  export type PRSubmissionCreateWithoutFlagsInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentor?: UserCreateNestedOneWithoutMentoredPRsInput
    audits?: PRAuditLogCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionUncheckedCreateWithoutFlagsInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    mentorId?: string | null
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    audits?: PRAuditLogUncheckedCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionCreateOrConnectWithoutFlagsInput = {
    where: PRSubmissionWhereUniqueInput
    create: XOR<PRSubmissionCreateWithoutFlagsInput, PRSubmissionUncheckedCreateWithoutFlagsInput>
  }

  export type UserCreateWithoutPrFlagsCreatedInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutPrFlagsCreatedInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutPrFlagsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPrFlagsCreatedInput, UserUncheckedCreateWithoutPrFlagsCreatedInput>
  }

  export type PRSubmissionUpsertWithoutFlagsInput = {
    update: XOR<PRSubmissionUpdateWithoutFlagsInput, PRSubmissionUncheckedUpdateWithoutFlagsInput>
    create: XOR<PRSubmissionCreateWithoutFlagsInput, PRSubmissionUncheckedCreateWithoutFlagsInput>
    where?: PRSubmissionWhereInput
  }

  export type PRSubmissionUpdateToOneWithWhereWithoutFlagsInput = {
    where?: PRSubmissionWhereInput
    data: XOR<PRSubmissionUpdateWithoutFlagsInput, PRSubmissionUncheckedUpdateWithoutFlagsInput>
  }

  export type PRSubmissionUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneWithoutMentoredPRsNestedInput
    audits?: PRAuditLogUpdateManyWithoutPrNestedInput
  }

  export type PRSubmissionUncheckedUpdateWithoutFlagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    audits?: PRAuditLogUncheckedUpdateManyWithoutPrNestedInput
  }

  export type UserUpsertWithoutPrFlagsCreatedInput = {
    update: XOR<UserUpdateWithoutPrFlagsCreatedInput, UserUncheckedUpdateWithoutPrFlagsCreatedInput>
    create: XOR<UserCreateWithoutPrFlagsCreatedInput, UserUncheckedCreateWithoutPrFlagsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPrFlagsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPrFlagsCreatedInput, UserUncheckedUpdateWithoutPrFlagsCreatedInput>
  }

  export type UserUpdateWithoutPrFlagsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPrFlagsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserCreateWithoutAvatarsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogCreateNestedManyWithoutActorInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutAvatarsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    actedAuditLogs?: PRAuditLogUncheckedCreateNestedManyWithoutActorInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutAvatarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
  }

  export type UserUpsertWithoutAvatarsInput = {
    update: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
    create: XOR<UserCreateWithoutAvatarsInput, UserUncheckedCreateWithoutAvatarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvatarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvatarsInput, UserUncheckedUpdateWithoutAvatarsInput>
  }

  export type UserUpdateWithoutAvatarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUpdateManyWithoutActorNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAvatarsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    actedAuditLogs?: PRAuditLogUncheckedUpdateManyWithoutActorNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type PRSubmissionCreateWithoutAuditsInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    mentor?: UserCreateNestedOneWithoutMentoredPRsInput
    flags?: PRFlagCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionUncheckedCreateWithoutAuditsInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    mentorId?: string | null
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    flags?: PRFlagUncheckedCreateNestedManyWithoutPrInput
  }

  export type PRSubmissionCreateOrConnectWithoutAuditsInput = {
    where: PRSubmissionWhereUniqueInput
    create: XOR<PRSubmissionCreateWithoutAuditsInput, PRSubmissionUncheckedCreateWithoutAuditsInput>
  }

  export type UserCreateWithoutActedAuditLogsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionCreateNestedManyWithoutUserInput
    accounts?: AccountCreateNestedManyWithoutUserInput
    profile?: ProfileCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionCreateNestedManyWithoutMentorInput
    avatars?: AvatarCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeCreateNestedManyWithoutUsedByUserInput
  }

  export type UserUncheckedCreateWithoutActedAuditLogsInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    email: string
    emailVerified: boolean
    image?: string | null
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    profile?: ProfileUncheckedCreateNestedOneWithoutUserInput
    prFlagsCreated?: PRFlagUncheckedCreateNestedManyWithoutCreatedByInput
    mentoredPRs?: PRSubmissionUncheckedCreateNestedManyWithoutMentorInput
    avatars?: AvatarUncheckedCreateNestedManyWithoutUserInput
    issuedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutIssuedByUserInput
    usedCodes?: ActivationCodeUncheckedCreateNestedManyWithoutUsedByUserInput
  }

  export type UserCreateOrConnectWithoutActedAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActedAuditLogsInput, UserUncheckedCreateWithoutActedAuditLogsInput>
  }

  export type PRSubmissionUpsertWithoutAuditsInput = {
    update: XOR<PRSubmissionUpdateWithoutAuditsInput, PRSubmissionUncheckedUpdateWithoutAuditsInput>
    create: XOR<PRSubmissionCreateWithoutAuditsInput, PRSubmissionUncheckedCreateWithoutAuditsInput>
    where?: PRSubmissionWhereInput
  }

  export type PRSubmissionUpdateToOneWithWhereWithoutAuditsInput = {
    where?: PRSubmissionWhereInput
    data: XOR<PRSubmissionUpdateWithoutAuditsInput, PRSubmissionUncheckedUpdateWithoutAuditsInput>
  }

  export type PRSubmissionUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mentor?: UserUpdateOneWithoutMentoredPRsNestedInput
    flags?: PRFlagUpdateManyWithoutPrNestedInput
  }

  export type PRSubmissionUncheckedUpdateWithoutAuditsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    mentorId?: NullableStringFieldUpdateOperationsInput | string | null
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: PRFlagUncheckedUpdateManyWithoutPrNestedInput
  }

  export type UserUpsertWithoutActedAuditLogsInput = {
    update: XOR<UserUpdateWithoutActedAuditLogsInput, UserUncheckedUpdateWithoutActedAuditLogsInput>
    create: XOR<UserCreateWithoutActedAuditLogsInput, UserUncheckedCreateWithoutActedAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActedAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActedAuditLogsInput, UserUncheckedUpdateWithoutActedAuditLogsInput>
  }

  export type UserUpdateWithoutActedAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUpdateManyWithoutUserNestedInput
    accounts?: AccountUpdateManyWithoutUserNestedInput
    profile?: ProfileUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUpdateManyWithoutMentorNestedInput
    avatars?: AvatarUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUpdateManyWithoutUsedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActedAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    profile?: ProfileUncheckedUpdateOneWithoutUserNestedInput
    prFlagsCreated?: PRFlagUncheckedUpdateManyWithoutCreatedByNestedInput
    mentoredPRs?: PRSubmissionUncheckedUpdateManyWithoutMentorNestedInput
    avatars?: AvatarUncheckedUpdateManyWithoutUserNestedInput
    issuedCodes?: ActivationCodeUncheckedUpdateManyWithoutIssuedByUserNestedInput
    usedCodes?: ActivationCodeUncheckedUpdateManyWithoutUsedByUserNestedInput
  }

  export type SessionCreateManyUserInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    expiresAt: Date | string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type AccountCreateManyUserInput = {
    id: string
    createdAt: Date | string
    updatedAt: Date | string
    accountId: string
    providerId: string
    accessToken?: string | null
    refreshToken?: string | null
    idToken?: string | null
    accessTokenExpiresAt?: Date | string | null
    refreshTokenExpiresAt?: Date | string | null
    scope?: string | null
    password?: string | null
  }

  export type PRFlagCreateManyCreatedByInput = {
    id?: string
    prId: string
    reason: string
    createdAt?: Date | string
  }

  export type PRSubmissionCreateManyMentorInput = {
    id?: string
    url: string
    title?: string | null
    author?: string | null
    submitter?: string | null
    status?: $Enums.PRStatus
    claimedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PRAuditLogCreateManyActorInput = {
    id?: string
    prId: string
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AvatarCreateManyUserInput = {
    id?: string
    organizationId: string
    name: string
    taken?: boolean
    takenAt?: Date | string | null
  }

  export type ActivationCodeCreateManyIssuedByUserInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    usedByUserId?: string | null
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type ActivationCodeCreateManyUsedByUserInput = {
    id?: string
    code: string
    type: $Enums.ActivationCodeType
    organizationId: string
    issuedByUserId?: string | null
    usedAt?: Date | string | null
    expiresAt?: Date | string | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountId?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    idToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PRFlagUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pr?: PRSubmissionUpdateOneRequiredWithoutFlagsNestedInput
  }

  export type PRFlagUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRSubmissionUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: PRFlagUpdateManyWithoutPrNestedInput
    audits?: PRAuditLogUpdateManyWithoutPrNestedInput
  }

  export type PRSubmissionUncheckedUpdateWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flags?: PRFlagUncheckedUpdateManyWithoutPrNestedInput
    audits?: PRAuditLogUncheckedUpdateManyWithoutPrNestedInput
  }

  export type PRSubmissionUncheckedUpdateManyWithoutMentorInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    author?: NullableStringFieldUpdateOperationsInput | string | null
    submitter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    claimedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRAuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pr?: PRSubmissionUpdateOneRequiredWithoutAuditsNestedInput
  }

  export type PRAuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRAuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    prId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvatarUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvatarUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AvatarUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    taken?: BoolFieldUpdateOperationsInput | boolean
    takenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ActivationCodeUpdateWithoutIssuedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedByUser?: UserUpdateOneWithoutUsedCodesNestedInput
  }

  export type ActivationCodeUncheckedUpdateWithoutIssuedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    usedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCodeUncheckedUpdateManyWithoutIssuedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    usedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCodeUpdateWithoutUsedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issuedByUser?: UserUpdateOneWithoutIssuedCodesNestedInput
  }

  export type ActivationCodeUncheckedUpdateWithoutUsedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    issuedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ActivationCodeUncheckedUpdateManyWithoutUsedByUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    type?: EnumActivationCodeTypeFieldUpdateOperationsInput | $Enums.ActivationCodeType
    organizationId?: StringFieldUpdateOperationsInput | string
    issuedByUserId?: NullableStringFieldUpdateOperationsInput | string | null
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagCreateManyPrInput = {
    id?: string
    createdByUserId: string
    reason: string
    createdAt?: Date | string
  }

  export type PRAuditLogCreateManyPrInput = {
    id?: string
    actorUserId?: string | null
    action: string
    fromStatus?: $Enums.PRStatus | null
    toStatus?: $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PRFlagUpdateWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutPrFlagsCreatedNestedInput
  }

  export type PRFlagUncheckedUpdateWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRFlagUncheckedUpdateManyWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdByUserId?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRAuditLogUpdateWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneWithoutActedAuditLogsNestedInput
  }

  export type PRAuditLogUncheckedUpdateWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PRAuditLogUncheckedUpdateManyWithoutPrInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorUserId?: NullableStringFieldUpdateOperationsInput | string | null
    action?: StringFieldUpdateOperationsInput | string
    fromStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    toStatus?: NullableEnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}